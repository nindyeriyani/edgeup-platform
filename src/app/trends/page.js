"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobTrendChart from "@/components/JobTrendChart";
import JobTrendCard from "@/components/JobTrendCard";

export default function JobTrendTrackerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="job-trends" />
      <main className="flex-grow bg-gray-100 pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Job Trends Tracker
            </h1>
            <p className="text-black">
              Lihat tren pekerjaan, skill yang sedang naik daun, dan posisi
              populer di industri teknologi.
            </p>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg shadow p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Skill yang Paling Banyak Dicari
            </h2>
            <JobTrendChart />
          </div>

          {/* Popular Jobs */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Posisi Pekerjaan Populer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  title: "Data Analyst",
                  growth: "+23%",
                  location: "Indonesia",
                },
                {
                  title: "Frontend Developer",
                  growth: "+18%",
                  location: "Asia Tenggara",
                },
                {
                  title: "Machine Learning Engineer",
                  growth: "+30%",
                  location: "Global",
                },
              ].map((job, idx) => (
                <JobTrendCard key={idx} data={job} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
