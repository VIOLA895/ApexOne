const BASE_URL = "https://api.openf1.org/v1";

// =====================================================
// OPENF1 API SERVICE
// =====================================================

/*
  Small helper used by all API requests.
*/
async function request(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(
        `OpenF1 request failed: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("OpenF1 API Error:", error);
    throw error;
  }
}


// =====================================================
// MEETINGS / GRAND PRIX
// =====================================================

/*
  Get all Grand Prix meetings for a season.

  Example:
  getMeetings(2026)
*/
export async function getMeetings(year = 2026) {
  return request(`/meetings?year=${year}`);
}


/*
  Get only completed/non-cancelled meetings.

  This prevents cancelled races from appearing
  as completed Grand Prix events.
*/
export async function getCompletedMeetings(year = 2026) {
  const meetings = await getMeetings(year);

  return meetings.filter(
    (meeting) => meeting.is_cancelled !== true
  );
}


/*
  Get a specific Grand Prix by country.

  Example:
  getMeetingByCountry(2026, "Australia")
*/
export async function getMeetingByCountry(
  year = 2026,
  countryName
) {
  const meetings = await request(
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
  Get all sessions for a particular season.

  Includes:
  - Practice
  - Qualifying
  - Sprint
  - Race
*/
export async function getSessions(year = 2026) {
  return request(`/sessions?year=${year}`);
}


/*
  Get only Race sessions.

  This is what ApexOne should use when displaying
  Grand Prix race results.
*/
export async function getRaceSessions(year = 2026) {
  const sessions = await getSessions(year);

  return sessions.filter(
    (session) =>
      session.session_name === "Race" ||
      session.session_type === "Race"
  );
}


/*
  Get a specific session by session key.
*/
export async function getSession(sessionKey) {
  const sessions = await request(
    `/sessions?session_key=${sessionKey}`
  );

  return sessions;
}


// =====================================================
// SESSION RESULTS
// =====================================================

/*
  Get final results for a specific session.

  For a race this provides information such as:

  - driver_number
  - position
  - dnf
  - dns
  - dsq
  - number_of_laps
  - duration
  - gap_to_leader
*/
export async function getSessionResults(sessionKey) {
  return request(
    `/session_result?session_key=${sessionKey}`
  );
}


/*
  Get the result for one specific driver.
*/
export async function getDriverSessionResult(
  sessionKey,
  driverNumber
) {
  const results = await request(
    `/session_result?session_key=${sessionKey}&driver_number=${driverNumber}`
  );

  return results;
}


// =====================================================
// DRIVERS
// =====================================================

/*
  Get all drivers who participated in a session.
*/
export async function getSessionDrivers(sessionKey) {
  return request(
    `/drivers?session_key=${sessionKey}`
  );
}


/*
  Get information about one driver in a session.
*/
export async function getSessionDriver(
  sessionKey,
  driverNumber
) {
  return request(
    `/drivers?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// CHAMPIONSHIP DRIVER STANDINGS
// =====================================================

/*
  Get driver championship standings after a race.

  IMPORTANT:
  OpenF1 uses session_key for championship standings,
  not year.
*/
export async function getDriverStandings(sessionKey) {
  return request(
    `/championship_drivers?session_key=${sessionKey}`
  );
}


/*
  Get the championship standing for one driver.
*/
export async function getDriverChampionshipStanding(
  sessionKey,
  driverNumber
) {
  return request(
    `/championship_drivers?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// CONSTRUCTOR / TEAM STANDINGS
// =====================================================

/*
  Get constructor championship standings after a race.
*/
export async function getTeamStandings(sessionKey) {
  return request(
    `/championship_teams?session_key=${sessionKey}`
  );
}


/*
  Get the championship standing for one team.
*/
export async function getTeamChampionshipStanding(
  sessionKey,
  teamName
) {
  return request(
    `/championship_teams?session_key=${sessionKey}&team_name=${encodeURIComponent(
      teamName
    )}`
  );
}


// =====================================================
// QUALIFYING
// =====================================================

/*
  Get qualifying results.

  OpenF1 uses the same session_result endpoint.
  The sessionKey passed here must belong to a
  Qualifying session.
*/
export async function getQualifyingResults(sessionKey) {
  return request(
    `/session_result?session_key=${sessionKey}`
  );
}


/*
  Get the starting grid for a race.

  This is useful if we want ApexOne to show:

  QUALIFYING P1
  STARTING GRID P1
  FINISH P1
*/
export async function getStartingGrid(sessionKey) {
  return request(
    `/starting_grid?session_key=${sessionKey}`
  );
}


// =====================================================
// DRIVER POSITIONS
// =====================================================

/*
  Get position changes throughout a session.

  Useful later for showing how a driver moved
  through the race.
*/
export async function getDriverPositions(sessionKey) {
  return request(
    `/position?session_key=${sessionKey}`
  );
}


/*
  Get position changes for one driver.
*/
export async function getDriverPositionHistory(
  sessionKey,
  driverNumber
) {
  return request(
    `/position?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// LAP DATA
// =====================================================

/*
  Get lap data for an entire session.
*/
export async function getLaps(sessionKey) {
  return request(
    `/laps?session_key=${sessionKey}`
  );
}


/*
  Get lap data for a specific driver.
*/
export async function getDriverLaps(
  sessionKey,
  driverNumber
) {
  return request(
    `/laps?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// PIT STOPS
// =====================================================

/*
  Get pit stop information for a race.
*/
export async function getPitStops(sessionKey) {
  return request(
    `/pit?session_key=${sessionKey}`
  );
}


/*
  Get pit stops for a specific driver.
*/
export async function getDriverPitStops(
  sessionKey,
  driverNumber
) {
  return request(
    `/pit?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// TYRE STINTS
// =====================================================

/*
  Get tyre stint information.
*/
export async function getStints(sessionKey) {
  return request(
    `/stints?session_key=${sessionKey}`
  );
}


/*
  Get tyre stints for one driver.
*/
export async function getDriverStints(
  sessionKey,
  driverNumber
) {
  return request(
    `/stints?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// INTERVALS
// =====================================================

/*
  Get gaps between drivers during a race.
*/
export async function getIntervals(sessionKey) {
  return request(
    `/intervals?session_key=${sessionKey}`
  );
}


/*
  Get intervals for one driver.
*/
export async function getDriverIntervals(
  sessionKey,
  driverNumber
) {
  return request(
    `/intervals?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
}


// =====================================================
// RACE CONTROL
// =====================================================

/*
  Get race control messages.

  Includes things such as:

  - Safety car
  - Yellow flags
  - Red flags
  - Incidents
  - Penalties
  - Session status
*/
export async function getRaceControl(sessionKey) {
  return request(
    `/race_control?session_key=${sessionKey}`
  );
}


// =====================================================
// CONVENIENCE FUNCTION
// =====================================================

/*
  Get everything ApexOne needs to display
  one Grand Prix.

  This will be particularly useful for RaceResults.
*/
export async function getRaceData(sessionKey) {
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