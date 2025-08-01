"use client";

import { notFound } from "next/navigation";
import rawData from "@/data/frontend_output.json";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Image from "next/image";
import slugify from "slugify";
import { useState } from "react";
import {
  Share2,
  MoreVertical,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import DetailErrorState from "@/components/DetailErrorState";

export default function CertificationDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("from");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const allCourses = Object.values(rawData).flatMap(
    (role) => role.recommended_courses || []
  );

  const training = allCourses.find(
    (item) => slugify(item.title, { lower: true }) === slug
  );

  if (!training) return notFound();

  const handleCopyLink = () => {
    if (training.link_url) {
      navigator.clipboard.writeText(training.link_url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const truncateText = (text, maxLength = 600) => {
    if (!text) return "";
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength).trim() + "...";
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
                onClick={handleCopyLink}
                title="Salin link pelatihan"
              >
                {copied ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Share2 size={20} />
                )}
              </button>

              <button className="w-10 h-10 flex items-center justify-center border rounded-md text-[#0BB0BF]">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="w-full h-[200px] md:h-full relative overflow-hidden">
              <Image
                src={training.image_preview_course}
                alt={training.title}
                fill
                className="object-cover rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-bl-md"
              />
            </div>

            {/* Info */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-md">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Image
                  src={training.course_logo}
                  alt={`${training.course_name} Logo`}
                  width={36}
                  height={36}
                  className="rounded-md"
                />
                <p className="text-lg md:text-xl font-semibold text-black">
                  {training.course_name}
                </p>
              </div>
              <h2 className="text-xl md:text-3xl font-semibold text-[#13171B] leading-tight mb-3 md:mb-4">
                {training.title}
              </h2>
              <p className="text-sm text-[#13171B] mb-5">
                {truncateText(training.descriptions, 500)}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Tag
                  tags={training.topic_tags}
                  tagClass="border-[#ACB7C6] text-black"
                  interactive={false}
                  title={false}
                />
              </div>
              <Button
                onClick={() =>
                  training.link_url && window.open(training.link_url, "_blank")
                }
              >
                Enroll Sekarang <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
