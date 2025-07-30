// CareerCard component
"use client";
import FrameTools from "./FrameTools";

export default function ProfileCard({ name, role, company,image,location, toolIcon1, toolIcon2, toolIcon3, nameLogo1, nameLogo2, nameLogo3 }) {
  return (
    <div className="max-w-[386px] h-[420px] min-h-[420px] bg-white rounded-[12px] py-[24px] px-[32px] flex flex-col shadow-[5px_10px_10px_#0000000D] gap-[52px] font-['Nunito_Sans']" >
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
                        <img src="/images/icon-user.png" alt="icon" className="w-[16px] h-[16px] object-cover" />
                        <p className="font-semibold text-sm leading-[1.4] text-[#35414D]">{role} @ {company}</p>
                    </div>
                    <div className="flex flex-row w-full gap-[8px] items-center">
                        <img src="/images/icon-user.png" alt="icon" className="w-[16px] h-[16px] object-cover" />
                        <p className="text-xs leading-none font-normal text-[#303B45] ">{location}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-3 ">
            <p className="text-[16px] font-semibold leading-[140%]">Tools yang sering digunakan:</p>
            <FrameTools logo={toolIcon1} name={nameLogo1}></FrameTools>
            <FrameTools logo={toolIcon2} name={nameLogo2}></FrameTools>
            <FrameTools logo={toolIcon3} name={nameLogo3}></FrameTools>
        </div>
    </div>
  );
}

