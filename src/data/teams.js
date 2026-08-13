const teams = [
  {
    id: "mercedes",
    name: "Mercedes",
    shortName: "Mercedes",
    country: "Germany",

    image: "/src/assets/teams/mercedes.png",

    position: 1,

    points: 379,
    wins: 8,
    podiums: 14,
    poles: 10,
    fastestLaps: 0,

    drivers: [
      "George Russell",
      "Kimi Antonelli",
    ],

    principal: "Toto Wolff",
    technicalChief: "James Allison",

    base: "Brackley, United Kingdom",

    chassis: "W17",
    powerUnit: "Mercedes",

    firstEntry: 1970,

    championships: 8,

    carName: "Mercedes W17",

    description:
      "Mercedes-AMG PETRONAS Formula One Team enters the 2026 season as one of the leading forces in Formula 1. The team combines a highly experienced technical organisation with the developing partnership of George Russell and Kimi Antonelli.",

    history:
      "Mercedes returned as a full works team in 2010 and went on to dominate the turbo-hybrid era. Between 2014 and 2021, the team won eight consecutive Constructors' Championships, establishing one of the most dominant periods in Formula 1 history.",

    seasonSummary:
      "Mercedes has made a major impact during the 2026 season, leading the Constructors' Championship with a strong combination of race wins, qualifying performance and consistent points finishes.",

    highlights: [
      "8 Constructors' Championships",
      "146 pole positions",
      "212 podiums",
      "130 Grand Prix victories",
    ],

    didYouKnow:
      "Mercedes has won eight consecutive Constructors' Championships, making it one of the most successful teams of the modern Formula 1 era.",

    timeline: [
      {
        year: "2010",
        title: "Works team returns",
        description:
          "Mercedes returns to Formula 1 as a full works operation."
      },
      {
        year: "2014",
        title: "The dominant era begins",
        description:
          "Mercedes begins its remarkable run of Constructors' Championships."
      },
      {
        year: "2021",
        title: "Eighth consecutive title",
        description:
          "Mercedes secures its eighth consecutive Constructors' Championship."
      },
      {
        year: "2026",
        title: "New generation",
        description:
          "Mercedes enters the new Formula 1 regulations with George Russell and Kimi Antonelli."
      },
    ],
  },

  {
    id: "ferrari",
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",

    image: "/src/assets/teams/ferrari.png",

    position: 2,

    points: 307,
    wins: 2,
    podiums: 9,
    poles: 0,
    fastestLaps: 2,

    drivers: [
      "Charles Leclerc",
      "Lewis Hamilton",
    ],

    principal: "Frédéric Vasseur",
    technicalChief: "Loic Serra / Enrico Gualtieri",

    base: "Maranello, Italy",

    chassis: "SF-26",
    powerUnit: "Ferrari",

    firstEntry: 1950,

    championships: 16,

    carName: "Ferrari SF-26",

    description:
      "Scuderia Ferrari is Formula 1's oldest and most decorated team. The Italian team continues its pursuit of another Constructors' Championship with Charles Leclerc and seven-time World Champion Lewis Hamilton.",

    history:
      "Ferrari has competed in every Formula 1 World Championship season since the championship began in 1950. The team has produced legendary cars, drivers and championship campaigns and remains one of the defining names in motorsport.",

    seasonSummary:
      "Ferrari currently sits second in the 2026 Constructors' Championship, with two Grand Prix victories and nine podium finishes.",

    highlights: [
      "16 Constructors' Championships",
      "251 Grand Prix victories",
      "647 podiums",
      "254 pole positions",
    ],

    didYouKnow:
      "Ferrari is the only team to have competed in every Formula 1 World Championship season since 1950.",

    timeline: [
      {
        year: "1950",
        title: "Formula 1 debut",
        description:
          "Ferrari enters the inaugural Formula 1 World Championship season."
      },
      {
        year: "1961",
        title: "First Constructors' Championship",
        description:
          "Ferrari wins its first Constructors' Championship."
      },
      {
        year: "2000",
        title: "Beginning of a new dynasty",
        description:
          "Ferrari begins one of the most successful periods in Formula 1 history."
      },
      {
        year: "2026",
        title: "Hamilton and Leclerc",
        description:
          "Charles Leclerc and Lewis Hamilton continue Ferrari's championship campaign."
      },
    ],
  },

  {
    id: "mclaren",
    name: "McLaren",
    shortName: "McLaren",
    country: "United Kingdom",

    image: "/src/assets/teams/mclaren.png",

    position: 3,

    points: 220,
    wins: 1,
    podiums: 5,
    poles: 1,
    fastestLaps: 2,

    drivers: [
      "Lando Norris",
      "Oscar Piastri",
    ],

    principal: "Andrea Stella",
    technicalChief: "Peter Prodromou / Neil Houldey",

    base: "Woking, United Kingdom",

    chassis: "MCL40",
    powerUnit: "Mercedes",

    firstEntry: 1966,

    championships: 10,

    carName: "McLaren MCL40",

    description:
      "McLaren is one of Formula 1's most successful teams. After winning the 2025 Constructors' Championship, the team enters 2026 with Lando Norris and Oscar Piastri continuing their partnership.",

    history:
      "Founded by Bruce McLaren, the team entered Formula 1 in 1966 and quickly became one of the sport's most successful constructors. McLaren has raced with legendary drivers including Ayrton Senna, Alain Prost, Mika Häkkinen and Lewis Hamilton.",

    seasonSummary:
      "McLaren currently occupies third place in the 2026 Constructors' Championship with 220 points and one Grand Prix victory.",

    highlights: [
      "10 Constructors' Championships",
      "204 Grand Prix victories",
      "449 podiums",
      "178 pole positions",
    ],

    didYouKnow:
      "McLaren's first Formula 1 race was the 1966 Monaco Grand Prix.",

    timeline: [
      {
        year: "1966",
        title: "Formula 1 debut",
        description:
          "Bruce McLaren's team enters its first Formula 1 race."
      },
      {
        year: "1988",
        title: "One of F1's greatest seasons",
        description:
          "McLaren dominates the championship with Ayrton Senna and Alain Prost."
      },
      {
        year: "1998",
        title: "Constructors' champions",
        description:
          "McLaren wins the Constructors' Championship with Mika Häkkinen."
      },
      {
        year: "2025",
        title: "Champions again",
        description:
          "McLaren wins the Constructors' Championship."
      },
    ],
  },

  {
    id: "red-bull",
    name: "Red Bull Racing",
    shortName: "Red Bull",
    country: "Austria",

    image: "/src/assets/teams/redbull.png",

    position: 4,

    points: 177,
    wins: 0,
    podiums: 4,
    poles: 0,
    fastestLaps: 1,

    drivers: [
      "Max Verstappen",
      "Isack Hadjar",
    ],

    principal: "Laurent Mekies",
    technicalChief: "Pierre Waché",

    base: "Milton Keynes, United Kingdom",

    chassis: "RB22",
    powerUnit: "Red Bull Ford",

    firstEntry: 1997,

    championships: 6,

    carName: "Red Bull RB22",

    description:
      "Oracle Red Bull Racing remains one of Formula 1's most powerful modern teams. The squad combines the experience of four-time World Champion Max Verstappen with the emerging talent of Isack Hadjar.",

    history:
      "Red Bull formally entered Formula 1 in 2005 after acquiring the Jaguar team. The team quickly established itself as a championship contender before dominating the sport between 2010 and 2013 and again during the Verstappen era.",

    seasonSummary:
      "Red Bull currently sits fourth in the Constructors' Championship with 177 points and four podium finishes.",

    highlights: [
      "6 Constructors' Championships",
      "130 Grand Prix victories",
      "237 podiums",
      "111 pole positions",
    ],

    didYouKnow:
      "Red Bull won four consecutive Constructors' Championships between 2010 and 2013.",

    timeline: [
      {
        year: "2005",
        title: "Red Bull joins F1",
        description:
          "Red Bull enters Formula 1 after acquiring Jaguar Racing."
      },
      {
        year: "2010",
        title: "First championship",
        description:
          "Red Bull wins its first Constructors' Championship."
      },
      {
        year: "2021",
        title: "Verstappen's breakthrough",
        description:
          "Max Verstappen wins his first Drivers' Championship."
      },
      {
        year: "2026",
        title: "New leadership",
        description:
          "Laurent Mekies leads the team into the new regulations era."
      },
    ],
  },

  {
    id: "racing-bulls",
    name: "Racing Bulls",
    shortName: "Racing Bulls",
    country: "Italy",

    image: "/src/assets/teams/racing-bulls.png",

    position: 5,

    points: 66,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Liam Lawson",
      "Arvid Lindblad",
    ],

    principal: "Alan Permane",
    technicalChief: "Tim Goss",

    base: "Faenza, Italy",

    chassis: "VCARB 03",
    powerUnit: "Red Bull Ford",

    firstEntry: 1985,

    championships: 0,

    carName: "VCARB 03",

    description:
      "Racing Bulls operates as a competitive constructor while retaining its historic connection to Red Bull's driver development programme.",

    history:
      "The team traces its modern history to Minardi and has raced under several identities including Toro Rosso, AlphaTauri and RB before becoming Racing Bulls.",

    seasonSummary:
      "Racing Bulls currently sits fifth in the Constructors' Championship with 66 points.",

    highlights: [
      "6 career podiums",
      "2 Grand Prix victories",
      "1 pole position",
      "Red Bull driver development heritage",
    ],

    didYouKnow:
      "The team has previously raced under the names Toro Rosso, AlphaTauri and RB.",

    timeline: [
      {
        year: "1985",
        title: "Minardi enters F1",
        description:
          "The team that would eventually become Racing Bulls makes its F1 debut."
      },
      {
        year: "2006",
        title: "Toro Rosso",
        description:
          "Red Bull's junior team begins competing as Scuderia Toro Rosso."
      },
      {
        year: "2020",
        title: "AlphaTauri",
        description:
          "The team is rebranded as AlphaTauri."
      },
      {
        year: "2026",
        title: "Racing Bulls",
        description:
          "The team enters the 2026 season as Racing Bulls."
      },
    ],
  },

  {
    id: "alpine",
    name: "Alpine",
    shortName: "Alpine",
    country: "France",

    image: "/src/assets/teams/alpine.png",

    position: 6,

    points: 61,
    wins: 0,
    podiums: 1,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Pierre Gasly",
      "Franco Colapinto",
    ],

    principal: "Steve Nielsen",
    technicalChief: "David Sanchez",

    base: "Enstone, United Kingdom",

    chassis: "A526",
    powerUnit: "Mercedes",

    firstEntry: 1986,

    championships: 2,

    carName: "Alpine A526",

    description:
      "BWT Alpine Formula One Team combines Renault's historic Formula 1 heritage with the Alpine performance-car brand.",

    history:
      "The current Alpine operation has roots stretching back through Renault, Benetton, Lotus and other identities. Alpine officially entered under its current name in 2021.",

    seasonSummary:
      "Alpine currently sits sixth in the 2026 Constructors' Championship with 61 points and one podium.",

    highlights: [
      "2 World Championships",
      "21 Grand Prix victories",
      "61 podiums",
      "20 pole positions",
    ],

    didYouKnow:
      "Alpine's Formula 1 identity was introduced in 2021 as part of Renault's wider motorsport strategy.",

    timeline: [
      {
        year: "1986",
        title: "F1 roots",
        description:
          "The team's lineage begins with the Renault-powered Enstone operation."
      },
      {
        year: "2005",
        title: "Championship success",
        description:
          "Renault wins both Drivers' and Constructors' Championships."
      },
      {
        year: "2021",
        title: "Alpine arrives",
        description:
          "Renault's works team is rebranded as Alpine."
      },
      {
        year: "2026",
        title: "Mercedes power",
        description:
          "Alpine begins a new technical era using Mercedes power units."
      },
    ],
  },

  {
    id: "haas",
    name: "Haas",
    shortName: "Haas",
    country: "United States",

    image: "/src/assets/teams/haas.png",

    position: 7,

    points: 21,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Esteban Ocon",
      "Oliver Bearman",
    ],

    principal: "Ayao Komatsu",
    technicalChief: "Andrea De Zordo",

    base: "Kannapolis, United States",

    chassis: "VF-26",
    powerUnit: "Ferrari",

    firstEntry: 2016,

    championships: 0,

    carName: "Haas VF-26",

    description:
      "Haas is America's Formula 1 constructor, combining a lean operational model with Ferrari power and an increasingly competitive technical operation.",

    history:
      "Founded by Gene Haas, the team made its Formula 1 debut in 2016 and became the first all-American-led F1 team in decades.",

    seasonSummary:
      "Haas currently sits seventh in the 2026 Constructors' Championship with 21 points.",

    highlights: [
      "F1 debut in 2016",
      "First American-led F1 team in decades",
      "Ferrari power unit partnership",
      "0 Constructors' Championships",
    ],

    didYouKnow:
      "Haas became the first all-American-led Formula 1 team in three decades when it joined the grid in 2016.",

    timeline: [
      {
        year: "2014",
        title: "F1 project announced",
        description:
          "Gene Haas receives approval to enter Formula 1."
      },
      {
        year: "2016",
        title: "Formula 1 debut",
        description:
          "Haas competes in its first Grand Prix."
      },
      {
        year: "2024",
        title: "Komatsu takes charge",
        description:
          "Ayao Komatsu becomes Team Principal."
      },
      {
        year: "2026",
        title: "New era",
        description:
          "Haas enters the new regulations with Ocon and Bearman."
      },
    ],
  },

  {
    id: "audi",
    name: "Audi",
    shortName: "Audi",
    country: "Germany",

    image: "/src/assets/teams/audi.png",

    position: 8,

    points: 12,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Nico Hulkenberg",
      "Gabriel Bortoleto",
    ],

    principal: "Mattia Binotto",
    technicalChief: "James Key",

    base: "Hinwil, Switzerland",

    chassis: "R26",
    powerUnit: "Audi",

    firstEntry: 2026,

    championships: 0,

    carName: "Audi R26",

    description:
      "Audi enters Formula 1 as a full works constructor in 2026 after taking control of the Sauber operation.",

    history:
      "Audi's Formula 1 project grew from its commitment to become a power-unit manufacturer under the 2026 regulations. The manufacturer acquired the Sauber organisation and entered as a works team.",

    seasonSummary:
      "Audi currently sits eighth in the Constructors' Championship with 12 points in its debut season.",

    highlights: [
      "2026 F1 debut",
      "Audi works power unit",
      "Sauber heritage",
      "German manufacturer entry",
    ],

    didYouKnow:
      "2026 is Audi's first season competing as a Formula 1 constructor.",

    timeline: [
      {
        year: "2022",
        title: "Audi announces F1 entry",
        description:
          "Audi confirms plans to enter Formula 1 under the 2026 regulations."
      },
      {
        year: "2024",
        title: "Sauber takeover",
        description:
          "Audi expands its control of the Sauber operation."
      },
      {
        year: "2026",
        title: "F1 debut",
        description:
          "Audi officially enters Formula 1 as a works constructor."
      },
    ],
  },

  {
    id: "williams",
    name: "Williams",
    shortName: "Williams",
    country: "United Kingdom",

    image: "/src/assets/teams/williams.png",

    position: 9,

    points: 11,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Carlos Sainz",
      "Alexander Albon",
    ],

    principal: "James Vowles",
    technicalChief: "Pat Fry",

    base: "Grove, United Kingdom",

    chassis: "FW48",
    powerUnit: "Mercedes",

    firstEntry: 1978,

    championships: 9,

    carName: "Williams FW48",

    description:
      "Williams is one of Formula 1's most historic constructors and is continuing a long-term rebuilding project under Team Principal James Vowles.",

    history:
      "Founded by Sir Frank Williams, Williams became one of the dominant teams of the 1980s and 1990s, winning multiple Drivers' and Constructors' Championships.",

    seasonSummary:
      "Williams currently sits ninth in the 2026 Constructors' Championship with 11 points.",

    highlights: [
      "9 Constructors' Championships",
      "114 Grand Prix victories",
      "245 podiums",
      "128 pole positions",
    ],

    didYouKnow:
      "Williams has won nine Constructors' Championships, making it one of the most successful teams in F1 history.",

    timeline: [
      {
        year: "1978",
        title: "F1 debut",
        description:
          "Williams enters the Formula 1 World Championship."
      },
      {
        year: "1980",
        title: "First championship",
        description:
          "Williams begins its championship-winning era."
      },
      {
        year: "1997",
        title: "Ninth title",
        description:
          "Williams wins its ninth Constructors' Championship."
      },
      {
        year: "2026",
        title: "Rebuilding continues",
        description:
          "James Vowles continues the team's long-term transformation."
      },
    ],
  },

  {
    id: "aston-martin",
    name: "Aston Martin",
    shortName: "Aston Martin",
    country: "United Kingdom",

    image: "/src/assets/teams/aston-martin.png",

    position: 10,

    points: 1,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Fernando Alonso",
      "Lance Stroll",
    ],

    principal: "Adrian Newey",
    technicalChief: "Enrico Cardile",

    base: "Silverstone, United Kingdom",

    chassis: "AMR26",
    powerUnit: "Honda",

    firstEntry: 2018,

    championships: 0,

    carName: "Aston Martin AMR26",

    description:
      "Aston Martin is building an ambitious works-team project around a new technical structure, Honda power and the expertise of Adrian Newey.",

    history:
      "The modern Aston Martin team evolved from the Jordan, Midland, Spyker, Force India and Racing Point lineage before adopting the Aston Martin name.",

    seasonSummary:
      "Aston Martin currently sits tenth in the 2026 Constructors' Championship with one point.",

    highlights: [
      "Honda works partnership",
      "Adrian Newey leadership",
      "Fernando Alonso",
      "Silverstone-based operation",
    ],

    didYouKnow:
      "Adrian Newey became Aston Martin's Team Principal at the start of the 2026 season.",

    timeline: [
      {
        year: "2018",
        title: "Aston Martin era",
        description:
          "The modern Aston Martin F1 operation begins."
      },
      {
        year: "2023",
        title: "Podium challenge",
        description:
          "Aston Martin emerges as a strong midfield and podium contender."
      },
      {
        year: "2025",
        title: "Newey arrives",
        description:
          "Adrian Newey joins the organisation."
      },
      {
        year: "2026",
        title: "New era",
        description:
          "Aston Martin begins its Honda works partnership under Newey's leadership."
      },
    ],
  },

  {
    id: "cadillac",
    name: "Cadillac",
    shortName: "Cadillac",
    country: "United States",

    image: "/src/assets/teams/cadillac.png",

    position: 11,

    points: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    drivers: [
      "Valtteri Bottas",
      "Sergio Perez",
    ],

    principal: "Graeme Lowdon",
    technicalChief: "Nick Chester",

    base: "Silverstone, United Kingdom",

    chassis: "MAC-26",
    powerUnit: "Ferrari",

    firstEntry: 2026,

    championships: 0,

    carName: "Cadillac MAC-26",

    description:
      "Cadillac joins Formula 1 in 2026 as the sport's 11th team, bringing one of America's most recognisable automotive brands to the championship.",

    history:
      "The Cadillac Formula 1 project is backed by General Motors and TWG Motorsports. Ferrari supplies the team's power unit for its debut season, with GM planning its own Formula 1 power unit for the future.",

    seasonSummary:
      "Cadillac is competing in its first Formula 1 season in 2026 with experienced drivers Valtteri Bottas and Sergio Perez.",

    highlights: [
      "11th team on the 2026 grid",
      "First F1 season in 2026",
      "General Motors backed",
      "Ferrari power unit in 2026",
    ],

    didYouKnow:
      "Cadillac is the first new Formula 1 team to join the grid since Haas debuted in 2016.",

    timeline: [
      {
        year: "2024",
        title: "Entry approved",
        description:
          "Formula 1 and General Motors agree in principle for Cadillac to join the grid."
      },
      {
        year: "2025",
        title: "2026 entry confirmed",
        description:
          "Cadillac receives official approval to enter Formula 1."
      },
      {
        year: "2026",
        title: "Formula 1 debut",
        description:
          "Cadillac races for the first time with Valtteri Bottas and Sergio Perez."
      },
      {
        year: "2029",
        title: "GM power unit",
        description:
          "General Motors plans to introduce its own Formula 1 power unit."
      },
    ],
  },
];

export default teams;