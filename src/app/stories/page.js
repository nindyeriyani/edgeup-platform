"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerStoriesCard from "@/components/CareerStoriesCard";


export default function StoriesPage() {
 

  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar active="stories"/>
      <main className=" flex-grow bg-[#F7F8F9] pt-20">
        <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F8F9]">
            <div className=" flex flex-col max-w-[1280px] w-full mx-auto items-center">
                <h2 className="text-3xl sm:text-4xl font-bold font-['Nunito_Sans'] leading-[110%] text-center mb-4 ">
                Career Stories
                </h2>
                <p className=" max-w-2xl text-base sm:text-lg md:text-xl leading-[120%] text-center font-normal font-['Nunito_Sans']  mb-8 sm:mb-12">
                    Cerita nyata dari mereka yang udah lebih dulu meniti karier. Yuk, lihat keseharian dan insight mereka
                </p>
                <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 ">
                        <CareerStoriesCard
                        title="Di Balik Dashboard: Cerita Sehari Jadi Data Analyst"
                        name="Aurora"
                        role="Data Analyst"
                        company="EduStat"
                        date="5 Juli 2025"
                        desc="Dari buka dashboard sampai presentasi ke tim, Nabila cerita gimana kerjaan analis tuh lebih dari sekadar angka."
                        image="/images/avatar-cardstories-person1.png"
                        />
                        <CareerStoriesCard
                        title="Hidup Engineer: Seru atau Pusing?"
                        name="Dimas"
                        role="Software Engineer"
                        company="FinTechID"
                        date="8 Juli 2025"
                        desc="Dari review PR sampai ngoding modul baru, Dimas cerita keseharian sebagai engineer di dunia fintech."
                        image="/images/avatar-cardstories-person2.png"
                        />
                        <CareerStoriesCard
                        title="Sehari Jadi UI Designer: Dari Brief Sampai Prototipe"
                        name="Rara"
                        role="UI Designer"
                        company="StartUp"
                        date="14 Juli 2025"
                        desc="Gimana rasanya jadi UI Designer seharian? Cerita ini ngebahas mulai dari brainstorming sampai prototipe di Figma."
                        image="/images/avatar-cardstories-person3.png"
                        />
                    
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}