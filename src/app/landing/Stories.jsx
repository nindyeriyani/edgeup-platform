import Button from "@/components/Button";
import StoriesCard from "@/components/CardStoriesLandingPage";
import MiniCardStories from "@/components/MiniCardStories";

export default function Stories() {
    return (
        <section className=" bg-[#FFFFFF] my-[80px] mx-[84px] border border-[#ACB7C6] rounded-[12px] py-[40px] px-[40px] flex flex-col items-center gap-[32px]">
            <div >
                <p className=" font-semibold text-[40px] landing-[110%] text-[#13171B]">Learn from Those Who’ve Been There</p>
            </div>
            <div className="flex flex-row gap-[67px] w-full">  
                <StoriesCard 
                    title="Di Balik Dashboard: Cerita Sehari Jadi Data Analyst"
                        name="Aurora"
                        role="Data Analyst"
                        company="EduStat"
                        date="5 Juli 2025"
                        desc="Setiap pagi, aku mulai dengan secangkir kopi dan dashboard. Dari angka di layar, aku bisa tahu performa kampanye atau bahkan potensi masalah..."
                        image="/images/avatar-cardstories-person1.png"
                        location="Jakarta"
                />
                <div className="flex flex-col gap-[32px] w-[438px] items-center">
                    <div className="flex flex-col gap-[24px] w-full">
                        <MiniCardStories 
                            title="Hidup Engineer: Seru atau Pusing?"
                            name="Dimas"
                            role="Software Engineer"
                            company="FinTechID"
                            date="8 Juli 2025"
                            desc="Dari review PR sampai ngoding modul baru, Dimas cerita keseharian sebagai engineer di dunia fintech."
                            image="/images/avatar-cardstories-person2.png"
                        ></MiniCardStories>
                        <MiniCardStories 
                            title="Sehari Jadi UI Designer: Dari Brief Sampai Prototipe"
                            name="Rara"
                            role="UI Designer"
                            company="StartUp"
                            date="14 Juli 2025"
                            desc="Gimana rasanya jadi UI Designer seharian? Cerita ini ngebahas mulai dari brainstorming sampai prototipe di Figma."
                            image="/images/avatar-cardstories-person3.png"
                        ></MiniCardStories>
                    </div>
                    <p className="font-normal text-base leading-[1.4] text-center align-middle text-[#35414D] w-full">
                        Baca cerita keseharian para profesional teknologi mulai dari gaya kerja, tantangan, dan insight pribadi yang relatable.
                    </p>
                    <div className="max-w-[305px] max-h-[48px]">
                        <Button className="w-full h-full">Jelajahi Cerita Karier Nyata</Button>
                </div>
            </div>
        </div>
    </section>
    )

}
    