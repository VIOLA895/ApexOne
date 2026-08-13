import "./TeamDetails.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import teams from "../../data/teams";

import {
  ArrowLeft,
  ArrowUpRight,
  Trophy,
  Flag,
  Users,
  UserRound,
  Gauge,
  CalendarDays,
  MapPin,
  CarFront,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

function TeamDetails() {
  const { id } = useParams();

  const team = teams.find(
    (item) => String(item.id) === String(id)
  );

  /*
  =====================================================
  TEAM NOT FOUND
  =====================================================
  */

  if (!team) {
    return (
      <>
        <Navbar />

        <main className="team-details-page">

          <section className="team-not-found">

            <span className="team-details-kicker">
              APEXONE
            </span>

            <h1>
              Team Not Found
            </h1>

            <p>
              We couldn't find the Formula 1 team you're
              looking for.
            </p>

            <Link
              to="/teams"
              className="team-back-button"
            >
              <ArrowLeft size={17} />
              Back to Teams
            </Link>

          </section>

        </main>

        <Footer />
      </>
    );
  }

  /*
  =====================================================
  CHAMPIONSHIP POSITION
  =====================================================
  */

  const sortedTeams = [...teams].sort(
    (a, b) =>
      (b.points ?? 0) - (a.points ?? 0)
  );

  const championshipPosition =
    sortedTeams.findIndex(
      (item) => item.id === team.id
    ) + 1;

  /*
  =====================================================
  TEAM DESCRIPTION
  =====================================================
  */

  const description =
    team.description ||
    `${team.name} is competing in the 2026 Formula 1 Constructors' Championship, fighting for championship points and race victories throughout the season.`;

  /*
  =====================================================
  TEAM INFORMATION
  =====================================================
  */

  const base =
    team.base || "Information unavailable";

  const chassis =
    team.chassis || "Information unavailable";

  const powerUnit =
    team.powerUnit ||
    team.engine ||
    "Information unavailable";

  const firstEntry =
    team.firstEntry || "Information unavailable";

  const championships =
    team.championships ??
    team.constructorChampionships ??
    0;

  return (
    <>
      <Navbar />

      <main className="team-details-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="team-details-hero">

          <div className="team-details-hero-grid"></div>

          <div className="team-details-hero-content">

            <Link
              to="/teams"
              className="team-back-link"
            >
              <ArrowLeft size={16} />
              Back to Teams
            </Link>

            <span className="team-details-kicker">
              2026 CONSTRUCTORS' CHAMPIONSHIP
            </span>

            <h1>
              {team.name}
            </h1>

            <div className="team-hero-meta">

              <span>
                <Flag size={15} />
                {team.country}
              </span>

              <span>
                <Trophy size={15} />
                Championship P{championshipPosition}
              </span>

            </div>

          </div>


          {/* LARGE TEAM IMAGE */}

          <div className="team-details-hero-image">

            {team.image ? (

              <img
                src={team.image}
                alt={team.name}
              />

            ) : (

              <div className="team-details-image-placeholder">
                {team.shortName}
              </div>

            )}

          </div>

        </section>


        {/* =================================================
            QUICK STATS
        ================================================= */}

        <section className="team-details-stats">

          <div className="team-detail-stat">

            <Trophy size={21} />

            <div>
              <span>
                CHAMPIONSHIP POSITION
              </span>

              <strong>
                P{championshipPosition}
              </strong>
            </div>

          </div>


          <div className="team-detail-stat">

            <Gauge size={21} />

            <div>
              <span>
                CHAMPIONSHIP POINTS
              </span>

              <strong>
                {team.points ?? 0}
              </strong>
            </div>

          </div>


          <div className="team-detail-stat">

            <Trophy size={21} />

            <div>
              <span>
                RACE WINS
              </span>

              <strong>
                {team.wins ?? 0}
              </strong>
            </div>

          </div>


          <div className="team-detail-stat">

            <Users size={21} />

            <div>
              <span>
                DRIVERS
              </span>

              <strong>
                {team.drivers?.length ?? 0}
              </strong>
            </div>

          </div>

        </section>


        {/* =================================================
            TEAM INTRO
        ================================================= */}

        <section className="team-profile-section">

          <div className="team-profile-main">

            <span className="section-kicker">
              TEAM PROFILE
            </span>

            <h2>
              Built for the
              <br />
              <span>Fight.</span>
            </h2>

            <p>
              {description}
            </p>

            <p>
              Throughout the 2026 season, {team.name} is
              competing across the Formula 1 calendar with
              the goal of maximizing race results,
              collecting championship points and fighting
              for the Constructors' Championship.
            </p>

          </div>


          <div className="team-profile-side">

            <div className="profile-side-item">

              <MapPin size={18} />

              <div>

                <span>
                  BASE
                </span>

                <strong>
                  {base}
                </strong>

              </div>

            </div>


            <div className="profile-side-item">

              <UserRound size={18} />

              <div>

                <span>
                  TEAM PRINCIPAL
                </span>

                <strong>
                  {team.principal}
                </strong>

              </div>

            </div>


            <div className="profile-side-item">

              <CalendarDays size={18} />

              <div>

                <span>
                  FIRST ENTRY
                </span>

                <strong>
                  {firstEntry}
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            TEAM INFORMATION
        ================================================= */}

        <section className="team-information-section">

          <div className="team-section-heading">

            <div>

              <span className="section-kicker">
                TEAM INFORMATION
              </span>

              <h2>
                Inside the Team
              </h2>

            </div>

          </div>


          <div className="team-information-grid">

            <div className="information-card">

              <CarFront size={22} />

              <span>
                CHASSIS
              </span>

              <strong>
                {chassis}
              </strong>

            </div>


            <div className="information-card">

              <Gauge size={22} />

              <span>
                POWER UNIT
              </span>

              <strong>
                {powerUnit}
              </strong>

            </div>


            <div className="information-card">

              <Trophy size={22} />

              <span>
                CONSTRUCTOR TITLES
              </span>

              <strong>
                {championships}
              </strong>

            </div>


            <div className="information-card">

              <Flag size={22} />

              <span>
                NATIONALITY
              </span>

              <strong>
                {team.country}
              </strong>

            </div>

          </div>

        </section>


        {/* =================================================
            DRIVERS
        ================================================= */}

        <section className="team-drivers-section">

          <div className="team-section-heading">

            <div>

              <span className="section-kicker">
                DRIVER LINEUP
              </span>

              <h2>
                The Drivers
              </h2>

              <p>
                The drivers representing {team.name} in
                the 2026 Formula 1 season.
              </p>

            </div>

            <span className="team-section-count">
              {team.drivers?.length ?? 0} DRIVERS
            </span>

          </div>


          <div className="team-driver-details-grid">

            {team.drivers?.map(
              (driver, index) => (

                <div
                  className="team-driver-detail-card"
                  key={driver}
                >

                  <div className="team-driver-detail-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="team-driver-detail-icon">
                    <UserRound size={28} />
                  </div>

                  <div className="team-driver-detail-info">

                    <span>
                      {index === 0
                        ? "DRIVER 01"
                        : "DRIVER 02"}
                    </span>

                    <h3>
                      {driver}
                    </h3>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="driver-detail-arrow"
                  />

                </div>

              )
            )}

          </div>

        </section>


        {/* =================================================
            2026 SEASON
        ================================================= */}

        <section className="team-season-section">

          <div className="team-season-heading">

            <span className="section-kicker">
              2026 SEASON
            </span>

            <h2>
              Championship Campaign
            </h2>

            <p>
              A snapshot of {team.name}'s current
              championship campaign.
            </p>

          </div>


          <div className="team-season-grid">

            <div className="season-card">

              <span>
                CURRENT POSITION
              </span>

              <strong>
                P{championshipPosition}
              </strong>

              <small>
                Constructors' Championship
              </small>

            </div>


            <div className="season-card">

              <span>
                POINTS
              </span>

              <strong>
                {team.points ?? 0}
              </strong>

              <small>
                Championship points
              </small>

            </div>


            <div className="season-card">

              <span>
                WINS
              </span>

              <strong>
                {team.wins ?? 0}
              </strong>

              <small>
                Grand Prix victories
              </small>

            </div>


            <div className="season-card">

              <span>
                SEASON
              </span>

              <strong>
                2026
              </strong>

              <small>
                Formula 1 World Championship
              </small>

            </div>

          </div>

        </section>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <section className="team-details-bottom">

          <div>

            <span className="section-kicker">
              APEXONE
            </span>

            <h2>
              Explore the
              <br />
              entire grid.
            </h2>

          </div>

          <Link
            to="/teams"
            className="team-all-button"
          >
            <span>
              Back to All Teams
            </span>

            <ArrowUpRight size={18} />

          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default TeamDetails;