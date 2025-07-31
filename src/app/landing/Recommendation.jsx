import Button from "@/components/PrimaryButton";
import TrainingCard from "@/components/MiniTrainingCard";
import Link from "next/link";

export default function Recommendation() {
    return (
        <section
            id="recommendation"
            className="flex flex-col my-10 mx-4 sm:mx-8 lg:mx-[84px] items-center justify-center gap-6 bg-white py-10 px-6 lg:px-[88px] my-16 border border-[#ACB7C6] rounded-[12px]"
        >
            <div className="flex flex-col items-center max-w-[864px] text-center gap-2">
                <p className="font-semibold text-[28px] lg:text-[40px] leading-[110%] text-black">
                    Train Smart, Get Certified, Go Further
                </p>
                <p className="text-[16px] lg:text-[20px] leading-[120%] text-black">
                    Cari tahu rekomendasi pelatihan dan sertifikasi terbaik buat upgrade skill kariermu
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-[27px] items-center lg:items-stretch w-full justify-center">
                <TrainingCard
                    banner="/images/banner-coursera.png"
                    logo="/images/logo-course.png"
                    title="Certified SQL for Data Analyst"
                    description="Pelatihan ini membekali peserta dengan kemampuan menulis query SQL untuk keperluan analisis data, mulai dari dasar hingga pengolahan data kompleks."
                    duration="4 minggu"
                    provider="Coursera"
                    recommended={true}
                />
                <TrainingCard
                    banner="/images/banner-udemy.png"
                    logo="/images/logo-udemy.png"
                    title="Data Visualization with Tableau"
                    description="Kursus ini mengajarkan cara membuat visualisasi data yang efektif dan interaktif menggunakan Tableau. Peserta akan belajar menyusun dashboard dan men..."
                    duration="2 minggu"
                    provider="Udemy"
                    recommended={true}
                />
                <TrainingCard
                    banner="/images/banner-revou.png"
                    logo="/images/icon-revou.png"
                    title="Digital Marketing Strategy"
                    description="Program ini membahas strategi pemasaran digital menyeluruh, mulai dari SEO, social media, hingga paid advertising. Sangat ideal untuk profesional yang ing..."
                    duration="10 hari"
                    provider="Revou"
                    recommended={true}
                />
            </div>

            <div className="w-full max-w-[305px]">
                <Link href="/certifications">
                    <Button large showRightIcon={true} rightIcon={<img src="/images/icon-right.png"/>} className="w-full">Lihat Rekomendasi Untukmu</Button>
                </Link>
            </div>
        </section>
    );
}
