"use client";

export default function LevelCard({ level, role, skills, alat, sertifikasi }) {
  return (
    <div className="w-full max-w-[646px] bg-white rounded-[12px] p-5 font-['Nunito_Sans'] gap-2 shadow-2xl">
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold text-[16px] leading-[140%] text-[#13171B]">{level}</p>
          <p className="font-normal text-[14px] leading-[140%] text-[#35414D]">{role}</p>
        </div>

        {/* Konten (Skills, Tools, Sertifikasi) */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 mt-4">
          {/* KEAHLIAN */}
          <div className="flex flex-col p-3 flex-1">
            <div className="flex gap-2 items-start mb-1">
              <img src="/images/icon-skills.png" alt="icon" className="w-5 h-5 min-w-[20px]" />
              <p className="font-semibold text-[14px] leading-[140%]">Keahlian</p>
            </div>
            <ul className="list-disc ml-5 text-[14px] text-[#13171B] leading-[140%]">
              {skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* TOOLS */}
          <div className="flex flex-col p-3 flex-1">
            <div className="flex gap-2 items-start mb-1">
              <img src="/images/icon-skills.png" alt="icon" className="w-5 h-5 min-w-[20px]" />
              <p className="font-semibold text-[14px] leading-[140%]">Tools</p>
            </div>
            <ul className="list-disc ml-5 text-[14px] text-[#13171B] leading-[140%]">
              {alat.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* SERTIFIKASI */}
          <div className="flex flex-col p-3 flex-1">
            <div className="flex gap-2 items-start mb-1">
              <img src="/images/icon-skills.png" alt="icon" className="w-5 h-5 min-w-[20px]" />
              <p className="font-semibold text-[14px] leading-[140%]">Sertifikasi</p>
            </div>
            <ul className="list-disc ml-5 text-[14px] text-[#13171B] leading-[140%]">
              {sertifikasi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
