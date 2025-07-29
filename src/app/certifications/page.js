"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TagSearch from "@/components/Tag";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CertificationsPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100 pt-20">
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
            <SearchBar
              query={query}
              setQuery={setQuery} //isi input search-nya
              onSearch={
                (keyword) =>
                  router.push(`/certifications/${encodeURIComponent(keyword)}`) //Fungsi ini dipanggil ketika user menekan Enter atau klik tombol search.
                // encodeURIComponent() digunakan agar spasi atau karakter khusus dalam keyword tetap valid di URL
              }
            />

            {/* Tag Search */}
            <div className="flex flex-col mt-8">
              <h2 className="font-semibold text-sm text-black">
                Rekomendasi Pencarian
              </h2>
              <div className="mt-3">
                <TagSearch
                  tags={[
                    "ui/ux",
                    "data",
                    "machine learning",
                    "system",
                    "business",
                  ]}
                  onSelect={(tag) => {
                    setQuery(tag);
                    router.push(`/certifications/${encodeURIComponent(tag)}`);
                  }}
                  tagClass="border-[#ACB7C6] text-black"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
