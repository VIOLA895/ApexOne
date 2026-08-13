import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}

      <div
        className="logo"
        onClick={closeMenu}
      >
        <h1>APEXONE</h1>
        <span>Formula 1 Made Simple</span>
      </div>


      {/* ================= DESKTOP NAVIGATION ================= */}

      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Learn"
            onClick={closeMenu}
          >
            Learn
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/drivers"
            onClick={closeMenu}
          >
            Drivers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/teams"
            onClick={closeMenu}
          >
            Teams
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/schedule"
            onClick={closeMenu}
          >
            Schedule
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stats"
            onClick={closeMenu}
          >
            Stats
          </NavLink>
        </li>

      </ul>


{/* ================= SIGN IN ================= */}

<button
  className="login-btn"
  onClick={() => navigate("/signin")}
>
  Sign In
</button>


      {/* ================= MOBILE MENU ================= */}

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() =>
          setMenuOpen((previous) => !previous)
        }
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;