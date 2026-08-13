const BASE_URL = "https://api.openf1.org/v1";

// =====================================================
// OPENF1 API SERVICE
// =====================================================

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
  Get all meetings for a season.

  A meeting can be:
  - Grand Prix
  - Pre-season testing
  - Other official F1 events
*/
export async function getMeetings(year = 2026) {
  return request(`/meetings?year=${year}`);
}


/*
  Get only active, non-cancelled meetings.

  This removes cancelled events such as:
  - 2026 Bahrain Grand Prix originally scheduled
    for April 10-12
  - 2026 Saudi Arabian Grand Prix originally
    scheduled for April 17-19

  It keeps the new Bahrain Grand Prix in Malaysia
  because that meeting has is_cancelled: false.
*/
export async function getActiveMeetings(year = 2026) {
  const meetings = await getMeetings(year);

  if (!Array.isArray(meetings)) {
    return [];
  }

  return meetings
    .filter(
      (meeting) =>
        meeting.is_cancelled !== true
    )
    .sort((a, b) => {
      const dateA = new Date(
        a.date_start || a.date_end || 0
      );

      const dateB = new Date(
        b.date_start || b.date_end || 0
      );

      return dateA - dateB;
    });
}


/*
  Backwards-compatible alias.

  If another page in ApexOne already uses
  getCompletedMeetings(), it will continue working.
*/
export async function getCompletedMeetings(year = 2026) {
  return getActiveMeetings(year);
}


/*
  Get only actual Grand Prix meetings.

  This removes:
  - Pre-season testing
  - Cancelled meetings
  - Other non-race events
*/
export async function getRaceMeetings(year = 2026) {
  const meetings = await getActiveMeetings(year);

  return meetings.filter((meeting) => {
    const name = (
      meeting.meeting_name ||
      ""
    ).toLowerCase();

    const officialName = (
      meeting.meeting_official_name ||
      ""
    ).toLowerCase();

    return (
      name.includes("grand prix") ||
      officialName.includes("grand prix")
    );
  });
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
  Get all sessions for a season.

  Includes:
  - Practice
  - Qualifying
  - Sprint
  - Race

  Cancelled sessions are removed.
*/
export async function getSessions(year = 2026) {
  const sessions = await request(
    `/sessions?year=${year}`
  );

  if (!Array.isArray(sessions)) {
    return [];
  }

  return sessions
    .filter(
      (session) =>
        session.is_cancelled !== true
    )
    .sort((a, b) => {
      const dateA = new Date(
        a.date_start || a.date_end || 0
      );

      const dateB = new Date(
        b.date_start || b.date_end || 0
      );

      return dateA - dateB;
    });
}


/*
  Get only active Race sessions.

  IMPORTANT:

  This removes cancelled Bahrain and Saudi Arabia
  sessions while keeping the new Bahrain Grand Prix
  in Malaysia.

  It also prevents pre-season testing from appearing
  on the Schedule page.
*/
export async function getRaceSessions(year = 2026) {
  const sessions = await getSessions(year);

  return sessions
    .filter((session) => {
      const sessionName = (
        session.session_name ||
        ""
      ).toLowerCase();

      const sessionType = (
        session.session_type ||
        ""
      ).toLowerCase();

      return (
        sessionName === "race" ||
        sessionType === "race"
      );
    })
    .filter(
      (session) =>
        session.is_cancelled !== true
    )
    .sort((a, b) => {
      const dateA = new Date(
        a.date_start || a.date_end || 0
      );

      const dateB = new Date(
        b.date_start || b.date_end || 0
      );

      return dateA - dateB;
    });
}


/*
  Get a specific session by session key.
*/
export async function getSession(sessionKey) {
  return request(
    `/sessions?session_key=${sessionKey}`
  );
}


// =====================================================
// SESSION RESULTS
// =====================================================

/*
  Get final results for a specific session.
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
  return request(
    `/session_result?session_key=${sessionKey}&driver_number=${driverNumber}`
  );
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
*/
export async function getDriverStandings(sessionKey) {
  return request(
    `/championship_drivers?session_key=${sessionKey}`
  );
}


/*
  Get championship standing for one driver.
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
  Get championship standing for one team.
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
*/
export async function getQualifyingResults(sessionKey) {
  return request(
    `/session_result?session_key=${sessionKey}`
  );
}


/*
  Get the starting grid for a race.
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

  Includes:
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
// CONVENIENCE FUNCTIONS
// =====================================================

/*
  Get everything ApexOne needs for one Grand Prix.
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


/*
  Get all important data for a Grand Prix.

  Useful for future Race Details pages.
*/
export async function getFullRaceData(sessionKey) {
  const [
    results,
    drivers,
    positions,
    laps,
    pitStops,
    stints,
    intervals,
    raceControl,
  ] = await Promise.all([
    getSessionResults(sessionKey),
    getSessionDrivers(sessionKey),
    getDriverPositions(sessionKey),
    getLaps(sessionKey),
    getPitStops(sessionKey),
    getStints(sessionKey),
    getIntervals(sessionKey),
    getRaceControl(sessionKey),
  ]);

  return {
    results,
    drivers,
    positions,
    laps,
    pitStops,
    stints,
    intervals,
    raceControl,
  };
}