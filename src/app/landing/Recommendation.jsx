import Button from "@/components/PrimaryButton";
import TrainingCard from "@/components/MiniTrainingCard";
export default function Recommendation() {
    return (
        <section className=" items-center bg-[#FFFFFF] py-[40px] mx-30 px-22 my-16 border border-[#ACB7C6] rounded-[12px] gap-[16px] flex flex-col justify-center">
            <div className=" flex flex-col items-center  max-w-[864px] gap-[4px] ">
                <p className="font-semibold text-[40px] leading-[110%] text-center text-[#000000] ">Train Smart, Get Certified, Go Further</p>
                <p className="font-normal text-[20px] leading-[120%] text-center text-[#000000]">Cari tahu rekomendasi pelatihan dan sertifikasi terbaik buat upgrade skill kariermu</p>
            </div>
            <div className=" flex flex-row gap-[27px]"> 
                <TrainingCard 
                        banner= "/images/banner-coursera.png"
                        logo= "/images/logo-udemy.png"
                        title= "Data Science A-Z™: Real-Life Data Science Exercises Included"
                        description= "Pelajari data science dengan pendekatan praktis melalui latihan nyata."
                        duration= "4 jam 30 menit"
                        price= "Rp 500.000"
                        provider= "Udemy"
                        recommended= {true}
                    > </TrainingCard>    
                <TrainingCard 
                        banner= "/images/banner-coursera.png"
                        logo= "/images/logo-udemy.png"
                        title= "Data Science A-Z™: Real-Life Data Science Exercises Included"
                        description= "Pelajari data science dengan pendekatan praktis melalui latihan nyata."
                        duration= "4 jam 30 menit"
                        price= "Rp 500.000"
                        provider= "Udemy"
                        recommended= {true}
                    > </TrainingCard> 
                <TrainingCard 
                        banner= "/images/banner-coursera.png"
                        logo= "/images/logo-udemy.png"
                        title= "Data Science A-Z™: Real-Life Data Science Exercises Included"
                        description= "Pelajari data science dengan pendekatan praktis melalui latihan nyata."
                        duration= "4 jam 30 menit"
                        price= "Rp 500.000"
                        provider= "Udemy"
                        recommended= {true}
                    > </TrainingCard>    
            </div>
            <div className="max-w-[395px] max-h-[62px] items-center gap-[64px]">
                <Button className="w-full h-full">Lihat Rekomendasi Untukmu</Button>
            </div>


            
        </section>
    )
}