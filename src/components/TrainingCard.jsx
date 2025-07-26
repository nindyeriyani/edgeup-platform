import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function TrainingCard({ data }) {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-md shadow-sm overflow-hidden">
      <div className="relative h-[140px]">
        <Image
          src={data.image}
          alt={data.title}
          width={235}
          height={120}
          className="object-cover p-2 w-full h-full"
        />
        {data.recommended && (
          <span className="absolute top-3 left-3 bg-white text-xs font-normal text-[#13171B] px-2 py-1 rounded shadow">
            Recommended
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 mb-2">
          <img
            src={data.logo}
            alt={`${data.provider} logo`}
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="text-sm text-[#5B5B5B] font-medium">{data.provider}</p>
        </div>

        <h3 className="text-base font-semibold text-black leading-tight">
          {data.title}
        </h3>
        <p className="text-sm text-[#5B5B5B]">{data.description}</p>
        <p className="text-sm text-[#5B5B5B]">
          Durasi pelatihan: {data.duration}
        </p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[#2A72A5] font-semibold">{data.price}</p>
          <div className="p-2 border rounded-lg text-[#0BB0BF]">
            <Share2 className="w-4 h-4 text-[#0BB0BF] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
