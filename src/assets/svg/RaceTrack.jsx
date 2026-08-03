function RaceTrack() {
  return (
    <svg viewBox="0 0 420 420" fill="none">
      <circle
        cx="210"
        cy="210"
        r="180"
        stroke="#262626"
        strokeWidth="1"
      />

      <circle
        cx="210"
        cy="210"
        r="130"
        stroke="#262626"
        strokeWidth="1"
      />

      <path
        d="M70 260 C 70 180, 130 90, 230 90 C 320 90, 350 150, 300 190 C 260 220, 210 190, 230 150 C 250 110, 320 120, 350 170 C 375 210, 360 280, 290 300 C 220 320, 150 320, 100 290 C 75 275, 70 265, 70 260 Z"
        stroke="#E10600"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="70"
        cy="260"
        r="6"
        fill="#E10600"
      >
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M0 0 C 0 -80, 60 -170, 160 -170 C 250 -170, 280 -110, 230 -70 C 190 -40, 140 -70, 160 -110 C 180 -150, 250 -140, 280 -90 C 305 -50, 290 20, 220 40 C 150 60, 80 60, 30 30 C 5 15, 0 5, 0 0 Z"
        />
      </circle>
    </svg>
  );
}

export default RaceTrack;