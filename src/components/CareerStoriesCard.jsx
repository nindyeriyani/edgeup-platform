// CareerCard component
"use client";
import Button from "./PrimaryButton";

export default function CareerCard({ title, name, role, company, date, desc, image }) {
  return (
    <div className="w-full max-w-[339px] h-auto min-h-[306px] bg-white rounded-xl p-5 flex flex-col font-['Nunito_Sans'] shadow-md border border-[#FFF4E4] justify-between" >
      {/* Title */}
      <h3 className=" text-lg md:text-xl text-[#13171B] font-semibold leading-[120%] mb-3 line-clamp-2 ">{title}</h3>

      {/* Frame profile*/}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 min-w-[40px] rounded-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full  object-cover " loading="lazy" />
        </div>
        <div className="flex-1 min-w-0 ">
          <p className="font-medium text-sm leading-[140%] text-[#303B45] truncate">{name}</p>
          <p className="font-normal text-xs leading-none text-[#35414D] truncate"> {role} @ {company}</p>
        </div>
      </div>

      {/* Description */}
      <p className="font-normal text-sm leading-[140%] text-[#000000B2]  mb-3 line-clamp-3 min-h-[30px]">{desc}</p>

      {/* Footer */}
      <div className="mt-auto flex flex-col">
        <p className="font-medium text-xs text-[#303B45] mb-2">{date}</p>
        <div className="w-full">
            <Button>
            Baca Cerita 
            </Button>
        </div>
      </div>
    </div>
  );
}

