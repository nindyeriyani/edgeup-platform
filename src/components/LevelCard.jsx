"use cilent";

export default function LevelCard ({ level, role, skills, alat, sertifikasi }) {
    return  (
        <div className="w-full w-[246px] h-[154px] bg-white rounded-[12px] p-[16px] font-['Nunito_Sans'] border border-[#ACB7C6] gap-[10px]">
            <div className="w-[214px] gap-[8px] flex flex-col">
                <div className="flex flex-col gap-[4px] w-[148px] ">
                    <p className="font-semibold text-[16px] leading-[140%] text-[#13171B]">{level}</p>
                    <p className="font-normal text-[14px] leading-[140%] text-[#35414D]">{role}</p>
                </div>
                <div className="flex flex-col gap-[4px] w-full"> 
                    <div className="w-full gap-[8px] flex flex-row">
                        <div className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] overflow-hidden">
                            <img src="/images/icon-skills.png" alt="icon" className="w-full h-full  object-cover " loading="lazy" />
                        </div>
                        <p className="font-semibold text-[14px] leading-[140%] ">Keahlian: <span className="font-normal text-[14px] leading-[140%]"> {skills}</span></p>
                    </div>  
                    <div className="w-full gap-[8px] flex flex-row">
                        <div className="w-[20px] h-[20px] min-w-[20px] overflow-hidden">
                            <img src="/images/icon-skills.png" alt="icon" className="w-full h-full  object-cover " loading="lazy" />
                        </div>
                        <p className="font-semibold text-[14px] leading-[140%] ">Alat: <span className="font-normal text-[14px] leading-[140%]"> {alat}</span></p>
                    </div>
                    <div className="w-full gap-[8px] flex flex-row">
                        <div className="w-[20px] h-[20px] min-w-[20px] overflow-hidden">
                            <img src="/images/icon-skills.png" alt="icon" className="w-full h-full  object-cover " loading="lazy" />
                        </div>
                        <p className="font-semibold text-[14px] leading-[140%] ">Sertifikasi: <span className="font-normal text-[14px] leading-[140%]"> {sertifikasi}</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}