// CareerCard component
"use client";

export default function StoriesCard({ title, name, role, company, date, desc, image, location }) {
  return (
    <div className="w-full max-w-[526px] h-auto bg-white rounded-[12px] p-6 flex flex-col font-['Nunito_Sans'] border border-[#ACB7C6] justify-between" >

        {/* Image */}
        <div className="w-full max-h-[300px] max-w-[478px] mb-4 overflow-hidden"> 
            <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      {/* Title */}
      <h3 className=" text-[20px] md:text-xl text-[#13171B] font-semibold align-bottom leading-[120%] line-clamp-2 ">{title}</h3>

      {/* Frame profile*/}
      <div className=" w-full items-center gap-[10px] py-[16px] pr-[20px] ">
            <div className="gap-[16px] flex flex-row ">   
                <div className="w-[48px] h-[48px] min-w-[48px] rounded-full overflow-hidden">
                    <img src={image} alt={name} className="w-full h-full  object-cover " loading="lazy" />
                </div>
                <div className="w-[232px] gap-[8px] flex flex-col">
                    <div className="flex flex-row w-full gap-[8px]">
                        <img src="/images/icon-user.png" alt="icon" className="w-[16px] h-[16px] object-cover" />
                        <p className="font-semibold text-sm leading-[1.4] text-[#181D23] ">{name}</p>
                    </div>
                    <div className="flex flex-row w-full gap-[8px]">
                        <img src="/images/icon-company.png" alt="icon" className="w-[16px] h-[16px] object-cover" />
                        <p className="font-semibold text-sm leading-[1.4] text-[#35414D]">{role} @ {company}</p>
                    </div>
                    <div className="flex flex-row w-full gap-[8px]">
                        <img src="/images/icon-location.png" alt="icon" className="w-[16px] h-[16px] object-cover" />
                        <p className="text-xs leading-none font-normal text-[#303B45] ">{location}</p>
                    </div>
                
                </div>
            </div>
        
        </div>

      {/* Description */}
      <p className="font-normal italic text-base leading-[1.4] text-[#35414D] ">{desc}</p>

      {/* Footer */}
        <p className="font-medium text-xs text-[#303B45] mb-2">{date}</p>
      
    </div>
  );
}

