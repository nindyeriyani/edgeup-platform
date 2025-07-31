import Button from "@/components/PrimaryButton";
import LevelCard from "@/components/LevelCard";
export default function Roadmap() {
    return (
        <section className=" bg-[#FFFFFF] w-[1280px] my-[80px] flex flex-col  py-[32px] px-[10px] gap-[16px] ">
            <div className="w-full mx-auto gap-[16px] flex flex-col justify-center ">
                <p className="font-semibold text-[40px] leading-[110%] text-center text-[#13171B] whitespace-nowrap sm:whitespace-normal">Map Out Your Path to Success</p>
                <p className="font-normal text-[16px] leading-[140%] text-center align-middle text-[#35414D] whitespace-nowrap sm:whitespace-normal">
                    Tulis bidang yang kamu minati dan temukan jalur kariernya.    
                </p>
            </div>
            <div className="flex flex-col gap-[56px] w-[802px] mx-auto">
                <img src="/images/roadmap-page.png" alt="roadmap-image" className="w-[350px] h-[321.58px] mx-auto" />
                <div className="flex flex-col gap-[24px] w-full justify-between">
                    <div className="w-full  flex flex-row gap-[32px]">
                        <LevelCard level=" Entry-Level" role="Junior Data Analyst" skills="Dasar SQL, Excel" alat="MySQL, Looker" sertifikasi="Belajar SQL" />
                        <LevelCard level=" Mid-Level" role="Data Analyst" skills="Advanced SQL" alat="Big Query, Tableu" sertifikasi="Intermediate SQL" />
                        <LevelCard level=" Senior-Level" role="Lead Data Analyst" skills="Data Modeling" alat="Mode Analytics" sertifikasi="SQL Expert" />
                    </div>
                    <div className=" max-w-[248px] m-h-[48px] items-center mx-auto">
                        <Button className="w-full h-[48px]">Lihat Roadmap Saya</Button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}