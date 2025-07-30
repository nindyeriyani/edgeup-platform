"use client";

export default function Button({ children, ...props }) {
  return (
    <button {...props} className="flex items-center px-4 py-3 text-white text-lg font-medium border-2 rounded-xl border-[#E7FDFF] bg-gradient-to-r from-[#0BB0BF] to-[#088C99] hover:opacity-90 transition cursor-pointer">
      <span className="w-full text-center flex items-center gap-2">{children}</span>
    </button>
  );
}
