"use client";

import { notFound } from "next/navigation";
import rawData from "@/data/frontend_output.json"; // array trainings
import { useParams } from "next/navigation";
import { useSearchParams, useRouter } from "next/navigation";
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

export default function CertificationDetailPage(props, data) {
  const params = useParams();
  const slug = params.slug;
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("from");
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  const handleCopyLink = () => {
    if (training.link_url) {
      navigator.clipboard.writeText(training.link_url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };
  // Truncate text function
  const truncateText = (text, maxLength = 600) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  // Flatten all recommended_courses from all roles into a single array
  const allCourses = Object.values(rawData).flatMap(
    (role) => role.recommended_courses || []
  );

  // Find the course by slugified title
  const training = allCourses.find(
    (item) => slugify(item.title, { lower: true }) === slug
  );

  if (!training) return notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="certifications" />
      <main className="flex-grow bg-gray-100 pt-30 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Back */}
          <div className="mb-6 flex items-center justify-between gap-2 text-[#13171B]">
            <div className="flex items-center gap-5 cursor-pointer">
              <div
                onClick={() => {
                  if (fromQuery) {
                    router.push(
                      `/certifications/${encodeURIComponent(fromQuery)}`
                    );
                  } else {
                    router.push("/certifications");
                  }
                }}
                className="p-2 border rounded-lg text-[#0BB0BF]"
              >
                <ArrowLeft size={20} />
              </div>

              <span className="text-2xl font-semibold">
                Rekomendasi Pelatihan & Sertifikasi
              </span>
            </div>
            <div className="flex gap-4 mt-8">
              <button
                className="p-2 border rounded-lg text-[#0BB0BF] cursor-pointer hover:bg-[#e7e7e7] transition w-fit"
                onClick={handleCopyLink}
                title="Salin link pelatihan"
              >
                {copied ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Share2 size={20} />
                )}
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
                src={training.image_preview_course}
                alt={training.title}
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Info */}
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={training.course_logo}
                  alt={`${training.course_name} Logo`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-XL text-[#000] font-semibold mb-1">
                  {training.course_name}
                </p>
              </div>
              <h2 className="text-3xl font-semibold text-[#13171B] leading-tight mb-4 w-5/6">
                {training.title}
              </h2>
              <p className="text-sm text-[#13171B] mb-5">
                {truncateText(training.descriptions, 500)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {/* Tag Search */}
                <Tag
                  tags={training.topic_tags}
                  tagClass="border-[#ACB7C6] text-black"
                  interactive={false}
                  title={false}
                />
              </div>
              <Button
                onClick={() => {
                  if (training.link_url) {
                    window.open(training.link_url, "_blank");
                  }
                }}
              >
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
