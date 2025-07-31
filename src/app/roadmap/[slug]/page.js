import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/SecondaryButton";
import LevelCard from "@/components/LargeLevelCard";
const roadmap = await import('@/data/roadmapData.json').then(mod => mod.default);

export default function RoadmapResult(){
    return(
        <div className=" flex flex-col min-h-screen">
            <Navbar active="roadmap"/>
                <main className=" flex-grow bg-[#F7F8F9] pt-[120px] font-['Nunito_Sans'] p-12 ">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-row gap-4">
                            <div className="w-10 h-10">
                                <Button className="small"> </Button>
                            </div>
                            <div className="flex justify-center items-center px-56">
                                <p className="font-bold text-[32px] leading-[120%] tracking-[0%] text-center text-[#13171B]">Roadmap Karir untuk Data Analyst</p>
                            </div>
                            
                        </div>
                        <div className="flex felx-row gap-6">
                            <div className="flex flex-col gap-4">
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
                            <div className="flex flex-col w-[400px] gap-[40px] justify-center ">
                                <img src="/images/roadmap-page.png" alt="roadmap resutlt" className=""></img>
                                <div className="w-[351px] items-center flex flex-col">
                                    <p className="font-normal text-[16px] leading-[140%] text-center align-middle text-[#303B45]">kamu sedang menjelajahi jalur Data Analyst</p>
                                    <p className="font-semibold text-[20px] leading-[120%] text-center align-middle text-[#13171B]">Yuk, lihat skill & langkah selanjutnya!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </div>
    );
}