const raceResults = {
  // =====================================================
  // ROUND 1 — AUSTRALIAN GRAND PRIX
  // 08 MARCH 2026
  // =====================================================
  1: {
    name: "Australian Grand Prix",
    country: "AUS",
    circuit: "Albert Park",
    date: "08 Mar 2026",
    status: "completed",

    results: {
      63: 1,    // George Russell
      12: 2,    // Kimi Antonelli
      16: 3,    // Charles Leclerc
      44: 4,    // Lewis Hamilton
      1: 5,     // Lando Norris
      3: 6,     // Max Verstappen
      87: 7,    // Oliver Bearman
      41: 8,    // Arvid Lindblad
      5: 9,     // Gabriel Bortoleto
      10: 10,   // Pierre Gasly
      31: 11,   // Esteban Ocon
      23: 12,   // Alexander Albon
      30: 13,   // Liam Lawson
      43: 14,   // Franco Colapinto
      55: 15,   // Carlos Sainz
      11: 16,   // Sergio Perez
      18: "NC", // Lance Stroll
      81: "DNS", // Oscar Piastri
      14: "DNF", // Fernando Alonso
      27: "DNS", // Nico Hulkenberg
      77: "DNF", // Valtteri Bottas
      6: "DNF",  // Isack Hadjar
    },
  },

  // =====================================================
  // ROUND 2 — CHINESE GRAND PRIX
  // 15 MARCH 2026
  // =====================================================
  2: {
    name: "Chinese Grand Prix",
    country: "CHN",
    circuit: "Shanghai International Circuit",
    date: "15 Mar 2026",
    status: "completed",

    results: {
      12: 1,
      63: 2,
      44: 3,
      16: 4,
      87: 5,
      10: 6,
      30: 7,
      6: 8,
      55: 9,
      43: 10,
      27: 11,
      41: 12,
      77: 13,
      31: 14,
      11: 15,
      18: "DNF",
      3: "DNF",
      1: "DNS",
      81: "DNS",
      5: "DNS",
      23: "DNS",
      14: "DNF",
    },
  },

  // =====================================================
  // ROUND 3 — JAPANESE GRAND PRIX
  // 29 MARCH 2026
  // =====================================================
  3: {
    name: "Japanese Grand Prix",
    country: "JPN",
    circuit: "Suzuka",
    date: "29 Mar 2026",
    status: "completed",

    results: {
      12: 1,
      81: 2,
      16: 3,
      63: 4,
      1: 5,
      44: 6,
      10: 7,
      3: 8,
      30: 9,
      31: 10,
      27: 11,
      6: 12,
      5: 13,
      41: 14,
      55: 15,
      43: 16,
      11: 17,
      14: 18,
      77: 19,
      23: 20,
      87: "DNF",
      18: "DNF",
    },
  },

  // =====================================================
  // BAHRAIN GRAND PRIX
  // CANCELLED / NOT HELD
  //
  // Formula 1 confirmed that Bahrain would NOT take
  // place in April 2026 and no replacement was added.
  //
  // DO NOT CREATE A ROUND FOR THIS RACE.
  // =====================================================

  // =====================================================
  // SAUDI ARABIAN GRAND PRIX
  // CANCELLED / NOT HELD
  //
  // Formula 1 confirmed that Saudi Arabia would NOT
  // take place in April 2026 and no replacement was added.
  //
  // DO NOT CREATE A ROUND FOR THIS RACE.
  // =====================================================

  // =====================================================
  // ROUND 4 — MIAMI GRAND PRIX
  // 03 MAY 2026
  // =====================================================
  4: {
    name: "Miami Grand Prix",
    country: "USA",
    circuit: "Miami International Autodrome",
    date: "03 May 2026",
    status: "completed",

    results: {
      12: 1,
      1: 2,
      81: 3,
      63: 4,
      3: 5,
      44: 6,
      43: 7,
      16: 8,
      55: 9,
      23: 10,
      87: 11,
      5: 12,
      31: 13,
      41: 14,
      14: 15,
      11: 16,
      18: 17,
      77: 18,
      10: "DNF",
      30: "DNF",
      27: "DNF",
      6: "DNF",
    },
  },

  // =====================================================
  // ROUND 5 — CANADIAN GRAND PRIX
  // 24 MAY 2026
  // =====================================================
  5: {
    name: "Canadian Grand Prix",
    country: "CAN",
    circuit: "Circuit Gilles Villeneuve",
    date: "24 May 2026",
    status: "completed",

    results: {
      12: 1,
      44: 2,
      3: 3,
      16: 4,
      6: 5,
      43: 6,
      30: 7,
      10: 8,
      55: 9,
      87: 10,
      81: 11,
      27: 12,
      5: 13,
      31: 14,
      18: 15,
      77: 16,
      11: "DNF",
      23: "DNF",
      1: "DNF",
      63: "DNF",
      14: "DNF",
      41: "DNS",
    },
  },

  // =====================================================
  // ROUND 6 — MONACO GRAND PRIX
  // 07 JUNE 2026
  // =====================================================
  6: {
    name: "Monaco Grand Prix",
    country: "MON",
    circuit: "Monaco",
    date: "07 Jun 2026",
    status: "completed",

    results: {
      12: 1,
      44: 2,
      10: 3,
      6: 4,
      81: 5,
      30: 6,
      41: 7,
      23: 8,
      31: 9,
      14: 10,
      5: 11,
      63: 12,
      27: 13,
      43: 14,
      11: 15,
      16: "DNF",
      1: "DNF",
      3: "DNF",
      55: "DNF",
      87: "DNF",
      77: "DNF",
      18: "DNF",
    },
  },

  // =====================================================
  // ROUND 7 — BARCELONA-CATALUNYA GRAND PRIX
  // 14 JUNE 2026
  // =====================================================
  7: {
    name: "Barcelona-Catalunya Grand Prix",
    country: "ESP",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "14 Jun 2026",
    status: "completed",

    results: {
      44: 1,
      63: 2,
      1: 3,
      3: 4,
      81: 5,
      6: 6,
      10: 7,
      30: 8,
      41: 9,
      43: 10,
      5: 11,
      55: 12,
      31: 13,
      11: 14,
      87: "DNF",
      27: "DNF",
      12: "DNF",
      16: "DNF",
      14: "DNF",
      18: "DNF",
      77: "DNF",
      23: "NC",
    },
  },

  // =====================================================
  // ROUND 8 — AUSTRIAN GRAND PRIX
  // 28 JUNE 2026
  // =====================================================
  8: {
    name: "Austrian Grand Prix",
    country: "AUT",
    circuit: "Red Bull Ring",
    date: "28 Jun 2026",
    status: "completed",

    results: {
      63: 1,
      3: 2,
      12: 3,
      81: 4,
      44: 5,
      6: 6,
      1: 7,
      16: 8,
      30: 9,
      41: 10,
      5: 11,
      27: 12,
      10: 13,
      87: 14,
      43: 15,
      31: 16,
      23: 17,
      14: 18,
      18: "DNF",
      77: "DNF",
      55: "DNF",
      11: "DNF",
    },
  },

  // =====================================================
  // ROUND 9 — BRITISH GRAND PRIX
  // 05 JULY 2026
  // =====================================================
  9: {
    name: "British Grand Prix",
    country: "GBR",
    circuit: "Silverstone",
    date: "05 Jul 2026",
    status: "completed",

    results: {
      16: 1,
      63: 2,
      44: 3,
      1: 4,
      6: 5,
      30: 6,
      41: 7,
      5: 8,
      43: 9,
      10: 10,
      81: 11,
      87: 12,
      31: 13,
      11: 14,
      12: 15,
      77: 16,
      55: 17,
      14: 18,
      18: 19,
      3: "DNF",
      23: "DNF",
      27: "DNF",
    },
  },

  // =====================================================
  // ROUND 10 — BELGIAN GRAND PRIX
  // 19 JULY 2026
  // =====================================================
  10: {
    name: "Belgian Grand Prix",
    country: "BEL",
    circuit: "Spa-Francorchamps",
    date: "19 Jul 2026",
    status: "completed",

    results: {
      12: 1,
      16: 2,
      3: 3,
      44: 4,
      81: 5,
      6: 6,
      1: 7,
      5: 8,
      41: 9,
      43: 10,
      10: 11,
      30: 12,
      27: 13,
      87: 14,
      23: 15,
      55: 16,
      31: 17,
      77: 18,
      14: 19,
      18: "DNF",
      63: "DNF",
      11: "DNF",
    },
  },

  // =====================================================
  // ROUND 11 — HUNGARIAN GRAND PRIX
  // 26 JULY 2026
  // =====================================================
  11: {
    name: "Hungarian Grand Prix",
    country: "HUN",
    circuit: "Hungaroring",
    date: "26 Jul 2026",
    status: "completed",

    results: {
      1: 1,
      3: 2,
      12: 3,
      16: 4,
      44: 5,
      6: 6,
      63: 7,
      30: 8,
      27: 9,
      41: 10,
      5: 11,
      10: 12,
      18: 13,
      14: 14,
      43: 15,
      31: 16,
      23: 17,
      55: 18,
      87: 19,
      77: "DNF",
      11: "DNF",
      81: "DNF",
    },
  },
};

export default raceResults;