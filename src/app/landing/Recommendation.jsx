import Button from "@/components/PrimaryButton";
import TrainingCard from "@/components/MiniTrainingCard";
import Link from "next/link";
export default function Recommendation() {
    return (
        <section id="recommendation" className=" items-center bg-[#FFFFFF] py-[40px] mx-30 px-22 my-16 border border-[#ACB7C6] rounded-[12px] gap-[16px] flex flex-col justify-center">
            <div className=" flex flex-col items-center  max-w-[864px] gap-[4px] ">
                <p className="font-semibold text-[40px] leading-[110%] text-center text-[#000000] ">Train Smart, Get Certified, Go Further</p>
                <p className="font-normal text-[20px] leading-[120%] text-center text-[#000000]">Cari tahu rekomendasi pelatihan dan sertifikasi terbaik buat upgrade skill kariermu</p>
            </div>
            <div className=" flex flex-row gap-[27px]"> 
                <TrainingCard 
                        banner= "/images/banner-coursera.png"
                        logo= "/images/logo-course.png"
                        title= "Certified SQL for Data Analyst"
                        description= "Pelatihan ini membekali peserta dengan kemampuan menulis query SQL untuk keperluan analisis data, mulai dari dasar hingga pengolahan data kompleks."
                        duration= "4 minggu"
                        provider= "Coursera"
                        recommended= {true}
                    > </TrainingCard>    
                <TrainingCard 
                        banner= "/images/banner-udemy.png"
                        logo= "/images/logo-udemy.png"
                        title= "Data Visualization with Tableau"
                        description= "Kursus ini mengajarkan cara membuat visualisasi data yang efektif dan interaktif menggunakan Tableau. Peserta akan belajar menyusun dashboard dan men..."
                        duration= "2 minggu"
                        provider= "Udemy"
                        recommended= {true}
                    > </TrainingCard> 
                <TrainingCard 
                        banner= "/images/banner-revou.png"
                        logo= "/images/icon-revou.png"
                        title= "Digital Marketing Strategy"
                        description= "Program ini membahas strategi pemasaran digital menyeluruh, mulai dari SEO, social media, hingga paid advertising. Sangat ideal untuk profesional yang ing..."
                        duration= "10 hari"
                        provider= "Revou"
                        recommended= {true}
                    > </TrainingCard>    
            </div>
            <div className="max-w-[395px] max-h-[62px] items-center gap-[64px]">
                <Link href="/certifications">
                    <Button className="w-full h-full">Lihat Rekomendasi Untukmu</Button>
                </Link>
                
            </div>


            
        </section>
    )
}