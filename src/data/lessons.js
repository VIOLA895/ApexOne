const lessons = [
  // =========================================================
  // LESSON 1 — RACE WEEKEND
  // =========================================================

  {
    slug: "race-weekend",

    title: "Race Weekend",

    subtitle:
      "Learn how a Formula 1 Grand Prix unfolds from the first practice session to the chequered flag.",

    category: "Beginner",

    difficulty: "Beginner",

    readTime: "5 min",

    briefingTitle: "Before the lights go out.",

    briefingDescription:
      "Every Formula 1 Grand Prix follows a structured weekend format. Practice sessions help teams prepare, qualifying determines the starting grid, and Sunday's race is where the strategy is put to the test.",

    whyTitle: "Every session has a purpose.",

    whyDescription:
      "Understanding the race weekend makes it easier to follow what teams and drivers are trying to achieve. Practice is about preparation, qualifying is about starting position, and the Grand Prix is where everything comes together.",

    intro:
      "A Formula 1 weekend is much more than the race on Sunday. Teams spend the weekend collecting data, adjusting their cars and making strategic decisions.",

    learningPoints: [
      "Understand the purpose of practice sessions",
      "Learn how qualifying determines the starting grid",
      "Understand what happens during the Grand Prix",
    ],

    controlLabel: "RACE BRIEFING",

    controlTitle: "How a Grand Prix weekend unfolds",

    controlDescription:
      "Each session gives teams important information about the car, tyres, track conditions and competition. By Sunday, teams use everything they have learned to prepare for the race.",

    timeline: [
      {
        day: "Friday",
        label: "SESSION 01",
        events: [
          "Practice Session 1",
          "Practice Session 2",
        ],
      },

      {
        day: "Saturday",
        label: "SESSION 02",
        events: [
          "Practice Session 3",
          "Qualifying",
        ],
      },

      {
        day: "Sunday",
        label: "SESSION 03",
        events: [
          "Grand Prix",
        ],
      },
    ],

    factTitle: "DID YOU KNOW?",

    fact:
      "Teams collect huge amounts of information during practice sessions to help engineers understand the car and prepare for qualifying and the race.",

    quiz: {
      question:
        "Which session determines the starting grid for the Grand Prix?",

      options: [
        "Practice 1",
        "Practice 3",
        "Qualifying",
        "Grand Prix",
      ],

      correctAnswer: "Qualifying",

      explanation:
        "Qualifying determines the order in which drivers start the Grand Prix.",
    },

    nextLesson: "Tyres",

    nextLink: "/Learn/tyres",
  },


  // =========================================================
  // LESSON 2 — TYRES
  // =========================================================

  {
    slug: "tyres",

    title: "Tyres",

    subtitle:
      "Discover the tyre compounds used in Formula 1 and how they shape race strategy.",

    category: "Beginner",

    difficulty: "Beginner",

    readTime: "6 min",

    briefingTitle: "The four contact patches.",

    briefingDescription:
      "Tyres are the only part of an F1 car that touches the circuit. That makes tyre choice one of the most important decisions a team makes during a race weekend.",

    whyTitle: "Speed is only half the story.",

    whyDescription:
      "A faster tyre is not always the better tyre. Teams have to balance grip, temperature and tyre life. A driver who manages their tyres well can gain a major strategic advantage.",

    intro:
      "Formula 1 tyres are designed to provide different levels of grip and durability. Teams choose compounds depending on the circuit, weather, strategy and expected race conditions.",

    learningPoints: [
      "Identify Soft, Medium and Hard compounds",
      "Understand the relationship between grip and durability",
      "Learn why tyre strategy can influence race results",
    ],

    controlLabel: "THE THREE COMPOUNDS",

    controlTitle: "Choosing the right tyre",

    controlDescription:
      "Formula 1 teams have to balance speed and tyre life. Softer compounds generally provide more grip but wear faster, while harder compounds can last longer but usually offer less grip.",

    timeline: [
      {
        day: "Soft Compound",
        label: "COMPOUND 01",
        events: [
          "Highest grip",
          "Fastest lap times",
          "Wears out quickly",
        ],
      },

      {
        day: "Medium Compound",
        label: "COMPOUND 02",
        events: [
          "Balanced performance",
          "Versatile race option",
          "Moderate tyre wear",
        ],
      },

      {
        day: "Hard Compound",
        label: "COMPOUND 03",
        events: [
          "Longest lifespan",
          "Lower grip",
          "Useful for long race stints",
        ],
      },
    ],

    factTitle: "TYRE FACT",

    fact:
      "Different tyre compounds allow teams to build different race strategies around speed, grip and tyre life.",

    quiz: {
      question:
        "Which tyre compound generally provides the highest grip?",

      options: [
        "Hard",
        "Medium",
        "Soft",
      ],

      correctAnswer: "Soft",

      explanation:
        "Soft tyres generally provide the most grip and faster lap times, but they also tend to wear faster.",

    },

    nextLesson: "DRS",

    nextLink: "/Learn/drs",
  },


  // =========================================================
  // LESSON 3 — DRS
  // =========================================================

  {
    slug: "drs",

    title: "DRS",

    subtitle:
      "Understand how the Drag Reduction System helps drivers reduce aerodynamic drag and gain speed on designated straights.",

    category: "Beginner",

    difficulty: "Beginner",

    readTime: "5 min",

    briefingTitle: "The science behind an overtake.",

    briefingDescription:
      "At high speed, aerodynamic drag has a huge effect on an F1 car. DRS was designed to temporarily reduce that drag and give a driver an opportunity to gain speed on designated parts of the circuit.",

    whyTitle: "Milliseconds can decide an overtake.",

    whyDescription:
      "Formula 1 cars generate enormous aerodynamic forces, but that performance also comes with drag. Understanding DRS helps explain why drivers can gain speed on a straight and how they can use that advantage when attempting an overtake.",

    intro:
      "DRS, short for Drag Reduction System, is a system designed to reduce aerodynamic drag. By opening a flap in the rear wing when the system is available, a driver can gain additional speed on designated sections of the circuit.",

    learningPoints: [
      "Understand what DRS means",
      "Learn how opening the rear wing reduces drag",
      "Understand when DRS can be activated",
      "Learn how DRS can help a driver attempt an overtake",
    ],

    controlLabel: "THE OVERTAKE TOOL",

    controlTitle: "How DRS works",

    controlDescription:
      "When DRS is available, a flap on the rear wing opens and changes the airflow around the car. This reduces aerodynamic drag, allowing the car to reach a higher speed on a designated straight.",

    timeline: [
      {
        day: "Detection",
        label: "STEP 01",
        events: [
          "The car passes a designated detection point",
          "The system determines whether the driver is eligible to use DRS",
        ],
      },

      {
        day: "Activation",
        label: "STEP 02",
        events: [
          "The driver reaches the DRS activation zone",
          "The rear-wing flap opens when the system is available",
        ],
      },

      {
        day: "Reduced Drag",
        label: "STEP 03",
        events: [
          "The open rear wing reduces aerodynamic drag",
          "The car can gain additional speed along the straight",
        ],
      },

      {
        day: "Overtake",
        label: "STEP 04",
        events: [
          "The extra speed can help the driver close the gap",
          "The driver can attempt an overtake before the next corner",
        ],
      },
    ],

    factTitle: "DRS FACT",

    fact:
      "DRS does not directly give the engine more power. Its advantage comes from reducing aerodynamic drag, allowing the car to travel faster on designated parts of the circuit.",

    quiz: {
      question:
        "What is the main purpose of DRS?",

      options: [
        "Increase engine power",
        "Reduce aerodynamic drag",
        "Make the tyres last longer",
        "Increase fuel capacity",
      ],

      correctAnswer: "Reduce aerodynamic drag",

      explanation:
        "DRS opens a section of the rear wing to reduce aerodynamic drag, allowing the car to reach higher speeds on designated sections of the circuit.",
    },

    nextLesson: "Pit Stops",

    nextLink: "/Learn/pit-stops",
  },


  // =========================================================
  // LESSON 4 — PIT STOPS
  // =========================================================

  {
    slug: "pit-stops",

    title: "Pit Stops",

    subtitle:
      "Learn how teams use the pit lane to change tyres, make adjustments and influence the outcome of a race.",

    category: "Beginner",

    difficulty: "Beginner",

    readTime: "6 min",

    // ---------------------------------------------------------
    // RACE BRIEFING
    // ---------------------------------------------------------

    briefingTitle: "The race within the race.",

    briefingDescription:
      "A pit stop can last only a few seconds, but the decisions surrounding it can affect an entire Grand Prix. Teams must decide when to bring a driver into the pits and which tyres should be fitted.",

    // ---------------------------------------------------------
    // WHY IT MATTERS
    // ---------------------------------------------------------

    whyTitle: "A few seconds can change everything.",

    whyDescription:
      "A well-timed pit stop can put a driver into clean air, help them undercut a rival or give them fresher tyres for the final stages of a race. A poorly timed stop can cost valuable track position.",

    // ---------------------------------------------------------
    // INTRO
    // ---------------------------------------------------------

    intro:
      "Pit stops are an important part of Formula 1 strategy. Drivers enter the pit lane so their team can perform a rapid service, most commonly changing tyres. Teams must balance the time lost in the pit lane against the performance gained from fresh tyres.",

    // ---------------------------------------------------------
    // LEARNING POINTS
    // ---------------------------------------------------------

    learningPoints: [
      "Understand what happens during a pit stop",

      "Learn why teams change tyres during a race",

      "Understand how pit-stop timing affects track position",

      "Learn the basic idea behind an undercut and an overcut",
    ],

    // ---------------------------------------------------------
    // PIT STOP PROCESS
    // ---------------------------------------------------------

    controlLabel: "THE PIT LANE",

    controlTitle: "Inside a pit stop",

    controlDescription:
      "A successful pit stop requires coordination between the driver and the entire pit crew. Every movement has to happen quickly and precisely because time lost in the pit lane can cost positions on track.",

    timeline: [
      {
        day: "Pit Entry",

        label: "STEP 01",

        events: [
          "The driver enters the pit lane",

          "The car slows to the required pit-lane speed",
        ],
      },

      {
        day: "The Stop",

        label: "STEP 02",

        events: [
          "The car reaches its designated pit box",

          "The pit crew positions itself around the car",
        ],
      },

      {
        day: "Tyre Change",

        label: "STEP 03",

        events: [
          "The old tyres are removed",

          "The selected tyres are fitted",

          "The wheels are secured before the car leaves",
        ],
      },

      {
        day: "Pit Exit",

        label: "STEP 04",

        events: [
          "The driver leaves the pit box",

          "The car rejoins the circuit",

          "The team checks the driver's new track position",
        ],
      },
    ],

    // ---------------------------------------------------------
    // STRATEGY
    // ---------------------------------------------------------

    strategyLabel: "RACE STRATEGY",

    strategyTitle: "The undercut",

    strategyDescription:
      "An undercut happens when a driver pits before a rival in an attempt to use fresh tyres and faster lap times to gain track position once the rival makes their own stop.",

    // ---------------------------------------------------------
    // FACT
    // ---------------------------------------------------------

    factTitle: "PIT STOP FACT",

    fact:
      "A pit stop is not simply about changing tyres. Teams have to consider tyre life, traffic, weather, safety cars, track position and the behaviour of their competitors.",

    // ---------------------------------------------------------
    // QUIZ
    // ---------------------------------------------------------

    quiz: {
      question:
        "Why might a Formula 1 driver make a pit stop during a race?",

      options: [
        "To change tyres",

        "To increase engine power",

        "To reset the championship points",

        "To change the race distance",
      ],

      correctAnswer: "To change tyres",

      explanation:
        "One of the most common reasons for a pit stop is to change tyres and give the driver a different or fresher compound for the next part of the race.",
    },

    nextLesson: "Qualifying",

    nextLink: "/Learn/qualifying",
  },
];

export default lessons;