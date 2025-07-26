"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TagSearch from "@/components/TagSearch";
import Button from "@/components/Button";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Share2,
  MoreVertical,
  ArrowRight,
} from "lucide-react";

export default function CertificationDetailPage(props, data) {
  const { slug } = use(props.params);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100 pt-30 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Back */}
          <div className="mb-6 flex items-center justify-between gap-2 text-[#13171B]">
            <div className="flex items-center gap-5 cursor-pointer">
              <div className="p-2 border rounded-lg text-[#0BB0BF]">
                <ArrowLeft size={20} />
              </div>
              <span className="text-2xl font-semibold">
                Rekomendasi Pelatihan & Sertifikasi
              </span>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="p-2 border rounded-md text-[#0BB0BF]">
                <Share2 size={20} />
              </button>
              <button className="p-2 border rounded-md text-[#0BB0BF]">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="w-[full] h-[300px] md:h-full relative rounded overflow-hidden">
              <Image
                src="/images/preview-course.png"
                alt="SQL Course"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Info */}
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/logo-course.png"
                  alt="Coursera Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-XL text-[#000] font-semibold mb-1">
                  coursera
                </p>
              </div>
              <h2 className="text-3xl font-semibold text-[#13171B] leading-tight mb-4 w-5/6">
                SQL for Data Analysis Specialization
              </h2>
              <div className="flex items-center text-sm text-[#13171B] gap-20 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>Durasi: 90 jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 border text-black rounded-full">
                    <DollarSign size={12} />
                  </div>
                  <span>Harga: Rp1.234.567</span>
                </div>
              </div>
              <p className="text-sm text-[#13171B] mb-1">
                Pelatihan komprehensif tentang SQL mulai dari dasar hingga
                analisis data tingkat lanjut. Cocok untuk calon Data Analyst
                yang ingin mengasah kemampuan query. Materi mencakup pembuatan
                query kompleks, pengelolaan database, hingga praktik penggunaan
                SQL untuk analisis bisnis.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {/* Tag Search */}
                <TagSearch
                  tags={["Beginner", "SQL", "Data Analyst", "Query" ,"Database"]}
                  tagClass="border-[#ACB7C6] text-black"
                  interactive={false}
                  title={false}
                />
              </div>
              <Button>
                Enroll Sekarang <ArrowRight size={25} />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
