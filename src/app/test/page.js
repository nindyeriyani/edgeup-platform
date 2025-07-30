"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Button from "@/components/Button";
import { RotateCcw } from "lucide-react";

export default function ErrorState() {
  const router = useRouter();

  const handleRetry = () => {
    // Use router.refresh() instead of window.location.reload()
    router.refresh();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-white pt-35 pb-28">
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-8">
            Rekomendasi Pelatihan & Sertifikasi
          </h1>
          <div className="w-full max-w-xl mx-auto mb-10">
            <SearchBar
              query="SQL untuk Data Analyst"
              setQuery={() => {}}
              onSearch={() => {}}
              disabled
            />
          </div>
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/error-network.png"
              alt="Koneksi Bermasalah"
              width={200}
              height={200}
            />
          </div>
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
