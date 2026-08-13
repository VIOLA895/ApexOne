import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  Flag,
  MapPin,
  RefreshCw,
  Trophy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { getRaceSessions } from "../../services/openF1";

import "./Schedule.css";

function Schedule() {
  const navigate = useNavigate();

  // =====================================================
  // STATE
  // =====================================================

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // LOAD 2026 RACE SESSIONS
  // =====================================================

  useEffect(() => {
    let cancelled = false;

    async function loadSchedule() {
      try {
        setLoading(true);
        setError("");

        const raceSessions = await getRaceSessions(2026);

        if (cancelled) return;

        const sortedSessions = [...raceSessions].sort(
          (a, b) => {
            const dateA = new Date(
              a.date_start || a.date_end || 0
            );

            const dateB = new Date(
              b.date_start || b.date_end || 0
            );

            return dateA - dateB;
          }
        );

        setSessions(sortedSessions);
      } catch (err) {
        console.error(
          "Failed to load 2026 schedule:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load the 2026 Formula 1 schedule."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSchedule();

    return () => {
      cancelled = true;
    };
  }, []);

  // =====================================================
  // FORMAT DATE
  // =====================================================

  function formatDate(dateString) {
    if (!dateString) return "TBA";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "TBA";
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  // =====================================================
  // FORMAT DAY
  // =====================================================

  function formatDay(dateString) {
    if (!dateString) return "--";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "--";
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
    });
  }

  // =====================================================
  // FORMAT MONTH
  // =====================================================

  function formatMonth(dateString) {
    if (!dateString) return "---";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "---";
    }

    return date
      .toLocaleDateString("en-GB", {
        month: "short",
      })
      .toUpperCase();
  }

  // =====================================================
  // SESSION STATUS
  // =====================================================

  function getSessionStatus(session) {
    if (!session) {
      return "UPCOMING";
    }

    const now = new Date();

    const start = session.date_start
      ? new Date(session.date_start)
      : null;

    const end = session.date_end
      ? new Date(session.date_end)
      : null;

    if (start && now < start) {
      return "UPCOMING";
    }

    if (
      start &&
      end &&
      now >= start &&
      now <= end
    ) {
      return "LIVE";
    }

    if (end && now > end) {
      return "COMPLETED";
    }

    return "UPCOMING";
  }

  // =====================================================
  // GRAND PRIX GROUPS
  // =====================================================

  const grandPrix = useMemo(() => {
    const groups = {};

    sessions.forEach((session) => {
      const key =
        session.meeting_key ||
        `${session.country_name || ""}-${session.location || ""}`;

      if (!groups[key]) {
        groups[key] = {
          key,

          country:
            session.country_name ||
            session.location ||
            "Grand Prix",

          location:
            session.location || "",

          sessions: [],
        };
      }

      groups[key].sessions.push(session);
    });

    return Object.values(groups).sort((a, b) => {
      const dateA = new Date(
        a.sessions[0]?.date_start ||
          a.sessions[0]?.date_end ||
          0
      );

      const dateB = new Date(
        b.sessions[0]?.date_start ||
          b.sessions[0]?.date_end ||
          0
      );

      return dateA - dateB;
    });
  }, [sessions]);

  // =====================================================
  // NEXT GRAND PRIX
  // =====================================================

  const nextGrandPrixIndex = useMemo(() => {
    const now = new Date();

    return grandPrix.findIndex((group) => {
      const raceSession =
        group.sessions.find(
          (session) =>
            session.session_name
              ?.toLowerCase() === "race"
        ) || group.sessions[0];

      if (!raceSession?.date_start) {
        return false;
      }

      return new Date(raceSession.date_start) >= now;
    });
  }, [grandPrix]);

  // =====================================================
  // OPEN STATS FOR EXACT GRAND PRIX
  // =====================================================

  function openGrandPrix(group) {
    const raceSession =
      group.sessions.find(
        (session) =>
          session.session_name
            ?.toLowerCase() === "race"
      ) ||
      group.sessions[group.sessions.length - 1];

    if (!raceSession?.session_key) {
      console.error(
        "No race session key found for:",
        group
      );

      return;
    }

    navigate(
      `/stats?session_key=${encodeURIComponent(
        raceSession.session_key
      )}`
    );
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="schedule-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="schedule-hero">

          <div className="schedule-grid"></div>

          <div className="schedule-red-glow"></div>

          <div className="schedule-hero-inner">

            <div className="schedule-hero-content">

              <div className="schedule-kicker">
                <span></span>
                APEXONE / 2026 SEASON
              </div>

              <h1>
                The race
                <strong> calendar.</strong>
              </h1>

              <p>
                Every Grand Prix. Every circuit.
                One complete view of the 2026
                Formula 1 season.
              </p>

            </div>

            <div className="season-card">

              <div className="season-card-icon">
                <CalendarDays size={21} />
              </div>

              <div>

                <span>
                  CURRENT SEASON
                </span>

                <strong>
                  2026
                </strong>

                <small>
                  FIA FORMULA 1 WORLD CHAMPIONSHIP
                </small>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            CALENDAR
        ================================================= */}

        <section className="schedule-container">

          <div className="calendar-heading">

            <div>

              <span className="section-kicker">
                2026 FIA FORMULA 1
              </span>

              <h2>
                Grand Prix Calendar
              </h2>

              <p>
                Select a race weekend to view its
                detailed statistics.
              </p>

            </div>

            <div className="calendar-count">

              <Flag size={17} />

              <strong>
                {grandPrix.length}
              </strong>

              <span>
                RACES
              </span>

            </div>

          </div>

          {/* =================================================
              LOADING
          ================================================= */}

          {loading && (

            <div className="schedule-state">

              <RefreshCw
                size={22}
                className="schedule-spinner"
              />

              <span>
                Loading 2026 calendar...
              </span>

            </div>

          )}

          {/* =================================================
              ERROR
          ================================================= */}

          {!loading && error && (

            <div className="schedule-state schedule-error">

              <strong>
                Calendar unavailable
              </strong>

              <span>
                {error}
              </span>

            </div>

          )}

          {/* =================================================
              EMPTY
          ================================================= */}

          {!loading &&
            !error &&
            grandPrix.length === 0 && (

              <div className="schedule-state">

                <CalendarDays size={30} />

                <strong>
                  No races available
                </strong>

                <span>
                  The 2026 calendar could not be
                  loaded.
                </span>

              </div>

            )}

          {/* =================================================
              GRAND PRIX LIST
          ================================================= */}

          {!loading &&
            !error &&
            grandPrix.length > 0 && (

              <div className="calendar-list">

                {grandPrix.map(
                  (group, index) => {

                    const raceSession =
                      group.sessions.find(
                        (session) =>
                          session.session_name
                            ?.toLowerCase() ===
                          "race"
                      ) ||
                      group.sessions[
                        group.sessions.length - 1
                      ];

                    const status =
                      getSessionStatus(
                        raceSession
                      );

                    const isNext =
                      index ===
                      nextGrandPrixIndex;

                    return (

                      <button
                        type="button"
                        key={group.key}
                        className={`calendar-row ${
                          status === "COMPLETED"
                            ? "is-completed"
                            : ""
                        } ${
                          status === "LIVE"
                            ? "is-live"
                            : ""
                        } ${
                          isNext
                            ? "is-next"
                            : ""
                        }`}
                        onClick={() =>
                          openGrandPrix(group)
                        }
                      >

                        {/* NUMBER */}

                        <div className="calendar-number">

                          {String(
                            index + 1
                          ).padStart(2, "0")}

                        </div>

                        {/* DATE */}

                        <div className="calendar-date">

                          <strong>
                            {formatDay(
                              raceSession?.date_start
                            )}
                          </strong>

                          <span>
                            {formatMonth(
                              raceSession?.date_start
                            )}
                          </span>

                        </div>

                        {/* GRAND PRIX */}

                        <div className="calendar-race">

                          <div className="calendar-race-top">

                            {isNext && (
                              <span className="next-label">
                                NEXT RACE
                              </span>
                            )}

                            {status ===
                              "LIVE" && (
                              <span className="live-label">
                                LIVE
                              </span>
                            )}

                            {status ===
                              "COMPLETED" && (
                              <span className="completed-label">
                                COMPLETED
                              </span>
                            )}

                          </div>

                          <h3>
                            {group.country}
                          </h3>

                          <div className="calendar-location">

                            <MapPin size={13} />

                            {group.location ||
                              "Circuit location"}

                          </div>

                        </div>

                        {/* SESSION */}

                        <div className="calendar-session">

                          <span>
                            RACE
                          </span>

                          <strong>
                            {formatDate(
                              raceSession?.date_start
                            )}
                          </strong>

                        </div>

                        {/* ARROW */}

                        <div className="calendar-action">

                          <ChevronRight
                            size={21}
                          />

                        </div>

                      </button>

                    );
                  }
                )}

              </div>

            )}

        </section>

        {/* =================================================
            SEASON INFO
        ================================================= */}

        {!loading &&
          grandPrix.length > 0 && (

            <section className="schedule-container season-info">

              <div className="season-info-card">

                <div className="season-info-icon">
                  <Trophy size={22} />
                </div>

                <div>

                  <span>
                    2026 SEASON
                  </span>

                  <h3>
                    Every race tells a story.
                  </h3>

                  <p>
                    Choose any Grand Prix above to
                    explore driver performance,
                    results and race statistics
                    on the Stats page.
                  </p>

                </div>

              </div>

            </section>

          )}

      </main>

      <Footer />
    </>
  );
}

export default Schedule;