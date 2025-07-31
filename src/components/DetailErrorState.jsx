"use client";

import { useParams } from "next/navigation";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ArrowLeft, Share2, MoreVertical } from "lucide-react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";

export default function DetailErrorState() {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("from");
  const router = useRouter();

  const handleRetry = () => {
    router.refresh();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100 pt-30 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Back */}
          <div className="mb-6 flex flex-row sm:flex-row sm:items-center sm:justify-between gap-4 text-[#13171B]">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => {
                router.push(
                  fromQuery
                    ? `/certifications/${encodeURIComponent(fromQuery)}`
                    : "/certifications"
                );
              }}
            >
              <div className="p-2 border rounded-lg text-[#0BB0BF]">
                <ArrowLeft size={20} />
              </div>
              <span className="text-lg sm:text-xl font-semibold">
                Rekomendasi Pelatihan & Sertifikasi
              </span>
            </div>
            <div className="flex gap-3 sm:gap-4 flex-shrink-0">
              <button
                className="w-10 h-10 flex items-center justify-center border rounded-md text-[#0BB0BF] hover:bg-[#e7e7e7] transition"
                title="Salin link pelatihan"
              >
                <Share2 size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center border rounded-md text-[#0BB0BF]">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <section className="flex flex-col items-center justify-center w-full min-h-[400px] bg-white rounded-2xl shadow p-8">
            <div className="mb-8">
              <Image
                src="/images/detail-error-state.png"
                alt="Koneksi Bermasalah"
                width={200}
                height={200}
              />
            </div>
            <p className="text-black mb-6 text-lg text-center">
              Ups, kami belum bisa menampilkan data. Silakan refresh!
            </p>
            <div className="flex justify-center">
              <Button onClick={handleRetry}>
                Coba Lagi? <RotateCcw size={18} className="ml-2" />
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
