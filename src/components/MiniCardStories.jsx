"Use client";

export default function StoriesCard({ title, name, role, company, date, desc, image }) {
  return (
    <div className="w-full max-w-[438px] h-auto bg-white rounded-[12px] p-[20px] flex flex-col font-['Nunito_Sans'] border border-[#ACB7C6] gap-[8px]">
        {/* Title */}
        <h3 className="text-[20px] md:text-xl text-[#13171B] font-semibold leading-[120%]">{title}</h3>
      

        {/* Frame profile*/}
        <div className="flex flex-row gap-3 ">
            <div className="w-10 h-10 min-w-[40px] rounded-full overflow-hidden">
                <img src={image} alt={name} className="w-full h-full  object-cover " loading="lazy" />
            </div>
            <div className="flex-1 min-w-0 ">
            <p className="font-medium text-sm leading-[140%] text-[#303B45] truncate">{name}</p>
            <p className="font-normal text-xs leading-none text-[#35414D] truncate"> {role} @ {company}</p>
            </div>
        </div>
        {/* Description */}
        <div className="w-[398px]">
            <p className="w-full font-normal text-[14px] leading-[1.4] text-[#000000B2]">{desc}</p>
        </div>
        
        {/* Footer */}
        <p className="font-medium text-[12px] leading-[1] text-[#303B45] ">{date}</p>
    </div>
    );      
}