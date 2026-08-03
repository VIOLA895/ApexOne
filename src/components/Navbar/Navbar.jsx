import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h1>APEXONE</h1>
        <span>Formula 1 Made Simple</span>
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/learn">Learn</NavLink>
        </li>

        <li>
          <NavLink to="/drivers">Drivers</NavLink>
        </li>

        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>

        <li>
          <NavLink to="/live">Live</NavLink>
        </li>

        <li>
          <NavLink to="/stats">Stats</NavLink>
        </li>

      </ul>

      <button className="login-btn">
        Sign In
      </button>

    </nav>
  );
}

export default Navbar;