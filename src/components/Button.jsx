"use client";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#00B7D4] text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-[#00A2BD] transition ${className}`}
    >
      {children}
    </button>
  );
}
