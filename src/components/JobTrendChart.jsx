"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function JobTrendChart() {
  const data = {
    labels: ["SQL", "JavaScript", "Python", "UI/UX", "Machine Learning"],
    datasets: [
      {
        label: "Demand",
        data: [75, 68, 90, 55, 80],
        backgroundColor: "#0BB0BF",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
