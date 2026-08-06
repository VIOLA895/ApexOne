const lessons = [
  {
    slug: "race-weekend",

    title: "Race Weekend",

    subtitle:
      "Learn how a Formula 1 Grand Prix unfolds from practice sessions to the chequered flag.",

    difficulty: "Beginner",

    readTime: "5 min",

    intro:
      "Every Formula 1 Grand Prix follows a structured weekend format. Practice sessions help teams prepare, qualifying determines the starting grid, and Sunday's race decides who scores championship points.",

    learningPoints: [
      "Understand the purpose of practice sessions",
      "Learn how qualifying determines the starting grid",
      "See how the Grand Prix decides the race winner",
    ],

    timeline: [
      {
        day: "Friday",
        events: [
          "Practice Session 1",
          "Practice Session 2",
        ],
      },
      {
        day: "Saturday",
        events: [
          "Practice Session 3",
          "Qualifying",
        ],
      },
      {
        day: "Sunday",
        events: [
          "Grand Prix",
        ],
      },
    ],

    factTitle: "Did You Know?",

    fact:
      "Teams collect thousands of data points during every practice session to optimise car setup before qualifying and the race.",

    quiz: {
      question:
        "Which session determines the starting grid?",

      options: [
        "Practice 1",
        "Practice 3",
        "Qualifying",
        "Grand Prix",
      ],

      correctAnswer: "Qualifying",

      explanation:
        "Qualifying determines the order in which drivers start Sunday's Grand Prix.",
    },

    nextLesson: "Tyres",

    nextLink: "/Learn/tyres",
  },

  {
    slug: "tyres",

    title: "Tyres",

    subtitle:
      "Discover the tyre compounds used in Formula 1 and how they shape race strategy.",

    difficulty: "Beginner",

    readTime: "6 min",

    intro:
      "Tyres are the only part of an F1 car that touches the circuit. Choosing the right compound at the right time is one of the biggest strategic decisions during a race.",

    learningPoints: [
      "Identify Soft, Medium and Hard compounds",
      "Understand grip versus durability",
      "Learn why tyre strategy influences race results",
    ],

    timeline: [
      {
        day: "Soft Compound",

        events: [
          "Highest grip",
          "Fastest lap times",
          "Wears out quickly",
        ],
      },

      {
        day: "Medium Compound",

        events: [
          "Balanced performance",
          "Versatile choice",
          "Moderate tyre wear",
        ],
      },

      {
        day: "Hard Compound",

        events: [
          "Longest lifespan",
          "Lower grip",
          "Ideal for long race stints",
        ],
      },
    ],

    factTitle: "Tyre Fact",

    fact:
      "In a dry Formula 1 race, drivers are normally required to use at least two different dry tyre compounds.",

    quiz: {
      question:
        "Which tyre compound provides the highest grip?",

      options: [
        "Hard",
        "Medium",
        "Soft",
      ],

      correctAnswer: "Soft",

      explanation:
        "Soft tyres generate the most grip but also wear out the fastest.",
    },

    nextLesson: "DRS",

    nextLink: "/Learn/drs",
  },
];

export default lessons;