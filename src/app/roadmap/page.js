"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar2";
import SecondaryButton from "@/components/SecondaryButton";


import { useParams } from "next/navigation";
import roadmapData from "@/data/roadmapData";

export default function RoadmapPage() {
    const params = useParams();
    const { slug } = params;
    const roadmap = roadmapData[slug] || null;
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar active="roadmap"/>
      <main className=" flex-grow bg-[#F7F8F9] pt-20 font-['Nunito_Sans']">
        <section className="py-8 md:py-16 px-8 md:px-24 lg:px-54 bg-[#F7F8F9]">
            <div className="flex flex-col mx-auto gap-6 items-center" >
                <div className="flex flex-row justify-center">
                    <div className="w-110 h140">
                        {roadmap === null ? (
                            <img src="/images/icon-roadmap-page.png" alt="icon" className="w-full h-full object-contain" />
                        ) : !roadmap.found ? (
                            <img src="/images/fallback-roadmap-page.png" alt="icon" className="w-full h-full object-contain" />
                        ) : null}
                    </div>
                    <div className="w-90 gap-[16px]">
                        <p className="font-semibold text-[40px] leading-[110%] tracking-normal text-[#13171B]">
                           {roadmap === null ? (
                                "Yuk, cari tahu arah karier kamu!"
                            ) : !roadmap.found ? (
                                "Oops..Belum ada roadmap untuk minat kamu"
                            ) : null}
                        </p>
                        <p className="font-normal text-[16px] leading-[140%] tracking-normal text-[#13171B]">
                            
                            {roadmap === null ? (
                                "Tulis bidang yang kamu minati..."
                            ) : !roadmap.found ? (
                                "Coba eksplorasi ulang atau pilih bidang lainnya ya!"
                            ) : null}
                            
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center px-3 md:px-6 lg:px-12">
                    <SearchBar />
                </div >
                <div className="flex flex-row gap-2">
                    <SecondaryButton
                        showLeftIcon={false}
                        showRightIcon={false}
                        href="/roadmap/ui ux designer"
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
                        href="/roadmap/Software Engineer"
                        >
                        Software Engineer
                    </SecondaryButton>

                    
                    <SecondaryButton
                        showLeftIcon={false}
                        showRightIcon={false}
                        href="/roadmap/Product Manager"
                        >
                        Product Management
                    </SecondaryButton>

                    <SecondaryButton
                        showLeftIcon={false}
                        showRightIcon={false}
                        href="/roadmap/Machine Learning"
                        >
                        Machine Learning
                    </SecondaryButton>

                    <SecondaryButton
                        showLeftIcon={false}
                        showRightIcon={false}
                        href="/roadmap/Digital Product"
                        >
                        Digital Product
                    </SecondaryButton>
                </div>
                <p className="text-[20px] font-semibold leading-[120%] text-center text-[#13171B]">
                    {roadmap === null ? (
                                "Langkah kecil, mulai dari minat yang kamu punya hari ini."
                            ) : !roadmap.found ? (
                                "Saat ini belum tersedia untuk bidang tersebut. Yuk, mulai dari bidang lain dulu"
                            ) : null}
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}