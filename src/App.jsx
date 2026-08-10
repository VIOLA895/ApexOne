import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";
import LessonPage from "./pages/LessonPage/LessonPage";
import Drivers from "./pages/Drivers/Drivers";
import AllDrivers from "./pages/AllDrivers/AllDrivers";
import DriverProfile from "./pages/DriverProfile/DriverProfile";
import Teams from "./pages/Teams/Teams";
import Live from "./pages/Live/Live";
import Stats from "./pages/Stats/Stats";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>

      {/* MAIN PAGES */}
      <Route path="/" element={<Home />} />

      <Route path="/Learn" element={<Learn />} />
        <Route
    path="/Learn/:slug"
    element={<LessonPage />}
  />

      <Route path="/drivers" element={<Drivers />} />

      <Route path="/drivers/all" element={<AllDrivers />} />

      {/* INDIVIDUAL DRIVER PROFILE */}
      <Route
        path="/drivers/:shortName"
        element={<DriverProfile />}
      />

      <Route path="/teams" element={<Teams />} />

      <Route path="/live" element={<Live />} />

      <Route path="/stats" element={<Stats />} />

      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default App;