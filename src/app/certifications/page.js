"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const recommendedTags = [
  "ui/ux",
  "data",
  "machine learning",
  "system",
  "business",
];

const suggestions = [
  "SQL untuk Data Analyst",
  "Sertifikasi Product Manager",
  "Fullstack Developer",
  "Growth Marketing Skill",
  "Machine Learning Career Path",
];

export default function CertificationsPage() {
  const [query, setQuery] = useState("");
  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100">
        <section className="py-12 px-4 flex flex-col items-center text-center">
          {/* Banner */}
          <div className="w-full max-w-[1040px] h-[160px] relative rounded overflow-hidden mb-10">
            <Image
              src="/images/banner-certification-page.png"
              alt="Training Banner"
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-[#000] font-semibold mb-2">
            Rekomendasi Pelatihan & Sertifikasi
          </h1>
          <p className="text-[#000] mb-6">
            Akses materi training terbaru dan dapatkan sertifikasi resmi.
          </p>

          <div className="w-full max-w-3xl text-left">
            {/* Search Input */}
            <div className="relative">
              <div className="flex items-center border border-gray-400 rounded-md px-4 py-3 bg-white">
                <input
                  type="text"
                  className="flex-grow outline-none text-sm text-[#13171B] bg-transparent placeholder:text-[#13171B]"
                  placeholder="Masukkan role atau skill yang Anda minati"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query.length > 0 ? (
                  <X
                    className="w-4 h-4 mr-3 text-gray-500 cursor-pointer"
                    onClick={() => setQuery("")}
                  />
                ) : null}
                <Search className="w-4 h-4 text-gray-500" />
              </div>

              {/* Dropdown Results */}
              {query.length > 0 && (
                <div className="absolute w-full bg-[#F3F4F6] rounded-b-md border border-[#8A929E] z-10">
                  {filtered.length > 0 ? (
                    filtered.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-200 cursor-pointer"
                        onClick={() => setQuery(item)}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500 italic">
                      Tidak ada hasil.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Tag Search */}
            <div className="mt-6">
              <h2 className="font-semibold mb-3 text-sm text-black">
                Rekomendasi Pencarian
              </h2>
              <div className="flex flex-wrap gap-3">
                {recommendedTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border border-gray-300 text-sm rounded-full text-[#35414D] bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => setQuery(tag)}
                  >
                    {tag}
                  </span>
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
