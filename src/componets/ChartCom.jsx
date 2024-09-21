import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
const ChartCom = () => {
  const data = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
  const highestValue = Math.max(...data);
  const state = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Spending - Last 7 Days",
        backgroundColor: data.map((value) =>
          value === highestValue ? "rgba(75,192,192,1)" : "hsl(10, 79%, 65%)"
        ),
        borderRadius: 8,
        data: data,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className=" items-center">
      <h2 className=" text-dark-brown font-bold text-2xl  ">
        Spending - Last 7 Days
      </h2>
      <Bar data={state} options={options} className="cursor-pointer" />
    </div>
  );
};

export default ChartCom;
