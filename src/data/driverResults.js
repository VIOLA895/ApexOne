import raceResults from "./raceResults";
import drivers from "./drivers";

// =====================================================
// F1 POINTS SYSTEM
// =====================================================

const pointsTable = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
};

// =====================================================
// CONVERT RACE RESULTS INTO DRIVER RESULTS
// =====================================================

const driverResults = {};

// Create an empty result list for every driver
drivers.forEach((driver) => {
  driverResults[driver.shortName.toLowerCase()] = [];
});

// =====================================================
// BUILD DRIVER-BY-DRIVER RESULTS
// =====================================================

Object.entries(raceResults).forEach(([round, race]) => {
  const raceRound = Number(round);

  // Safety check
  if (!race || !race.results) {
    return;
  }

  drivers.forEach((driver) => {
    const result = race.results[driver.number];

    // If the driver does not appear in the race data,
    // don't add a result.
    if (result === undefined) {
      return;
    }

    const isNumber = typeof result === "number";

    const points = isNumber
      ? pointsTable[result] || 0
      : 0;

    driverResults[driver.shortName.toLowerCase()].push({
      round: raceRound,

      race: race.name,

      shortRace: race.name
        .replace(" Grand Prix", "")
        .replace("Arabian", "Saudi Arabia"),

      country: race.country,

      circuit: race.circuit,

      date: race.date,

      // Qualifying data is not currently contained
      // in raceResults.js.
      qualifying: null,

      // Race finishing position
      finish: result,

      // Championship points earned in this race
      points,
    });
  });
});

// =====================================================
// SORT EACH DRIVER'S RESULTS BY ROUND
// =====================================================

Object.keys(driverResults).forEach((driver) => {
  driverResults[driver].sort(
    (a, b) => a.round - b.round
  );
});

export default driverResults;