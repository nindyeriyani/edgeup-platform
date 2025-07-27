"use client";

export default function Button({ children}) {
  return (
    <button className="flex items-center px-4 py-3 text-white text-lg font-medium border-2 rounded-xl border-[#E7FDFF] bg-gradient-to-r from-[#0BB0BF] to-[#088C99] hover:opacity-90 transition w-full">
      <span className="block w-full text-center">{children}</span>
    </button>
  );
}
