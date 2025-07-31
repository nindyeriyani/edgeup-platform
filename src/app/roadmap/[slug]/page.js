import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/SecondaryButton";
import LevelCard from "@/components/LargeLevelCard";
const roadmap = await import('@/data/roadmapData.json').then(mod => mod.default);
import Link from "next/link";

export default function RoadmapResult() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar active="roadmap" />
      <main className="flex-grow bg-[#F7F8F9] pt-[100px] px-4 md:px-12 font-['Nunito_Sans']">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start md:justify-between">
            <Button small className="self-start">
              <Link href="/roadmap">
                <img src="/images/icon-back.png" alt="back" className="w-5 h-5" />
              </Link>
            </Button>
            <p className="font-bold text-[20px] md:text-[32px] leading-[120%] text-center text-[#13171B] px-4 md:px-0">
              Roadmap Karir untuk Data Analyst
            </p>
          </div>

          {/* Konten Utama */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center md:items-start">
            {/* Bagian Level Card */}
            <div className="w-full md:w-auto flex flex-col gap-4">
              {roadmap["Data Analyst"].levels.map((level) => (
                <LevelCard
                  key={level.level}
                  level={level.level}
                  role={level.role}
                  skills={level.skills}
                  alat={level.tools}
                  sertifikasi={level.certifications}
                />
              ))}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-[400px] flex flex-col items-center gap-6 md:gap-10">
              <img
                src="/images/roadmap-page.png"
                alt="roadmap"
                className="w-full max-w-[280px] md:max-w-full"
              />
              <div className="text-center w-full md:w-[351px]">
                <p className="text-[14px] md:text-[16px] text-[#303B45] leading-[140%]">
                  Kamu sedang menjelajahi jalur Data Analyst
                </p>
                <p className="font-semibold text-[16px] md:text-[20px] text-[#13171B] leading-[120%] mt-2">
                  Yuk, lihat skill & langkah selanjutnya!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
