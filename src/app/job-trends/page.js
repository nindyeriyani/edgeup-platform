"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jobTrends from "@/data/job_trends.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function JobTrendsPage() {
  const sortedData = [...jobTrends]
    .sort((a, b) => b.job_count - a.job_count)
    .slice(0, 5); // Top 10 pekerjaan

  return (
    <div className="flex flex-col min-h-screen text-[#13171B]">
      <Navbar active="job-trends" />
      <main className="flex-grow bg-white pt-30 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-2">
            Job Trends & Tracker
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Pekerjaan paling dicari berdasarkan data bulan Juli 2025.
          </p>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-md font-semibold mb-4">
              Top 5 Pekerjaan Populer di Juli 2025
            </h2>

            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={sortedData}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="role"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={100}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: 10,
                            border: "1px solid #ccc",
                          }}
                        >
                          <p style={{ margin: 0 }}>
                            <span style={{ fontWeight: "bold" }}>{label}</span>{" "}
                          </p>
                          <p style={{ color: "#00aa77", margin: 0 }}>
                            <span style={{ fontWeight: "bold" }}>
                              Job Count: {payload[0].value}
                            </span>{" "}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />

                <Bar dataKey="job_count" fill="#00B388" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
