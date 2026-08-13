const BASE_URL = "https://api.openf1.org/v1";

// =====================================================
// OPENF1 API CONFIGURATION
// =====================================================

const CACHE_DURATION = 60 * 1000; // 1 minute

// Stores completed requests
const requestCache = new Map();

// Stores requests currently in progress
// This prevents two identical requests from being
// sent to OpenF1 at the same time.
const pendingRequests = new Map();

// Prevents requests from being fired too quickly
let lastRequestTime = 0;

const MIN_REQUEST_INTERVAL = 350;


// =====================================================
// SMALL DELAY HELPER
// =====================================================

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}


// =====================================================
// OPENF1 API REQUEST
// =====================================================

async function request(endpoint) {
  const now = Date.now();

  // ---------------------------------------------------
  // CHECK CACHE
  // ---------------------------------------------------

  const cached = requestCache.get(endpoint);

  if (
    cached &&
    now - cached.timestamp < CACHE_DURATION
  ) {
    return cached.data;
  }


  // ---------------------------------------------------
  // CHECK FOR EXISTING REQUEST
  // ---------------------------------------------------

  if (pendingRequests.has(endpoint)) {
    return pendingRequests.get(endpoint);
  }


  // ---------------------------------------------------
  // CREATE REQUEST
  // ---------------------------------------------------

  const requestPromise = (async () => {
    try {

      // -----------------------------------------------
      // RATE LIMIT PROTECTION
      // -----------------------------------------------

      const timeSinceLastRequest =
        Date.now() - lastRequestTime;

      if (
        timeSinceLastRequest <
        MIN_REQUEST_INTERVAL
      ) {
        await wait(
          MIN_REQUEST_INTERVAL -
            timeSinceLastRequest
        );
      }

      lastRequestTime = Date.now();


      // -----------------------------------------------
      // FETCH
      // -----------------------------------------------

      const response = await fetch(
        `${BASE_URL}${endpoint}`
      );


      // -----------------------------------------------
      // RATE LIMIT
      // -----------------------------------------------

      if (response.status === 429) {

        console.warn(
          "OpenF1 rate limit reached."
        );

        /*
          Give the API a little time before trying
          again.

          We only retry once to avoid creating a
          request loop.
        */

        const retryAfter =
          response.headers.get(
            "Retry-After"
          );

        const retryDelay =
          retryAfter
            ? Number(retryAfter) * 1000
            : 2000;

        await wait(
          Number.isFinite(retryDelay)
            ? retryDelay
            : 2000
        );


        // ---------------------------------------------
        // RETRY REQUEST
        // ---------------------------------------------

        lastRequestTime = Date.now();

        const retryResponse =
          await fetch(
            `${BASE_URL}${endpoint}`
          );


        if (
          retryResponse.status === 429
        ) {
          throw new Error(
            "OpenF1 rate limit reached. Please wait a moment and try again."
          );
        }


        if (!retryResponse.ok) {
          throw new Error(
            `OpenF1 request failed: ${retryResponse.status} ${retryResponse.statusText}`
          );
        }


        const retryData =
          await retryResponse.json();


        requestCache.set(endpoint, {
          data: retryData,
          timestamp: Date.now(),
        });


        return retryData;
      }


      // -----------------------------------------------
      // OTHER API ERRORS
      // -----------------------------------------------

      if (!response.ok) {
        throw new Error(
          `OpenF1 request failed: ${response.status} ${response.statusText}`
        );
      }


      // -----------------------------------------------
      // PARSE RESPONSE
      // -----------------------------------------------

      const data =
        await response.json();


      // -----------------------------------------------
      // SAVE TO CACHE
      // -----------------------------------------------

      requestCache.set(endpoint, {
        data,
        timestamp: Date.now(),
      });


      return data;

    } catch (error) {

      console.error(
        "OpenF1 API Error:",
        error
      );

      throw error;

    } finally {

      // Remove completed request
      pendingRequests.delete(endpoint);
    }
  })();


  // ---------------------------------------------------
  // STORE ACTIVE REQUEST
  // ---------------------------------------------------

  pendingRequests.set(
    endpoint,
    requestPromise
  );


  return requestPromise;
}


// =====================================================
// CLEAR API CACHE
// =====================================================

export function clearOpenF1Cache() {
  requestCache.clear();
  pendingRequests.clear();
}


// =====================================================
// MEETINGS / GRAND PRIX
// =====================================================

/*
  Get all Grand Prix meetings for a season.

  Example:

  getMeetings(2026)
*/

export async function getMeetings(
  year = 2026
) {
  return request(
    `/meetings?year=${year}`
  );
}


// =====================================================
// COMPLETED / NON-CANCELLED MEETINGS
// =====================================================

/*
  Get meetings that have not been cancelled.

  NOTE:
  A meeting being non-cancelled does not necessarily
  mean that the race has already happened.

  The Schedule page should use session dates to
  determine whether a race is upcoming or completed.
*/

export async function getCompletedMeetings(
  year = 2026
) {
  const meetings =
    await getMeetings(year);

  return meetings.filter(
    (meeting) =>
      meeting.is_cancelled !== true
  );
}


// =====================================================
// MEETING BY COUNTRY
// =====================================================

/*
  Get a specific Grand Prix by country.

  Example:

  getMeetingByCountry(
    2026,
    "Australia"
  )
*/

export async function getMeetingByCountry(
  year = 2026,
  countryName
) {
  const meetings =
    await request(
      `/meetings?year=${year}&country_name=${encodeURIComponent(
        countryName
      )}`
    );

  return meetings;
}


// =====================================================
// SESSIONS
// =====================================================

/*
  Get all sessions for a season.

  Includes:

  - Practice
  - Qualifying
  - Sprint
  - Race
*/

export async function getSessions(
  year = 2026
) {
  return request(
    `/sessions?year=${year}`
  );
}


// =====================================================
// RACE SESSIONS
// =====================================================

/*
  Get only Race sessions.

  This is what ApexOne uses for the
  Grand Prix calendar and Stats page.
*/

export async function getRaceSessions(
  year = 2026
) {
  const sessions =
    await getSessions(year);

  return sessions
    .filter(
      (session) =>
        session.session_name ===
          "Race" ||
        session.session_type ===
          "Race"
    )
    .filter(
      (session) =>
        session.is_cancelled !== true
    );
}


// =====================================================
// SPECIFIC SESSION
// =====================================================

/*
  Get a specific session by session key.
*/

export async function getSession(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/sessions?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// SESSION RESULTS
// =====================================================

/*
  Get final results for a specific session.

  For races this includes:

  - driver_number
  - position
  - duration
  - gap_to_leader
  - dnf
  - dns
  - dsq
  - number_of_laps
*/

export async function getSessionResults(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/session_result?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER SESSION RESULT
// =====================================================

/*
  Get the result for one specific driver.
*/

export async function getDriverSessionResult(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/session_result?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// DRIVERS
// =====================================================

/*
  Get all drivers who participated
  in a session.
*/

export async function getSessionDrivers(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/drivers?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// SPECIFIC SESSION DRIVER
// =====================================================

/*
  Get information about one driver
  in a session.
*/

export async function getSessionDriver(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/drivers?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// DRIVER CHAMPIONSHIP STANDINGS
// =====================================================

/*
  Get driver championship standings
  after a race.

  OpenF1 uses session_key here.
*/

export async function getDriverStandings(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/championship_drivers?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER CHAMPIONSHIP STANDING
// =====================================================

/*
  Get championship standing for
  one driver.
*/

export async function getDriverChampionshipStanding(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/championship_drivers?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// TEAM / CONSTRUCTOR STANDINGS
// =====================================================

/*
  Get constructor championship standings
  after a race.
*/

export async function getTeamStandings(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/championship_teams?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// TEAM CHAMPIONSHIP STANDING
// =====================================================

/*
  Get championship standing for one team.
*/

export async function getTeamChampionshipStanding(
  sessionKey,
  teamName
) {
  if (
    !sessionKey ||
    !teamName
  ) {
    throw new Error(
      "Session key and team name are required."
    );
  }

  return request(
    `/championship_teams?session_key=${encodeURIComponent(
      sessionKey
    )}&team_name=${encodeURIComponent(
      teamName
    )}`
  );
}


// =====================================================
// QUALIFYING
// =====================================================

/*
  Get qualifying results.

  OpenF1 uses session_result for
  qualifying results too.
*/

export async function getQualifyingResults(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/session_result?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// STARTING GRID
// =====================================================

/*
  Get the starting grid for a race.
*/

export async function getStartingGrid(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/starting_grid?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER POSITIONS
// =====================================================

/*
  Get position changes throughout
  a session.
*/

export async function getDriverPositions(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/position?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER POSITION HISTORY
// =====================================================

/*
  Get position changes for one driver.
*/

export async function getDriverPositionHistory(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/position?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// LAP DATA
// =====================================================

/*
  Get lap data for an entire session.
*/

export async function getLaps(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/laps?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER LAPS
// =====================================================

/*
  Get lap data for a specific driver.
*/

export async function getDriverLaps(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/laps?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// PIT STOPS
// =====================================================

/*
  Get pit stop information for a race.
*/

export async function getPitStops(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/pit?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER PIT STOPS
// =====================================================

/*
  Get pit stops for a specific driver.
*/

export async function getDriverPitStops(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/pit?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// TYRE STINTS
// =====================================================

/*
  Get tyre stint information.
*/

export async function getStints(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/stints?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER TYRE STINTS
// =====================================================

/*
  Get tyre stints for one driver.
*/

export async function getDriverStints(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/stints?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// INTERVALS
// =====================================================

/*
  Get gaps between drivers during
  a race.
*/

export async function getIntervals(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/intervals?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER INTERVALS
// =====================================================

/*
  Get intervals for one driver.
*/

export async function getDriverIntervals(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/intervals?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// RACE CONTROL
// =====================================================

/*
  Get race control messages.

  Includes:

  - Safety car
  - Yellow flags
  - Red flags
  - Incidents
  - Penalties
  - Session status
*/

export async function getRaceControl(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/race_control?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// WEATHER
// =====================================================

/*
  Get weather information for a session.
*/

export async function getWeather(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/weather?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// CAR DATA
// =====================================================

/*
  Get telemetry/car data for a session.
*/

export async function getCarData(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  return request(
    `/car_data?session_key=${encodeURIComponent(
      sessionKey
    )}`
  );
}


// =====================================================
// DRIVER CAR DATA
// =====================================================

/*
  Get telemetry/car data for one driver.
*/

export async function getDriverCarData(
  sessionKey,
  driverNumber
) {
  if (
    !sessionKey ||
    driverNumber === undefined ||
    driverNumber === null
  ) {
    throw new Error(
      "Session key and driver number are required."
    );
  }

  return request(
    `/car_data?session_key=${encodeURIComponent(
      sessionKey
    )}&driver_number=${encodeURIComponent(
      driverNumber
    )}`
  );
}


// =====================================================
// CONVENIENCE FUNCTION
// =====================================================

/*
  Get everything ApexOne needs to display
  one Grand Prix.

  NOTE:
  These requests are still made through the
  cached request() function, so duplicate calls
  are automatically prevented.
*/

export async function getRaceData(
  sessionKey
) {
  if (!sessionKey) {
    throw new Error(
      "A session key is required."
    );
  }

  const [
    results,
    drivers,
  ] = await Promise.all([
    getSessionResults(sessionKey),
    getSessionDrivers(sessionKey),
  ]);

  return {
    results,
    drivers,
  };
}