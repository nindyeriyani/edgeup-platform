"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import slugify from "slugify";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import TrainingCard from "@/components/TrainingCard";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";

import rawData from "@/data/frontend_output.json";

export default function CertificationSearchResultPage() {
  const router = useRouter();
  const params = useParams();
  const query = decodeURIComponent(params.query || "");

  const [searchInput, setSearchInput] = useState(query);
  const [filters, setFilters] = useState({ levels: [] });
  const [error, setError] = useState(false);

  // Normalisasi teks
  const normalize = (text) =>
    text?.toLowerCase().replace(/[^a-z0-9]+/g, "") ?? "";

  // Potong deskripsi
  const truncateText = (text, maxLength = 300) => {
    if (!text) return "";
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength).trim() + "...";
  };

  useEffect(() => {
    if (!rawData || typeof rawData !== "object") setError(true);
  }, []);

  const allRoles = Object.entries(rawData).map(([role, data]) => ({
    role,
    ...data,
  }));

  const filteredRoles = allRoles.filter((item) => {
    const normalizedQuery = normalize(searchInput);
    const normalizedRole = normalize(item.role);
    const normalizedTopicTags = (item.associated_topic_tags || []).map(
      normalize
    );
    const normalizedLearningPaths = (item.associated_learning_paths || []).map(
      normalize
    );

    return (
      normalizedRole.includes(normalizedQuery) ||
      normalizedTopicTags.some((tag) => tag.includes(normalizedQuery)) ||
      normalizedLearningPaths.some((path) => path.includes(normalizedQuery)) ||
      searchInput === ""
    );
  });

  const filteredTrainings = filteredRoles
    .flatMap((item) => item.recommended_courses || [])
    .filter((course) => {
      const courseLevel = (course.level || "").toLowerCase();
      let normalizedLevel = "";

      if (courseLevel.includes("dasar")) normalizedLevel = "beginner";
      else if (courseLevel.includes("menengah"))
        normalizedLevel = "intermediate";
      else if (courseLevel.includes("mahir")) normalizedLevel = "advanced";

      return (
        filters.levels.length === 0 || filters.levels.includes(normalizedLevel)
      );
    });

  if (error) return <ErrorState />;
  if (filteredTrainings.length === 0 && searchInput !== "")
    return <EmptyState searchQuery={searchInput} />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100 pt-20">
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Rekomendasi Pelatihan & Sertifikasi
            </h1>
            <p className="text-black">
              Akses materi training terbaru dan dapatkan sertifikasi resmi.
            </p>
          </div>

          <div className="mb-8">
            <SearchBar
              query={searchInput}
              setQuery={setSearchInput}
              onSearch={(keyword) =>
                router.push(`/certifications/${encodeURIComponent(keyword)}`)
              }
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[240px] w-full">
              <FilterSidebar
                onChange={(newFilters) =>
                  setFilters((prev) => ({ ...prev, ...newFilters }))
                }
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h2 className="text-lg font-semibold text-black">
                  Hasil dari "{searchInput}"
                </h2>
                <div className="text-sm font-semibold text-gray-700">
                  Sort by: <span className="font-normal">Most relevant</span>
                  <Image
                    src="/images/icon-sort.png"
                    alt="Sort Icon"
                    width={16}
                    height={16}
                    className="inline-block ml-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTrainings.map((training, index) => (
                  <TrainingCard
                    key={index}
                    data={{
                      image: training.image_preview_course,
                      logo: training.course_logo,
                      provider: training.course_name,
                      title: training.title,
                      description: truncateText(training.descriptions, 300),
                      link: training.link_url,
                      detailLink: `/certifications/detail/${slugify(
                        training.title,
                        { lower: true }
                      )}?from=${encodeURIComponent(searchInput)}`,
                    }}
                  />
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
