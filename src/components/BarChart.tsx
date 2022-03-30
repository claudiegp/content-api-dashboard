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
import { contentData } from "../data/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = contentData.map((item) => item.name);

const skyGoTotalViews = contentData.map((item) => item.totalViews["sky-go"]);
const nowTotalViews = contentData.map((item) => item.totalViews["now-tv"]);
const peacockTotalViews = contentData.map((item) => item.totalViews["peacock"]);

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

const BarChart = () => {
  return (
    <div>
      <Bar options={optionsTotal} data={totalViews} />
    </div>
  );
};

export default BarChart;
