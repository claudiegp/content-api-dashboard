import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { contentData } from "./data/data";
import NavBar from "./components/NavBar";
import Descending from "./components/Descending";
import Ascending from "./components/Ascending";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionsTotal = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Views",
    },
  },
};

export const optionsPrev = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Previous Views",
    },
  },
};

const labels = contentData.map((x) => x.name);

const skyGoTotalViews = contentData.map((x) => x.totalViews["sky-go"]);
const nowTotalViews = contentData.map((x) => x.totalViews["now-tv"]);
const peacockTotalViews = contentData.map((x) => x.totalViews["peacock"]);

export const totalViews = {
  labels,
  datasets: [
    {
      label: "Sky Go",
      data: skyGoTotalViews,
      backgroundColor: "rgba(0, 114, 201, 1)",
    },
    {
      label: "Now TV",
      data: nowTotalViews,
      backgroundColor: "rgba(41, 153, 52, 1)",
    },
    {
      label: "Peacock",
      data: peacockTotalViews,
      backgroundColor: "rgba(115, 173, 216, 1)",
    },
  ],
};

const skyGoPrevTotalViews = contentData.map((x) => x.prevTotalViews["sky-go"]);
const nowPrevTotalViews = contentData.map((x) => x.prevTotalViews["now-tv"]);
const peacockPrevTotalViews = contentData.map(
  (x) => x.prevTotalViews["peacock"]
);

export const prevTotalViews = {
  labels,
  datasets: [
    {
      label: "Sky Go",
      data: skyGoPrevTotalViews,
      backgroundColor: "rgba(0, 114, 201, 1)",
    },
    {
      label: "Now TV",
      data: nowPrevTotalViews,
      backgroundColor: "rgba(41, 153, 52, 1)",
    },
    {
      label: "Peacock",
      data: peacockPrevTotalViews,
      backgroundColor: "rgba(115, 173, 216, 1)",
    },
  ],
};

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Bar options={optionsTotal} data={totalViews} />}
          />
          <Route
            path="previousViews/*"
            element={<Bar options={optionsPrev} data={prevTotalViews} />}
          />
          <Route path="ascending/*" element={<Ascending />} />
          <Route path="descending/*" element={<Descending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
