import Button from "@/components/Button";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#E7FDFF] to-[#FFFFFF] py-20 text-center overflow-hidden max-h-[820px] ">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-1 md:gap-2 md:gap-4 lg:gap-6 xl:gap-10">
            {/* kolom kiri */}
            <div className="flex justify-start pl-1 md:pl-20 lg:pl-24 xl:pl-30 gap-1 md:gap-2 lg:gap-3 xl:gap-4 ">
                <div className="flex flex-col translate-y-15 md:translate-y-17 lg:translate-y-19 xl:translate-y-21">
                    <img
                    src="/images/icon-linkedin-learning.png"
                    alt="LinkedIn Learning"
                    
                    className="w-16 h-16 rounded-[16px] shadow-md border border-[#F3F4F6]"
                    />
                </div>
                {/* Kolom 2*/}
                <div className="flex flex-col gap-14 md:gap-18 lg:gap-22 xl:gap-26 mt-0">
                    <img
                    src="/images/icon-datacamp.png"
                    alt="Datacamp"
                    className="w-16 h-16 rounded-[16px] shadow-md border border-[#F3F4F6]"
                    />
                    <img
                    src="/images/logo-udemy.png"
                    alt="Udemy"
                    className="w-16 h-16 rounded-[16px] shadow-md border border-[#F3F4F6]"
                    />
                </div>
                
            </div>

            {/* Dummy Tengah */}
            <div className="flex flex-col items-center justify-center gap-[32px] md:gap-[40px] lg:gap-[48px] xl:gap-[56px] ">
                <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 xl:gap-[24px]">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[105%] md:leading-[110%] font-bold text-center ">Siap Melangkah Lebih Jauh Bersama EdgeUp?</h2>
                    <p className=" text-center font-normal
                        text-[16px] leading-[110%]
                        md:text-[18px] md:leading-[115%]
                        lg:text-[19px] lg:leading-[118%]
                        xl:text-[20px] xl:leading-[120%] text-[#13171B]">EdgeUp bantu kamu eksplorasi dunia kerja lewat cerita, pelatihan, tren industri, dan roadmap karier</p>
                </div>
                <div className="flex felx-col 
                        gap-[10px]
                        md:gap-[12px]
                        lg:gap-[14px]
                        xl:gap-[16px]
                        ">
                    <Button>
                        Yuk Mulai Belajar Sekarang    
                    </Button>
                    <Button >
                        Pelajari Dulu</Button>
                </div>
            </div>

            {/* Grup Kanan */}
            <div className="flex justify-end pr-1 md:pr-20 lg:pr-24 xl:pr-30 gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <div className="flex flex-col gap-14 md:gap-18 lg:gap-22 xl:gap-26 mt-0">
                    <img
                    src="/images/icon-datacamp.png"
                    alt="Datacamp"
                    className="w-16 h-16 rounded-[16px] shadow-md border border-[#F3F4F6]"
                    />
                    <img
                    src="/images/logo-udemy.png"
                    alt="Udemy"
                    className="w-16 h-16 rounded-[16px] shadow-md border border-[#F3F4F6]"
                    />
                </div>

                {/* Kolom 2, dengan translateY biar kelihatan selang-seling */}
                <div className="flex flex-col translate-y-15 md:translate-y-17 lg:translate-y-19 xl:translate-y-21">
                    <img
                    src="/images/icon-linkedin-learning.png"
                    alt="LinkedIn Learning"
                    className="w-16 h-16 rounded-[16px] shadow-md border border-[#F3F4F6]"
                    />
                </div>
            </div>
        </div>
    <div className="max-w-screen-xl ">   
        <div className="flex items-center gap-6 mt-24 mb-[-340px] ml-[-90px] scale-150 md:scale-145 lg:scale-140 xl:scale-115">
            <div className="
                relative 
                w-1/2
                aspect-[810/729]
                -skew-x-12
                mx-auto
                skew-x-[-12deg]
                overflow-hidden
                bg-[#F7F8F9]
                p-2
                md:p-4
                lg:p-6
                xl:p-8
                shadow-[inset_-2px_-2px_0px_#00000040,1px_2px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                md:shadow-[inset_-3px_-3px_0px_#00000040,2px_3px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                lg:shadow-[inset_-4px_-4px_0px_#00000040,3px_4px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                xl:shadow-[inset_-6px_-6px_0px_#00000040,3px_4px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                rounded-[8px]
                sm:rounded-[10px]
                md:rounded-[12px]
                lg:rounded-[14px]
                xl:rounded-[16px]

                "
                >
                <img
                    src="/images/certification-page.png"
                    alt="Gambar"
                    className="w-fit h-fit mt-[-28px] object-cover"
                />
            </div>
            {/* Gambar kedua */}
            <div className="relative w-1/2 aspect-[810/729] -skew-x-12 overflow-hidden mx-auto  top-[50px] bg-[#F7F8F9]
                p-2 md:p-4 lg:p-6 xl:p-8
                shadow-[inset_-2px_-2px_0px_#00000040,1px_2px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                md:shadow-[inset_-3px_-3px_0px_#00000040,2px_3px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                lg:shadow-[inset_-4px_-4px_0px_#00000040,3px_4px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                xl:shadow-[inset_-6px_-6px_0px_#00000040,3px_4px_11px_#00000040,inset_0px_2px_0px_#FFFFFF26]
                rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]
                xl:rounded-[16px]
                ">
                <img
                    src="/images/career-roadmap-page.png"
                    alt="Gambar"
                    className="w-fit h-fit object-cover"
                />
            </div>
        </div>
        </div>  
    </section>
  );
}
