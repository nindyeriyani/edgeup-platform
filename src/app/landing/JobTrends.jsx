import Button from "@/components/PrimaryButton";
import Link from "next/link";

export default function JobTrends() {
    return (
        <section id="jobtrends" className="bg-[#FFFFFF]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-[28px] px-6 md:px-[120px] py-16 md:py-[104px]">
                
                <div className="flex flex-col gap-6 md:gap-[40px] max-w-full md:max-w-[398px] text-center md:text-left">
                    <p className="font-semibold text-2xl md:text-[40px] leading-snug md:leading-[110%] text-[#000000]">
                        Explore the Latest Job Trends
                    </p>
                    <p className="font-normal text-base md:text-[20px] leading-relaxed md:leading-[120%] text-[#000000]">
                        Pantau perkembangan kebutuhan karier di berbagai industri dengan data terkini dari berbagai sumber.
                    </p>
                    <div className="w-full md:max-w-[260px] mx-auto md:mx-0">
                        <Link href="/job-trends">
                            <Button large showRightIcon={true} rightIcon={<img src="/images/icon-right.png"/>} className=" w-full">Lihat Tren Karir Terkini</Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-[#F7F8F9] w-full md:w-[613px] h-auto md:h-[382px] rounded-[8px] shadow-[5px_10px_10px_#0000000D]">
                    <img
                        src="/images/grafik-career.png"
                        alt="roadmap-image"
                        className="w-full h-full object-cover md:w-[613px] md:h-[382px] rounded-[8px]"
                    />
                </div>
            </div>
        </section>
    );
}
