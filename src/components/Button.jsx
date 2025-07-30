"use client";

export default function Button({ children}) {
  return (
     <button className="flex items-center justify-center p-1 md:pl-2 lg:pl-3 xl:p-4 text-[#E7FDFF] text-md md:text-lg lg:test-xl xl:text-2xl  font-medium md:border-1 xl:border-2 rounded-sm md:rounded-md lg:rounded-ld xl:rounded-xl border-[#E7FDFF] bg-gradient-to-b from-[#0BB0BF] to-[#088C99] hover:opacity-90 transition w-full md:whitespace-nowrap">
      {children}
     </button>
    
  )
}
