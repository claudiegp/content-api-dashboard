import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = contentData.map((x) => x.name);

const skyGoTotalViews = contentData.map((x) => x.totalViews["sky-go"]);
const nowTotalViews = contentData.map((x) => x.totalViews["now-tv"]);
const peacockTotalViews = contentData.map((x) => x.totalViews["peacock"]);

export const data = {
  labels,
  datasets: [
    {
      label: "Sky Go",
      data: skyGoTotalViews,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Now TV",
      data: nowTotalViews,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Peacock",
      data: peacockTotalViews,
      backgroundColor: "rgba(43, 122, 5, 0.5)",
    },
  ],
};

export function App() {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default App;
