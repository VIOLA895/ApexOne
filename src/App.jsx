import { Routes, Route } from "react-router-dom";

// =========================================
// PAGES
// =========================================

import Home from "./pages/Home/Home";

import Learn from "./pages/Learn/Learn";
import LessonPage from "./pages/LessonPage/LessonPage";
import CarsTechnology from "./pages/Learn/CarsTechnology";

import Drivers from "./pages/Drivers/Drivers";
import DriverProfile from "./pages/DriverProfile/DriverProfile";

import Teams from "./pages/Teams/Teams";
import TeamDetails from "./pages/TeamDetails/TeamDetails";

import Schedule from "./Pages/Schedule/Schedule";
import Stats from "./pages/Stats/Stats";


// =========================================
// APP
// =========================================

function App() {
  return (
    <Routes>

      {/* =========================================
          HOME
      ========================================= */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================================
          LEARN
      ========================================= */}

      <Route
        path="/Learn"
        element={<Learn />}
      />

      <Route
        path="/Learn/:slug"
        element={<LessonPage />}
      />

      <Route
  path="/Learn/cars-technology"
  element={<CarsTechnology />}
/>


      {/* =========================================
          DRIVERS
      ========================================= */}

      {/* Main Drivers page */}
      <Route
        path="/drivers"
        element={<Drivers />}
      />

      {/* All 22 drivers */}
      <Route
        path="/drivers/all"
        element={<Drivers />}
      />

      {/* Individual driver profile */}
      <Route
        path="/drivers/:shortName"
        element={<DriverProfile />}
      />


      {/* =========================================
          TEAMS
      ========================================= */}

      {/* Main Teams page */}
      <Route
        path="/teams"
        element={<Teams />}
      />

      {/* Individual team details */}
      <Route
        path="/teams/:id"
        element={<TeamDetails />}
      />


      {/* =========================================
          OTHER PAGES
      ========================================= */}

      <Route
        path="/schedule"
        element={<Schedule />}
      />

      <Route
        path="/stats"
        element={<Stats />}
      />

      


      {/* =========================================
          FALLBACK
      ========================================= */}

      <Route
        path="*"
        element={<Home />}
      />

    </Routes>
  );
}

export default App;