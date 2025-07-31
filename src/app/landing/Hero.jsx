import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
export default function Hero() {
  return (
<section id="hero" className="relative bg-gradient-to-b from-[#E7FDFF] to-[#FFFFFF] py-12 md:py-20 text-center overflow-hidden max-h-[820px]">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-2 lg:gap-4 xl:gap-10 items-center justify-center px-4 sm:px-6">
    
    {/* Kolom Kiri (Stack Mobile) */}
    <div className="flex justify-center md:justify-start gap-3 md:pl-20 lg:pl-24 xl:pl-30 mb-6 md:mb-0">
      <div className="flex flex-col translate-y-0 md:translate-y-17 lg:translate-y-19 xl:translate-y-21 gap-3">
        <img
          src="/images/icon-linkedin-learning.png"
          alt="LinkedIn Learning"
          className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] shadow-md border border-[#F3F4F6]"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-18 lg:gap-22 xl:gap-26">
        <img
          src="/images/icon-datacamp.png"
          alt="Datacamp"
          className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] shadow-md border border-[#F3F4F6]"
        />
        <img
          src="/images/logo-udemy.png"
          alt="Udemy"
          className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] shadow-md border border-[#F3F4F6]"
        />
      </div>
    </div>

    {/* Konten Tengah */}
    <div className="flex flex-col items-center justify-center gap-6 md:gap-[40px]">
      <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 xl:gap-[24px]">
        <h2 className="text-[20px] sm:text-[22px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[110%] font-bold text-center">
          Siap Melangkah Lebih Jauh Bersama EdgeUp?
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] text-[#13171B] max-w-md">
          EdgeUp bantu kamu eksplorasi dunia kerja lewat cerita, pelatihan, tren industri, dan roadmap karier
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-[12px]">
        <Link href="#recommendation">
          <PrimaryButton className="small sm:large">Yuk Mulai Belajar Sekarang</PrimaryButton>
        </Link>
        <Link href="#about">
          <SecondaryButton className="small">Pelajari Dulu</SecondaryButton>
        </Link>
      </div>
    </div>

    {/* Kolom Kanan (Stack Mobile) */}
    <div className="flex justify-center md:justify-end gap-3 md:pr-20 lg:pr-24 xl:pr-30 mt-6 md:mt-0">
      <div className="flex flex-col gap-6 md:gap-18 lg:gap-22 xl:gap-26">
        <img
          src="/images/icon-datacamp.png"
          alt="Datacamp"
          className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] shadow-md border border-[#F3F4F6]"
        />
        <img
          src="/images/logo-udemy.png"
          alt="Udemy"
          className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] shadow-md border border-[#F3F4F6]"
        />
      </div>
      <div className="flex flex-col translate-y-0 md:translate-y-17 lg:translate-y-19 xl:translate-y-21 gap-3">
        <img
          src="/images/icon-linkedin-learning.png"
          alt="LinkedIn Learning"
          className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] shadow-md border border-[#F3F4F6]"
        />
      </div>
    </div>
  </div>

  {/* Gambar Skew */}
  <div className="max-w-screen-xl px-4 mt-16 md:mt-28">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 scale-[0.8] sm:scale-[1.1] md:scale-145 lg:scale-140 xl:scale-115">
      <div className="relative w-full sm:w-1/2 aspect-[810/729] -skew-x-12 overflow-hidden bg-[#F7F8F9] p-2 md:p-6 shadow-[...] rounded-[8px] md:rounded-[14px] xl:rounded-[16px]">
        <img
          src="/images/certification-page.png"
          alt="Gambar"
          className="w-full h-auto object-cover mt-[-12px]"
        />
      </div>
      <div className="relative w-full sm:w-1/2 aspect-[810/729] -skew-x-12 overflow-hidden bg-[#F7F8F9] p-2 md:p-6 shadow-[...] rounded-[8px] md:rounded-[14px] xl:rounded-[16px] top-4 sm:top-[50px]">
        <img
          src="/images/career-roadmap-page.png"
          alt="Gambar"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>

  );
}
