"use client";

export default function FrameTools({logo, name}) {
    return (
        <div className="w-fit min-w-[113px] h-[46px] border border-[#FFE9C8] p-[12px] rounded-[8px]">
            <div className="w-fit flex flex-row gap-[16px]">
                <img src={logo} className="w-[20px] h-[20px] object-contain" alt={name}/>
                <p className="text-[16px] font-semibold leading-[140%]  text-[#181D23] ">{name}</p>
            </div>
        </div>
    );
}