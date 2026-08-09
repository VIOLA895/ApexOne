const lessons = [
  // =========================================================
  // LESSON 1 — RACE WEEKEND
  // =========================================================

  {
    slug: "race-weekend",

    title: "Race Weekend",

    subtitle:
      "Learn how a Formula 1 Grand Prix unfolds from practice sessions to the chequered flag.",

    category: "Beginner",

    difficulty: "Beginner",

    readTime: "5 min",

    intro:
      "Every Formula 1 Grand Prix follows a structured weekend format. Practice sessions help teams prepare, qualifying determines the starting grid, and Sunday's race decides who scores championship points.",

    learningPoints: [
      "Understand the purpose of practice sessions",

      "Learn how qualifying determines the starting grid",

      "Understand what happens during the Grand Prix",
    ],

    controlLabel: "RACE BRIEFING",

    controlTitle: "Before the lights go out",

    controlDescription:
      "A Formula 1 weekend is carefully structured. Every session has a purpose, and every lap gives teams information they can use to improve their performance.",

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
      "Teams collect thousands of data points during practice sessions to optimise car setup before qualifying and the race.",

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

    intro:
      "Tyres are the only part of an F1 car that touches the circuit. Choosing the right compound at the right time is one of the biggest strategic decisions during a race.",

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
      "In a dry Formula 1 race, drivers are normally required to use at least two different dry tyre compounds.",

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
        "Soft tyres generally provide the most grip and the fastest lap times, but they also tend to wear faster.",
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

    nextLesson: "More Lessons Coming Soon",

    nextLink: "/Learn",
  },
];

export default lessons;