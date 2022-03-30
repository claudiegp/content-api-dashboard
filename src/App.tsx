import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NavBar from "./components/NavBar";
import Descending from "./components/Descending";
import Ascending from "./components/Ascending";
import BarChart from "./components/BarChart";
import PreviousViews from "./components/PreviousViews";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<BarChart />} />
          <Route path="previousViews/*" element={<PreviousViews />} />
          <Route path="ascending/*" element={<Ascending />} />
          <Route path="descending/*" element={<Descending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
