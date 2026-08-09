import {  Route } from "react-router-dom";
<Route path="/live" element={<Live />} />

function Live() {
  return <h1>Live</h1>;
}

export default Live;