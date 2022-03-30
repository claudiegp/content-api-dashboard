import React from "react";
import { Bar } from "react-chartjs-2";
import { contentData } from "../data/data";

const labels = contentData.map((item) => item.name);

const skyGoPrevTotalViews = contentData.map(
  (item) => item.prevTotalViews["sky-go"]
);
const nowPrevTotalViews = contentData.map(
  (item) => item.prevTotalViews["now-tv"]
);
const peacockPrevTotalViews = contentData.map(
  (item) => item.prevTotalViews["peacock"]
);

export const prevOptions = {
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

const PreviousViews = () => {
  return (
    <div>
      <Bar options={prevOptions} data={prevTotalViews} />
    </div>
  );
};

export default PreviousViews;
