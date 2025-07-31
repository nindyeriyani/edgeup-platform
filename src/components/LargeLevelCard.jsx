"use client";

export default function LevelCard({ level, role, skills, alat, sertifikasi }) {
  return (
    <div className="w-[646px] h-auto bg-white rounded-[12px] p-[20px] font-['Nunito_Sans']  gap-[10px] shadow-2xl">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold text-[16px] leading-[140%] text-[#13171B]">{level}</p>
          <p className="font-normal text-[14px] leading-[140%] text-[#35414D]">{role}</p>
        </div>
        <div className="flex flex-row gap-[8px]">
            {/* KEAHLIAN */}
            <div className="flex flex-col p-[12px]">
                <div className="flex gap-2 items-start">
                <img src="/images/icon-skills.png" alt="icon" className="w-6 h-6 min-w-[20px]" />
                <p className="font-semibold text-[14px] leading-[140%]">Keahlian</p>
                </div>
                <div className="flex flex-col">
                    <ul className="list-disc ml-4 text-[14px] text-[#13171B] leading-[140%]">
                    {skills.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>
            
            

            {/* TOOLS */}
            <div className="flex flex-col p-[12px]">
                <div className="flex gap-2 items-start">
                <img src="/images/icon-skills.png" alt="icon" className="w-6 h-6 min-w-[20px]" />
                <p className="font-semibold text-[14px] leading-[140%]">Tools</p>
                </div>
                <div className="flex flex-col">
                    <ul className="list-disc ml-4 text-[14px] text-[#13171B] leading-[140%]">
                    {alat.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>

            {/* SERTIFIKASI */}
            <div className="flex flex-col p-[12px]">
                <div className="flex gap-2 items-start">
                <img src="/images/icon-skills.png" alt="icon" className="w-6 h-6 min-w-[20px]" />
                <p className="font-semibold text-[14px] leading-[140%]">Sertifikasi</p>
                </div>
                <div className="flex flex-col">
                    <ul className="list-disc ml-4 text-[14px] text-[#13171B] leading-[140%]">
                    {sertifikasi.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
