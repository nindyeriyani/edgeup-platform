import Button from "@/components/PrimaryButton";
import StoriesCard from "@/components/CardStoriesLandingPage";
import MiniCardStories from "@/components/MiniCardStories";
import Link from "next/link";

export default function Stories() {
    return (
        <section
            id="stories"
            className="bg-[#FFFFFF] my-10 mx-4 sm:mx-8 md:mx-[84px] border border-[#ACB7C6] rounded-[12px] py-8 px-4 sm:px-6 md:py-[40px] md:px-[40px] flex flex-col items-center gap-6 md:gap-[32px]"
        >
            <div className="text-center">
                <p className="font-semibold text-2xl sm:text-3xl md:text-[40px] leading-[110%] text-[#13171B]">
                    Learn from Those Who’ve Been There
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-[67px] w-full">
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

                <div className="flex flex-col gap-6 md:gap-[32px] w-full md:w-[438px] items-center">
                    <div className="flex flex-col gap-4 md:gap-[24px] w-full">
                        <MiniCardStories
                            title="Hidup Engineer: Seru atau Pusing?"
                            name="Dimas"
                            role="Software Engineer"
                            company="FinTechID"
                            date="8 Juli 2025"
                            desc="Dari review PR sampai ngoding modul baru, Dimas cerita keseharian sebagai engineer di dunia fintech."
                            image="/images/avatar-cardstories-person2.png"
                        />
                        <MiniCardStories
                            title="Sehari Jadi UI Designer: Dari Brief Sampai Prototipe"
                            name="Rara"
                            role="UI Designer"
                            company="StartUp"
                            date="14 Juli 2025"
                            desc="Gimana rasanya jadi UI Designer seharian? Cerita ini ngebahas mulai dari brainstorming sampai prototipe di Figma."
                            image="/images/avatar-cardstories-person3.png"
                        />
                    </div>

                    <p className="font-normal text-sm sm:text-base leading-[1.4] text-center text-[#35414D] w-full">
                        Baca cerita keseharian para profesional teknologi mulai dari gaya kerja, tantangan, dan insight pribadi yang relatable.
                    </p>

                    <div className="w-full max-w-[305px]">
                        <Link href="/stories">
                            <Button  large showRightIcon={true} rightIcon={<img src="/images/icon-right.png"/>} className="w-full h-full">Jelajahi Cerita Karier Nyata</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
