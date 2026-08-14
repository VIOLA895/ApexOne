import { Routes, Route } from "react-router-dom";

// =========================================
// PAGES
// =========================================

import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

import Learn from "./Pages/Learn/Learn";
import LessonPage from "./Pages/LessonPage/LessonPage";
import CarsTechnology from "./Pages/Learn/CarsTechnology";

import Drivers from "./Pages/Drivers/Drivers";
import DriverProfile from "./Pages/DriverProfile/DriverProfile";

import Teams from "./Pages/Teams/Teams";
import TeamDetails from "./Pages/TeamDetails/TeamDetails";

import Schedule from "./Pages/Schedule/Schedule";
import Stats from "./Pages/Stats/Stats";


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
          SIGN IN
      ========================================= */}

      <Route
       path="/signin" 
       element={<SignIn />}
       />

      {/* =========================================
          SIGN UP
      ========================================= */}

       <Route
        path="/signup" 
        element={<SignUp />} />


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