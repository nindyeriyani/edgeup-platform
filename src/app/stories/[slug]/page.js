// app/stories/[slug]/page.js
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/PrimaryButton";
import ProfileCard from "@/components/BigProfileCard";
const stories = await import('@/data/stories.json').then(mod => mod.default);

function FallbackPage() {
  return (
    <section className="flex flex-col items-center mx-auto gap-4 py-24">
        <div className="w-[280px] h-[280px] p-[24px] overflow-hidden">
            <img src="/images/fallback-stories-page.png" alt="fallback" className="w-full h-full object-cover"/>
        </div>
        <div className="max-w-[577px]">   
            <p className="font-semibold text-[24px] leading-[120%] text-center text-[#13171B]">
                Ooops! sepertinya ada yang horor — ceritanya belum muncul!
            </p>
        </div>
        <div className="max-w-[458px]">
            <p className="font-normal text-[16px] leading-[140%] text-center">
                Tenang, bukan salah kamu kok. Coba muat ulang halaman ya.
            </p>
        </div>
        <div className="w-[141px]">
            <Button>Coba Lagi</Button>
        </div>
    </section>
  );
}

export default function StoryPage({ params }) {
  const { slug } = params;
  const story = stories[slug] ;
  return (
    <div className=" flex flex-col min-h-screen">
        <Navbar active="stories"/>
        <main className=" flex-grow bg-[#F7F8F9] pt-[90px] font-['Nunito_Sans']">
            {!story ? <FallbackPage /> : (
                <section className="flex flex-col items-center py-8 px-32 ">
                    <div className="flex flex-col mx-auto gap-6 justify-center">
                        <img src={story.banner} alt="Story Image" className="w-full max-h-[300px] object-cover " />
                        <h1 className="text-[32px] font-semibold leading-[120%] tracking-normal text-center text-[#13171B] ">
                            {story.title}
                        </h1>
                        <p className="max-w-[400px] mx-auto text-[16px] font-normal leading-[140%] text-center font-['Nunito_Sans'] break-words">{story.excerpt}</p>
                        <div className="gap-[24px] flex flex-row">   
                            <ProfileCard 
                                image={story.image}
                                name={story.name}
                                role={story.role}
                                company={story.company}
                                location={story.location}
                                nameLogo1={story.nameTool1}
                                nameLogo2={story.nameTool2}
                                nameLogo3={story.nameTool3}
                                toolIcon1={story.iconTool1}
                                toolIcon2={story.iconTool2}
                                toolIcon3={story.iconTool3}
                            />
                            <div className="bg-white w-full p-[32px] rounded-[16px] flex flex-col gap-[24px]" >
                                {story.content.map((paragraf, index) => (
                                    <p key={index} className="font-normal text-[16px] leading-[140%] text-justify tex-[#35414D]">
                                        {paragraf}
                                    </p>
                                    ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[243px]">
                                <Button>Baca Cerita Lainnya</Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
        <Footer />
    </div>
  );
}