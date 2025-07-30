import Button from "@/components/Button";
export default function About() {
  return (
    <section className=" bg-[#FFFFFF] mt-20 top-[980px]  max-h-[680px] w-full">
      <div className="flex flex-col gap-[72px] items-center max-w-screen py-[60px]  min-h-[561.42px]">
            {/* frame 1 */}
            <div className="flex flex-row items-center gap-[100px]">
                <img src="/images/cuate.png" alt="abut-image" className="w-full h-full" />
                <div className="flex flex-col gap-[48px] max-w-[426px]">
                    <div className="flex flex-col w-[244px] h-[38px] border-b border-b-[#000000] ">
                        <p className=" font-semibold text-[32px] leading-[120%]">Tentang EdgeUp</p>
                    </div>
                    <p className="font-normal text-[16px] leading-[140%] w-full">EdgeUp adalah sebuah platform prediksi karier dalam ranah teknologi berbasis web yang menjadi pemandu personal bagi mahasiswa dan pencari kerja fresh-graduate di Indonesia untuk memahami tren pekerjaan masa depan. </p>
                </div>
            </div>
            {/* frame 2*/}
            <div className=" flex flex-col items-center gap-[64px]">
                {/* cards */}
                <div className=" flex flex-row gap-[48px] w-full ">   
                    {/* Card 1 */}
                    <div className=" items-center flex flex-col gap-[10px] w-[297px]">
                        <div className=" content-center w-[40px] h-[40px]"> 
                            <img
                            className=" top-[3.75px] left-[3.75px] w-[32.5px] h-[30px]"
                            src="/images/vector.png"
                            alt="vector-icon"
                            />
                        </div>
                        <div className=" flex flex-col w-[297px] h-[76px]">  
                            <p className=" font-semibold text-[20px] leading-[120%] text-center text-[#13171B]">Cerita Profesional</p>
                            <p className=" font-normal text-[16px] leading-[140%] text-center text-[#35414D]">
                            Baca kisah nyata dari profesional dunia kerja.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className=" items-center flex flex-col gap-[10px] w-[297px]">
                        <div className=" content-center w-[40px] h-[40px]"> 
                            <img
                            className=" top-[3.75px] left-[3.75px] w-[32.5px] h-[30px]"
                            src="/images/vector.png"
                            alt="vector-icon"
                            />
                        </div>
                        <div className=" flex flex-col w-[297px] h-[76px]">  
                            <p className=" font-semibold text-[20px] leading-[120%] text-center text-[#13171B]">Cerita Profesional</p>
                            <p className=" font-normal text-[16px] leading-[140%] text-center text-[#35414D]">
                            Baca kisah nyata dari profesional dunia kerja.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className=" items-center flex flex-col gap-[10px] w-[297px]">
                        <div className=" content-center w-[40px] h-[40px]"> 
                            <img
                            className=" top-[3.75px] left-[3.75px] w-[32.5px] h-[30px]"
                            src="/images/vector.png"
                            alt="vector-icon"
                            />
                        </div>
                        <div className=" flex flex-col w-[297px] h-[76px]">  
                            <p className=" font-semibold text-[20px] leading-[120%] text-center text-[#13171B]">Cerita Profesional</p>
                            <p className=" font-normal text-[16px] leading-[140%] text-center text-[#35414D]">
                            Baca kisah nyata dari profesional dunia kerja.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Button */  }
                <div className="max-w-[253px] h-[62px]">   
                    <Button >Mulai Eksplorasi</Button>
                </div>
            </div>
         </div>
    </section>
  );
}