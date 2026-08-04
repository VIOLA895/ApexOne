import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";
import Drivers from "./pages/Drivers/Drivers";
import Teams from "./pages/Teams/Teams";
import Live from "./pages/Live/Live";
import Stats from "./pages/Stats/Stats";
import About from "./pages/About/About";
import LessonPage from "./pages/LessonPage/LessonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Learn" element={<Learn />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/live" element={<Live />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/about" element={<About />} />
     <Route path="/Learn/:slug" element={<LessonPage />} />
    </Routes>
  );
}

export default App;