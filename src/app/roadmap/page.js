"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar2";
import SecondaryButton from "@/components/SecondaryButton";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import roadmapData from "@/data/roadmapData";

export default function RoadmapPage() {
  const params = useParams();
  const { slug } = params;
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    if (slug && roadmapData[slug]) {
      setRoadmap(roadmapData[slug]);
    } else {
      setRoadmap(null);
    }
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="roadmap" />
      <main className="flex-grow bg-[#F7F8F9] pt-20 font-['Nunito_Sans']">
        <section className="py-8 md:py-16 px-4 sm:px-6 md:px-10 bg-[#F7F8F9]">
          <div className="flex flex-col gap-6 items-center">
            {/* Top Content */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-44 md:h-60">
                {roadmap === null ? (
                  <img
                    src="/images/icon-roadmap-page.png"
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                ) : !roadmap.found ? (
                  <img
                    src="/images/fallback-roadmap-page.png"
                    alt="fallback"
                    className="w-full h-full object-contain"
                  />
                ) : null}
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] leading-[110%] text-[#13171B]">
                  {roadmap === null
                    ? "Yuk, cari tahu arah karier kamu!"
                    : !roadmap.found
                    ? "Oops.. Belum ada roadmap untuk minat kamu"
                    : null}
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[140%] text-[#13171B]">
                  {roadmap === null
                    ? "Tulis bidang yang kamu minati..."
                    : !roadmap.found
                    ? "Coba eksplorasi ulang atau pilih bidang lainnya ya!"
                    : null}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="w-full max-w-2xl">
              <SearchBar />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              <SecondaryButton
                showLeftIcon={false}
                showRightIcon={false}
                onClick={() => setRoadmap({ found: false })}
              >
                UI/UX Designer
              </SecondaryButton>

              <SecondaryButton
                showLeftIcon={false}
                showRightIcon={false}
                href="/roadmap/Data Analyst"
              >
                Data Analyst
              </SecondaryButton>

              <SecondaryButton
                showLeftIcon={false}
                showRightIcon={false}
                onClick={() => setRoadmap({ found: false })}
              >
                Software Engineer
              </SecondaryButton>

              <SecondaryButton
                showLeftIcon={false}
                showRightIcon={false}
                onClick={() => setRoadmap({ found: false })}
              >
                Product Management
              </SecondaryButton>

              <SecondaryButton
                showLeftIcon={false}
                showRightIcon={false}
                onClick={() => setRoadmap({ found: false })}
              >
                Machine Learning
              </SecondaryButton>

              <SecondaryButton
                showLeftIcon={false}
                showRightIcon={false}
                onClick={() => setRoadmap({ found: false })}
              >
                Digital Product
              </SecondaryButton>
            </div>

            {/* Bottom Message */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[120%] text-center text-[#13171B]">
              {roadmap === null
                ? "Langkah kecil, mulai dari minat yang kamu punya hari ini."
                : !roadmap.found
                ? "Saat ini belum tersedia untuk bidang tersebut. Yuk, mulai dari bidang lain dulu"
                : null}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
