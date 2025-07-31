"use client";

import { Share2, Check } from "lucide-react";
import Image from "next/image";
import Button from "./SecondaryButton";

export default function TrainingCard( {banner, provider, logo, title, description, duration}) {

  return (
    <div className="bg-white border border-[#ACB7C6] rounded-md shadow-sm overflow-hidden min-h-[400px] flex flex-col justify-between">
        <div className="relative h-[140px]">
          <Image
            src={banner}
            alt="banner"
            width={235}
            height={120}
            className="object-cover p-2 w-full h-full"
          />
          {(
            <span className="absolute top-3 left-3 bg-white text-xs font-normal text-[#13171B] px-2 py-1 rounded shadow">
              Recommended
            </span>
          )}
        </div>

        <div className="p-4 flex flex-col gap-2 flex-1">
          <div className="flex flex-row items-center gap-2 mb-2">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sm text-[#13171B] font-medium">
              {provider}
            </p>
          </div>
          <h3 className="text-base font-semibold text-black leading-tight line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-row gap-1">
            <p className="font-semibold text-[12px] leading-[100%] tracking-[0] tetx-[#13171B]">Durasi Pelatihan: </p>
            <p className="font-medium text-[12px] leading-[100%] tracking-[0] text-[#35414D]">{duration}</p>
          </div>
          
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px] leading-[100%] tracking-[0] text-[#13171B]">Deskripsi</p>
            <p className="text-sm text-[#5B5B5B] line-clamp-3">
              {description}
            </p>
          </div>
          
        </div>

      <div className="flex flex-row justify-between px-4 pb-4 gap-[72px]">
        <Button className="noActive noHover">
            Lihat Detail
        </Button>
        <Button className= "noActive noHover">
          <Share2></Share2>
        </Button>        
      </div>
    </div>
  );
}
