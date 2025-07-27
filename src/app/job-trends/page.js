"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Dropdown from "@/components/Dropdown";

const dataWithoutPrediction = [
  { name: "Data Science", "2025-03": 50, "2025-04": 45, "2025-05": 40 },
  { name: "Finance", "2025-03": 40, "2025-04": 35, "2025-05": 30 },
  { name: "Management", "2025-03": 38, "2025-04": 33, "2025-05": 28 },
  {
    name: "Cybersecurity Specialist",
    "2025-03": 35,
    "2025-04": 32,
    "2025-05": 27,
  },
  { name: "Frontend Developer", "2025-03": 32, "2025-04": 28, "2025-05": 24 },
];

const dataWithPrediction = [
  {
    name: "Data Science",
    "2025-03": 50,
    "2025-04": 45,
    "2025-05": 40,
    2026: 55,
  },
  { name: "Finance", "2025-03": 40, "2025-04": 35, "2025-05": 30, 2026: 44 },
  { name: "Management", "2025-03": 38, "2025-04": 33, "2025-05": 28, 2026: 42 },
  {
    name: "Cybersecurity Specialist",
    "2025-03": 35,
    "2025-04": 32,
    "2025-05": 27,
    2026: 40,
  },
  {
    name: "Frontend Developer",
    "2025-03": 32,
    "2025-04": 28,
    "2025-05": 24,
    2026: 36,
  },
];

export default function JobTrendsPage() {
  const [showPrediction, setShowPrediction] = useState(false);

  const chartData = showPrediction ? dataWithPrediction : dataWithoutPrediction;
  const lines = showPrediction
    ? ["2025-03", "2025-04", "2025-05", "2026"]
    : ["2025-03", "2025-04", "2025-05"];

  return (
    <div className="flex flex-col min-h-screen text-[#13171B]">
      <Navbar active="job-trends" />
      <main className="flex-grow bg-white pt-30 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-2">
            Job Trends & Tracker
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Lacak tren pekerjaan terbaru di berbagai bidang.
          </p>

          {/* Filter */}
          <div className="flex justify-center items-center mb-6 gap-6">
            <Dropdown />
            <Dropdown />
          </div>

          {/* Grafik */}
          <div className="bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-md font-semibold mb-4">
                {showPrediction
                  ? "Top 5 Pekerjaan Populer 3 Tahun Terakhir"
                  : "Top 5 Pekerjaan Populer 3 Bulan Terakhir"}
              </h2>
              {/* Checkbox Prediksi */}
              <div className="flex justify-center items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="prediction"
                  checked={showPrediction}
                  onChange={(e) => setShowPrediction(e.target.checked)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="prediction"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Tampilkan prediksi masa depan
                </label>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Tooltip />
                <Legend />
                {lines.map((lineKey, i) => (
                  <Line
                    key={lineKey}
                    type="monotone"
                    dataKey={lineKey}
                    stroke={
                      ["#FF9900", "#3366CC", "#CC0033", "#00B388"][i] // custom color
                    }
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
