"use client";

export default function Button({ children}) {
  return (
    <button className="flex items-center gap-3 px-6 py-3 text-white text-lg font-medium border-2 rounded-xl border-[#E7FDFF] bg-gradient-to-r from-[#0BB0BF] to-[#088C99] hover:opacity-90 transition">
      <span className="flex items-center gap-3">{children}</span>
    </button>
  );
}
