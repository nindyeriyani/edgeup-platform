"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Tag from "@/components/Tag";
import TrainingCard from "@/components/TrainingCard";
import trainings from "@/data/frontend_output.json";

export default function EmptyState({ searchQuery }) {
  const router = useRouter();
  const params = useParams();
  const initialQuery = decodeURIComponent(params?.query || "");
  const [searchInput, setSearchInput] = useState(searchQuery || "");

  const handleSearch = (keyword) => {
    router.push(`/certifications/${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar active="certifications" />
      <main className="flex-grow bg-white pt-35 pb-20">
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-8">
            Rekomendasi Pelatihan & Sertifikasi
          </h1>
          <div className="w-full max-w-xl mx-auto mb-10">
            <SearchBar
              query={searchInput}
              setQuery={setSearchInput}
              onSearch={handleSearch}
            />
          </div>
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/empty-state.png"
              alt="Koneksi Bermasalah"
              width={200}
              height={200}
            />
          </div>
          <p className="mb-6 text-lg">
            Hmm, sepertinya belum ada yang cocok dengan '{searchQuery}'
          </p>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span className="font-semibold text-xl">Cari keyword serupa:</span>
            <Tag
              tags={["SQL", "data analyst", "data scientist"]}
              tagClass="border-[#ACB7C6] text-[#35414D]"
            />
          </div>
        </section>

        {/* Lihat rekomendari lainnya */}
        <section className="mt-14 text-left max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">
            Lihat rekomendasi lainnya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(trainings)
              .slice(0, 4)
              .map(([role, data], index) => (
                <TrainingCard
                  key={index}
                  data={{
                    image: data.recommended_courses?.[0]?.image_preview_course,
                    logo: data.recommended_courses?.[0]?.course_logo,
                    provider: data.recommended_courses?.[0]?.course_name,
                    title: data.recommended_courses?.[0]?.title,
                    description: data.recommended_courses?.[0]?.descriptions,
                    link: data.recommended_courses?.[0]?.link_url,
                    detailLink: `/certifications/detail/${data.recommended_courses?.[0]?.title}`,
                  }}
                />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
