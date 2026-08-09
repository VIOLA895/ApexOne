function LearningTelemetry() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background panel */}
      <rect
        x="1"
        y="1"
        width="518"
        height="358"
        rx="18"
        fill="#0D0D0D"
        stroke="#242424"
      />

      {/* Grid */}
      <g opacity="0.35">
        <path
          d="M40 70H480"
          stroke="#292929"
        />
        <path
          d="M40 130H480"
          stroke="#292929"
        />
        <path
          d="M40 190H480"
          stroke="#292929"
        />
        <path
          d="M40 250H480"
          stroke="#292929"
        />
        <path
          d="M40 310H480"
          stroke="#292929"
        />

        <path
          d="M100 45V320"
          stroke="#292929"
        />
        <path
          d="M180 45V320"
          stroke="#292929"
        />
        <path
          d="M260 45V320"
          stroke="#292929"
        />
        <path
          d="M340 45V320"
          stroke="#292929"
        />
        <path
          d="M420 45V320"
          stroke="#292929"
        />
      </g>

      {/* Header */}
      <text
        x="40"
        y="38"
        fill="#E10600"
        fontSize="11"
        fontWeight="700"
        letterSpacing="3"
      >
        APEXONE // TELEMETRY
      </text>

      {/* Speed graph */}
      <path
        d="
          M40 260
          C75 245 85 170 125 185
          C160 198 155 245 190 225
          C225 205 210 135 250 150
          C285 164 280 235 320 205
          C355 180 350 115 390 130
          C430 145 425 205 480 160
        "
        stroke="#E10600"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Secondary telemetry */}
      <path
        d="
          M40 290
          C90 275 110 250 145 260
          C180 270 190 300 225 280
          C260 260 275 210 310 225
          C350 240 355 280 390 260
          C425 240 445 225 480 235
        "
        stroke="#666"
        strokeWidth="2"
        strokeDasharray="5 7"
      />

      {/* Moving telemetry point */}
      <circle
        cx="40"
        cy="260"
        r="6"
        fill="#E10600"
      >
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          path="
            M0 0
            C35 -15 45 -90 85 -75
            C120 -62 115 -15 150 -35
            C185 -55 170 -125 210 -110
            C245 -96 240 -25 280 -55
            C315 -80 310 -145 350 -130
            C390 -115 385 -55 440 -100
          "
        />
      </circle>

      {/* Telemetry information */}
      <g>
        <rect
          x="55"
          y="82"
          width="105"
          height="48"
          rx="8"
          fill="#151515"
          stroke="#272727"
        />

        <text
          x="70"
          y="102"
          fill="#777"
          fontSize="8"
          letterSpacing="1"
        >
          SPEED
        </text>

        <text
          x="70"
          y="119"
          fill="#F5F5F5"
          fontSize="14"
          fontWeight="700"
        >
          312 KM/H
        </text>
      </g>

      <g>
        <rect
          x="175"
          y="82"
          width="105"
          height="48"
          rx="8"
          fill="#151515"
          stroke="#272727"
        />

        <text
          x="190"
          y="102"
          fill="#777"
          fontSize="8"
          letterSpacing="1"
        >
          LAP
        </text>

        <text
          x="190"
          y="119"
          fill="#F5F5F5"
          fontSize="14"
          fontWeight="700"
        >
          24 / 58
        </text>
      </g>

      <g>
        <rect
          x="295"
          y="82"
          width="105"
          height="48"
          rx="8"
          fill="#151515"
          stroke="#272727"
        />

        <text
          x="310"
          y="102"
          fill="#777"
          fontSize="8"
          letterSpacing="1"
        >
          TYRE
        </text>

        <text
          x="310"
          y="119"
          fill="#E10600"
          fontSize="14"
          fontWeight="700"
        >
          MEDIUM
        </text>
      </g>

      {/* Bottom telemetry line */}
      <line
        x1="40"
        y1="320"
        x2="480"
        y2="320"
        stroke="#333"
      />

      <text
        x="40"
        y="340"
        fill="#555"
        fontSize="8"
        letterSpacing="2"
      >
        RACE DATA • ANALYSE • LEARN
      </text>

      <text
        x="395"
        y="340"
        fill="#E10600"
        fontSize="8"
        letterSpacing="2"
      >
        F1
      </text>
    </svg>
  );
}

export default LearningTelemetry;