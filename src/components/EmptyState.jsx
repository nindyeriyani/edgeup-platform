"use client";

import Image from "next/image";

export default function EmptyState({
  message = "Belum ada hasil yang bisa ditampilkan. Coba kata kunci lain yuk!",
  illustration = "/images/empty-state.png", // ganti sesuai gambar kamu
  altText = "Empty Data",
}) {
  return (
    <div className="text-center py-20">
      <div className="flex justify-center mb-6">
        <Image src={illustration} alt={altText} width={200} height={200} />
      </div>
      <p className="text-[#13171B] text-base md:text-lg">{message}</p>
    </div>
  );
}
