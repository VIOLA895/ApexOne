const raceResults = {
  // =====================================================
  // ROUND 1 — AUSTRALIAN GRAND PRIX
  // =====================================================
  1: {
    name: "Australian Grand Prix",
    country: "AUS",
    circuit: "Albert Park",
    date: "08 Mar 2026",

    results: {
      63: 1,   // George Russell
      12: 2,   // Kimi Antonelli
      16: 3,   // Charles Leclerc
      44: 4,   // Lewis Hamilton
      1: 5,    // Lando Norris
      3: 6,    // Max Verstappen
      87: 7,   // Oliver Bearman
      41: 8,   // Arvid Lindblad
      5: 9,    // Gabriel Bortoleto
      10: 10,  // Pierre Gasly
      31: 11,  // Esteban Ocon
      23: 12,  // Alexander Albon
      30: 13,  // Liam Lawson
      43: 14,  // Franco Colapinto
      55: 15,  // Carlos Sainz
      11: 16,  // Sergio Perez
      18: "NC", // Lance Stroll
      81: "DNS", // Oscar Piastri
      14: "DNF", // Fernando Alonso
      27: "DNS", // Nico Hulkenberg
      77: "DNF", // Valtteri Bottas
      6: "DNF", // Isack Hadjar
    },
  },

  // =====================================================
  // ROUND 2 — CHINESE GRAND PRIX
  // =====================================================
  2: {
    name: "Chinese Grand Prix",
    country: "CHN",
    circuit: "Shanghai International Circuit",
    date: "15 Mar 2026",

    results: {
      12: 1,   // Kimi Antonelli
      63: 2,   // George Russell
      44: 3,   // Lewis Hamilton
      16: 4,   // Charles Leclerc
      87: 5,   // Oliver Bearman
      10: 6,   // Pierre Gasly
      30: 7,   // Liam Lawson
      6: 8,    // Isack Hadjar
      55: 9,   // Carlos Sainz
      43: 10,  // Franco Colapinto
      27: 11,  // Nico Hulkenberg
      41: 12,  // Arvid Lindblad
      77: 13,  // Valtteri Bottas
      31: 14,  // Esteban Ocon
      11: 15,  // Sergio Perez
      18: "DNF", // Lance Stroll
      3: "DNF", // Max Verstappen
      1: "DNS", // Lando Norris
      81: "DNS", // Oscar Piastri
      5: "DNS",  // Gabriel Bortoleto
      23: "DNS", // Alexander Albon
      14: "DNF", // Fernando Alonso
    },
  },

  // =====================================================
  // ROUND 3 — JAPANESE GRAND PRIX
  // =====================================================
  3: {
    name: "Japanese Grand Prix",
    country: "JPN",
    circuit: "Suzuka",
    date: "29 Mar 2026",

    results: {
      12: 1,   // Kimi Antonelli
      81: 2,   // Oscar Piastri
      16: 3,   // Charles Leclerc
      63: 4,   // George Russell
      1: 5,    // Lando Norris
      44: 6,   // Lewis Hamilton
      10: 7,   // Pierre Gasly
      3: 8,    // Max Verstappen
      30: 9,   // Liam Lawson
      31: 10,  // Esteban Ocon
      27: 11,  // Nico Hulkenberg
      6: 12,   // Isack Hadjar
      5: 13,   // Gabriel Bortoleto
      41: 14,  // Arvid Lindblad
      55: 15,  // Carlos Sainz
      43: 16,  // Franco Colapinto
      11: 17,  // Sergio Perez
      14: 18,  // Fernando Alonso
      77: 19,  // Valtteri Bottas
      23: 20,  // Alexander Albon
      87: "DNF", // Oliver Bearman
      18: "DNF", // Lance Stroll
    },
  },

  // =====================================================
  // ROUND 4 — SAUDI ARABIAN GRAND PRIX
  // CANCELLED
  // =====================================================

  // =====================================================
  // ROUND 5 — MIAMI GRAND PRIX
  // =====================================================
  5: {
    name: "Miami Grand Prix",
    country: "USA",
    circuit: "Miami International Autodrome",
    date: "03 May 2026",

    results: {
      12: 1,   // Kimi Antonelli
      1: 2,    // Lando Norris
      81: 3,   // Oscar Piastri
      63: 4,   // George Russell
      3: 5,    // Max Verstappen
      44: 6,   // Lewis Hamilton
      43: 7,   // Franco Colapinto
      16: 8,   // Charles Leclerc
      55: 9,   // Carlos Sainz
      23: 10,  // Alexander Albon
      87: 11,  // Oliver Bearman
      5: 12,   // Gabriel Bortoleto
      31: 13,  // Esteban Ocon
      41: 14,  // Arvid Lindblad
      14: 15,  // Fernando Alonso
      11: 16,  // Sergio Perez
      18: 17,  // Lance Stroll
      77: 18,  // Valtteri Bottas
      10: "DNF", // Pierre Gasly
      30: "DNF", // Liam Lawson
      27: "DNF", // Nico Hulkenberg
      6: "DNF",  // Isack Hadjar
    },
  },

  // =====================================================
  // ROUND 6 — CANADIAN GRAND PRIX
  // =====================================================
  6: {
    name: "Canadian Grand Prix",
    country: "CAN",
    circuit: "Circuit Gilles Villeneuve",
    date: "24 May 2026",

    results: {
      12: 1,   // Kimi Antonelli
      44: 2,   // Lewis Hamilton
      3: 3,    // Max Verstappen
      16: 4,   // Charles Leclerc
      6: 5,    // Isack Hadjar
      43: 6,   // Franco Colapinto
      30: 7,   // Liam Lawson
      10: 8,   // Pierre Gasly
      55: 9,   // Carlos Sainz
      87: 10,  // Oliver Bearman
      81: 11,  // Oscar Piastri
      27: 12,  // Nico Hulkenberg
      5: 13,   // Gabriel Bortoleto
      31: 14,  // Esteban Ocon
      18: 15,  // Lance Stroll
      77: 16,  // Valtteri Bottas
      11: "DNF", // Sergio Perez
      23: "DNF", // Alexander Albon
      1: "DNF",  // Lando Norris
      63: "DNF", // George Russell
      14: "DNF", // Fernando Alonso
      41: "DNS", // Arvid Lindblad
    },
  },

  // =====================================================
  // ROUND 7 — MONACO GRAND PRIX
  // =====================================================
  7: {
    name: "Monaco Grand Prix",
    country: "MON",
    circuit: "Monaco",
    date: "07 Jun 2026",

    results: {
      12: 1,   // Kimi Antonelli
      44: 2,   // Lewis Hamilton
      10: 3,   // Pierre Gasly
      6: 4,    // Isack Hadjar
      81: 5,   // Oscar Piastri
      30: 6,   // Liam Lawson
      41: 7,   // Arvid Lindblad
      23: 8,   // Alexander Albon
      31: 9,   // Esteban Ocon
      14: 10,  // Fernando Alonso
      5: 11,   // Gabriel Bortoleto
      63: 12,  // George Russell
      27: 13,  // Nico Hulkenberg
      43: 14,  // Franco Colapinto
      11: 15,  // Sergio Perez
      16: "DNF", // Charles Leclerc
      1: "DNF",  // Lando Norris
      3: "DNF",  // Max Verstappen
      55: "DNF", // Carlos Sainz
      87: "DNF", // Oliver Bearman
      77: "DNF", // Valtteri Bottas
      18: "DNF", // Lance Stroll
    },
  },

  // =====================================================
  // ROUND 8 — BARCELONA-CATALUNYA GRAND PRIX
  // =====================================================
  8: {
    name: "Barcelona-Catalunya Grand Prix",
    country: "ESP",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "14 Jun 2026",

    results: {
      44: 1,   // Lewis Hamilton
      63: 2,   // George Russell
      1: 3,    // Lando Norris
      3: 4,    // Max Verstappen
      81: 5,   // Oscar Piastri
      6: 6,    // Isack Hadjar
      10: 7,   // Pierre Gasly
      30: 8,   // Liam Lawson
      41: 9,   // Arvid Lindblad
      43: 10,  // Franco Colapinto
      5: 11,   // Gabriel Bortoleto
      55: 12,   // Carlos Sainz
      31: 13,   // Esteban Ocon
      11: 14,   // Sergio Perez
      87: "DNF", // Oliver Bearman
      27: "DNF", // Nico Hulkenberg
      12: "DNF", // Kimi Antonelli
      16: "DNF", // Charles Leclerc
      14: "DNF", // Fernando Alonso
      18: "DNF", // Lance Stroll
      77: "DNF", // Valtteri Bottas
      23: "NC",  // Alexander Albon
    },
  },

  // =====================================================
  // ROUND 9 — AUSTRIAN GRAND PRIX
  // =====================================================
  9: {
    name: "Austrian Grand Prix",
    country: "AUT",
    circuit: "Red Bull Ring",
    date: "28 Jun 2026",

    results: {
      63: 1,   // George Russell
      3: 2,    // Max Verstappen
      12: 3,   // Kimi Antonelli
      81: 4,   // Oscar Piastri
      44: 5,   // Lewis Hamilton
      6: 6,    // Isack Hadjar
      1: 7,    // Lando Norris
      16: 8,   // Charles Leclerc
      30: 9,   // Liam Lawson
      41: 10,  // Arvid Lindblad
      5: 11,   // Gabriel Bortoleto
      27: 12,  // Nico Hulkenberg
      10: 13,  // Pierre Gasly
      87: 14,  // Oliver Bearman
      43: 15,  // Franco Colapinto
      31: 16,  // Esteban Ocon
      23: 17,  // Alexander Albon
      14: 18,  // Fernando Alonso
      18: "DNF", // Lance Stroll
      77: "DNF", // Valtteri Bottas
      55: "DNF", // Carlos Sainz
      11: "DNF", // Sergio Perez
    },
  },

  // =====================================================
  // ROUND 10 — BRITISH GRAND PRIX
  // =====================================================
  10: {
    name: "British Grand Prix",
    country: "GBR",
    circuit: "Silverstone",
    date: "05 Jul 2026",

    results: {
      16: 1,   // Charles Leclerc
      63: 2,   // George Russell
      44: 3,   // Lewis Hamilton
      1: 4,    // Lando Norris
      6: 5,    // Isack Hadjar
      30: 6,   // Liam Lawson
      41: 7,   // Arvid Lindblad
      5: 8,    // Gabriel Bortoleto
      43: 9,   // Franco Colapinto
      10: 10,  // Pierre Gasly
      81: 11,  // Oscar Piastri
      87: 12,  // Oliver Bearman
      31: 13,  // Esteban Ocon
      11: 14,  // Sergio Perez
      12: 15,  // Kimi Antonelli
      77: 16,  // Valtteri Bottas
      55: 17,  // Carlos Sainz
      14: 18,  // Fernando Alonso
      18: 19,  // Lance Stroll
      3: "DNF", // Max Verstappen
      23: "DNF", // Alexander Albon
      27: "DNF", // Nico Hulkenberg
    },
  },

  // =====================================================
  // ROUND 11 — BELGIAN GRAND PRIX
  // =====================================================
  11: {
    name: "Belgian Grand Prix",
    country: "BEL",
    circuit: "Spa-Francorchamps",
    date: "19 Jul 2026",

    results: {
      12: 1,   // Kimi Antonelli
      16: 2,   // Charles Leclerc
      3: 3,    // Max Verstappen
      44: 4,   // Lewis Hamilton
      81: 5,   // Oscar Piastri
      6: 6,    // Isack Hadjar
      1: 7,    // Lando Norris
      5: 8,    // Gabriel Bortoleto
      41: 9,   // Arvid Lindblad
      43: 10,  // Franco Colapinto
      10: 11,  // Pierre Gasly
      30: 12,  // Liam Lawson
      27: 13,  // Nico Hulkenberg
      87: 14,  // Oliver Bearman
      23: 15,  // Alexander Albon
      55: 16,  // Carlos Sainz
      31: 17,  // Esteban Ocon
      77: 18,  // Valtteri Bottas
      14: 19,  // Fernando Alonso
      18: "DNF", // Lance Stroll
      63: "DNF", // George Russell
      11: "DNF", // Sergio Perez
    },
  },

  // =====================================================
  // ROUND 12 — HUNGARIAN GRAND PRIX
  // =====================================================
  12: {
    name: "Hungarian Grand Prix",
    country: "HUN",
    circuit: "Hungaroring",
    date: "26 Jul 2026",

    results: {
      1: 1,    // Lando Norris
      3: 2,    // Max Verstappen
      12: 3,   // Kimi Antonelli
      16: 4,   // Charles Leclerc
      44: 5,   // Lewis Hamilton
      6: 6,    // Isack Hadjar
      63: 7,   // George Russell
      30: 8,   // Liam Lawson
      27: 9,   // Nico Hulkenberg
      41: 10,  // Arvid Lindblad
      5: 11,   // Gabriel Bortoleto
      10: 12,  // Pierre Gasly
      18: 13,  // Lance Stroll
      14: 14,  // Fernando Alonso
      43: 15,  // Franco Colapinto
      31: 16,  // Esteban Ocon
      23: 17,  // Alexander Albon
      55: 18,  // Carlos Sainz
      87: 19,  // Oliver Bearman
      77: "DNF", // Valtteri Bottas
      11: "DNF", // Sergio Perez
      81: "DNF", // Oscar Piastri
    },
  },
};

export default raceResults;