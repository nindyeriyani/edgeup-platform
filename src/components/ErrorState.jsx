"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Button from "@/components/Button";
import { RotateCcw } from "lucide-react";

export default function ErrorState() {
  const router = useRouter();
  const params = useParams();

  // Ambil query dari URL, dan gunakan sebagai isi awal SearchBar
  const initialQuery = decodeURIComponent(params?.query || "");
  const [searchInput, setSearchInput] = useState(initialQuery);

  const handleRetry = () => {
    // Refresh halaman (gunakan Next.js method)
    router.refresh();
  };

  const handleSearch = (keyword) => {
    if (!keyword) return;
    // Arahkan ulang ke hasil pencarian baru
    router.push(`/certifications/${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-white pt-35 pb-28">
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-8">
            Rekomendasi Pelatihan & Sertifikasi
          </h1>

          {/* Search bar bisa diketik, clear, dan cari ulang */}
          <div className="w-full max-w-xl mx-auto mb-10">
            <SearchBar
              query={searchInput}
              setQuery={setSearchInput}
              onSearch={handleSearch}
            />
          </div>

          {/* Icon error */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/error-network.png"
              alt="Koneksi Bermasalah"
              width={200}
              height={200}
            />
          </div>

          {/* Pesan dan tombol ulang */}
          <p className="text-black mb-6 text-lg">
            Sepertinya koneksimu sedang tidak stabil. Coba periksa dulu ya!
          </p>
          <div className="flex justify-center">
            <Button onClick={handleRetry}>
              Coba Lagi? <RotateCcw size={18} className="ml-1" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
