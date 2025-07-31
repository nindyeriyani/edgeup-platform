import Button from "@/components/PrimaryButton";

export default function JobTrends() {
    return (
        <section className=" bg-[#FFFFFF]">
            <div className=" py-[104px] px-[120px] gap-[28px] flex flex-row">
                <div className="flex flex-col gap-[40px] max-w-[398px]">
                    <p className="font-semibold text-[40px] leading-[110%] text-[#000000]">Explore the Latest Job Trends</p>
                    <p className="font-normal text-[20px] leading-[120%] text-[#000000]">
                        Pantau perkembangan kebutuhan karier di berbagai industri dengan data terkini dari berbagai sumber."</p>
                    <div className="max-w-[256px]">
                        <Button className=" large "> Lihat Tren Karir Terkini</Button>
                    </div> 
                </div>
                <div className="bg-[#F7F8F9] h-[382px] w-[613px] rounded-[8px] shadow-[5px_10px_10px_#0000000D]">
                    <img src="/images/grafik-career.png" alt="roadmap-image" className="h-[382px] w-[613px] " />
                </div>
            </div>
        </section>
    );  
}