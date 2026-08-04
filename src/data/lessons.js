const lessons = [
  {
    slug: "race-weekend",
    title: "Race Weekend",
    difficulty: "Beginner",
    readTime: "5 min",

    intro:
      "Every Formula 1 Grand Prix follows a structured weekend format. Practice sessions help teams prepare, qualifying determines the starting grid, and Sunday's race decides who scores championship points.",

    timeline: [
      {
        day: "Friday",
        events: ["Practice 1", "Practice 2"],
      },
      {
        day: "Saturday",
        events: ["Practice 3", "Qualifying"],
      },
      {
        day: "Sunday",
        events: ["Grand Prix"],
      },
    ],

    factTitle: "💡 Did You Know?",
    fact:
      "Teams gather thousands of pieces of data during practice sessions.",

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
        "Qualifying determines the starting order for Sunday's race.",
    },

    nextLesson: "Tyres",
    nextLink: "/Learn/tyres",
  },

  {
    slug: "tyres",

    title: "Tyres",

    difficulty: "Beginner",

    readTime: "6 min",

    intro:
      "Tyres are the only part of an F1 car that touches the track.",

    timeline: [
      {
        day: "🔴 Soft",
        events: [
          "Highest grip",
          "Fastest",
          "Wears quickly",
        ],
      },
      {
        day: "🟡 Medium",
        events: [
          "Balanced",
          "Versatile",
          "Moderate wear",
        ],
      },
      {
        day: "⚪ Hard",
        events: [
          "Longest lasting",
          "Lower grip",
          "Ideal for long stints",
        ],
      },
    ],

    factTitle: "🛞 Tyre Fact",

    fact:
      "Drivers normally use at least two tyre compounds in a dry race.",

    quiz: {
      question:
        "Which tyre compound has the most grip?",

      options: [
        "Hard",
        "Medium",
        "Soft",
      ],

      correctAnswer: "Soft",

      explanation:
        "Soft tyres provide the most grip but wear out fastest.",
    },

    nextLesson: "DRS",

    nextLink: "/Learn/drs",
  },
];

export default lessons;