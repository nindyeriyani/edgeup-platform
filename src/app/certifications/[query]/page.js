// app/certifications/page.jsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import TrainingCard from "@/components/TrainingCard";
import ErrorState from "@/components/ErrorState";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function CertificationSearchResultPage() {
  const [query, setQuery] = useState("SQL untuk Data Analyst");
  const [trainings, setTrainings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      // Simulasi fetch data
      const data = require("@/data/mockTraining"); // seolah fetch
      setTrainings(data.default || data);
    } catch (e) {
      setError(true);
    }
  }, []);

  if (error) return <ErrorState />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100 pt-20">
        <section className="py-12 px-4 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Rekomendasi Pelatihan & Sertifikasi
            </h1>
            <p className="text-black">
              Akses materi training terbaru dan dapatkan sertifikasi resmi.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar
              query={query}
              setQuery={setQuery}
              onSearch={(keyword) =>
                router.push(`/certifications/${encodeURIComponent(keyword)}`)
              }
            />
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
            {/* Filter Sidebar */}
            <FilterSidebar />

            {/* Results */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-black">
                  Hasil dari "{query}"
                </h2>
                <div className="text-sm font-semibold text-gray-700">
                  Sort by: <span className="font-normal">Most relevant</span>{" "}
                  <Image
                    src="/images/icon-sort.png"
                    alt="Sort Icon"
                    width={16}
                    height={16}
                    className="inline-block ml-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {trainings.map((training, index) => (
                  <Link
                    key={index}
                    href={`/certifications/detail/${slugify(training.title, {
                      lower: true,
                    })}`}
                  >
                    <TrainingCard data={training} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
