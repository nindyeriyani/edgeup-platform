import Button from "@/components/PrimaryButton";
import LevelCard from "@/components/LevelCard";
import Link from "next/link";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-[#FFFFFF] w-full my-[80px] flex flex-col py-[32px] px-[10px] gap-[16px] justify-center"
    >
      <div className="w-full mx-auto gap-[16px] flex flex-col justify-center">
        <p className="font-semibold text-[32px] md:text-[40px] leading-[110%] text-center text-[#13171B] whitespace-normal">
          Map Out Your Path to Success
        </p>
        <p className="font-normal text-[14px] md:text-[16px] leading-[140%] text-center text-[#35414D] whitespace-normal">
          Tulis bidang yang kamu minati dan temukan jalur kariernya.
        </p>
      </div>

      <div className="flex flex-col gap-[40px] md:gap-[56px] w-full md:w-[802px] mx-auto">
        <img
          src="/images/roadmap-page.png"
          alt="roadmap-image"
          className="w-[250px] h-auto md:w-[350px] md:h-[321.58px] mx-auto"
        />

        <div className="flex flex-col gap-[24px] w-full">
          <div className="w-full flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-center justify-center">
            <LevelCard
              level=" Entry-Level"
              role="Junior Data Analyst"
              skills="Dasar SQL, Excel"
              alat="MySQL, Looker"
              sertifikasi="Belajar SQL"
            />
            <LevelCard
              level=" Mid-Level"
              role="Data Analyst"
              skills="Advanced SQL"
              alat="Big Query, Tableu"
              sertifikasi="Intermediate SQL"
            />
            <LevelCard
              level=" Senior-Level"
              role="Lead Data Analyst"
              skills="Data Modeling"
              alat="Mode Analytics"
              sertifikasi="SQL Expert"
            />
          </div>

          <div className="max-w-[248px] h-[48px] mx-auto">
            <Link href="/roadmap">
              <Button className="w-full h-[48px]">Lihat Roadmap Saya</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
