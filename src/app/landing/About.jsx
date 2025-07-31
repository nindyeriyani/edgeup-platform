import Button from "@/components/PrimaryButton";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white mt-20 w-full">
      <div className="flex flex-col gap-12 md:gap-16 items-center max-w-screen px-4 sm:px-6 md:px-12 py-10 sm:py-[60px]">
        {/* Frame 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl">
          <img
            src="/images/cuate.png"
            alt="about-image"
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] object-contain"
          />
          <div className="flex flex-col gap-4 md:gap-6 max-w-full md:max-w-[420px] px-2 md:px-0 text-center md:text-left">
            <div className="border-b border-black w-fit mx-auto md:mx-0">
              <p className="font-semibold text-lg sm:text-xl md:text-2xl leading-tight">
                Tentang EdgeUp
              </p>
            </div>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-justify md:text-left">
              EdgeUp adalah sebuah platform prediksi karier dalam ranah teknologi berbasis web yang menjadi pemandu personal bagi mahasiswa dan pencari kerja fresh-graduate di Indonesia untuk memahami tren pekerjaan masa depan.
            </p>
          </div>
        </div>

        {/* Frame 2 */}
        <div className="flex flex-col items-center gap-10 md:gap-16 w-full">
          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 flex-wrap w-full px-2 md:px-0">
            {[
              {
                img: "/images/icon-career-home.png",
                title: "Cerita Profesional",
                desc: "Baca kisah nyata dari profesional dunia kerja.",
              },
              {
                img: "/images/icon-recommendation-pelatihan.png",
                title: "Rekomendasi Pelatihan",
                desc: "Temukan pelatihan sesuai peran yang kamu cari.",
              },
              {
                img: "/images/icon-roadmap-karir.png",
                title: "Roadmap Kerja",
                desc: "Lihat langkah-langkah skill & posisi di tiap level.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-[240px] px-4 text-center"
              >
                <div className="w-10 h-10 flex justify-center items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[32px] h-[30px]"
                  />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-[#13171B]">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base font-normal text-[#35414D] leading-[140%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="w-fit">
            <Link href="#recommendation">
              <Button className="large">Mulai Eksplorasi</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
