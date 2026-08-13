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
// LESSON 3 — OVERTAKING & ACTIVE AERO
// =========================================================

{
  slug: "overtake-mode",

  title: "Overtake Mode & Active Aero",

  subtitle:
    "Learn how the 2026 Formula 1 cars use active aerodynamics and electrical power to create overtaking opportunities.",

  category: "Beginner",

  difficulty: "Beginner",

  readTime: "7 min",

  briefingTitle: "A new era of overtaking.",

  briefingDescription:
    "The 2026 Formula 1 regulations changed the way cars reduce drag and attack rivals. The old Drag Reduction System, or DRS, has been replaced by Active Aero and a new Overtake Mode.",

  whyTitle: "Overtaking works differently in 2026.",

  whyDescription:
    "If you watched Formula 1 before 2026, you may remember drivers opening a flap on the rear wing when they were within one second of a car ahead. That system was DRS. In 2026, the cars use Active Aero for aerodynamic efficiency while Overtake Mode provides additional electrical power for attacking a rival.",

  intro:
    "The 2026 Formula 1 cars use movable front and rear wings as part of an Active Aero system. On designated straights, the wings can move into a low-drag configuration. Overtake Mode is a separate power system that gives a driver additional electrical energy when they are close enough to the car ahead.",

  learningPoints: [
    "Understand why traditional DRS was replaced in 2026",
    "Learn what Active Aero does",
    "Understand the difference between Straight Mode and Corner Mode",
    "Learn what Overtake Mode does",
    "Understand why being within one second of another car matters",
  ],

  controlLabel: "THE 2026 OVERTAKING SYSTEM",

  controlTitle: "Active Aero + Overtake Mode",

  controlDescription:
    "The 2026 cars combine aerodynamic efficiency with additional electrical power. Active Aero changes the position of the front and rear wings, while Overtake Mode gives a following driver extra electrical energy that can be used to attack the car ahead.",

  timeline: [
    {
      day: "ACTIVE AERO",

      label: "STEP 01",

      events: [
        "The front and rear wings can change position",
        "The system uses different aerodynamic configurations depending on where the car is on the circuit",
      ],
    },

    {
      day: "STRAIGHT MODE",

      label: "STEP 02",

      events: [
        "The wing flaps move toward a low-drag configuration",
        "Less aerodynamic drag helps the car travel faster",
        "The system can be used by drivers on designated straights",
      ],
    },

    {
      day: "CORNER MODE",

      label: "STEP 03",

      events: [
        "The wings return toward their higher-downforce configuration",
        "The car needs aerodynamic grip through corners",
        "Downforce helps the driver maintain speed and control",
      ],
    },

    {
      day: "OVERTAKE MODE",

      label: "STEP 04",

      events: [
        "The following driver must be within one second of the car ahead at the relevant detection point",
        "The driver gains access to additional electrical energy",
        "That extra energy can be deployed to attack the car ahead",
      ],
    },
  ],

  strategyLabel: "OVERTAKING STRATEGY",

  strategyTitle: "Energy can be the difference.",

  strategyDescription:
    "A driver cannot simply rely on aerodynamic drag reduction. Overtaking in 2026 also involves managing electrical energy. A driver may choose when and how to deploy Overtake Mode in an attempt to gain enough speed to pass a rival.",

  factTitle: "2026 F1 FACT",

  fact:
    "Overtake Mode replaces DRS as the main overtaking aid in the 2026 regulations. It provides additional electrical power to a driver who is within one second of the car ahead at the relevant detection point.",

  quiz: {
    question:
      "What replaced DRS as the main overtaking aid in Formula 1 from 2026?",

    options: [
      "Pit Lane Mode",
      "Overtake Mode",
      "Safety Car Mode",
      "Qualifying Mode",
    ],

    correctAnswer: "Overtake Mode",

    explanation:
      "From 2026, Overtake Mode provides additional electrical energy to help a following driver attack a car ahead. Active Aero separately controls the aerodynamic configuration of the car.",
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

  // =========================================================
// LESSON 5 — QUALIFYING
// =========================================================

{
  slug: "qualifying",

  title: "Qualifying",

  subtitle:
    "Learn how drivers fight for the best starting positions before the Grand Prix.",

  category: "Beginner",

  difficulty: "Beginner",

  readTime: "6 min",

  briefingTitle: "One lap can change everything.",

  briefingDescription:
    "Qualifying determines the starting order for the Grand Prix. Drivers push their cars to the limit to set the fastest possible lap, while teams balance tyre preparation, traffic and track position.",

  whyTitle: "Where you start matters.",

  whyDescription:
    "Starting near the front can make a huge difference because overtaking is not always easy in Formula 1. A strong qualifying performance can give a driver cleaner air, better track position and a better chance of fighting for the win.",

  intro:
    "Qualifying is the session used to determine the starting grid for the Grand Prix. Drivers compete to set the fastest lap, with the quickest driver taking pole position.",

  learningPoints: [
    "Understand the purpose of qualifying",
    "Learn what pole position means",
    "Understand how Q1, Q2 and Q3 work",
    "Learn why tyre preparation and track position matter",
  ],

  controlLabel: "THE QUALIFYING FORMAT",

  controlTitle: "Three sessions. One starting grid.",

  controlDescription:
    "Qualifying is divided into three sessions. Drivers must set competitive lap times to progress through the session. The slowest drivers are eliminated at the end of Q1 and Q2, while Q3 determines the top positions on the starting grid.",

  timeline: [
    {
      day: "Q1",

      label: "SESSION 01",

      events: [
        "All drivers take part",
        "Drivers try to set a competitive lap time",
        "The five slowest drivers are eliminated",
        "Eliminated drivers normally start from positions 16–20",
      ],
    },

    {
      day: "Q2",

      label: "SESSION 02",

      events: [
        "The remaining drivers continue",
        "Drivers fight for one of the top 10 positions",
        "The five slowest drivers are eliminated",
        "Eliminated drivers normally start from positions 11–15",
      ],
    },

    {
      day: "Q3",

      label: "SESSION 03",

      events: [
        "The final 10 drivers compete",
        "Drivers make their fastest qualifying attempts",
        "The fastest driver takes pole position",
        "The remaining drivers fill positions 2–10",
      ],
    },

    {
      day: "STARTING GRID",

      label: "FINAL ORDER",

      events: [
        "Qualifying results determine the starting order",
        "Drivers line up according to their qualifying positions",
        "Race penalties can sometimes change the final grid",
      ],
    },
  ],

  strategyLabel: "QUALIFYING STRATEGY",

  strategyTitle: "Finding the perfect lap",

  strategyDescription:
    "A qualifying lap is not simply about driving as fast as possible. Teams have to prepare the tyres, find clear track, manage traffic and choose the right moment to set a lap. Small mistakes can cost several grid positions.",

  factTitle: "QUALIFYING FACT",

  fact:
    "The driver who sets the fastest qualifying time starts from pole position, although penalties or other circumstances can sometimes change the final starting grid.",

  quiz: {
    question:
      "What does a driver achieve by setting the fastest qualifying time?",

    options: [
      "The fastest race lap",
      "Pole position",
      "Extra championship points",
      "A free pit stop",
    ],

    correctAnswer: "Pole position",

    explanation:
      "The driver with the fastest qualifying time normally starts the Grand Prix from pole position.",
  },

  nextLesson: "Starting Grid",

  nextLink: "/Learn/starting-grid",
},


// =========================================================
// LESSON 6 — STARTING GRID
// =========================================================

{
  slug: "starting-grid",

  title: "Starting Grid",

  subtitle:
    "Learn how drivers earn their starting positions and why the final grid can sometimes look different from qualifying.",

  category: "Beginner",

  difficulty: "Beginner",

  readTime: "6 min",

  briefingTitle: "Where you start matters.",

  briefingDescription:
    "Before the Grand Prix begins, every driver is assigned a position on the starting grid. Qualifying normally determines this order, but penalties and other sporting procedures can change the final grid.",

  whyTitle: "The first corner starts before the race.",

  whyDescription:
    "Starting near the front gives a driver a better chance of reaching the first corner ahead of their rivals. A driver who qualifies well can therefore gain an important strategic advantage before the race has even begun.",

  intro:
    "The starting grid is the order in which drivers begin the Grand Prix. In normal circumstances, qualifying determines the initial order. However, grid penalties and other sporting decisions can change where a driver actually starts.",

  learningPoints: [
    "Understand how qualifying determines the starting order",
    "Learn the difference between qualifying position and grid position",
    "Understand how grid penalties can move a driver backwards",
    "Learn why starting position matters",
    "Understand what happens when qualifying cannot take place",
  ],

  controlLabel: "THE STARTING ORDER",

  controlTitle: "From qualifying to the grid",

  controlDescription:
    "A driver's qualifying result provides the basis for their starting position. The final grid is then produced after applying any relevant penalties and sporting procedures.",

  timeline: [
    {
      day: "QUALIFYING",

      label: "STEP 01",

      events: [
        "Drivers compete to set their fastest qualifying times",
        "The qualifying classification establishes the initial order",
        "The fastest driver normally earns the first position",
      ],
    },

    {
      day: "PENALTIES",

      label: "STEP 02",

      events: [
        "A driver may receive a grid penalty",
        "The penalty can move the driver backwards from their qualifying position",
        "Other drivers can move forward to fill the available places",
      ],
    },

    {
      day: "FINAL GRID",

      label: "STEP 03",

      events: [
        "The sporting procedures are applied",
        "The final starting positions are established",
        "Drivers take their allocated places on the grid",
      ],
    },

    {
      day: "FORMATION LAP",

      label: "STEP 04",

      events: [
        "Drivers leave their grid positions for the formation lap",
        "They return to their allocated starting places",
        "The race-start procedure begins",
      ],
    },
  ],

  strategyLabel: "RACE START",

  strategyTitle: "Why the first few corners matter",

  strategyDescription:
    "A strong starting position can provide track position before the strategy battle even begins. Drivers must balance getting away cleanly with protecting their tyres, avoiding incidents and positioning the car well for the opening corners.",

  factTitle: "GRID FACT",

  fact:
    "Qualifying position and starting position are not always the same. A driver can qualify in one position but start the race further back if a grid penalty is applied.",

  quiz: {
    question:
      "What normally determines the starting order for a Formula 1 Grand Prix?",

    options: [
      "Championship points",
      "Qualifying classification",
      "Practice 1 results",
      "The previous race result",
    ],

    correctAnswer: "Qualifying classification",

    explanation:
      "The race grid is normally formed using the qualifying classification, with applicable penalties and sporting procedures then applied.",
  },

  nextLesson: "Overtaking",

  nextLink: "/Learn/overtaking",
},


// =========================================================
// LESSON 7 — OVERTAKING
// =========================================================

{
  slug: "overtaking",

  title: "Overtaking",

  subtitle:
    "Learn how drivers create, attempt and defend overtaking opportunities during a Formula 1 race.",

  category: "Beginner",

  difficulty: "Beginner",

  readTime: "7 min",

  briefingTitle: "Finding a way past.",

  briefingDescription:
    "Overtaking in Formula 1 is about much more than having a faster car. Drivers need to position their cars carefully, manage their tyres and energy, choose the right braking point and create an opportunity to pass their rival.",

  whyTitle: "Speed alone does not guarantee an overtake.",

  whyDescription:
    "A driver can be significantly faster but still struggle to pass if the car ahead is positioned well. Successful overtaking often depends on creating a speed advantage before the braking zone and making the right decision at exactly the right moment.",

  intro:
    "An overtake happens when one driver passes another during a race. Drivers can use slipstream, aerodynamic advantages, energy deployment and strategic positioning to get close to a rival before attempting a pass. The driver ahead can also defend by choosing their racing line and braking point carefully.",

  learningPoints: [
    "Understand what a slipstream is",
    "Learn how drivers use braking zones to overtake",
    "Understand how positioning affects an overtaking attempt",
    "Learn how drivers defend their position",
    "Understand why dirty air can make following another car difficult",
  ],

  controlLabel: "THE OVERTAKING BATTLE",

  controlTitle: "From the slipstream to the braking zone",

  controlDescription:
    "A successful overtake usually begins before the cars reach the corner. The following driver tries to gain enough speed to move alongside the car ahead before the braking zone, then positions the car safely and completes the pass.",

  timeline: [
    {
      day: "SLIPSTREAM",

      label: "STEP 01",

      events: [
        "The following car drives behind the car ahead",
        "The leading car creates an aerodynamic wake",
        "The following car can benefit from reduced aerodynamic resistance",
        "The speed advantage can help the following driver close the gap",
      ],
    },

    {
      day: "CLOSING THE GAP",

      label: "STEP 02",

      events: [
        "The following driver moves closer to the car ahead",
        "The driver chooses the right moment to move out of the wake",
        "The car needs enough speed to draw alongside the rival",
        "Energy and tyre performance can influence the attack",
      ],
    },

    {
      day: "BRAKING ZONE",

      label: "STEP 03",

      events: [
        "The attacking driver approaches the corner",
        "The driver brakes later while remaining within control",
        "The attacking car attempts to position itself alongside the rival",
        "The driver must leave enough room for the other car",
      ],
    },

    {
      day: "COMPLETING THE PASS",

      label: "STEP 04",

      events: [
        "The attacking driver gets ahead before or through the corner",
        "The driver positions the car for the next part of the circuit",
        "The driver must maintain control while defending the new position",
        "The overtake is complete when the cars establish their new order",
      ],
    },
  ],

  strategyLabel: "RACECRAFT",

  strategyTitle: "Attack or defend?",

  strategyDescription:
    "The driver behind wants to create an opportunity without making a mistake, while the driver ahead wants to make the car difficult to pass. Defending can involve choosing a defensive line, positioning the car carefully and protecting the inside of a corner while respecting the racing rules.",

  factTitle: "OVERTAKING FACT",

  fact:
    "A driver does not always need to complete an overtake immediately. Sometimes staying close to a rival and managing tyres, energy and positioning can create a better opportunity later in the lap or during the next few laps.",

  quiz: {
    question:
      "What is a slipstream?",

    options: [
      "A type of Formula 1 tyre",

      "The aerodynamic effect of following closely behind another car",

      "A penalty given after an unsafe overtake",

      "A special type of pit stop",
    ],

    correctAnswer:
      "The aerodynamic effect of following closely behind another car",

    explanation:
      "A car travelling behind another car can experience reduced aerodynamic resistance in its wake. This can help the following driver gain speed and close the gap before attempting an overtake.",
  },

  nextLesson: "Aerodynamics",

  nextLink: "/Learn/aerodynamics",
},

// =========================================================
// LESSON 10 — AERODYNAMICS
// =========================================================

{
  slug: "aerodynamics",

  title: "Aerodynamics",

  subtitle:
    "Understand how airflow, downforce and drag help an F1 car corner faster while affecting its speed on the straights.",

category: "Cars & Technology",
difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Making the air work for the car.",

  briefingDescription:
    "Formula 1 cars are designed around airflow. Engineers use aerodynamic surfaces and the shape of the car to control how air moves around and underneath it. The goal is to create enough downforce for cornering without producing too much drag on the straights.",

  whyTitle: "The invisible force behind F1.",

  whyDescription:
    "Aerodynamics affects almost everything an F1 car does at speed. More downforce can help a driver carry more speed through corners, but the additional aerodynamic resistance can reduce straight-line speed. Teams therefore have to find the right balance for every circuit.",

  intro:
    "Aerodynamics is the study of how air moves around an object. In Formula 1, engineers use aerodynamic design to generate downforce and manage drag. The front wing, rear wing, floor and other parts of the car all influence the airflow around the vehicle.",

  learningPoints: [
    "Understand what downforce means",
    "Learn what aerodynamic drag is",
    "Understand how the front and rear wings influence the car",
    "Learn how the floor contributes to aerodynamic performance",
    "Understand why teams balance downforce and drag",
    "Learn why following another car can become more difficult",
  ],

  controlLabel: "THE AERODYNAMIC BALANCE",

  controlTitle: "Downforce vs drag",

  controlDescription:
    "An F1 car needs aerodynamic grip to corner quickly, but generating aerodynamic performance also creates resistance to forward motion. Engineers therefore have to balance downforce and drag depending on the characteristics of the circuit.",

  timeline: [
    {
      day: "DOWNFORCE",

      label: "CONCEPT 01",

      events: [
        "Aerodynamic forces push the car toward the track",
        "Greater downforce can increase the grip available at speed",
        "More aerodynamic grip can help the driver carry more speed through corners",
      ],
    },

    {
      day: "DRAG",

      label: "CONCEPT 02",

      events: [
        "Aerodynamic drag acts against the car's forward motion",
        "Higher drag can reduce straight-line speed",
        "Teams try to reduce unnecessary drag while maintaining enough downforce",
      ],
    },

    {
      day: "WINGS",

      label: "CONCEPT 03",

      events: [
        "The front wing helps manage airflow around the front of the car",
        "The rear aerodynamic system contributes to downforce and airflow management",
        "Wing settings can be adjusted to suit different circuit characteristics",
      ],
    },

    {
      day: "THE FLOOR",

      label: "CONCEPT 04",

      events: [
        "Airflow underneath the car contributes significantly to its aerodynamic performance",
        "The floor and ground-effect tunnels help generate downforce",
        "The relationship between the car and the track surface is extremely important",
      ],
    },
  ],

  strategyLabel: "AERODYNAMIC STRATEGY",

  strategyTitle: "Finding the right setup",

  strategyDescription:
    "A circuit with long straights may reward a lower-drag setup, while a circuit dominated by corners may reward greater aerodynamic grip. Engineers therefore have to decide how much aerodynamic performance the car needs for each track.",

  factTitle: "AERO FACT",

  fact:
    "F1 cars can generate enormous aerodynamic forces at speed. This allows them to produce levels of cornering performance that would not be possible from the tyres alone.",

  quiz: {
    question:
      "What is one major benefit of downforce?",

    options: [
      "It increases the amount of aerodynamic grip available",

      "It makes the fuel tank larger",

      "It reduces the number of tyres needed",

      "It automatically increases engine power",
    ],

    correctAnswer:
      "It increases the amount of aerodynamic grip available",

    explanation:
      "Downforce pushes the car toward the track and can increase the aerodynamic grip available at speed, helping the driver carry more speed through corners.",
  },

  nextLesson: "F1 Car Anatomy",

  nextLink: "/Learn/f1-car-anatomy",
},

// =========================================================
// LESSON — F1 CAR ANATOMY
// SECTION 02 — CARS & TECHNOLOGY
// =========================================================

{
  slug: "f1-car-anatomy",

  title: "F1 Car Anatomy",

  subtitle:
    "Learn what the major parts of a Formula 1 car do and how they work together to produce speed, grip and control.",

  category: "Cars & Technology",

  difficulty: "Intermediate",

  readTime: "8 min",

  // ---------------------------------------------------------
  // RACE BRIEFING
  // ---------------------------------------------------------

  briefingTitle: "Every part has a purpose.",

  briefingDescription:
    "A Formula 1 car is made up of hundreds of components working together. The wings manage airflow, the floor helps generate downforce, the tyres provide grip and the power unit provides the energy that moves the car.",

  // ---------------------------------------------------------
  // WHY IT MATTERS
  // ---------------------------------------------------------

  whyTitle: "The car is a system.",

  whyDescription:
    "Understanding the major parts of an F1 car makes it much easier to understand what teams are talking about during a race weekend. When an engineer mentions the floor, front wing, diffuser or suspension, you will know what part of the car they mean and why it matters.",

  // ---------------------------------------------------------
  // INTRO
  // ---------------------------------------------------------

  intro:
    "An F1 car is much more than an engine with four tyres. It combines aerodynamics, mechanical systems, electronics and a hybrid power unit. Every component has to work with the others to give the driver the best possible balance of speed, grip and efficiency.",

  // ---------------------------------------------------------
  // LEARNING POINTS
  // ---------------------------------------------------------

  learningPoints: [
    "Identify the major parts of a Formula 1 car",

    "Understand what the front and rear wings do",

    "Learn how the floor and diffuser contribute to downforce",

    "Understand the role of the suspension and tyres",

    "Learn how the power unit fits into the overall car",
  ],

  // ---------------------------------------------------------
  // CAR ANATOMY
  // ---------------------------------------------------------

  controlLabel: "THE F1 MACHINE",

  controlTitle: "Know the parts of the car",

  controlDescription:
    "Every major component contributes to the car's performance. Some parts generate aerodynamic performance, some provide mechanical grip and control, while others produce or manage the energy required to move the car.",

  timeline: [

    {
      day: "FRONT WING",

      label: "COMPONENT 01",

      events: [
        "Controls and directs airflow around the front of the car",

        "Contributes to front aerodynamic performance",

        "Influences how the car responds when entering corners",
      ],
    },

    {
      day: "FLOOR",

      label: "COMPONENT 02",

      events: [
        "Manages airflow underneath the car",

        "Works with the rest of the aerodynamic package",

        "Plays an important role in generating downforce",
      ],
    },

    {
      day: "SIDE PODS",

      label: "COMPONENT 03",

      events: [
        "House important cooling systems",

        "Help manage airflow around the car",

        "Their shape is heavily influenced by aerodynamic requirements",
      ],
    },

    {
      day: "DIFFUSER",

      label: "COMPONENT 04",

      events: [
        "Sits at the rear of the floor",

        "Helps control and expand airflow leaving underneath the car",

        "Works with the floor to contribute to aerodynamic performance",
      ],
    },

    {
      day: "REAR WING",

      label: "COMPONENT 05",

      events: [
        "Controls airflow at the rear of the car",

        "Provides aerodynamic stability",

        "Its configuration affects the balance between downforce and drag",
      ],
    },

    {
      day: "SUSPENSION",

      label: "COMPONENT 06",

      events: [
        "Connects the wheels to the car",

        "Helps keep the tyres in contact with the track",

        "Influences mechanical grip, stability and how the car responds to bumps and kerbs",
      ],
    },

    {
      day: "TYRES",

      label: "COMPONENT 07",

      events: [
        "Provide the contact between the car and the circuit",

        "Generate mechanical grip",

        "Their temperature, wear and condition strongly affect performance",
      ],
    },

    {
      day: "POWER UNIT",

      label: "COMPONENT 08",

      events: [
        "Provides the energy needed to propel the car",

        "Combines combustion and electrical systems",

        "Works together with the car's energy management systems",
      ],
    },

  ],

  // ---------------------------------------------------------
  // ENGINEERING
  // ---------------------------------------------------------

  strategyLabel: "ENGINEERING BALANCE",

  strategyTitle: "More speed is not always more performance.",

  strategyDescription:
    "Engineers have to find the right balance between aerodynamic downforce, drag, mechanical grip, tyre performance, cooling, weight and power. Increasing performance in one area can sometimes create a disadvantage somewhere else.",

  // ---------------------------------------------------------
  // FACT
  // ---------------------------------------------------------

  factTitle: "F1 CAR FACT",

  fact:
    "The floor, wings and diffuser are not simply decorative bodywork. They are carefully designed aerodynamic surfaces that influence how much grip the car can generate and how efficiently it moves through the air.",

  // ---------------------------------------------------------
  // QUIZ
  // ---------------------------------------------------------

  quiz: {

    question:
      "Which part of an F1 car plays a major role in managing airflow underneath the car?",

    options: [
      "Floor",

      "Steering wheel",

      "Rear tyre",

      "Brake pedal",
    ],

    correctAnswer: "Floor",

    explanation:
      "The floor manages airflow underneath the car and works with the diffuser and other aerodynamic surfaces to generate aerodynamic performance.",

  },

  // ---------------------------------------------------------
  // NEXT LESSON
  // ---------------------------------------------------------

  nextLesson: "The 2026 Power Unit",

  nextLink: "/Learn/power-unit",
},

// =========================================================
// LESSON 3 — POWER UNIT & ENERGY
// =========================================================

{
  slug: "power-unit-energy",

  title: "Power Unit & Energy",

  subtitle:
    "Understand how the 2026 Formula 1 power unit combines combustion, electrical energy and energy recovery to power the car.",

  category: "Cars & Technology",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "More than just an engine.",

  briefingDescription:
    "A modern Formula 1 car does not rely on its internal combustion engine alone. The 2026 power unit combines a 1.6-litre turbocharged V6 engine with an electrical system that can recover, store and deploy energy.",

  whyTitle: "Power is now an energy game.",

  whyDescription:
    "The 2026 regulations place much greater emphasis on electrical power. Drivers and engineers must manage when energy is harvested, stored and deployed, making energy management an important part of race strategy.",

  intro:
    "The Formula 1 power unit is a hybrid system made up of several components working together. In 2026, the electrical side of the system becomes much more powerful, while the MGU-H is removed and the MGU-K takes on a much larger role.",

  learningPoints: [
    "Understand what a Formula 1 power unit is",

    "Learn the difference between the ICE and electrical systems",

    "Understand what the MGU-K does",

    "Learn how the Energy Store works",

    "Understand how energy is recovered during a lap",

    "Learn why energy management matters during a race",
  ],

  controlLabel: "THE 2026 POWER UNIT",

  controlTitle: "Where the power comes from",

  controlDescription:
    "The 2026 power unit combines combustion and electrical energy. The internal combustion engine remains a 1.6-litre turbocharged V6, while the electrical system contributes a much larger share of the car's power than in the previous generation.",

  timeline: [
    {
      day: "ICE",

      label: "COMPONENT 01",

      events: [
        "ICE stands for Internal Combustion Engine",

        "The 2026 power unit retains a 1.6-litre turbocharged V6",

        "The engine converts fuel energy into mechanical power",
      ],
    },

    {
      day: "MGU-K",

      label: "COMPONENT 02",

      events: [
        "MGU-K stands for Motor Generator Unit - Kinetic",

        "It can recover energy from the car",

        "It can also deliver electrical power to the drivetrain",

        "Its maximum electrical output rises to 350kW in 2026",
      ],
    },

    {
      day: "ENERGY STORE",

      label: "COMPONENT 03",

      events: [
        "The Energy Store is the battery component of the power unit",

        "Recovered electrical energy can be stored for later use",

        "Stored energy can be deployed through the electrical system",
      ],
    },

    {
      day: "ENERGY RECOVERY",

      label: "COMPONENT 04",

      events: [
        "Energy can be recovered during braking",

        "The system can also harvest energy during other phases of a lap",

        "Recovered energy can be stored and used later",

        "Managing this energy becomes part of race strategy",
      ],
    },
  ],

  strategyLabel: "ENERGY MANAGEMENT",

  strategyTitle: "Save it. Recover it. Deploy it.",

  strategyDescription:
    "Drivers and teams have to think about energy throughout a lap. Electrical energy can be recovered and stored before being deployed when extra performance is needed. In 2026, this becomes especially important because the electrical contribution to the power unit is much larger.",

  factTitle: "POWER UNIT FACT",

  fact:
    "The 2026 MGU-K can deliver up to 350kW of electrical power, compared with 120kW from the previous generation. The MGU-H has also been removed from the power unit.",

  quiz: {
    question:
      "What is the main role of the MGU-K in a Formula 1 power unit?",

    options: [
      "Control the rear wing",

      "Recover and deploy electrical energy",

      "Change the tyre compound",

      "Control the steering wheel",
    ],

    correctAnswer:
      "Recover and deploy electrical energy",

    explanation:
      "The MGU-K, or Motor Generator Unit - Kinetic, can recover energy and later deploy electrical power to the drivetrain. In the 2026 regulations it becomes a much more powerful part of the hybrid system.",
  },

  nextLesson: "Suspension & Brakes",

  nextLink: "/Learn/suspension-brakes",
},

// =========================================================
// LESSON 4 — SUSPENSION & BRAKES
// =========================================================

{
  slug: "suspension-brakes",

  title: "Suspension & Brakes",

  subtitle:
    "Learn how an F1 car stays stable through corners and how its braking system brings the car down from extreme speeds.",

  category: "Cars & Technology",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Control the car. Control the lap.",

  briefingDescription:
    "An F1 car needs to remain stable while braking, cornering and accelerating. The suspension keeps the tyres connected to the track, while the braking system allows the driver to shed huge amounts of speed before a corner.",

  whyTitle: "Grip means nothing without control.",

  whyDescription:
    "A Formula 1 car can generate enormous aerodynamic and mechanical performance, but the driver still needs to control it. Suspension setup affects how the tyres interact with the circuit, while braking performance determines how effectively a driver can approach and enter each corner.",

  intro:
    "The suspension and braking systems work together to give an F1 car stability, control and stopping performance. Engineers carefully tune the suspension to keep the tyres working effectively while the braking system converts the car's kinetic energy into heat and, through the hybrid system, can also allow energy recovery.",

  learningPoints: [
    "Understand the purpose of an F1 suspension system",

    "Learn how suspension keeps the tyres connected to the track",

    "Understand how braking changes the balance of the car",

    "Learn what brake discs, pads and calipers do",

    "Understand why braking produces extreme heat",

    "Learn how braking can contribute to energy recovery",
  ],

  controlLabel: "CAR CONTROL",

  controlTitle: "Keeping the car planted",

  controlDescription:
    "Suspension controls how the wheels and tyres respond to bumps, kerbs, braking and cornering forces. The braking system then allows the driver to control the car's speed as they approach each corner.",

  timeline: [
    {
      day: "SUSPENSION",

      label: "SYSTEM 01",

      events: [
        "Suspension connects the wheels to the car",

        "It allows the wheels to respond to changes in the track surface",

        "The system helps maintain consistent tyre contact with the circuit",
      ],
    },

    {
      day: "CORNERING",

      label: "SYSTEM 02",

      events: [
        "The car experiences large lateral forces through a corner",

        "The suspension helps control the movement of the car",

        "Keeping the tyres in the right operating window is essential for grip",
      ],
    },

    {
      day: "HEAVY BRAKING",

      label: "SYSTEM 03",

      events: [
        "The driver applies the brakes at high speed",

        "The car's weight transfers toward the front",

        "The suspension helps manage the change in vehicle balance",

        "The driver must keep the car stable while reducing speed",
      ],
    },

    {
      day: "BRAKE SYSTEM",

      label: "SYSTEM 04",

      events: [
        "Brake pads press against rotating brake discs",

        "Friction slows the wheels",

        "The car's kinetic energy is converted largely into heat",

        "Brake components must withstand extremely high temperatures",
      ],
    },

    {
      day: "ENERGY RECOVERY",

      label: "SYSTEM 05",

      events: [
        "The hybrid system can recover energy during braking",

        "The MGU-K converts part of the available kinetic energy into electrical energy",

        "Recovered energy can be stored for later deployment",
      ],
    },

    {
      day: "CORNER EXIT",

      label: "SYSTEM 06",

      events: [
        "The driver releases the brakes",

        "The car transitions from braking to cornering",

        "The driver begins applying throttle as the car approaches the corner exit",

        "Suspension and tyres must maintain grip as the car accelerates",
      ],
    },
  ],

  strategyLabel: "SETUP & PERFORMANCE",

  strategyTitle: "Finding the right balance.",

  strategyDescription:
    "Suspension setup is always a compromise. Engineers want the car to remain stable and predictable while also allowing the tyres to generate maximum grip. A setup that works well on smooth corners may behave differently over kerbs or bumps, so teams constantly balance performance against circuit characteristics.",

  factTitle: "SUSPENSION & BRAKES FACT",

  fact:
    "The FIA's 2026 Technical Regulations contain dedicated requirements covering suspension, steering and the braking system. The regulations also define requirements for brake discs, pads, brake circuits and brake-pressure control.",

  quiz: {
    question:
      "What is one of the main purposes of an F1 suspension system?",

    options: [
      "Increase the engine's fuel flow",

      "Keep the tyres working effectively against the track",

      "Change the gearbox ratio automatically",

      "Increase the size of the rear wing",
    ],

    correctAnswer:
      "Keep the tyres working effectively against the track",

    explanation:
      "The suspension controls how the wheels and tyres respond to the track, braking, cornering and acceleration. Keeping the tyres in a useful position and operating window is essential for grip and car control.",
  },

  nextLesson: "Gearbox & Transmission",

  nextLink: "/Learn/gearbox-transmission",
},

// =========================================================
// LESSON 5 — GEARBOX & TRANSMISSION
// =========================================================

{
  slug: "gearbox-transmission",

  title: "Gearbox & Transmission",

  subtitle:
    "Learn how an F1 car transfers power from the power unit to the wheels and why gear selection matters so much on a lap.",

  category: "Cars & Technology",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Turning power into speed.",

  briefingDescription:
    "The power unit produces the energy that drives the car, but that power still has to reach the wheels. The transmission system transfers torque through the gearbox, driveline and differential so the driver can accelerate, corner and reach high speeds.",

  whyTitle: "Power is only useful when you can control it.",

  whyDescription:
    "Different parts of a circuit demand different amounts of acceleration and speed. The gearbox allows the car to use its available power effectively, while the transmission and differential help deliver that torque to the driven wheels.",

  intro:
    "The gearbox and transmission form the link between the power unit and the wheels. During a lap, the car moves through different gears as its speed changes. The transmission must handle enormous forces while allowing the driver to accelerate efficiently out of corners and reach maximum speed on straights.",

  learningPoints: [
    "Understand what the gearbox does",

    "Learn how gears affect acceleration and speed",

    "Understand how torque is transferred to the wheels",

    "Learn what the differential does",

    "Understand why gear selection matters around a circuit",

    "Learn how modern F1 transmission systems work with the power unit",
  ],

  controlLabel: "POWER DELIVERY",

  controlTitle: "From the power unit to the tyres",

  controlDescription:
    "The transmission system takes torque produced by the power unit and transfers it through the gearbox and driveline to the drive shafts and wheels. Every part of this process has to work efficiently because even small losses can affect performance.",

  timeline: [
    {
      day: "POWER UNIT",

      label: "STEP 01",

      events: [
        "The power unit produces torque",

        "The output shaft sends that torque toward the transmission system",

        "The available power must be delivered efficiently to the wheels",
      ],
    },

    {
      day: "GEARBOX",

      label: "STEP 02",

      events: [
        "The gearbox contains the gears used to select different ratios",

        "Lower gears help provide strong acceleration",

        "Higher gears allow the car to continue accelerating toward higher speeds",
      ],
    },

    {
      day: "GEAR CHANGES",

      label: "STEP 03",

      events: [
        "The driver selects different gears as the car accelerates",

        "The transmission changes the relationship between engine speed and wheel speed",

        "Fast and precise gear changes help minimise interruptions to acceleration",
      ],
    },

    {
      day: "DIFFERENTIAL",

      label: "STEP 04",

      events: [
        "The differential is part of the driveline",

        "It allows the driven wheels to rotate at different speeds when the car corners",

        "This helps the car negotiate corners smoothly",
      ],
    },

    {
      day: "DRIVE SHAFTS",

      label: "STEP 05",

      events: [
        "Torque is transferred through the driveline",

        "Drive shafts carry the drive torque toward the wheels",

        "The tyres then convert that torque into forward motion",
      ],
    },

    {
      day: "CORNER EXIT",

      label: "STEP 06",

      events: [
        "The driver applies throttle while exiting the corner",

        "The selected gear affects how the car responds",

        "The transmission delivers torque to the driven wheels",

        "The car accelerates toward the next section of the circuit",
      ],
    },
  ],

  strategyLabel: "RACE ENGINEERING",

  strategyTitle: "Choosing the right gear.",

  strategyDescription:
    "Gear selection is about more than simply reaching the highest possible speed. Engineers and drivers consider acceleration, traction, corner characteristics and energy management. The correct gear can help a driver maximise acceleration while avoiding unnecessary wheelspin or instability.",

  factTitle: "TRANSMISSION FACT",

  fact:
    "The FIA's 2026 Technical Regulations define the gearbox as part of the powertrain that transfers torque from the power-unit output shaft to the drive shafts. The transmission system also includes driveline components such as gears, shafts and the differential.",

  quiz: {
    question:
      "What is one of the main jobs of an F1 gearbox?",

    options: [
      "Cool the tyres",

      "Transfer and control torque through different gear ratios",

      "Generate aerodynamic downforce",

      "Control the rear wing",
    ],

    correctAnswer:
      "Transfer and control torque through different gear ratios",

    explanation:
      "The gearbox uses different gear ratios to help the car use the power produced by the power unit effectively as its speed changes around the circuit.",
  },

  nextLesson: "Cooling & Thermal Management",

  nextLink: "/Learn/cooling-thermal-management",
},

// =========================================================
// LESSON 6 — COOLING & THERMAL MANAGEMENT
// =========================================================

{
  slug: "cooling-thermal-management",

  title: "Cooling & Thermal Management",

  subtitle:
    "Learn how an F1 car manages extreme heat while keeping its power unit, brakes, tyres and other systems operating within their performance limits.",

  category: "Cars & Technology",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "When performance creates heat.",

  briefingDescription:
    "An F1 car produces enormous amounts of heat. The power unit, brakes and other components all operate under extreme conditions, so engineers must carefully control temperatures throughout a race.",

  whyTitle: "Too hot can cost you performance.",

  whyDescription:
    "Temperature has a major effect on how an F1 car performs. If components become too hot, performance and reliability can suffer. Teams therefore have to find the right balance between cooling the car and keeping it aerodynamically efficient.",

  intro:
    "Cooling and thermal management are essential parts of Formula 1 engineering. Air is directed through carefully designed openings and channels to remove heat from important components. Engineers must achieve this without creating unnecessary aerodynamic drag.",

  learningPoints: [
    "Understand why temperature management is important in F1",

    "Learn how airflow helps cool important components",

    "Understand why the power unit generates significant heat",

    "Learn why brake temperatures must be carefully controlled",

    "Understand the relationship between cooling and aerodynamics",

    "Learn why teams adjust cooling requirements depending on the circuit",
  ],

  controlLabel: "THERMAL MANAGEMENT",

  controlTitle: "Keeping an F1 car within its limits",

  controlDescription:
    "Cooling systems move heat away from components that operate at very high temperatures. Engineers must ensure the car receives enough cooling without compromising aerodynamic performance.",

  timeline: [
    {
      day: "HEAT GENERATION",

      label: "STEP 01",

      events: [
        "The power unit generates heat while producing power",

        "Braking converts large amounts of kinetic energy into heat",

        "Other systems and components also produce or absorb heat",
      ],
    },

    {
      day: "AIRFLOW",

      label: "STEP 02",

      events: [
        "Air enters carefully designed cooling openings",

        "The airflow is directed toward components that require cooling",

        "Engineers control the amount and direction of cooling airflow",
      ],
    },

    {
      day: "POWER UNIT",

      label: "STEP 03",

      events: [
        "The power unit operates under extreme thermal conditions",

        "Cooling systems help keep temperatures within required operating ranges",

        "Temperature management is important for both performance and reliability",
      ],
    },

    {
      day: "BRAKES",

      label: "STEP 04",

      events: [
        "Heavy braking produces substantial heat",

        "Brake components must operate within their intended temperature range",

        "Cooling helps prevent excessive temperatures during demanding sections of a race",
      ],
    },

    {
      day: "AERODYNAMIC TRADE-OFF",

      label: "STEP 05",

      events: [
        "Larger cooling openings can allow more airflow through the car",

        "Additional openings can affect aerodynamic performance",

        "Engineers must balance cooling requirements against aerodynamic efficiency",
      ],
    },

    {
      day: "RACE CONDITIONS",

      label: "STEP 06",

      events: [
        "Different circuits place different thermal demands on the car",

        "Hot weather can increase cooling requirements",

        "Traffic can also affect the airflow reaching the car",

        "Teams monitor temperatures throughout the race and adjust their approach when possible",
      ],
    },
  ],

  strategyLabel: "ENGINEERING TRADE-OFF",

  strategyTitle: "Cool enough. Fast enough.",

  strategyDescription:
    "Cooling is a constant compromise. More airflow can help remove heat, but the openings and ducts needed to achieve that can affect the car's aerodynamic efficiency. Engineers therefore try to provide exactly the cooling the car needs without creating unnecessary aerodynamic penalties.",

  factTitle: "THERMAL MANAGEMENT FACT",

  fact:
    "Cooling design is closely connected to aerodynamics. The airflow needed to remove heat has to be managed carefully so that cooling the car does not unnecessarily compromise its aerodynamic performance.",

  quiz: {
    question:
      "Why can't an F1 team simply maximise the amount of cooling airflow through the car?",

    options: [
      "Because cooling has no effect on performance",

      "Because additional cooling airflow can affect aerodynamic efficiency",

      "Because the tyres prevent airflow",

      "Because the gearbox does not produce heat",
    ],

    correctAnswer:
      "Because additional cooling airflow can affect aerodynamic efficiency",

    explanation:
      "Cooling requires airflow through the car, but the openings and ducts used to manage that airflow can influence aerodynamic performance. Engineers therefore have to find the right balance.",
  },

  nextLesson: "Steering Wheel & Driver Controls",

  nextLink: "/Learn/steering-wheel-driver-controls",
},

// =========================================================
// LESSON 7 — STEERING WHEEL & DRIVER CONTROLS
// =========================================================

{
  slug: "steering-wheel-driver-controls",

  title: "Steering Wheel & Driver Controls",

  subtitle:
    "Discover how F1 drivers use the steering wheel to control the car, manage energy and communicate with the systems around them.",

  category: "Cars & Technology",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "The cockpit is a control centre.",

  briefingDescription:
    "An F1 steering wheel is far more than a device for turning the car. It gives the driver access to numerous controls and information while they are travelling at extreme speeds.",

  whyTitle: "Every input matters.",

  whyDescription:
    "An F1 driver has to make adjustments while braking, cornering and accelerating. Being able to change settings quickly without taking their hands away from the steering wheel allows the driver to manage the car while staying focused on the circuit.",

  intro:
    "The steering wheel is one of the most important interfaces between the driver and the car. Depending on the car and regulations, drivers can use controls on the wheel to manage settings, communicate with the team, monitor information and influence how the car behaves.",

  learningPoints: [
    "Understand why an F1 steering wheel contains so many controls",

    "Learn how drivers use rotary switches and buttons",

    "Understand how drivers manage car settings during a race",

    "Learn how the driver communicates with the team",

    "Understand the importance of the display and driver information",

    "Learn why drivers must make adjustments while racing at high speed",
  ],

  controlLabel: "THE DRIVER INTERFACE",

  controlTitle: "Everything within reach",

  controlDescription:
    "The steering wheel places important controls directly in front of the driver. This allows the driver to make adjustments while keeping their hands positioned to control the car.",

  timeline: [
    {
      day: "STEERING",

      label: "CONTROL 01",

      events: [
        "The driver uses the steering wheel to control the direction of the car",

        "Steering inputs determine how the front wheels respond",

        "Small adjustments can make a significant difference at high speed",
      ],
    },

    {
      day: "GEAR SELECTION",

      label: "CONTROL 02",

      events: [
        "The driver uses paddles behind the steering wheel to change gears",

        "Upshifts and downshifts are made throughout a lap",

        "Gear selection affects acceleration and engine operating conditions",
      ],
    },

    {
      day: "CAR SETTINGS",

      label: "CONTROL 03",

      events: [
        "Rotary switches and buttons can be used to adjust available car settings",

        "Drivers may change settings depending on the phase of the lap",

        "Different settings can be useful during braking, cornering or acceleration",
      ],
    },

    {
      day: "ENERGY MANAGEMENT",

      label: "CONTROL 04",

      events: [
        "Drivers can interact with systems related to electrical energy management",

        "Energy deployment can be important during overtaking and defending",

        "Drivers must balance immediate performance with energy available later in the lap or race",
      ],
    },

    {
      day: "RADIO",

      label: "CONTROL 05",

      events: [
        "The driver can communicate with the race engineer",

        "Radio communication allows the team to provide information and instructions",

        "Drivers can also report problems with the car or changing track conditions",
      ],
    },

    {
      day: "DISPLAY",

      label: "CONTROL 06",

      events: [
        "The steering wheel display provides important information",

        "The driver can monitor information such as speed, gear and other car data",

        "This information helps the driver make decisions while driving",
      ],
    },
  ],

  strategyLabel: "DRIVER WORKLOAD",

  strategyTitle: "Think fast. Adjust faster.",

  strategyDescription:
    "An F1 driver is constantly processing information. They have to control the car, watch their mirrors and displays, communicate with the team and make adjustments while travelling at very high speeds. The steering wheel is designed to make many of those tasks accessible without requiring the driver to look away from the circuit for long.",

  factTitle: "STEERING WHEEL FACT",

  fact:
    "Modern F1 steering wheels combine steering controls, gear-shift paddles, switches, buttons and a display into one compact driver interface.",

  quiz: {
    question:
      "Why are so many controls placed directly on an F1 steering wheel?",

    options: [
      "To make the steering wheel look more complicated",

      "To allow the driver to adjust important systems while controlling the car",

      "To increase the engine's power",

      "To replace the car's suspension",
    ],

    correctAnswer:
      "To allow the driver to adjust important systems while controlling the car",

    explanation:
      "F1 drivers need to make adjustments while racing. Placing important controls on the steering wheel lets them manage available car systems without taking their hands away from the main driving interface.",
  },

  nextLesson: "Race Strategy",

  nextLink: "/Learn/race-strategy",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 01 — RACE STRATEGY
// =========================================================

{
  slug: "race-strategy",

  title: "Race Strategy",

  subtitle:
    "Learn how F1 teams turn tyre choices, pit stops, pace and track position into a plan for winning a race.",

  category: "Race Strategy & Tactics",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Winning is about more than being fast.",

  briefingDescription:
    "A Formula 1 race is a constantly changing strategic battle. Teams have to decide when to pit, which tyres to use, how aggressively to drive and how to respond to their rivals.",

  whyTitle: "The fastest car does not always win.",

  whyDescription:
    "A driver can have excellent pace and still lose a race because of a poorly timed pit stop, traffic, tyre degradation, weather or a Safety Car. Strategy is about making the best decisions with the information available.",

  intro:
    "Race strategy is the plan a team creates to maximise a driver's finishing position. It combines tyre performance, pit stops, fuel and energy management, track position, weather, traffic and the behaviour of rival teams.",

  learningPoints: [
    "Understand what race strategy means",

    "Learn why teams create different strategic plans",

    "Understand how tyre life affects race decisions",

    "Learn why track position is so important",

    "Understand how teams react when a race does not go according to plan",

    "Learn why strategy can change during a Grand Prix",
  ],

  controlLabel: "THE STRATEGY BATTLE",

  controlTitle: "Building a race plan",

  controlDescription:
    "Before and during a race, teams use available information to decide how they want to approach the Grand Prix. The plan can change whenever circumstances on track change.",

  timeline: [
    {
      day: "STARTING PLAN",

      label: "STEP 01",

      events: [
        "Teams consider the starting position",

        "Engineers assess available tyre compounds",

        "The team develops an initial strategy for the race",

        "Weather and track conditions are considered",
      ],
    },

    {
      day: "TYRE MANAGEMENT",

      label: "STEP 02",

      events: [
        "The team monitors tyre performance throughout a stint",

        "Engineers watch tyre degradation and lap times",

        "The driver may be asked to manage their pace or tyres",

        "The team compares the driver's performance with rival cars",
      ],
    },

    {
      day: "PIT WINDOW",

      label: "STEP 03",

      events: [
        "The team identifies a suitable window for a pit stop",

        "Traffic and rival strategies are considered",

        "The team decides when the potential performance gain justifies the time lost in the pit lane",
      ],
    },

    {
      day: "RESPONDING TO RIVALS",

      label: "STEP 04",

      events: [
        "A rival may pit earlier than expected",

        "The team must decide whether to react or continue its own strategy",

        "Track position, tyre performance and traffic influence the decision",
      ],
    },

    {
      day: "RACE INTERRUPTION",

      label: "STEP 05",

      events: [
        "A Safety Car or Virtual Safety Car can change the strategic situation",

        "The time lost during a pit stop can become smaller under neutralised conditions",

        "Teams may change their plans based on the new race situation",
      ],
    },

    {
      day: "FINAL STINT",

      label: "STEP 06",

      events: [
        "Teams assess the remaining race distance",

        "Drivers balance pace, tyre life and energy",

        "The team decides whether to attack, defend or manage the gap",

        "The final objective is to maximise finishing position",
      ],
    },
  ],

  strategyLabel: "THE BIG DECISION",

  strategyTitle: "Track position vs pace",

  strategyDescription:
    "One of the most important strategic decisions is whether to prioritise track position or tyre performance. A driver on fresh tyres may be faster, but if they are stuck behind another car, that extra pace may not translate into an overtake.",

  factTitle: "STRATEGY FACT",

  fact:
    "Race strategy is not a fixed plan. Teams continuously update their calculations as tyre performance, traffic, weather, Safety Cars and rival strategies change.",

  quiz: {
    question:
      "Why might an F1 team change its race strategy during a Grand Prix?",

    options: [
      "Because the driver chooses a random strategy",

      "Because conditions and the behaviour of the race can change",

      "Because qualifying results disappear",

      "Because championship points change during every lap",
    ],

    correctAnswer:
      "Because conditions and the behaviour of the race can change",

    explanation:
      "Teams constantly react to tyre performance, traffic, weather, rival strategies, Safety Cars and other developments. The original strategy can therefore change during the race.",
  },

  nextLesson: "Undercut & Overcut",

  nextLink: "/Learn/undercut-overcut",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 02 — UNDERCUT & OVERCUT
// =========================================================

{
  slug: "undercut-overcut",

  title: "Undercut & Overcut",

  subtitle:
    "Learn how the timing of a pit stop can help a driver gain track position without making a direct overtake.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Sometimes the best overtake happens in the pits.",

  briefingDescription:
    "A driver does not always need to pass a rival on track to gain a position. By choosing the right moment to pit, a team can use fresh tyres and faster lap times to move ahead of a competitor.",

  whyTitle: "Timing can beat track position.",

  whyDescription:
    "The undercut and overcut are two strategic approaches to pit-stop timing. Both attempt to gain track position, but they do it in very different ways.",

  intro:
    "An undercut happens when a driver pits before a rival and uses fresh tyres to set faster laps while the rival remains on older tyres. An overcut takes the opposite approach, with a driver staying out longer and trying to benefit from track conditions, tyre performance or clear air before making their stop.",

  learningPoints: [
    "Understand what an undercut is",

    "Understand what an overcut is",

    "Learn why fresh tyres can create an advantage",

    "Understand how traffic can affect an undercut",

    "Learn why an overcut can work when a driver has strong pace on older tyres",

    "Understand why neither strategy is guaranteed to work",
  ],

  controlLabel: "THE STRATEGY BATTLE",

  controlTitle: "Undercut vs Overcut",

  controlDescription:
    "Teams compare tyre performance, traffic and the expected pace of their rivals before deciding whether to pit early or stay out longer.",

  timeline: [
    {
      day: "THE RIVAL",

      label: "STARTING POINT",

      events: [
        "Two drivers are running close together",

        "Both drivers are approaching their expected pit window",

        "The teams begin comparing possible strategies",
      ],
    },

    {
      day: "UNDERCUT",

      label: "OPTION 01",

      events: [
        "The following driver pits before the rival",

        "Fresh tyres provide additional performance",

        "The driver attempts to set faster laps while the rival remains on older tyres",

        "The strategy aims to gain track position when the rival eventually pits",
      ],
    },

    {
      day: "OVERCUT",

      label: "OPTION 02",

      events: [
        "The driver stays on track while the rival pits",

        "The driver tries to maintain strong pace on the current tyres",

        "Clear air or favourable conditions can increase the benefit of staying out",

        "The driver pits later and attempts to return to the track ahead",
      ],
    },

    {
      day: "THE RESULT",

      label: "FINAL OUTCOME",

      events: [
        "Traffic can determine whether the strategy succeeds",

        "Tyre warm-up can affect the advantage of a fresh set",

        "The rival may respond immediately to the strategy",

        "The driver who gains the best track position can come out ahead",
      ],
    },
  ],

  strategyLabel: "STRATEGY DECISION",

  strategyTitle: "Fresh tyres vs clean air",

  strategyDescription:
    "An undercut is most useful when fresh tyres provide a significant pace advantage and the driver can return to the track without losing too much time in traffic. An overcut can work when the driver has strong pace on the current tyres and staying out provides useful clean air or track position.",

  factTitle: "UNDERCUT FACT",

  fact:
    "The undercut does not automatically work. A driver can pit first, fit fresh tyres and still lose out if the tyres take time to reach their best performance or if the driver rejoins behind slower traffic.",

  quiz: {
    question:
      "What is an undercut?",

    options: [
      "Pitting before a rival to use fresh tyres and gain track position",

      "Waiting until the final lap to pit",

      "Passing a rival on a straight using extra power",

      "Starting the race on the hardest tyre",
    ],

    correctAnswer:
      "Pitting before a rival to use fresh tyres and gain track position",

    explanation:
      "An undercut involves pitting before a rival and using the performance of fresh tyres to set faster laps while the rival remains on older tyres.",
  },

  nextLesson: "Tyre Management",

  nextLink: "/Learn/tyre-management",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 03 — TYRE MANAGEMENT
// =========================================================

{
  slug: "tyre-management",

  title: "Tyre Management",

  subtitle:
    "Learn how drivers balance speed, grip and tyre life to keep their tyres performing throughout a race.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Sometimes slower is faster.",

  briefingDescription:
    "An F1 driver cannot always drive at maximum attack. Pushing the tyres too hard can cause them to lose performance, forcing an earlier pit stop and potentially damaging the team's strategy.",

  whyTitle: "Every lap has a cost.",

  whyDescription:
    "Tyres change as they are used. Heat, sliding, braking and acceleration all affect their performance. A driver who manages their tyres effectively can maintain competitive pace for longer and create more strategic options.",

  intro:
    "Tyre management is the process of controlling how aggressively a driver uses their tyres. Drivers must find a balance between pushing for lap time and protecting the tyres so they remain effective over a long stint.",

  learningPoints: [
    "Understand what tyre degradation means",

    "Learn why excessive sliding can damage tyre performance",

    "Understand the difference between pushing and managing tyres",

    "Learn how temperature affects tyre performance",

    "Understand why tyre management can extend a race stint",

    "Learn how drivers communicate tyre information to their teams",
  ],

  controlLabel: "THE TYRE WINDOW",

  controlTitle: "Keeping the tyres alive",

  controlDescription:
    "A tyre performs best within a certain operating window. Drivers and engineers constantly monitor tyre behaviour and adjust their driving and strategy to keep the tyres performing for as long as possible.",

  timeline: [
    {
      day: "WARM-UP",

      label: "STEP 01",

      events: [
        "The tyres need to reach their operating temperature",

        "Drivers carefully manage acceleration and braking",

        "The team monitors how quickly the tyres are coming into their performance window",
      ],
    },

    {
      day: "THE PUSH",

      label: "STEP 02",

      events: [
        "The driver increases the pace",

        "Braking and acceleration become more aggressive",

        "The tyres provide strong performance when operating correctly",

        "Extra pace also increases tyre stress",
      ],
    },

    {
      day: "DEGRADATION",

      label: "STEP 03",

      events: [
        "The tyres gradually lose performance as the stint progresses",

        "Excessive sliding can increase tyre wear and overheating",

        "Lap times can begin to increase",

        "The driver may need to reduce their pace to protect the tyres",
      ],
    },

    {
      day: "MANAGEMENT",

      label: "STEP 04",

      events: [
        "The driver adjusts their driving style",

        "They may brake earlier or use smoother throttle inputs",

        "The goal is to reduce unnecessary tyre stress",

        "The team decides whether to continue the stint or make a pit stop",
      ],
    },
  ],

  strategyLabel: "DRIVER TECHNIQUE",

  strategyTitle: "Protecting the tyres without losing too much pace",

  strategyDescription:
    "Drivers can manage their tyres by reducing unnecessary wheelspin, avoiding excessive sliding and controlling how aggressively they attack corners. The goal is not simply to drive slowly—it is to use the tyres efficiently while maintaining the required race pace.",

  factTitle: "TYRE MANAGEMENT FACT",

  fact:
    "A driver may deliberately sacrifice a small amount of lap time in the short term to protect the tyres and maintain stronger performance later in the stint.",

  quiz: {
    question:
      "Why might a driver deliberately reduce their pace during a race?",

    options: [
      "To protect their tyres",

      "To reduce their championship points",

      "To make their car heavier",

      "To increase their pit-lane speed",

    ],

    correctAnswer:
      "To protect their tyres",

    explanation:
      "Drivers sometimes reduce their pace to prevent excessive tyre wear and overheating. Protecting the tyres can allow them to maintain stronger performance later in the stint.",
  },

  nextLesson: "Clean Air & Dirty Air",

  nextLink: "/Learn/clean-air-dirty-air",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 04 — CLEAN AIR & DIRTY AIR
// =========================================================

{
  slug: "clean-air-dirty-air",

  title: "Clean Air & Dirty Air",

  subtitle:
    "Learn why following another F1 car can make it harder to turn, brake and generate aerodynamic performance.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "The car in front changes the air.",

  briefingDescription:
    "Formula 1 cars rely heavily on aerodynamic downforce. But the air coming off a car creates a disturbed airflow behind it, which can make it harder for the following car to produce the same aerodynamic performance.",

  whyTitle: "Sometimes being close is a disadvantage.",

  whyDescription:
    "A driver needs to get close enough to attack a rival, but following too closely through corners can make the car more difficult to control. This is one reason why overtaking in Formula 1 can be so challenging.",

  intro:
    "Clean air is relatively undisturbed airflow around the car. Dirty air is the disturbed airflow created by another car ahead. When a driver follows another car closely, the disturbed airflow can reduce the aerodynamic performance of their car, particularly through corners.",

  learningPoints: [
    "Understand what clean air means",

    "Understand what dirty air means",

    "Learn how aerodynamic turbulence affects the following car",

    "Understand why downforce is important in corners",

    "Learn why drivers sometimes fall back to protect their tyres",

    "Understand how clean air can improve a driver's race pace",
  ],

  controlLabel: "THE AERODYNAMIC BATTLE",

  controlTitle: "Clean air vs dirty air",

  controlDescription:
    "An F1 car performs best when its aerodynamic surfaces receive predictable airflow. Following another car changes that airflow and can make it more difficult for the driver to maintain the same level of cornering performance.",

  timeline: [
    {
      day: "CLEAN AIR",

      label: "STEP 01",

      events: [
        "The car is travelling through relatively undisturbed air",

        "The aerodynamic surfaces can work more effectively",

        "The driver can use the car's aerodynamic performance through corners",
      ],
    },

    {
      day: "FOLLOWING",

      label: "STEP 02",

      events: [
        "The driver closes the gap to another car",

        "The following car enters the airflow produced by the car ahead",

        "The airflow becomes less predictable",
      ],
    },

    {
      day: "DIRTY AIR",

      label: "STEP 03",

      events: [
        "The disturbed airflow can reduce aerodynamic performance",

        "The following car may lose some cornering performance",

        "The driver may experience more difficulty controlling the car",

        "Tyre stress can increase if the driver struggles with the balance of the car",
      ],
    },

    {
      day: "THE ATTACK",

      label: "STEP 04",

      events: [
        "The driver tries to remain close enough to attack",

        "On straights, the disturbed-air disadvantage can become less important",

        "The driver looks for an opportunity to pass",

        "The goal is to complete the overtake before the next difficult corner sequence",
      ],
    },
  ],

  strategyLabel: "RACE STRATEGY",

  strategyTitle: "When to follow and when to back off",

  strategyDescription:
    "A driver may sometimes choose not to stay directly behind a rival through every corner. Creating a small gap can give the car cleaner air, allowing the driver to protect the tyres and maintain better pace before closing in again for an overtaking attempt.",

  factTitle: "AERODYNAMIC FACT",

  fact:
    "Dirty air is one reason a driver can struggle to follow another car closely through corners, even when their car appears to have enough pace to challenge the rival.",

  quiz: {
    question:
      "What is dirty air in Formula 1?",

    options: [
      "Air disturbed by a car ahead",

      "Air with a higher temperature",

      "Air created by the exhaust",

      "Air used inside the tyres",
    ],

    correctAnswer:
      "Air disturbed by a car ahead",

    explanation:
      "Dirty air refers to the disturbed airflow produced by a car ahead. It can make it harder for the following car to generate consistent aerodynamic performance, especially through corners.",
  },

  nextLesson: "Energy Management",

  nextLink: "/Learn/energy-management",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 05 — ENERGY MANAGEMENT
// =========================================================

{
  slug: "energy-management",

  title: "Energy Management",

  subtitle:
    "Learn how Formula 1 drivers manage electrical energy to attack, defend and maintain performance throughout a race.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Power is a resource.",

  briefingDescription:
    "Modern Formula 1 cars do more than burn fuel. Their hybrid power units recover and deploy electrical energy throughout a lap, meaning drivers and teams must carefully manage when that energy is used.",

  whyTitle: "Knowing when to use power matters.",

  whyDescription:
    "A driver cannot simply use every available piece of electrical energy whenever they want. Energy has to be managed across a race so that the driver has enough available when attacking a rival, defending a position or responding to changing race conditions.",

  intro:
    "Energy management is the process of controlling how electrical energy is recovered and deployed during a race. Drivers and engineers monitor energy levels and decide how to use the available electrical power without compromising the strategy for later laps.",

  learningPoints: [
    "Understand why electrical energy is important in modern F1",

    "Learn the difference between energy recovery and energy deployment",

    "Understand how braking can help recover electrical energy",

    "Learn why drivers cannot use maximum electrical deployment all the time",

    "Understand how energy management can help a driver attack",

    "Learn how energy can be used defensively to protect track position",
  ],

  controlLabel: "THE ENERGY CYCLE",

  controlTitle: "Recover. Store. Deploy.",

  controlDescription:
    "The hybrid power unit can recover electrical energy and make it available for deployment. Drivers and teams manage this energy strategically so that it can be used when it provides the greatest advantage.",

  timeline: [
    {
      day: "RECOVER",

      label: "STEP 01",

      events: [
        "The car can recover electrical energy during braking",

        "The hybrid system converts some of the car's energy into electrical energy",

        "Recovered energy becomes available for later use",
      ],
    },

    {
      day: "STORE",

      label: "STEP 02",

      events: [
        "Electrical energy is stored within the car's energy system",

        "Engineers monitor how much usable energy is available",

        "The team considers how much energy will be needed later in the lap or race",
      ],
    },

    {
      day: "DEPLOY",

      label: "STEP 03",

      events: [
        "Electrical energy can be deployed to provide additional power",

        "Deployment can improve acceleration and straight-line performance",

        "Drivers can use energy strategically rather than simply using it continuously",
      ],
    },

    {
      day: "MANAGE",

      label: "STEP 04",

      events: [
        "The driver and team monitor the energy situation",

        "Energy can be conserved when there is no immediate need to attack",

        "More energy can be deployed when attacking or defending",

        "The strategy must account for future laps and future opportunities",
      ],
    },
  ],

  strategyLabel: "RACE STRATEGY",

  strategyTitle: "Attack now or save for later?",

  strategyDescription:
    "A driver approaching a rival may choose to deploy more electrical energy to increase their chances of an overtake. However, using too much energy too early can leave the driver with fewer options later. The best strategy is often about choosing the right moment rather than using maximum power at every opportunity.",

  factTitle: "ENERGY FACT",

  fact:
    "Electrical energy can be strategically valuable during both attacks and defence. A driver may save energy on one lap so that they have a stronger opportunity to attack or defend on the next.",

  quiz: {
    question:
      "Why is energy management important during an F1 race?",

    options: [
      "Because drivers must decide when to deploy and conserve electrical energy",

      "Because electrical energy is only used during pit stops",

      "Because drivers cannot recover any energy during a race",

      "Because energy management controls the tyre compound",
    ],

    correctAnswer:
      "Because drivers must decide when to deploy and conserve electrical energy",

    explanation:
      "Electrical energy is a strategic resource. Drivers and teams must decide when to deploy it for performance and when to conserve it so that it remains available for later opportunities.",
  },

  nextLesson: "Race Pace",

  nextLink: "/Learn/race-pace",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 06 — RACE PACE
// =========================================================

{
  slug: "race-pace",

  title: "Race Pace",

  subtitle:
    "Learn why the fastest car over one lap is not always the fastest car over an entire Grand Prix.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "The race is not won in one lap.",

  briefingDescription:
    "Qualifying rewards outright speed over a single lap. A Grand Prix is different. Drivers must maintain competitive pace for many laps while managing tyres, fuel, energy, traffic and the changing conditions of the race.",

  whyTitle: "Consistency beats one perfect lap.",

  whyDescription:
    "A driver can be extremely quick over one lap but struggle to maintain that performance over a full race. Strong race pace comes from finding a sustainable rhythm while protecting the car and tyres.",

  intro:
    "Race pace describes how quickly a driver can consistently complete laps during a Grand Prix. Teams study long-run performance during practice to understand how the car behaves over many laps and how quickly the tyres lose performance.",

  learningPoints: [
    "Understand what race pace means",

    "Learn the difference between qualifying pace and race pace",

    "Understand why tyre degradation affects race pace",

    "Learn how fuel load can influence lap times",

    "Understand how traffic can change a driver's pace",

    "Learn why consistent lap times are important during a race",
  ],

  controlLabel: "THE PACE BATTLE",

  controlTitle: "Fast is not always sustainable",

  controlDescription:
    "Teams analyse long runs to understand how quickly their cars can lap over a sustained period. A driver needs to find a pace that is fast enough to compete while remaining manageable for the tyres, energy system and overall race strategy.",

  timeline: [
    {
      day: "QUALIFYING PACE",

      label: "ONE LAP",

      events: [
        "The driver pushes the car to its limit",

        "Tyre performance is maximised for a short period",

        "Fuel load is relatively low",

        "The goal is to produce the fastest possible lap",
      ],
    },

    {
      day: "RACE PACE",

      label: "LONG RUN",

      events: [
        "The driver must maintain competitive lap times",

        "Tyre degradation becomes increasingly important",

        "Fuel load changes as the race progresses",

        "Energy and car performance must be managed over many laps",
      ],
    },

    {
      day: "TRAFFIC",

      label: "TRACK POSITION",

      events: [
        "A driver may become trapped behind another car",

        "Dirty air can make following through corners more difficult",

        "The driver may have to change their pace",

        "The team may consider a strategy change to escape traffic",
      ],
    },

    {
      day: "CONSISTENCY",

      label: "THE LONG GAME",

      events: [
        "The driver aims to maintain a stable rhythm",

        "Unnecessary tyre stress is avoided",

        "Mistakes and excessive sliding are minimised",

        "Consistent pace can create strategic opportunities later in the race",
      ],
    },
  ],

  strategyLabel: "RACE ENGINEERING",

  strategyTitle: "Finding the sustainable lap",

  strategyDescription:
    "Engineers compare lap times across long runs to understand the car's true race performance. A driver who can maintain strong pace while protecting the tyres may be more competitive over an entire stint than a driver who is faster for only a few laps.",

  factTitle: "RACE PACE FACT",

  fact:
    "A car that looks dominant over one qualifying lap may not have the same advantage during a race because tyre degradation, fuel load, traffic and energy management can change the performance picture.",

  quiz: {
    question:
      "What is the main difference between qualifying pace and race pace?",

    options: [
      "Qualifying focuses on one fast lap, while race pace must be sustained over many laps",

      "Race pace is only measured during pit stops",

      "Qualifying pace depends only on championship points",

      "Race pace does not involve tyres",
    ],

    correctAnswer:
      "Qualifying focuses on one fast lap, while race pace must be sustained over many laps",

    explanation:
      "Qualifying rewards maximum performance over a short period. During a Grand Prix, drivers must maintain competitive pace while managing tyres, fuel, energy, traffic and other factors.",
  },

  nextLesson: "Safety Cars & Strategy",

  nextLink: "/Learn/safety-cars-strategy",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 07 — SAFETY CARS & STRATEGY
// =========================================================

{
  slug: "safety-cars-strategy",

  title: "Safety Cars & Strategy",

  subtitle:
    "Learn how Safety Cars and Virtual Safety Cars can completely change the strategy of a Formula 1 race.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "The race can change in seconds.",

  briefingDescription:
    "A Safety Car or Virtual Safety Car can dramatically reduce the time difference between drivers. This can create a valuable opportunity for teams to make a pit stop while losing less track position than they normally would.",

  whyTitle: "Timing is everything.",

  whyDescription:
    "A driver may be struggling with worn tyres one moment and suddenly receive a strategic opportunity when the Safety Car is deployed. Teams must decide quickly whether to pit, stay out or change their original strategy.",

  intro:
    "Safety Car periods neutralise the race when there is a hazard on track. Because drivers must slow down, the gaps between cars can shrink significantly. This can make a pit stop less costly and completely change the competitive order.",

  learningPoints: [
    "Understand how a Safety Car changes race conditions",

    "Learn how a Virtual Safety Car affects strategy",

    "Understand why teams may pit during a neutralisation",

    "Learn why staying out can sometimes be the better option",

    "Understand how a Safety Car can reduce gaps between drivers",

    "Learn why teams must react quickly to race control decisions",
  ],

  controlLabel: "THE STRATEGIC RESET",

  controlTitle: "When the Safety Car changes everything",

  controlDescription:
    "A Safety Car slows the field and brings the cars closer together. This reduces the normal cost of making a pit stop, giving teams an opportunity to change tyres while potentially losing fewer positions.",

  timeline: [
    {
      day: "SAFETY CAR DEPLOYED",

      label: "STEP 01",

      events: [
        "A hazard requires the race to be neutralised",

        "Drivers reduce their speed",

        "The Safety Car joins the circuit",

        "The field begins to close up",
      ],
    },

    {
      day: "THE GAP SHRINKS",

      label: "STEP 02",

      events: [
        "Drivers can no longer race at normal speed",

        "The gaps between cars become smaller",

        "The relative time cost of a pit stop can decrease",

        "Teams immediately begin evaluating their options",
      ],
    },

    {
      day: "THE PIT DECISION",

      label: "STEP 03",

      events: [
        "The team can choose to pit for fresh tyres",

        "A pit stop may cost fewer positions than under green-flag conditions",

        "The team compares tyre life, track position and remaining race distance",

        "The driver may gain a strategic advantage by stopping at the right moment",
      ],
    },

    {
      day: "THE RESTART",

      label: "STEP 04",

      events: [
        "The Safety Car period eventually ends",

        "The field prepares to resume racing",

        "Drivers accelerate away and racing conditions return",

        "Fresh tyres can become especially valuable during the restart",
      ],
    },
  ],

  strategyLabel: "STRATEGIC CHOICE",

  strategyTitle: "Pit or stay out?",

  strategyDescription:
    "Pitting under a Safety Car is not automatically the correct decision. Teams must consider tyre condition, remaining race distance, track position, weather and whether rival drivers are also stopping. Sometimes staying out preserves valuable track position, while at other times fresh tyres are too valuable to ignore.",

  factTitle: "SAFETY CAR FACT",

  fact:
    "A Safety Car can create one of the biggest strategic swings of a Grand Prix because the gaps between cars can shrink dramatically while teams are still able to make pit stops.",

  quiz: {
    question:
      "Why can a Safety Car create a good opportunity for a pit stop?",

    options: [
      "Because the cars stop using tyres",

      "Because the reduced speed can lower the relative time cost of a pit stop",

      "Because drivers receive extra championship points",

      "Because the race distance becomes shorter",
    ],

    correctAnswer:
      "Because the reduced speed can lower the relative time cost of a pit stop",

    explanation:
      "When the field is slowed by a Safety Car, the gaps between drivers can shrink. This can make a pit stop less costly in terms of track position than it would normally be under green-flag racing.",

  },

  nextLesson: "Team Orders & Race Management",

  nextLink: "/Learn/team-orders",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 08 — TEAM ORDERS & RACE MANAGEMENT
// =========================================================

{
  slug: "team-orders",

  title: "Team Orders & Race Management",

  subtitle:
    "Learn how Formula 1 teams manage two drivers, protect strategic advantages and make decisions that can affect the result.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Two cars. One team.",

  briefingDescription:
    "Formula 1 teams enter two cars into every Grand Prix, but both cars share the same resources, strategy team and championship objectives. Sometimes the team has to make decisions that affect how its drivers race each other.",

  whyTitle: "Racing for yourself and the team.",

  whyDescription:
    "Drivers are competitors, but they also represent the same constructor. When championship points, strategy or a potential race victory are at stake, the team may ask one driver to help the other.",

  intro:
    "Team orders are instructions given by a Formula 1 team to its drivers. They can involve strategic decisions, tyre management, position swaps, energy usage or protecting a particular championship objective.",

  learningPoints: [
    "Understand what team orders are",

    "Learn why teams sometimes ask drivers to swap positions",

    "Understand how teams manage two drivers during a race",

    "Learn why championship points can influence team decisions",

    "Understand the difference between team strategy and individual driver racing",
  ],

  controlLabel: "INSIDE THE TEAM",

  controlTitle: "When the team takes control",

  controlDescription:
    "Formula 1 teams constantly balance the interests of two drivers with the overall goals of the constructor. Engineers and strategists communicate with drivers throughout the race to manage tyres, energy, pace and track position.",

  timeline: [
    {
      day: "STRATEGIC PRIORITY",

      label: "STEP 01",

      events: [
        "The team evaluates the race situation",

        "Engineers compare the positions and strategies of both drivers",

        "Championship and race objectives are considered",

        "The team decides what outcome would benefit the constructor most",
      ],
    },

    {
      day: "DRIVER MANAGEMENT",

      label: "STEP 02",

      events: [
        "Drivers may be asked to manage their tyres",

        "Energy deployment can be coordinated between teammates",

        "A driver may be asked to avoid unnecessary fighting",

        "The team tries to protect its overall race result",
      ],
    },

    {
      day: "POSITION SWAP",

      label: "STEP 03",

      events: [
        "One driver may have a stronger strategic position",

        "The team can ask the drivers to exchange positions",

        "The decision can protect a better championship outcome",

        "Drivers are expected to follow the team's instructions",
      ],
    },

    {
      day: "CHAMPIONSHIP MANAGEMENT",

      label: "STEP 04",

      events: [
        "Every finishing position can affect championship points",

        "Constructors fight for points scored by both cars",

        "Drivers also fight for the Drivers' Championship",

        "Team decisions can therefore become more important as the season develops",
      ],
    },
  ],

  strategyLabel: "RACE MANAGEMENT",

  strategyTitle: "The bigger picture",

  strategyDescription:
    "A team cannot always treat its two cars as completely independent competitors. If one driver is fighting for a championship or has a significantly better strategy, the team may prioritise the result that gives the constructor or driver the greatest overall benefit.",

  factTitle: "TEAM FACT",

  fact:
    "Formula 1 teams score Constructors' Championship points from both of their cars, so managing two drivers effectively can be just as important as maximising the performance of one car.",

  quiz: {
    question:
      "Why might a Formula 1 team use team orders?",

    options: [
      "To change the length of the circuit",

      "To help manage the team's overall race or championship objectives",

      "To give a driver extra qualifying laps",

      "To remove a driver from the championship",
    ],

    correctAnswer:
      "To help manage the team's overall race or championship objectives",

    explanation:
      "Team orders allow a constructor to coordinate its drivers when doing so can improve the team's race result, protect championship points or support a wider strategic objective.",
  },

  nextLesson: "Defending & Attacking",

  nextLink: "/Learn/defending-attacking",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 09 — DEFENDING & ATTACKING
// =========================================================

{
  slug: "defending-attacking",

  title: "Defending & Attacking",

  subtitle:
    "Learn how Formula 1 drivers fight for position, defend their place and create opportunities to overtake.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "8 min",

  briefingTitle: "Every position has to be fought for.",

  briefingDescription:
    "Overtaking is one of the most exciting parts of Formula 1, but gaining a position is not simply about having a faster car. Drivers must choose the right moment to attack while the driver ahead tries to defend without breaking the rules.",

  whyTitle: "Speed creates the opportunity. Timing creates the overtake.",

  whyDescription:
    "A driver can be faster than the car ahead and still struggle to pass. Track layout, tyre condition, straight-line speed, energy deployment and positioning into corners can all determine whether an attack succeeds.",

  intro:
    "Drivers constantly balance attacking and defending during a Grand Prix. An attacking driver looks for opportunities to pass, while the defending driver tries to maintain track position and control the racing line within the rules.",

  learningPoints: [
    "Understand the difference between attacking and defending",

    "Learn why positioning matters during an overtake",

    "Understand how braking zones create overtaking opportunities",

    "Learn why drivers defend the inside line",

    "Understand how tyre and energy advantages can create an attack",

    "Learn why a driver cannot defend indefinitely without managing their tyres",
  ],

  controlLabel: "THE POSITION BATTLE",

  controlTitle: "Attack, defend, repeat",

  controlDescription:
    "A successful overtake usually develops over several corners or straights. The attacking driver needs to create an opportunity, while the defending driver attempts to position their car effectively and retain track position.",

  timeline: [
    {
      day: "THE ATTACK",

      label: "STEP 01",

      events: [
        "The attacking driver closes the gap",

        "A speed advantage may come from tyres, energy or the car's performance",

        "The driver looks for a suitable overtaking opportunity",

        "The attacking driver positions the car for the move",
      ],
    },

    {
      day: "THE DEFENCE",

      label: "STEP 02",

      events: [
        "The defending driver chooses a defensive line",

        "They may protect the inside of an upcoming corner",

        "The driver tries to prevent the attacker from gaining a clear advantage",

        "The defence must remain within the sporting regulations",
      ],
    },

    {
      day: "THE BRAKING ZONE",

      label: "STEP 03",

      events: [
        "The attacking driver may attempt to brake later",

        "The cars approach the corner side by side",

        "Both drivers must leave sufficient racing room",

        "The driver who completes the move can gain track position",
      ],
    },

    {
      day: "THE COUNTERATTACK",

      label: "STEP 04",

      events: [
        "The defending driver may attempt to retake the position",

        "A better exit from the corner can create another opportunity",

        "The following straight can provide another chance to attack",

        "The battle can continue for several corners",
      ],
    },
  ],

  strategyLabel: "OVERTAKING STRATEGY",

  strategyTitle: "The best attack starts before the corner",

  strategyDescription:
    "Drivers often build an overtake several seconds before the actual passing move. Getting a strong exit from the previous corner, using available electrical energy and positioning the car correctly can create the speed advantage needed for the next braking zone.",

  factTitle: "RACING FACT",

  fact:
    "A driver does not necessarily need to complete an overtake immediately. Sometimes the best strategy is to stay close, protect the tyres and wait for a stronger opportunity on the next straight or braking zone.",

  quiz: {
    question:
      "Why might a driver defend the inside line when approaching a corner?",

    options: [
      "To make the car slower",

      "To reduce the attacking driver's space for an overtaking move",

      "To increase tyre temperature automatically",

      "To change the race distance",
    ],

    correctAnswer:
      "To reduce the attacking driver's space for an overtaking move",

    explanation:
      "Taking a defensive line can make it harder for the attacking driver to use the inside of the corner as an overtaking opportunity. The defending driver must still follow the sporting regulations and leave appropriate racing room.",
  },

  nextLesson: "Reading a Race",

  nextLink: "/Learn/reading-a-race",
},

// =========================================================
// SECTION 03 — RACE STRATEGY & TACTICS
// LESSON 10 — READING A RACE
// =========================================================

{
  slug: "reading-a-race",

  title: "Reading a Race",

  subtitle:
    "Learn how to look beyond the leaderboard and understand the strategy unfolding during a Formula 1 Grand Prix.",

  category: "Strategy",

  difficulty: "Intermediate",

  readTime: "9 min",

  briefingTitle: "The leaderboard is only part of the story.",

  briefingDescription:
    "A Formula 1 race can look simple on the timing screen while a complex strategic battle is happening underneath. To understand what is really happening, you need to watch the gaps, tyres, pit stops, pace, traffic and race-control events together.",

  whyTitle: "Learn to see the race behind the numbers.",

  whyDescription:
    "Once you know how to combine different pieces of information, you can start predicting what teams might do next. A driver falling down the order may not actually be losing the race, while another driver leading the race may be using a strategy that still requires a pit stop.",

  intro:
    "Reading a race means understanding how different factors interact throughout a Grand Prix. Instead of looking only at a driver's position, you can examine their tyre age, lap times, gap to rivals, pit-stop history, traffic and available strategy options.",

  learningPoints: [
    "Learn how to read gaps between drivers",

    "Understand why tyre information matters",

    "Learn how pit stops change the apparent race order",

    "Understand how lap pace reveals strategic trends",

    "Learn how Safety Cars and other race-control events affect the race",

    "Understand how to predict possible strategic decisions",
  ],

  controlLabel: "READING THE TIMING SCREEN",

  controlTitle: "Put the pieces together",

  controlDescription:
    "A strong F1 viewer does not look at one number in isolation. Position, gap, tyre condition, lap time and pit-stop history can all tell a different part of the same strategic story.",

  timeline: [
    {
      day: "TRACK POSITION",

      label: "STEP 01",

      events: [
        "Check where each driver is running",

        "Compare the positions of teammates and rivals",

        "Look for drivers who have recently gained or lost places",

        "Remember that the running order can change after pit stops",
      ],
    },

    {
      day: "THE GAPS",

      label: "STEP 02",

      events: [
        "Check the time gap between nearby drivers",

        "Watch whether the gap is increasing or decreasing",

        "A shrinking gap can indicate that one driver has stronger pace",

        "A large gap does not always mean the driver is faster overall",
      ],
    },

    {
      day: "TYRES & PACE",

      label: "STEP 03",

      events: [
        "Check which tyre compound each driver is using",

        "Consider how old the tyres are",

        "Compare recent lap times",

        "Look for signs of tyre degradation or improving pace",
      ],
    },

    {
      day: "STRATEGY",

      label: "STEP 04",

      events: [
        "Consider who has already stopped",

        "Look at who may still need to pit",

        "Check whether a Safety Car or VSC has changed the situation",

        "Think about which strategy could produce the strongest final result",
      ],
    },

    {
      day: "THE BIG PICTURE",

      label: "STEP 05",

      events: [
        "Combine position, gaps, tyres and pace",

        "Consider traffic and upcoming opportunities",

        "Watch for attacking or defending battles",

        "Ask what each team is likely to do next",
      ],
    },
  ],

  strategyLabel: "RACE ANALYSIS",

  strategyTitle: "Ask the right questions",

  strategyDescription:
    "When watching a Grand Prix, try asking: Who has the freshest tyres? Who has the strongest recent pace? Who still needs to pit? Who is stuck in traffic? How large is the gap to the next driver? Has a Safety Car changed the strategy? These questions help turn the timing screen into a story.",

  factTitle: "RACE READING FACT",

  fact:
    "A driver's position alone does not tell you their complete race situation. Two drivers in neighbouring positions can have completely different tyre ages, strategies and future pit-stop requirements.",

  quiz: {
    question:
      "Which combination gives you the best understanding of a driver's race situation?",

    options: [
      "Only their current position",

      "Only their fastest lap",

      "Position, gap, tyres, pace and strategy",

      "Only their championship points",
    ],

    correctAnswer:
      "Position, gap, tyres, pace and strategy",

    explanation:
      "Understanding a race requires looking at several pieces of information together. Position, gaps, tyre condition, lap pace and strategy reveal much more than the leaderboard alone.",

  },

  nextLesson: "F1 sporting rules",

  nextLink: "/Learn/f1-sporting-rules",
},

// =========================================================
// SECTION 04 — RULES & RACE CONTROL
// LESSON 01 — F1 SPORTING RULES
// =========================================================

{
  slug: "f1-sporting-rules",

  title: "F1 Sporting Rules",

  subtitle:
    "Learn the fundamental rules that govern how Formula 1 drivers and teams compete during a Grand Prix.",

  category: "Rules & Race Control",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "The rules behind the racing.",

  briefingDescription:
    "Formula 1 is not simply about driving as fast as possible. Drivers and teams must follow sporting regulations that govern race procedures, driver conduct, pit-lane behaviour, overtaking, safety procedures and penalties.",

  whyTitle: "The rules explain what you see.",

  whyDescription:
    "Many moments during a Grand Prix become much easier to understand once you know the rules. A driver may be investigated after an incident, a Safety Car may change what competitors are allowed to do, or a penalty may change the final order.",

  intro:
    "The Formula 1 Sporting Regulations provide the framework for how a Grand Prix is conducted. They establish procedures that drivers, teams and officials must follow throughout a race weekend.",

  learningPoints: [
    "Understand what the sporting regulations control",

    "Learn the basic responsibilities of drivers and teams",

    "Understand why drivers must follow race-control instructions",

    "Learn how sporting rules help keep competition fair",

    "Understand why some incidents are investigated",

    "Learn how rule breaches can affect a driver's result",
  ],

  controlLabel: "THE SPORTING RULEBOOK",

  controlTitle: "How the rules shape a Grand Prix",

  controlDescription:
    "The sporting regulations cover much more than what happens on the track. They establish procedures for the race weekend and provide the framework officials use when managing incidents.",

  timeline: [
    {
      day: "RACE PROCEDURES",

      label: "RULE 01",

      events: [
        "Drivers must follow the official procedures for each session",

        "The starting procedure determines how the Grand Prix begins",

        "Drivers must follow instructions issued by race control",
      ],
    },

    {
      day: "DRIVER CONDUCT",

      label: "RULE 02",

      events: [
        "Drivers must compete within the sporting regulations",

        "They must respect other competitors",

        "Unsafe or inappropriate behaviour can be investigated",

        "Drivers can receive penalties when rules are breached",
      ],
    },

    {
      day: "ON-TRACK RACING",

      label: "RULE 03",

      events: [
        "Drivers must race within the permitted areas of the circuit",

        "Overtaking and defending are subject to sporting rules",

        "Drivers must respond correctly to flags and other signals",

        "Drivers must avoid gaining an unfair advantage",
      ],
    },

    {
      day: "PIT LANE",

      label: "RULE 04",

      events: [
        "Drivers must respect the pit-lane speed limit",

        "Teams must follow pit-lane procedures",

        "Unsafe releases and other pit-lane incidents can be investigated",
      ],
    },

    {
      day: "RACE CONTROL",

      label: "RULE 05",

      events: [
        "Race control monitors what is happening on track",

        "Officials can deploy safety procedures when necessary",

        "Drivers must follow instructions given through official signals and procedures",
      ],
    },

    {
      day: "AFTER AN INCIDENT",

      label: "RULE 06",

      events: [
        "An incident can be referred to the stewards",

        "The stewards can investigate what happened",

        "A decision may result in no further action or a sporting penalty",

        "Some decisions can affect the final classification",
      ],
    },
  ],

  strategyLabel: "WHY RULES MATTER",

  strategyTitle: "Fast does not always mean legal.",

  strategyDescription:
    "A driver can be extremely fast and still lose a position or receive a penalty if they gain an advantage outside the rules. Teams therefore have to consider both performance and legality when making decisions during a race.",

  factTitle: "F1 RULEBOOK FACT",

  fact:
    "Not every incident results in a penalty. When an incident is investigated, the stewards consider the circumstances and applicable regulations before making their decision.",

  quiz: {
    question:
      "Why are sporting regulations important in Formula 1?",

    options: [
      "They determine which driver has the fastest car",

      "They provide the rules and procedures governing competition",

      "They decide which team wins every race",

      "They control the weather during a Grand Prix",
    ],

    correctAnswer:
      "They provide the rules and procedures governing competition",

    explanation:
      "The sporting regulations establish the procedures and rules that drivers, teams and officials must follow during a Formula 1 weekend.",
  },

  nextLesson: "Track Limits & Penalties",

  nextLink: "/Learn/track-limits-penalties",
},

// =========================================================
// SECTION 04 — RULES & RACE CONTROL
// LESSON 02 — TRACK LIMITS & PENALTIES
// =========================================================

{
  slug: "track-limits-penalties",

  title: "Track Limits & Penalties",

  subtitle:
    "Learn what track limits are, how drivers can gain an advantage, and why Formula 1 penalties are sometimes handed out.",

  category: "Rules & Race Control",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Stay inside the lines.",

  briefingDescription:
    "Formula 1 drivers are constantly looking for the fastest way around a circuit. But they cannot simply use every piece of asphalt they can reach. Track limits define where a driver is allowed to run, and breaking the rules can lead to a penalty.",

  whyTitle: "A few centimetres can matter.",

  whyDescription:
    "Drivers sometimes gain lap time by running wide through corners or using parts of the circuit that are not permitted. Formula 1 therefore monitors track limits to prevent drivers from gaining an unfair advantage.",

  intro:
    "Track limits define the boundaries within which a Formula 1 car must remain during a session. Depending on the circuit and the regulations for that event, repeated violations or gaining an advantage by leaving the permitted area can result in lap-time deletions or sporting penalties.",

  learningPoints: [
    "Understand what track limits are",

    "Learn why drivers sometimes run wide",

    "Understand how track-limit violations are monitored",

    "Learn the difference between losing a lap time and receiving a penalty",

    "Understand what a time penalty is",

    "Learn why gaining an advantage can lead to investigation",
  ],

  controlLabel: "STAYING WITHIN THE CIRCUIT",

  controlTitle: "When does running wide become a problem?",

  controlDescription:
    "Drivers naturally push towards the limits of the circuit because every fraction of a second matters. However, they must respect the track boundaries established for that circuit and session.",

  timeline: [
    {
      day: "THE TRACK LIMIT",

      label: "STEP 01",

      events: [
        "The circuit has defined boundaries",

        "Drivers are expected to keep the car within the permitted racing area",

        "The exact track-limit rules can vary depending on the circuit",
      ],
    },

    {
      day: "RUNNING WIDE",

      label: "STEP 02",

      events: [
        "A driver may run beyond the permitted track area",

        "This can happen while attacking a corner or defending another driver",

        "Race officials and automated systems can monitor potential violations",
      ],
    },

    {
      day: "GAINING AN ADVANTAGE",

      label: "STEP 03",

      events: [
        "Leaving the track can sometimes provide a faster line",

        "A driver must not gain an unfair advantage by leaving the permitted area",

        "An incident can be reviewed when the circumstances require it",
      ],
    },

    {
      day: "LAP-TIME DELETION",

      label: "STEP 04",

      events: [
        "A lap can be deleted when a track-limit violation affects that lap",

        "The deleted lap time cannot be used for the relevant classification",

        "In qualifying, this can have a major effect on a driver's grid position",
      ],
    },

    {
      day: "SPORTING PENALTY",

      label: "STEP 05",

      events: [
        "Repeated or more serious breaches can result in further action",

        "A driver may receive a time penalty during or after a race",

        "The penalty can change the driver's final classification",
      ],
    },
  ],

  strategyLabel: "RACE STRATEGY",

  strategyTitle: "Push the limits — but know where they are.",

  strategyDescription:
    "Drivers want to use every legal centimetre of the circuit. Teams therefore study track-limit rules carefully and help drivers understand where they can attack a corner without risking a deleted lap or a penalty.",

  factTitle: "TRACK LIMIT FACT",

  fact:
    "Track-limit enforcement can be especially important in qualifying because deleting a driver's fastest lap can dramatically change their starting position.",

  quiz: {
    question:
      "What can happen when a driver's lap is affected by a track-limit violation?",

    options: [
      "The driver automatically wins the race",

      "The lap time can be deleted",

      "The driver receives extra championship points",

      "The driver gets a free pit stop",
    ],

    correctAnswer: "The lap time can be deleted",

    explanation:
      "When a lap is affected by a track-limit violation, the lap time can be deleted and therefore cannot be used for the relevant classification.",
  },

  nextLesson: "Stewards & Race Control",

  nextLink: "/Learn/stewards-race-control",
},

// =========================================================
// SECTION 04 — RULES & RACE CONTROL
// LESSON 03 — STEWARDS & RACE CONTROL
// =========================================================

{
  slug: "stewards-race-control",

  title: "Stewards & Race Control",

  subtitle:
    "Learn who manages a Formula 1 Grand Prix, how incidents are investigated, and who makes sporting decisions.",

  category: "Rules & Race Control",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Who is actually in control?",

  briefingDescription:
    "Formula 1 races involve much more than the drivers and teams. Race Control manages the sporting operation of the event, while the stewards investigate incidents and make decisions when the regulations may have been breached.",

  whyTitle: "Someone has to make the call.",

  whyDescription:
    "When two cars collide, a driver ignores a safety procedure or a team appears to break a rule, the incident may need to be investigated. Understanding the roles of Race Control and the stewards helps explain why some incidents result in penalties while others do not.",

  intro:
    "Race Control and the stewards have different responsibilities during a Grand Prix. Race Control manages the running of the event and communicates instructions, while the stewards are responsible for making sporting decisions about incidents and potential rule breaches.",

  learningPoints: [
    "Understand what Race Control does",

    "Learn the role of the Race Director",

    "Understand what Formula 1 stewards do",

    "Learn how an on-track incident can be investigated",

    "Understand why some incidents receive no further action",

    "Learn how steward decisions can affect race results",
  ],

  controlLabel: "WHO MAKES THE DECISIONS?",

  controlTitle: "Race Control vs Stewards",

  controlDescription:
    "Several officials work together during a Grand Prix, but they do not all perform the same job. Race Control manages the running of the session, while the stewards independently consider sporting incidents and possible breaches of the regulations.",

  timeline: [
    {
      day: "RACE CONTROL",

      label: "ROLE 01",

      events: [
        "Monitors the running of the session",

        "Communicates important instructions and information",

        "Manages procedures such as Safety Car and red-flag periods",

        "Communicates official decisions and session information",
      ],
    },

    {
      day: "RACE DIRECTOR",

      label: "ROLE 02",

      events: [
        "Oversees the sporting operation of the session",

        "Works with race officials to manage the event",

        "Communicates important instructions to teams and drivers",

        "Coordinates race procedures when incidents occur",
      ],
    },

    {
      day: "THE STEWARDS",

      label: "ROLE 03",

      events: [
        "Consider potential breaches of the sporting regulations",

        "Review evidence from an incident",

        "Can summon drivers or team representatives",

        "Make sporting decisions according to the regulations",
      ],
    },

    {
      day: "THE INVESTIGATION",

      label: "ROLE 04",

      events: [
        "An incident can be referred to the stewards",

        "Officials can review available evidence",

        "Drivers and teams may be asked for information",

        "The stewards determine whether further action is required",
      ],
    },

    {
      day: "THE DECISION",

      label: "ROLE 05",

      events: [
        "The stewards can decide that no further action is necessary",

        "A driver or team can receive a sporting penalty",

        "The decision can affect the race or final classification",

        "Some decisions can be issued after the chequered flag",
      ],
    },
  ],

  strategyLabel: "RACE CONTROL",

  strategyTitle: "Not every incident is a penalty.",

  strategyDescription:
    "When you hear that an incident is 'under investigation', it does not automatically mean a driver will be punished. The stewards must consider the available evidence and the circumstances before deciding whether a rule was breached and whether a penalty is appropriate.",

  factTitle: "STEWARDS FACT",

  fact:
    "The stewards are responsible for making sporting decisions about incidents. An investigation can result in a penalty, but it can also result in no further action.",

  quiz: {
    question:
      "Who is responsible for making sporting decisions about potential rule breaches?",

    options: [
      "The driver",

      "The pit crew",

      "The stewards",

      "The television commentators",
    ],

    correctAnswer: "The stewards",

    explanation:
      "The stewards review potential sporting breaches and make decisions according to the applicable Formula 1 regulations.",
  },

  nextLesson: "Flags, Safety Car & VSC",

  nextLink: "/Learn/flags-safety-car",
},

// =========================================================
// SECTION 04 — RULES & RACE CONTROL
// LESSON 04 — FLAGS, SAFETY CAR & VSC
// =========================================================

{
  slug: "flags-safety-car",

  title: "Flags, Safety Car & VSC",

  subtitle:
    "Learn how Formula 1 communicates danger, controls the pace and manages the race when conditions on track change.",

  category: "Rules & Race Control",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "When racing has to slow down.",

  briefingDescription:
    "A Formula 1 race can change in seconds. A crash, debris, poor weather or another hazard may require drivers to slow down or stop racing normally. Flags, electronic signals, the Safety Car and Virtual Safety Car allow officials to control the situation.",

  whyTitle: "Race control can change everything.",

  whyDescription:
    "A Safety Car or Virtual Safety Car can completely change a driver's strategy. Gaps between cars can disappear, pit stops can become more attractive and drivers must adapt to different racing conditions.",

  intro:
    "Formula 1 uses flags, electronic light panels and safety procedures to communicate with drivers and control the race. The most important systems include yellow and red flags, the Safety Car and the Virtual Safety Car.",

  learningPoints: [
    "Understand the most important F1 flags",

    "Learn what a yellow flag means",

    "Understand when a red flag is used",

    "Learn the difference between a Safety Car and Virtual Safety Car",

    "Understand how safety periods affect race strategy",

    "Learn how racing resumes after a safety intervention",
  ],

  controlLabel: "RACE CONTROL SIGNALS",

  controlTitle: "Understanding what happens on track",

  controlDescription:
    "Drivers must constantly pay attention to flags, electronic panels and instructions from race control. These signals tell them whether they can race normally, need to slow down or must stop the session.",

  timeline: [
    {
      day: "GREEN FLAG",

      label: "TRACK CLEAR",

      events: [
        "The track is clear",

        "Normal racing or session activity can continue",

        "Drivers can proceed at racing speed when permitted",
      ],
    },

    {
      day: "YELLOW FLAG",

      label: "DANGER",

      events: [
        "A hazard is present on or near the track",

        "Drivers must reduce speed",

        "Overtaking is prohibited in the affected area",

        "Drivers must be prepared to change direction",
      ],
    },

    {
      day: "RED FLAG",

      label: "SESSION STOPPED",

      events: [
        "The session or race is stopped",

        "Drivers must reduce speed",

        "During a race, drivers normally proceed to the pit lane",

        "Drivers wait for further instructions from race control",
      ],
    },

    {
      day: "VIRTUAL SAFETY CAR",

      label: "CONTROLLED SPEED",

      events: [
        "No physical Safety Car needs to lead the field",

        "Drivers must follow a controlled speed requirement",

        "The gaps between cars are generally preserved",

        "The procedure allows officials to manage a hazard without a full Safety Car deployment",
      ],
    },

    {
      day: "SAFETY CAR",

      label: "FIELD NEUTRALISED",

      events: [
        "The physical Safety Car joins the circuit",

        "Drivers slow down and form a queue behind it",

        "Overtaking is generally prohibited",

        "The field can bunch together behind the Safety Car",
      ],
    },

    {
      day: "RESTART",

      label: "RACING RESUMES",

      events: [
        "Race control announces that normal racing can resume",

        "The Safety Car leaves the circuit when appropriate",

        "Drivers return to racing conditions",

        "The race continues under normal procedures",
      ],
    },
  ],

  strategyLabel: "RACE STRATEGY",

  strategyTitle: "A safety car can rewrite the race.",

  strategyDescription:
    "A driver who is far behind can sometimes benefit from a Safety Car because the gaps between competitors are reduced. Teams may also use the opportunity to make a pit stop while losing less relative track position than they would under green-flag conditions.",

  factTitle: "SAFETY CAR FACT",

  fact:
    "The Safety Car and Virtual Safety Car are different procedures. A Safety Car physically leads the field, while the VSC controls drivers through a required pace without a physical car leading them.",

  quiz: {
    question:
      "What is the main difference between a Safety Car and a Virtual Safety Car?",

    options: [
      "The Safety Car physically leads the field while the VSC does not",

      "The VSC is only used during qualifying",

      "The Safety Car allows unrestricted overtaking",

      "There is no difference between them",
    ],

    correctAnswer:
      "The Safety Car physically leads the field while the VSC does not",

    explanation:
      "During a Safety Car period, a physical Safety Car joins the circuit and the drivers form a queue behind it. During a VSC period, drivers follow controlled speed requirements without a physical Safety Car leading the field.",
  },

  nextLesson: "Red Flags & Race Restarts",

  nextLink: "/Learn/red-flags-restarts",
},

// =========================================================
// SECTION 04 — RULES & RACE CONTROL
// LESSON 05 — RED FLAGS & RACE RESTARTS
// =========================================================

{
  slug: "red-flags-restarts",

  title: "Red Flags & Race Restarts",

  subtitle:
    "Learn what happens when a Formula 1 race is stopped and how racing can resume after a major interruption.",

  category: "Rules & Race Control",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Sometimes the race has to stop.",

  briefingDescription:
    "A Formula 1 Grand Prix cannot always continue normally. A serious accident, dangerous conditions or another major problem can lead race control to suspend the session with a red flag.",

  whyTitle: "A red flag changes the race.",

  whyDescription:
    "When a race is stopped, teams suddenly have an opportunity to rethink their strategy. Drivers may return to the pit lane, cars can be worked on under the applicable procedures, and the race may eventually resume.",

  intro:
    "A red flag signals that a session has been stopped. In a Grand Prix, the race can be suspended when conditions are considered unsafe or when race control needs to deal with a major incident or obstruction.",

  learningPoints: [
    "Understand what a red flag means",

    "Learn why a race may be suspended",

    "Understand what drivers do when a race is stopped",

    "Learn how teams use a suspension to reassess strategy",

    "Understand how a race can restart",

    "Learn why the final result may depend on how much of the race has been completed",
  ],

  controlLabel: "WHEN THE RACE STOPS",

  controlTitle: "From red flag to restart",

  controlDescription:
    "A red flag does not necessarily mean the Grand Prix is over. It means normal racing has been stopped and race control must determine when and how the event can safely continue.",

  timeline: [
    {
      day: "RED FLAG",

      label: "STEP 01",

      events: [
        "The red flag is shown",

        "Normal racing stops",

        "Drivers reduce speed and follow the instructions of race control",

        "The reason for the suspension is addressed",
      ],
    },

    {
      day: "PIT LANE",

      label: "STEP 02",

      events: [
        "Drivers normally proceed to the pit lane",

        "Cars are positioned according to the applicable procedures",

        "Teams wait for further instructions",

        "Race control assesses whether racing can safely resume",
      ],
    },

    {
      day: "THE WAIT",

      label: "STEP 03",

      events: [
        "Marshals and officials work to resolve the problem",

        "Teams monitor weather, track conditions and race-control messages",

        "Engineers reassess the available strategy",

        "Drivers prepare for a possible restart",
      ],
    },

    {
      day: "RESTART PROCEDURE",

      label: "STEP 04",

      events: [
        "Race control determines when the session can resume",

        "Drivers are given instructions for the restart",

        "The field prepares to return to racing conditions",

        "The restart procedure depends on the circumstances of the suspension",
      ],
    },

    {
      day: "RACING RESUMES",

      label: "STEP 05",

      events: [
        "Drivers return to the circuit",

        "The race continues under the restart procedure",

        "Teams immediately reassess tyre and race strategy",

        "The remaining race distance continues to count toward the final result",
      ],
    },
  ],

  strategyLabel: "STRATEGY RESET",

  strategyTitle: "A red flag can give teams a second chance.",

  strategyDescription:
    "A race suspension can dramatically change the strategic picture. A team that was struggling with tyre wear or track position may suddenly get an opportunity to rethink its approach. This is one reason red-flag periods can produce some of the biggest turning points in a Grand Prix.",

  factTitle: "RED FLAG FACT",

  fact:
    "A red flag does not automatically mean the race is finished. If the regulations and conditions allow it, the Grand Prix can resume after the problem that caused the suspension has been dealt with.",

  quiz: {
    question:
      "What does a red flag mean during a Formula 1 race?",

    options: [
      "The fastest driver has won",

      "The race has been stopped",

      "All drivers must immediately retire",

      "The Safety Car has won the race",
    ],

    correctAnswer: "The race has been stopped",

    explanation:
      "A red flag stops normal racing. Drivers follow race-control instructions while officials deal with the situation and determine whether the race can resume.",
  },

  nextLesson: "Technical Rules & Disqualifications",

  nextLink: "/Learn/technical-rules-disqualifications",
},

// =========================================================
// SECTION 04 — RULES & RACE CONTROL
// LESSON 06 — TECHNICAL RULES & DISQUALIFICATIONS
// =========================================================

{
  slug: "technical-rules-disqualifications",

  title: "Technical Rules & Disqualifications",

  subtitle:
    "Learn how Formula 1 technical regulations keep the cars within the rules and what can happen when a car fails to comply.",

  category: "Rules & Race Control",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "The car has to be legal.",

  briefingDescription:
    "Formula 1 is governed by detailed technical regulations that define how cars can be designed and operated. The rules cover areas such as dimensions, aerodynamics, weight, power-unit components and many other parts of the car.",

  whyTitle: "Speed is not enough.",

  whyDescription:
    "An F1 car can be extremely fast and still lose its result if it does not comply with the regulations. Teams therefore have to find performance while staying within a very precise technical rulebook.",

  intro:
    "Formula 1 technical regulations define the requirements that every car must meet. The FIA can inspect cars during and after sessions to check whether they comply with the rules. A technical infringement can lead to a penalty or, in serious cases, disqualification.",

  learningPoints: [
    "Understand what technical regulations are",

    "Learn why FIA checks are important",

    "Understand the difference between a sporting and technical infringement",

    "Learn what parc fermé means",

    "Understand how a driver or team can be disqualified",

    "Learn why post-race inspections can change results",
  ],

  controlLabel: "THE TECHNICAL RULEBOOK",

  controlTitle: "Keeping every car within the rules",

  controlDescription:
    "Teams constantly search for performance, but every development has to remain inside the technical regulations. FIA officials can inspect cars and components to make sure the rules are being followed.",

  timeline: [
    {
      day: "CAR DESIGN",

      label: "STEP 01",

      events: [
        "Teams design their cars around the technical regulations",

        "Aerodynamics, dimensions, weight and components must comply with the rules",

        "Engineers search for performance without crossing regulatory limits",
      ],
    },

    {
      day: "PARC FERMÉ",

      label: "STEP 02",

      events: [
        "Cars can become subject to parc fermé restrictions",

        "Teams have limited freedom to make changes to the car",

        "The purpose is to prevent teams from fundamentally changing the car after qualifying",
      ],
    },

    {
      day: "FIA INSPECTION",

      label: "STEP 03",

      events: [
        "FIA officials can inspect cars and components",

        "Measurements can be taken to check compliance",

        "Technical data and components can be examined",

        "The FIA can investigate possible infringements",
      ],
    },

    {
      day: "INFRINGEMENT",

      label: "STEP 04",

      events: [
        "A car or team may be found to have breached a regulation",

        "Stewards consider the circumstances",

        "The sporting consequences depend on the relevant regulations and infringement",
      ],
    },

    {
      day: "PENALTY OR DISQUALIFICATION",

      label: "STEP 05",

      events: [
        "A technical infringement can affect the result",

        "A driver may receive a sporting penalty",

        "A car can be disqualified from a session or race",

        "The classification can therefore change after the chequered flag",
      ],
    },
  ],

  strategyLabel: "ENGINEERING & COMPLIANCE",

  strategyTitle: "Finding performance without breaking the rules.",

  strategyDescription:
    "Formula 1 teams spend enormous amounts of time understanding the regulations. Engineers look for legal ways to improve aerodynamic efficiency, tyre performance, mechanical grip and energy usage. The challenge is finding performance while remaining completely compliant.",

  factTitle: "TECHNICAL FACT",

  fact:
    "A Formula 1 result is not always completely final when the chequered flag falls. Post-race technical inspections can identify an infringement that changes the classification.",

  quiz: {
    question:
      "Why can a Formula 1 car be disqualified after finishing a race?",

    options: [
      "Because it finished too quickly",

      "Because it did not comply with the regulations",

      "Because the driver used too many tyres",

      "Because it crossed the finish line first",
    ],

    correctAnswer: "Because it did not comply with the regulations",

    explanation:
      "F1 cars must comply with detailed technical and sporting regulations. If a car is found to have breached the applicable rules, the stewards can impose the relevant penalty, which can include disqualification.",
  },

  nextLesson: "Championship Points",

  nextLink: "/Learn/championship-points",
},

// =========================================================
// SECTION 05 — CHAMPIONSHIP & F1 BEYOND THE RACE
// LESSON 01 — CHAMPIONSHIP POINTS
// =========================================================

{
  slug: "championship-points",

  title: "Championship Points",

  subtitle:
    "Learn how Formula 1 points are awarded and how every finishing position contributes to the championship.",

  category: "Championship & F1 Beyond the Race",

  difficulty: "Beginner",

  readTime: "7 min",

  briefingTitle: "Every point counts.",

  briefingDescription:
    "Formula 1 is not decided by a single race. Drivers and teams collect championship points throughout the season, with their results adding together to determine the Drivers' and Constructors' Championships.",

  whyTitle: "The championship is a season-long battle.",

  whyDescription:
    "A driver can win a race and still lose the championship. Consistency matters because points are collected across many Grands Prix. A strong finish, a podium or even a single point can become important when the season reaches its final stages.",

  intro:
    "Championship points are awarded according to a driver's finishing position in a Grand Prix and, where applicable, other official results. These points are added together throughout the season to determine the championship standings.",

  learningPoints: [
    "Understand how Formula 1 championship points work",

    "Learn why finishing position matters",

    "Understand the difference between race points and championship standings",

    "Learn how points accumulate throughout a season",

    "Understand how Drivers' and Constructors' Championships use points",

    "Learn why consistency can be as important as race wins",
  ],

  controlLabel: "THE POINTS SYSTEM",

  controlTitle: "Turning race results into championship points",

  controlDescription:
    "Every Grand Prix can change the championship standings. Drivers earn points based on their classified finishing position, and those points are added to their season total.",

  timeline: [
    {
      day: "RACE RESULT",

      label: "STEP 01",

      events: [
        "Drivers finish the Grand Prix",

        "The final classification is established",

        "Drivers in eligible finishing positions receive championship points",
      ],
    },

    {
      day: "POINTS AWARDED",

      label: "STEP 02",

      events: [
        "Higher finishing positions receive more points",

        "Lower eligible positions receive fewer points",

        "Drivers outside the points-scoring positions receive no race points",
      ],
    },

    {
      day: "POINTS ADDED",

      label: "STEP 03",

      events: [
        "The driver's new points are added to their season total",

        "The championship standings are updated",

        "A driver can move up or down the standings depending on other results",
      ],
    },

    {
      day: "SEASON BATTLE",

      label: "STEP 04",

      events: [
        "Points accumulate across the season",

        "Consistency can become extremely valuable",

        "A driver does not need to win every race to fight for the championship",
      ],
    },

    {
      day: "FINAL STANDINGS",

      label: "STEP 05",

      events: [
        "The driver with the most championship points at the end of the season wins the Drivers' Championship",

        "Teams accumulate points through their drivers",

        "The team with the most Constructors' Championship points wins the Constructors' Championship",
      ],
    },
  ],

  strategyLabel: "CHAMPIONSHIP THINKING",

  strategyTitle: "Winning is not the only way to win a championship.",

  strategyDescription:
    "A driver who finishes second consistently can sometimes score more championship points than a driver who wins several races but regularly fails to finish. This is why teams care about reliability, consistency and avoiding unnecessary mistakes throughout the season.",

  factTitle: "CHAMPIONSHIP FACT",

  fact:
    "Formula 1 championships are decided by accumulated points rather than simply counting race wins. Every race therefore contributes to the championship battle.",

  quiz: {
    question:
      "What determines a driver's position in the Drivers' Championship?",

    options: [
      "The number of race wins only",

      "Their accumulated championship points",

      "Their qualifying position only",

      "Their fastest lap from the season",
    ],

    correctAnswer: "Their accumulated championship points",

    explanation:
      "Drivers collect championship points throughout the season, and their accumulated total determines their position in the Drivers' Championship.",
  },

  nextLesson: "Drivers' Championship",

  nextLink: "/Learn/drivers-championship",
},

// =========================================================
// SECTION 05 — CHAMPIONSHIP & F1 BEYOND THE RACE
// LESSON 02 — DRIVERS' CHAMPIONSHIP
// =========================================================

{
  slug: "drivers-championship",

  title: "Drivers' Championship",

  subtitle:
    "Learn how Formula 1 decides the world's champion driver over an entire season.",

  category: "Championship & F1 Beyond the Race",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "One driver. One championship.",

  briefingDescription:
    "The Drivers' Championship is a season-long competition between Formula 1 drivers. Every eligible result contributes points to a driver's total, and the driver who finishes the season with the highest points total becomes World Champion.",

  whyTitle: "The championship is bigger than one race.",

  whyDescription:
    "A driver can dominate one Grand Prix but still be behind in the championship. What matters is what happens across the entire season. Race wins, podiums, points-scoring finishes, retirements and the results of rivals all contribute to the title fight.",

  intro:
    "The Drivers' Championship tracks the performance of individual drivers throughout the Formula 1 season. Points earned from eligible races and sprint events are accumulated in the championship standings.",

  learningPoints: [
    "Understand what the Drivers' Championship is",

    "Learn how a driver's points accumulate throughout a season",

    "Understand why consistency matters",

    "Learn how race wins and podiums affect the championship",

    "Understand how retirements can hurt a title campaign",

    "Learn how the championship leader can change from race to race",
  ],

  controlLabel: "THE TITLE BATTLE",

  controlTitle: "How a driver becomes World Champion",

  controlDescription:
    "Drivers collect championship points throughout the season. Their totals are compared after each event, creating a constantly changing championship battle.",

  timeline: [
    {
      day: "SEASON START",

      label: "STEP 01",

      events: [
        "All drivers begin the championship with zero points",

        "The first Grand Prix provides the first opportunity to score",

        "Early results establish the initial championship order",
      ],
    },

    {
      day: "RACE RESULTS",

      label: "STEP 02",

      events: [
        "Drivers earn points according to their eligible results",

        "Strong finishes increase a driver's championship total",

        "Retirements or non-scoring finishes can create a points deficit",
      ],
    },

    {
      day: "STANDINGS CHANGE",

      label: "STEP 03",

      events: [
        "The championship standings are updated after each event",

        "A driver can gain or lose positions relative to their rivals",

        "The championship leader can change throughout the season",
      ],
    },

    {
      day: "TITLE FIGHT",

      label: "STEP 04",

      events: [
        "Drivers and teams compare their points totals",

        "Consistency becomes increasingly important",

        "A small points advantage can become significant late in the season",
      ],
    },

    {
      day: "CHAMPION",

      label: "FINAL RESULT",

      events: [
        "The season's points are added together",

        "The driver with the highest championship total wins the Drivers' Championship",

        "The champion is officially crowned at the end of the championship season",
      ],
    },
  ],

  strategyLabel: "CHAMPIONSHIP BATTLE",

  strategyTitle: "Consistency can beat spectacular weekends.",

  strategyDescription:
    "Imagine two drivers. One wins several races but retires frequently, while another finishes near the front almost every weekend. The second driver can potentially build a stronger championship campaign because points are accumulated throughout the entire season.",

  factTitle: "DRIVERS' CHAMPIONSHIP FACT",

  fact:
    "A driver does not have to win the most Grands Prix to become World Champion. The title is decided by the driver's accumulated championship points over the season.",

  quiz: {
    question:
      "What does a driver need to have at the end of the season to win the Drivers' Championship?",

    options: [
      "The most pole positions",

      "The most fastest laps",

      "The highest championship points total",

      "The most race starts",
    ],

    correctAnswer:
      "The highest championship points total",

    explanation:
      "The Drivers' Championship is decided by the accumulated championship points earned throughout the season.",
  },

  nextLesson: "Constructors' Championship",

  nextLink: "/Learn/constructors-championship",
},

// =========================================================
// SECTION 05 — CHAMPIONSHIP & F1 BEYOND THE RACE
// LESSON 03 — CONSTRUCTORS' CHAMPIONSHIP
// =========================================================

{
  slug: "constructors-championship",

  title: "Constructors' Championship",

  subtitle:
    "Learn how Formula 1 teams compete for the Constructors' Championship and how both drivers contribute to the team's total.",

  category: "Championship & F1 Beyond the Race",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Two championships. One season.",

  briefingDescription:
    "Formula 1 has two major championships: the Drivers' Championship and the Constructors' Championship. While the Drivers' Championship focuses on individual drivers, the Constructors' Championship measures the combined performance of a team.",

  whyTitle: "Every team result matters.",

  whyDescription:
    "A team has two cars competing throughout the season. The championship points scored by its drivers contribute to the team's Constructors' Championship total, making both sides of the garage important.",

  intro:
    "The Constructors' Championship is the competition between Formula 1 teams. Points scored by a team's eligible drivers are added together throughout the season to determine the team's championship position.",

  learningPoints: [
    "Understand what the Constructors' Championship is",

    "Learn how drivers contribute points to their team",

    "Understand the difference between the Drivers' and Constructors' Championships",

    "Learn why both cars are important to a team's championship",

    "Understand how teams can gain or lose positions in the standings",

    "Learn why the Constructors' Championship is important to an F1 team",
  ],

  controlLabel: "THE TEAM CHAMPIONSHIP",

  controlTitle: "How teams fight for the title",

  controlDescription:
    "Every championship point scored by a team's eligible drivers contributes to the Constructors' Championship. Teams therefore need both cars to perform consistently throughout the season.",

  timeline: [
    {
      day: "TWO CARS",

      label: "STEP 01",

      events: [
        "Each Formula 1 team normally enters two cars",

        "Both drivers compete for championship points",

        "Each driver's results can contribute to the team's championship total",
      ],
    },

    {
      day: "RACE RESULTS",

      label: "STEP 02",

      events: [
        "Drivers finish the Grand Prix",

        "Eligible championship points are awarded",

        "The points scored by the team's drivers are added to the team's total",
      ],
    },

    {
      day: "STANDINGS",

      label: "STEP 03",

      events: [
        "Teams are ranked according to their accumulated points",

        "The standings are updated throughout the season",

        "A team can move ahead of a rival after a strong race weekend",
      ],
    },

    {
      day: "TEAM BATTLE",

      label: "STEP 04",

      events: [
        "Teams compete against every other constructor",

        "Reliability and consistency can be extremely important",

        "Having both cars regularly score points can create a major advantage",
      ],
    },

    {
      day: "CONSTRUCTORS' CHAMPION",

      label: "FINAL RESULT",

      events: [
        "Points are accumulated throughout the season",

        "The team with the highest championship points total wins",

        "The winning constructor receives the Constructors' Championship title",
      ],
    },
  ],

  strategyLabel: "TEAM PERFORMANCE",

  strategyTitle: "Two cars can make a huge difference.",

  strategyDescription:
    "A team with one exceptionally fast driver can still lose ground if its second car regularly fails to score. Strong performance from both sides of the garage can give a constructor a major advantage over its rivals.",

  factTitle: "CONSTRUCTORS' FACT",

  fact:
    "The Constructors' Championship is based on the championship points scored by a team's drivers. This means every point scored by either car can contribute to the team's fight for the title.",

  quiz: {
    question:
      "How does a team normally earn points in the Constructors' Championship?",

    options: [
      "Only from its fastest driver",

      "From the championship points scored by its drivers",

      "From its qualifying positions only",

      "From the number of race wins only",
    ],

    correctAnswer:
      "From the championship points scored by its drivers",

    explanation:
      "The points scored by a team's eligible drivers contribute to its Constructors' Championship total throughout the season.",
  },

  nextLesson: "Sprint Weekends",

  nextLink: "/Learn/sprint-weekends",
},

// =========================================================
// SECTION 05 — CHAMPIONSHIP & F1 BEYOND THE RACE
// LESSON 04 — SPRINT WEEKENDS
// =========================================================

{
  slug: "sprint-weekends",

  title: "Sprint Weekends",

  subtitle:
    "Learn how Sprint events change the normal Formula 1 weekend and create another opportunity for drivers and teams to score championship points.",

  category: "Championship & F1 Beyond the Race",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "More racing. Less room for mistakes.",

  briefingDescription:
    "Some Formula 1 weekends use a Sprint format instead of the traditional weekend schedule. A Sprint weekend gives fans an additional competitive race while changing how teams prepare their cars and manage the limited practice time.",

  whyTitle: "Sprint weekends change the rhythm.",

  whyDescription:
    "A normal Grand Prix weekend gives teams several opportunities to learn about the car before the race. A Sprint weekend provides much less practice time, meaning teams have to make important setup decisions earlier and drivers have fewer opportunities to experiment.",

  intro:
    "A Sprint weekend is a Formula 1 event that includes a shorter Sprint race in addition to the main Grand Prix. Sprint weekends use a different schedule from a conventional Grand Prix weekend and provide additional opportunities to score championship points.",

  learningPoints: [
    "Understand what a Sprint weekend is",

    "Learn how a Sprint differs from the Grand Prix",

    "Understand why Sprint weekends provide less practice time",

    "Learn how Sprint results can contribute championship points",

    "Understand why teams must make setup decisions quickly",

    "Learn how Sprint weekends can affect championship battles",
  ],

  controlLabel: "THE SPRINT FORMAT",

  controlTitle: "Two competitive races in one weekend",

  controlDescription:
    "A Sprint weekend combines a shorter Sprint event with the main Grand Prix. The exact schedule differs from a traditional weekend, so teams must prepare for competitive running much earlier.",

  timeline: [
    {
      day: "PRACTICE",

      label: "STEP 01",

      events: [
        "Teams have limited practice time to understand the car",

        "Drivers and engineers collect important information",

        "Setup decisions have to be made quickly",
      ],
    },

    {
      day: "SPRINT QUALIFYING",

      label: "STEP 02",

      events: [
        "Drivers compete to determine the Sprint starting order",

        "Teams prepare the car for a short, competitive event",

        "Every qualifying position can become important",
      ],
    },

    {
      day: "SPRINT",

      label: "STEP 03",

      events: [
        "Drivers compete in a shorter race",

        "Championship points are available",

        "Drivers fight for positions without the same length as the main Grand Prix",

        "The result can affect the championship standings",
      ],
    },

    {
      day: "GRAND PRIX QUALIFYING",

      label: "STEP 04",

      events: [
        "Drivers then compete for their starting positions for the main Grand Prix",

        "Teams analyse information collected from the Sprint",

        "Engineers can use what they learned to prepare for the Grand Prix",
      ],
    },

    {
      day: "GRAND PRIX",

      label: "STEP 05",

      events: [
        "The main Grand Prix takes place",

        "Drivers compete for the largest race result of the weekend",

        "Grand Prix points are added to the championship",

        "Teams combine the weekend's results when assessing their championship position",
      ],
    },
  ],

  strategyLabel: "SPRINT STRATEGY",

  strategyTitle: "Less practice means more risk.",

  strategyDescription:
    "With limited practice time, teams have less opportunity to test different setups. A setup that looks promising in a short Sprint can behave differently over the longer Grand Prix, so engineers must balance immediate performance with the demands of the full race.",

  factTitle: "SPRINT FACT",

  fact:
    "Sprint weekends provide an additional competitive session in which drivers can score championship points, making them particularly important during a close championship battle.",

  quiz: {
    question:
      "What is one major difference between a Sprint weekend and a traditional Grand Prix weekend?",

    options: [
      "There is no qualifying",

      "There is an additional shorter competitive race",

      "The main Grand Prix does not take place",

      "Drivers cannot score championship points",
    ],

    correctAnswer:
      "There is an additional shorter competitive race",

    explanation:
      "A Sprint weekend includes a shorter Sprint event in addition to the main Grand Prix, creating another competitive opportunity during the weekend.",
  },

  nextLesson: "F1 Teams & Drivers",

  nextLink: "/Learn/f1-teams-drivers",
},

// =========================================================
// SECTION 05 — CHAMPIONSHIP & F1 BEYOND THE RACE
// LESSON 05 — F1 TEAMS & DRIVERS
// =========================================================

{
  slug: "f1-teams-drivers",

  title: "F1 Teams & Drivers",

  subtitle:
    "Understand how Formula 1 teams and drivers work together and why both sides of the garage matter.",

  category: "Championship & F1 Beyond the Race",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "It takes more than one driver.",

  briefingDescription:
    "Formula 1 is a team sport built around individual drivers. Every team operates two cars, with drivers working alongside engineers, mechanics, strategists and hundreds of other team members to compete throughout the season.",

  whyTitle: "The driver is only one part of the machine.",

  whyDescription:
    "A driver may be the person you see on television, but a successful F1 weekend depends on an enormous team working behind them. Engineers analyse data, mechanics prepare the car, strategists make decisions and the drivers turn that work into performance on track.",

  intro:
    "Formula 1 teams design and operate their cars while their drivers compete in them. The relationship between driver and team is essential because performance depends on both the car and the person controlling it.",

  learningPoints: [
    "Understand the relationship between an F1 team and its drivers",

    "Learn why teams normally have two cars",

    "Understand the roles of engineers, mechanics and strategists",

    "Learn why teammates can be both competitors and teammates",

    "Understand how driver results contribute to team performance",

    "Learn why communication is important during a race",
  ],

  controlLabel: "INSIDE AN F1 TEAM",

  controlTitle: "Everyone has a job to do",

  controlDescription:
    "An F1 team is made up of many specialists. Drivers, engineers, mechanics and strategists work together to extract the maximum performance from the car during every session.",

  timeline: [
    {
      day: "THE DRIVERS",

      label: "ROLE 01",

      events: [
        "Drive the Formula 1 car during sessions and races",

        "Provide feedback about the car",

        "Work with engineers to improve setup and performance",

        "Fight for points and race victories",
      ],
    },

    {
      day: "THE ENGINEERS",

      label: "ROLE 02",

      events: [
        "Analyse telemetry and performance data",

        "Help develop the car setup",

        "Monitor tyres, temperatures and performance",

        "Communicate important information to the driver",
      ],
    },

    {
      day: "THE MECHANICS",

      label: "ROLE 03",

      events: [
        "Prepare and maintain the cars",

        "Perform pit stops during races",

        "Inspect components and make adjustments",

        "Work to keep the cars reliable and safe",
      ],
    },

    {
      day: "THE STRATEGISTS",

      label: "ROLE 04",

      events: [
        "Analyse the developing race",

        "Monitor competitors and track conditions",

        "Help decide pit-stop timing and tyre strategy",

        "Communicate strategic decisions to the driver",
      ],
    },

    {
      day: "THE TEAMMATES",

      label: "ROLE 05",

      events: [
        "Two drivers normally compete for the same team",

        "Both drivers can score points for the Constructors' Championship",

        "They share the same team resources but compete against each other on track",

        "Teams must balance individual competition with overall team performance",
      ],
    },
  ],

  strategyLabel: "TEAM RADIO",

  strategyTitle: "Communication can change a race.",

  strategyDescription:
    "Drivers constantly communicate with their engineers during a Grand Prix. They can report tyre behaviour, traffic, car balance and problems, while the team provides information about gaps, competitors, weather and strategy.",

  factTitle: "F1 TEAM FACT",

  fact:
    "A modern Formula 1 team involves a huge number of people working across engineering, operations, manufacturing, strategy, logistics and many other areas. The driver is just one part of a much larger organisation.",

  quiz: {
    question:
      "Why is communication between a driver and their team important during a race?",

    options: [
      "It allows the driver to change the circuit",

      "It helps the team make decisions using information from the driver and the race",

      "It gives the driver extra championship points",

      "It allows the driver to control other cars",
    ],

    correctAnswer:
      "It helps the team make decisions using information from the driver and the race",

    explanation:
      "Drivers and teams constantly exchange information during a race. This helps engineers and strategists understand the car and make decisions about tyres, strategy and race conditions.",
  },

  nextLesson: "The Championship Battle",

  nextLink: "/Learn/championship-battle",
},

// =========================================================
// SECTION 05 — CHAMPIONSHIP & F1 BEYOND THE RACE
// LESSON 06 — THE CHAMPIONSHIP BATTLE
// =========================================================

{
  slug: "championship-battle",

  title: "The Championship Battle",

  subtitle:
    "Bring everything together and understand how race results, points, consistency and strategy shape an F1 championship.",

  category: "Championship & F1 Beyond the Race",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "A championship is won over a season.",

  briefingDescription:
    "Winning a Formula 1 World Championship is not about having one great race. Drivers and teams must consistently score points throughout the season while dealing with different circuits, competitors, reliability problems and changing conditions.",

  whyTitle: "Every race can matter.",

  whyDescription:
    "A driver can win several races and still lose a championship if a rival consistently finishes near the front. Conversely, a single poor result can become extremely important when the championship is decided by only a few points.",

  intro:
    "The Formula 1 championship is a season-long competition. Drivers earn points from their race results and eligible Sprint results, while teams combine the points scored by their two drivers for the Constructors' Championship. The driver and team with the most points at the end of the season win their respective championships.",

  learningPoints: [
    "Understand how a championship develops over a full season",

    "Learn why consistency is important",

    "Understand how race and Sprint results affect the standings",

    "Learn how rival drivers can change the championship picture",

    "Understand the difference between the Drivers' and Constructors' battles",

    "Learn why reliability and strategy can influence a championship",
  ],

  controlLabel: "THE CHAMPIONSHIP BATTLE",

  controlTitle: "From one race to a whole season",

  controlDescription:
    "Every Grand Prix adds another chapter to the championship. The standings can change after every race as drivers and teams gain points, lose opportunities and respond to their rivals.",

  timeline: [
    {
      day: "RACE RESULT",

      label: "STEP 01",

      events: [
        "Drivers finish the Grand Prix",

        "Championship points are awarded according to the result",

        "The result is added to the season standings",
      ],
    },

    {
      day: "POINTS TABLE",

      label: "STEP 02",

      events: [
        "Drivers are ranked according to their accumulated points",

        "Teams combine the points scored by their two drivers",

        "The standings can change after every event",
      ],
    },

    {
      day: "THE RIVALRY",

      label: "STEP 03",

      events: [
        "Drivers compete against their championship rivals",

        "A rival finishing ahead can reduce or increase the points gap",

        "Consistency can become more important as the season progresses",
      ],
    },

    {
      day: "THE FINAL RACES",

      label: "STEP 04",

      events: [
        "The remaining races become increasingly important",

        "Small points differences can decide the championship",

        "Teams may change their priorities depending on the standings",
      ],
    },

    {
      day: "CHAMPIONSHIP DECIDED",

      label: "STEP 05",

      events: [
        "The driver with the most championship points wins the Drivers' Championship",

        "The team with the most combined points wins the Constructors' Championship",

        "The season ends with the championship standings determining the winners",
      ],
    },
  ],

  strategyLabel: "CHAMPIONSHIP STRATEGY",

  strategyTitle: "Consistency beats one perfect weekend.",

  strategyDescription:
    "A championship contender needs more than race wins. Finishing races, collecting points and avoiding unnecessary mistakes can be just as important. Teams also have to consider reliability, tyre strategy, development and the performance of their rivals across the entire season.",

  factTitle: "CHAMPIONSHIP FACT",

  fact:
    "The Drivers' Championship and Constructors' Championship are separate competitions. A driver competes for the Drivers' title, while their results contribute points toward their team's Constructors' Championship total.",

  quiz: {
    question:
      "What ultimately determines the Formula 1 Drivers' World Champion?",

    options: [
      "The driver with the most race wins",

      "The driver with the most pole positions",

      "The driver with the most championship points",

      "The driver with the fastest average lap",
    ],

    correctAnswer:
      "The driver with the most championship points",

    explanation:
      "The Drivers' Championship is decided by accumulated championship points over the season. Race wins are valuable because they normally provide many points, but the championship is ultimately determined by the total points.",
  },

  nextLesson: "Formula 1 Glossary",

  nextLink: "/Learn/f1-glossary",
},

// =========================================================
// SECTION 06 — F1 GLOSSARY & FINAL KNOWLEDGE
// LESSON 01 — F1 GLOSSARY: THE ESSENTIALS
// =========================================================

{
  slug: "f1-glossary",

  title: "F1 Glossary: The Essentials",

  subtitle:
    "Learn the Formula 1 words and phrases you will hear constantly during a race broadcast.",

  category: "F1 Glossary & Final Knowledge",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Speak the language of F1.",

  briefingDescription:
    "Formula 1 has its own vocabulary. Commentators, engineers and drivers use terms that can sound confusing when you are new to the sport. Learning these words makes it much easier to understand what is happening on track.",

  whyTitle: "The words explain the action.",

  whyDescription:
    "When a commentator says a driver has gone wide at the apex, is struggling in dirty air or has gained time through a sector, they are describing something specific about the car or race. Understanding these terms lets you follow the action without needing everything explained.",

  intro:
    "This lesson introduces some of the most common Formula 1 terms used when describing the circuit, cars and racing action.",

  learningPoints: [
    "Understand what an apex is",

    "Learn what a chicane and hairpin are",

    "Understand the meaning of the racing line",

    "Learn what a sector is",

    "Understand slipstream and dirty air",

    "Learn the difference between clean air and traffic",
  ],

  controlLabel: "THE F1 VOCABULARY",

  controlTitle: "Words you will hear during every race",

  controlDescription:
    "These terms describe the circuit, the position of the car and the aerodynamic conditions drivers experience while racing.",

  timeline: [
    {
      day: "APEX",

      label: "CIRCUIT TERM",

      events: [
        "The apex is the point on the inside of a corner that a driver aims to approach or clip",

        "Finding the correct apex can help a driver carry speed through a corner",

        "The ideal racing line can change depending on the corner and strategy",
      ],
    },

    {
      day: "CHICANE",

      label: "CIRCUIT TERM",

      events: [
        "A chicane is a sequence of corners placed close together",

        "Drivers change direction rapidly through the section",

        "Chicanes can be important overtaking and braking zones",
      ],
    },

    {
      day: "HAIRPIN",

      label: "CIRCUIT TERM",

      events: [
        "A hairpin is a very tight corner",

        "The car must slow dramatically compared with faster corners",

        "Hairpins can create strong overtaking opportunities because of the long acceleration zones that can follow them",
      ],
    },

    {
      day: "RACING LINE",

      label: "DRIVING TERM",

      events: [
        "The racing line is the path a driver takes around the circuit",

        "Drivers generally try to use a line that allows them to carry strong speed",

        "The best line can depend on tyre condition, traffic and the behaviour of the car",
      ],
    },

    {
      day: "SECTOR",

      label: "TIMING TERM",

      events: [
        "A circuit is divided into timing sectors",

        "Each sector records part of a driver's lap time",

        "Comparing sector times helps teams identify where a driver is gaining or losing performance",
      ],
    },

    {
      day: "SLIPSTREAM",

      label: "AERODYNAMIC TERM",

      events: [
        "A following car can experience reduced aerodynamic drag behind another car",

        "This can allow the following driver to gain speed on a straight",

        "Drivers can use the effect to close the gap to a rival",
      ],
    },

    {
      day: "DIRTY AIR",

      label: "AERODYNAMIC TERM",

      events: [
        "A car travelling behind another car can encounter disturbed airflow",

        "This can reduce the following car's aerodynamic performance",

        "The effect can make it harder to follow closely through corners",
      ],
    },

    {
      day: "CLEAN AIR",

      label: "RACE TERM",

      events: [
        "A car in clean air is not closely affected by another car's disturbed airflow",

        "This can allow the driver to extract more consistent aerodynamic performance",

        "Teams often value clean air when planning pit-stop strategy",
      ],
    },
  ],

  strategyLabel: "LEARN THE LANGUAGE",

  strategyTitle: "Once you know the words, the race makes more sense.",

  strategyDescription:
    "When you understand terms such as apex, sector, slipstream, dirty air and racing line, race commentary becomes much easier to follow. Instead of hearing unfamiliar words, you can connect them directly to what the cars are doing on track.",

  factTitle: "F1 GLOSSARY FACT",

  fact:
    "Formula 1 teams use precise technical language to describe almost every aspect of a car and race. Learning the common terms gives you a foundation for understanding more advanced F1 concepts.",

  quiz: {
    question:
      "What is the apex of a corner?",

    options: [
      "The fastest part of a straight",

      "The point on the inside of a corner that a driver aims to approach or clip",

      "The starting position of a race",

      "The area where cars enter the pit lane",
    ],

    correctAnswer:
      "The point on the inside of a corner that a driver aims to approach or clip",

    explanation:
      "The apex is the point on the inside of a corner that forms part of the ideal racing line through that corner.",
  },

  nextLesson: "F1 Car Terms",

  nextLink: "/Learn/f1-car-terms",
},

// =========================================================
// SECTION 06 — F1 GLOSSARY & FINAL KNOWLEDGE
// LESSON 02 — F1 CAR TERMS
// =========================================================

{
  slug: "f1-car-terms",

  title: "F1 Car Terms",

  subtitle:
    "Learn the technical words used to describe the parts of a Formula 1 car and how they affect performance.",

  category: "F1 Glossary & Final Knowledge",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Know the machine.",

  briefingDescription:
    "Formula 1 cars are made up of highly specialised components. Commentators and engineers constantly refer to parts of the car when explaining performance, so understanding these terms makes technical discussions much easier to follow.",

  whyTitle: "Every component affects performance.",

  whyDescription:
    "An F1 car is a carefully balanced machine. Aerodynamic components generate downforce, while mechanical systems help the driver control the car. Changing one part can affect the behaviour of the entire car.",

  intro:
    "This lesson introduces some of the most important terms used when talking about Formula 1 car design, aerodynamics and mechanical performance.",

  learningPoints: [
    "Understand the purpose of the front wing",

    "Learn what the rear wing does",

    "Understand downforce and aerodynamic drag",

    "Learn what the floor and diffuser do",

    "Understand the basic role of suspension",

    "Learn why teams constantly adjust the aerodynamic balance of the car",
  ],

  controlLabel: "THE F1 CAR",

  controlTitle: "The parts that create performance",

  controlDescription:
    "Every major component of an F1 car has a purpose. Some generate aerodynamic performance while others help the car put its power onto the circuit and remain stable through corners.",

  timeline: [
    {
      day: "FRONT WING",

      label: "COMPONENT 01",

      events: [
        "Controls airflow around the front of the car",

        "Helps generate aerodynamic downforce",

        "Influences the balance of the car through corners",

        "Its design can affect how air reaches other parts of the car",
      ],
    },

    {
      day: "FLOOR",

      label: "COMPONENT 02",

      events: [
        "The floor is a major part of the car's aerodynamic system",

        "Airflow underneath the car contributes significantly to downforce",

        "Teams carefully control the airflow beneath the car",

        "The floor can strongly influence overall aerodynamic performance",
      ],
    },

    {
      day: "DIFFUSER",

      label: "COMPONENT 03",

      events: [
        "The diffuser is located toward the rear underside of the car",

        "It helps manage and expand airflow leaving beneath the car",

        "Its design contributes to aerodynamic performance",

        "It works together with the floor and rest of the aerodynamic package",
      ],
    },

    {
      day: "REAR WING",

      label: "COMPONENT 04",

      events: [
        "Helps generate aerodynamic downforce at the rear of the car",

        "Its aerodynamic configuration affects the balance between grip and drag",

        "Teams can change the design and setup depending on the circuit",

        "The rear wing is particularly important on high-speed circuits",
      ],
    },

    {
      day: "DOWNFORCE",

      label: "AERODYNAMIC TERM",

      events: [
        "Downforce pushes the car toward the circuit",

        "More aerodynamic load can increase cornering grip",

        "Greater downforce can also create additional aerodynamic drag",

        "Teams constantly balance downforce and straight-line performance",
      ],
    },

    {
      day: "DRAG",

      label: "AERODYNAMIC TERM",

      events: [
        "Drag is aerodynamic resistance acting against the car's movement",

        "Reducing drag can improve straight-line speed",

        "Aerodynamic configurations that create more downforce can also create more drag",

        "Teams must find the right compromise for each circuit",
      ],
    },

    {
      day: "SUSPENSION",

      label: "MECHANICAL TERM",

      events: [
        "Connects the wheels to the car",

        "Helps control how the car responds to bumps, kerbs and changes in load",

        "Influences tyre contact with the circuit",

        "Its setup can affect handling and driver confidence",
      ],
    },
  ],

  strategyLabel: "CAR SETUP",

  strategyTitle: "Finding the right balance.",

  strategyDescription:
    "Teams rarely want maximum downforce or minimum drag at all times. A high-downforce setup may help through corners but cost speed on the straights, while a low-drag setup can improve straight-line speed but reduce cornering performance. Engineers must find the right compromise for each circuit.",

  factTitle: "F1 CAR FACT",

  fact:
    "Aerodynamic performance is one of the most important factors in modern Formula 1. Teams constantly work to generate useful downforce while keeping aerodynamic drag under control.",

  quiz: {
    question:
      "What is the main effect of aerodynamic downforce on an F1 car?",

    options: [
      "It pushes the car toward the circuit and can increase cornering grip",

      "It makes the engine produce more horsepower",

      "It makes the tyres harder",

      "It reduces the weight of the car",
    ],

    correctAnswer:
      "It pushes the car toward the circuit and can increase cornering grip",

    explanation:
      "Aerodynamic downforce pushes the car toward the track surface. This can increase the load on the tyres and help the car generate more cornering grip.",
  },

  nextLesson: "Race & Strategy Terms",

  nextLink: "/Learn/race-strategy-terms",
},

// =========================================================
// SECTION 06 — F1 GLOSSARY & FINAL KNOWLEDGE
// LESSON 03 — RACE & STRATEGY TERMS
// =========================================================

{
  slug: "race-strategy-terms",

  title: "Race & Strategy Terms",

  subtitle:
    "Learn the words teams use when discussing tyres, pit stops, traffic and race strategy.",

  category: "F1 Glossary & Final Knowledge",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "There is more than one way to win a race.",

  briefingDescription:
    "Formula 1 strategy is built around decisions. Teams constantly evaluate tyres, pit-stop timing, traffic, weather and the behaviour of their rivals. Understanding the terminology makes these decisions much easier to follow.",

  whyTitle: "Strategy happens while the race is moving.",

  whyDescription:
    "A team may change its plan because a rival pits, a Safety Car appears, the weather changes or the tyres begin to wear. Knowing terms such as stint, undercut, overcut and pit window helps you understand why a driver suddenly changes strategy.",

  intro:
    "Race strategy terms describe how teams plan and react during a Grand Prix. Many of these terms are connected to tyre management, pit stops and the position of rival cars.",

  learningPoints: [
    "Understand what a stint is",

    "Learn what an undercut and overcut mean",

    "Understand the meaning of a pit window",

    "Learn what clean air and traffic mean in strategy",

    "Understand in-laps and out-laps",

    "Learn why teams sometimes change strategy during a race",
  ],

  controlLabel: "THE STRATEGY LANGUAGE",

  controlTitle: "How teams talk about the race",

  controlDescription:
    "Teams use specific terms to describe what the driver is doing, what the tyres are doing and how the race situation is developing.",

  timeline: [
    {
      day: "STINT",

      label: "STRATEGY TERM",

      events: [
        "A stint is the period a driver spends on a particular set of tyres between pit stops",

        "A race can contain several different stints",

        "Each stint can use a different tyre compound",
      ],
    },

    {
      day: "PIT WINDOW",

      label: "STRATEGY TERM",

      events: [
        "The pit window is the period during which a team considers making a pit stop",

        "Teams consider tyre life, traffic and the positions of rival drivers",

        "The ideal pit window can change during the race",
      ],
    },

    {
      day: "UNDERCUT",

      label: "STRATEGY MOVE",

      events: [
        "A driver pits before a rival they are racing",

        "The driver receives fresh tyres and attempts to set faster laps",

        "The goal is to gain enough time to emerge ahead when the rival eventually pits",
      ],
    },

    {
      day: "OVERCUT",

      label: "STRATEGY MOVE",

      events: [
        "A driver stays out while a rival pits",

        "The driver attempts to gain time by continuing on track",

        "The strategy can work when the driver's tyres remain competitive or when the rival loses time in traffic",
      ],
    },

    {
      day: "IN-LAP",

      label: "PIT STOP TERM",

      events: [
        "The in-lap is the lap a driver completes immediately before entering the pits",

        "Teams try to make this lap as fast as possible while preparing for the pit stop",

        "A strong in-lap can reduce the time lost during a strategic stop",
      ],
    },

    {
      day: "OUT-LAP",

      label: "PIT STOP TERM",

      events: [
        "The out-lap is the first lap after a driver leaves the pit lane",

        "The driver must bring the new tyres into their working range",

        "The performance of the out-lap can be important when fighting a rival",
      ],
    },

    {
      day: "CLEAN AIR",

      label: "TRACK POSITION",

      events: [
        "A car is in clean air when it is not closely affected by another car's traffic",

        "Clean air can allow a driver to maintain a more consistent pace",

        "Teams may pit strategically to give a driver clean air",
      ],
    },

    {
      day: "TRAFFIC",

      label: "RACE CONDITION",

      events: [
        "Traffic refers to other cars affecting a driver's race",

        "A slower car can cost a driver valuable lap time",

        "Traffic can influence when a team chooses to pit",
      ],
    },
  ],

  strategyLabel: "STRATEGY DECISIONS",

  strategyTitle: "The fastest strategy is not always obvious.",

  strategyDescription:
    "Teams have to make decisions using constantly changing information. A strategy that looks perfect before the race can become ineffective because of tyre degradation, traffic, weather, a Safety Car or the actions of a rival.",

  factTitle: "STRATEGY FACT",

  fact:
    "An undercut does not guarantee an overtake. Its success depends on factors such as tyre performance, pit-lane loss, traffic, track position and how quickly the rival responds.",

  quiz: {
    question:
      "What is an undercut?",

    options: [
      "Staying out longer than every other driver",

      "Pitting before a rival to use fresh tyres and gain time",

      "Starting the race from pole position",

      "Changing tyres during qualifying",
    ],

    correctAnswer:
      "Pitting before a rival to use fresh tyres and gain time",

    explanation:
      "An undercut happens when a driver pits before a rival and uses the performance of fresh tyres to try to gain enough time to emerge ahead once the rival makes their stop.",
  },

  nextLesson: "Timing & Performance Terms",

  nextLink: "/Learn/timing-performance-terms",
},

// =========================================================
// SECTION 06 — F1 GLOSSARY & FINAL KNOWLEDGE
// LESSON 04 — TIMING & PERFORMANCE TERMS
// =========================================================

{
  slug: "timing-performance-terms",

  title: "Timing & Performance Terms",

  subtitle:
    "Learn how Formula 1 timing screens measure lap times, gaps, sectors and driver performance.",

  category: "F1 Glossary & Final Knowledge",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "The numbers tell the story.",

  briefingDescription:
    "Formula 1 timing screens contain a huge amount of information. Lap times, gaps, intervals, sector times and deltas allow teams, drivers and fans to understand how the race is developing.",

  whyTitle: "Every tenth of a second matters.",

  whyDescription:
    "A driver can gain or lose time in different parts of a lap. Timing information shows where that time is being found and helps teams understand whether a driver is improving, struggling or catching a rival.",

  intro:
    "Timing screens are one of the best ways to understand what is happening during an F1 session. Once you know what the numbers mean, you can follow the race even without relying entirely on commentary.",

  learningPoints: [
    "Understand what a lap time represents",

    "Learn the difference between a gap and an interval",

    "Understand sector times",

    "Learn what a personal best means",

    "Understand delta times",

    "Learn how timing colours can indicate performance",
  ],

  controlLabel: "READING THE TIMING SCREEN",

  controlTitle: "Understanding the numbers",

  controlDescription:
    "Formula 1 timing information allows you to compare drivers, identify improvements and understand where time is being gained or lost around the circuit.",

  timeline: [
    {
      day: "LAP TIME",

      label: "01",

      events: [
        "A lap time measures how long a driver takes to complete one lap",

        "Faster lap times generally mean the driver is completing the circuit more quickly",

        "Lap times can change because of tyres, fuel, traffic, track conditions and car setup",
      ],
    },

    {
      day: "SECTOR TIME",

      label: "02",

      events: [
        "A circuit is divided into timing sectors",

        "Each sector records the driver's time through that section",

        "Comparing sectors shows where a driver is gaining or losing time",
      ],
    },

    {
      day: "GAP",

      label: "03",

      events: [
        "The gap usually describes the time between a driver and the race leader",

        "For example, +3.500 means the driver is 3.5 seconds behind the leader",

        "The gap can increase or decrease as the race develops",
      ],
    },

    {
      day: "INTERVAL",

      label: "04",

      events: [
        "The interval describes the time between a driver and the car immediately ahead",

        "It helps show how closely drivers are racing",

        "A small interval means the cars are close together on track in time",
      ],
    },

    {
      day: "PERSONAL BEST",

      label: "05",

      events: [
        "A personal best is a driver's fastest recorded time in the relevant session",

        "A driver can improve their personal best as the session continues",

        "Personal best sector times can also be recorded",
      ],
    },

    {
      day: "DELTA",

      label: "06",

      events: [
        "A delta compares one time or performance against another reference",

        "Teams can use deltas to understand whether a driver is gaining or losing time",

        "Delta information can be particularly useful during qualifying and pit-stop strategy",
      ],
    },

    {
      day: "FASTEST LAP",

      label: "07",

      events: [
        "The fastest lap is the quickest completed lap within the relevant session or race",

        "The fastest lap can change repeatedly as drivers improve",

        "A race's fastest lap is not necessarily the same as pole position",
      ],
    },

    {
      day: "TIMING COLOURS",

      label: "08",

      events: [
        "Timing displays can use colours to indicate performance",

        "A green sector commonly indicates a driver's personal best for that sector",

        "A purple sector commonly indicates the fastest sector of the session",

        "A yellow sector commonly indicates that the driver was slower than their personal best",
      ],
    },
  ],

  strategyLabel: "PERFORMANCE ANALYSIS",

  strategyTitle: "Where is the time being found?",

  strategyDescription:
    "Imagine two drivers are separated by only a few tenths of a second. The timing screen can reveal that one driver is faster in the first sector while the other gains time in the final sector. Engineers use this information to understand the strengths and weaknesses of the car.",

  factTitle: "TIMING FACT",

  fact:
    "A driver does not need to have the fastest time in every sector to set the fastest overall lap. A strong overall lap comes from combining the driver's best possible performance across the entire circuit.",

  quiz: {
    question:
      "What does the interval between two drivers normally show?",

    options: [
      "The difference in their championship points",

      "The time between one driver and the car immediately ahead",

      "The number of laps remaining",

      "The amount of fuel in each car",
    ],

    correctAnswer:
      "The time between one driver and the car immediately ahead",

    explanation:
      "The interval shows the time difference between a driver and the car immediately ahead of them in the relevant classification.",
  },

  nextLesson: "Driver & Race Control Terms",

  nextLink: "/Learn/driver-race-control-terms",
},

// =========================================================
// SECTION 06 — F1 GLOSSARY & FINAL KNOWLEDGE
// LESSON 05 — DRIVER & RACE CONTROL TERMS
// =========================================================

{
  slug: "driver-race-control-terms",

  title: "Driver & Race Control Terms",

  subtitle:
    "Learn the terms used to describe driver results, penalties, track limits and decisions made by race control.",

  category: "F1 Glossary & Final Knowledge",

  difficulty: "Beginner",

  readTime: "8 min",

  briefingTitle: "Not everything is decided on the stopwatch.",

  briefingDescription:
    "Formula 1 has sporting rules that govern what drivers can and cannot do on track. Race control and the stewards can issue instructions, investigate incidents and apply penalties when the regulations are broken.",

  whyTitle: "The classification can change after the race.",

  whyDescription:
    "A driver can cross the finish line in one position but later receive a penalty that changes their final classification. Understanding the terminology used by race control helps explain why this happens.",

  intro:
    "Formula 1 uses a large number of terms to describe driver results, incidents and sporting decisions. These terms appear frequently on timing screens, broadcasts and official race results.",

  learningPoints: [
    "Understand DNF, DNS and DSQ",

    "Learn what track limits mean",

    "Understand how penalties can affect a driver",

    "Learn what blue flags communicate",

    "Understand the formation lap",

    "Learn what parc fermé means",

    "Understand the role of race control and the stewards",
  ],

  controlLabel: "THE SPORTING LANGUAGE",

  controlTitle: "Terms used by race control",

  controlDescription:
    "These terms help describe what happens when a driver retires, receives a penalty, exceeds track limits or is given instructions during a Grand Prix.",

  timeline: [
    {
      day: "DNF",

      label: "RESULT",

      events: [
        "DNF means Did Not Finish",

        "It is used when a driver does not complete the race",

        "A mechanical failure, crash or other problem can result in a DNF",
      ],
    },

    {
      day: "DNS",

      label: "RESULT",

      events: [
        "DNS means Did Not Start",

        "It means the driver did not take the start of the race",

        "A driver can fail to start because of a technical, sporting or other issue",
      ],
    },

    {
      day: "DSQ",

      label: "RESULT",

      events: [
        "DSQ means Disqualified",

        "A driver can be removed from the classification for a sporting or technical infringement",

        "A disqualification can occur even after the driver has finished the race",
      ],
    },

    {
      day: "TRACK LIMITS",

      label: "ON-TRACK RULE",

      events: [
        "Drivers must keep the car within the permitted boundaries of the circuit",

        "Repeatedly exceeding track limits can result in warnings or penalties",

        "Track-limit rules can vary depending on the circuit and corner",
      ],
    },

    {
      day: "PENALTY",

      label: "RACE CONTROL",

      events: [
        "A penalty can be given when a driver or team breaks a sporting regulation",

        "Penalties can include time penalties, grid penalties or other sporting sanctions",

        "A penalty can change a driver's final classification",
      ],
    },

    {
      day: "BLUE FLAG",

      label: "DRIVER SIGNAL",

      events: [
        "A blue flag is used to communicate that a faster car is approaching",

        "During a race, it can indicate that a driver is about to be lapped",

        "Drivers must follow the relevant sporting procedures when shown blue flags",
      ],
    },

    {
      day: "FORMATION LAP",

      label: "RACE START",

      events: [
        "Drivers leave their grid positions before the race start",

        "They complete a formation lap around the circuit",

        "Drivers then return to their allocated grid positions",

        "The race-start procedure follows",
      ],
    },

    {
      day: "PARC FERMÉ",

      label: "TECHNICAL RULE",

      events: [
        "Parc fermé means 'closed park'",

        "Cars are subject to restrictions on what teams can change during the relevant period",

        "The rules help prevent teams from making unrestricted changes after qualifying",
      ],
    },

    {
      day: "RACE CONTROL",

      label: "OFFICIALS",

      events: [
        "Race control manages the sporting operation of the session",

        "It communicates important instructions and track conditions",

        "The stewards separately investigate incidents and can impose sporting penalties",
      ],
    },
  ],

  strategyLabel: "RACE CONTROL DECISIONS",

  strategyTitle: "Why the final result can change.",

  strategyDescription:
    "Imagine a driver finishes fifth but receives a five-second penalty. If that penalty is added to their race time, another driver may move ahead of them in the final classification. This is why the chequered flag does not always tell the entire story.",

  factTitle: "RACE CONTROL FACT",

  fact:
    "A driver's finishing position on track and their final classified position can sometimes be different because of penalties or other sporting decisions.",

  quiz: {
    question:
      "What does DNF mean in Formula 1?",

    options: [
      "Did Not Finish",

      "Driver Needs Fuel",

      "Did Not Follow",

      "Driver Not Fast",
    ],

    correctAnswer:
      "Did Not Finish",

    explanation:
      "DNF means Did Not Finish. It is used when a driver does not complete the race, for example because of a crash, mechanical problem or another retirement.",
  },

  nextLesson: "Putting It All Together",

  nextLink: "/Learn/putting-it-all-together",
},

// =========================================================
// SECTION 06 — F1 GLOSSARY & FINAL KNOWLEDGE
// LESSON 06 — PUTTING IT ALL TOGETHER
// =========================================================

{
  slug: "putting-it-all-together",

  title: "Putting It All Together",

  subtitle:
    "Use everything you've learned to understand what is happening during a Formula 1 Grand Prix.",

  category: "F1 Glossary & Final Knowledge",

  difficulty: "Beginner",

  readTime: "10 min",

  briefingTitle: "Now watch the race differently.",

  briefingDescription:
    "You have learned how a race weekend works, how cars and tyres behave, how drivers overtake, how teams use strategy and how race control manages incidents. Now it is time to connect everything together.",

  whyTitle: "Formula 1 makes sense when the pieces connect.",

  whyDescription:
    "A race is not just about who is fastest. Drivers are managing tyres, teams are watching gaps, engineers are analysing timing data and race control can change the situation with flags or Safety Car periods. Understanding these connections allows you to follow the race for yourself.",

  intro:
    "During a Grand Prix, many things happen at the same time. This lesson walks through a simplified race situation and shows how the concepts you have learned work together.",

  learningPoints: [
    "Understand how to read the opening stages of a race",

    "Connect tyre strategy with pit-stop decisions",

    "Use gaps and intervals to understand battles",

    "Recognise how Safety Cars can change strategy",

    "Understand how overtaking systems affect a battle",

    "Interpret timing information during a race",

    "Understand why the final classification can differ from the order on track",
  ],

  controlLabel: "RACE SCENARIO",

  controlTitle: "Follow a Grand Prix from lights to chequered flag",

  controlDescription:
    "Imagine two drivers are fighting for the lead. As the race develops, their tyres, pit stops, gaps, traffic and race-control decisions all influence the outcome.",

  timeline: [
    {
      day: "THE START",

      label: "PHASE 01",

      events: [
        "The lights go out and the drivers begin the Grand Prix",

        "The starting grid determines their initial track positions",

        "Drivers fight for position through the opening corners",

        "Tyre temperature, car balance and traffic immediately become important",
      ],
    },

    {
      day: "THE FIRST STINT",

      label: "PHASE 02",

      events: [
        "Drivers settle into their first stint",

        "Teams monitor tyre degradation and lap times",

        "The timing screen shows gaps and intervals between cars",

        "Drivers may manage their tyres rather than pushing at maximum pace every lap",
      ],
    },

    {
      day: "THE STRATEGY BATTLE",

      label: "PHASE 03",

      events: [
        "A team identifies a possible pit window",

        "One driver may attempt an undercut by stopping before a rival",

        "Another driver may attempt an overcut by staying on track",

        "Traffic and clean air can influence which strategy works best",
      ],
    },

    {
      day: "THE RACE CHANGES",

      label: "PHASE 04",

      events: [
        "An incident creates a hazard on the circuit",

        "Yellow flags are shown in the affected sector",

        "Race control may deploy a Safety Car or Virtual Safety Car",

        "Teams may change their strategy because the time lost during a pit stop can be reduced",
      ],
    },

    {
      day: "THE BATTLE",

      label: "PHASE 05",

      events: [
        "The cars return to racing conditions",

        "The drivers use their available aerodynamic and electrical systems according to the regulations",

        "The timing screen shows the gap and interval changing",

        "Tyre condition and energy management can determine whether an overtake is possible",
      ],
    },

    {
      day: "THE FINAL LAPS",

      label: "PHASE 06",

      events: [
        "Teams monitor tyre life and remaining race distance",

        "Drivers push harder as the finish approaches",

        "Engineers compare lap times and sector performance",

        "A small gap can become a major battle during the final laps",
      ],
    },

    {
      day: "THE CHEQUERED FLAG",

      label: "PHASE 07",

      events: [
        "The chequered flag signals the end of the race",

        "The first driver across the line is initially celebrated as the winner",

        "Race control and the stewards can still review incidents",

        "Penalties or technical decisions can affect the final classification",
      ],
    },
  ],

  strategyLabel: "YOUR F1 KNOWLEDGE",

  strategyTitle: "Can you now read the race?",

  strategyDescription:
    "When you watch your next Grand Prix, try to follow more than just the driver in first place. Watch the timing gaps, tyre compounds, pit windows, traffic, Safety Car periods and race-control messages. Ask yourself why each team is making its decisions.",

  factTitle: "FINAL F1 FACT",

  fact:
    "A Formula 1 race is a constantly changing combination of car performance, driver skill, tyre management, strategy, timing and sporting regulations. The more of these pieces you understand, the more the race begins to tell its own story.",

  quiz: {
    question:
      "A driver is three seconds behind the leader and 0.8 seconds behind the car immediately ahead. Which number represents the driver's interval to the car ahead?",

    options: [
      "0.8 seconds",

      "3 seconds",

      "3.8 seconds",

      "8 seconds",
    ],

    correctAnswer:
      "0.8 seconds",

    explanation:
      "The interval measures the time between a driver and the car immediately ahead. The three-second figure represents the driver's gap to the leader.",
  },

  nextLesson: null,

  nextLink: null,
},
];

export default lessons;