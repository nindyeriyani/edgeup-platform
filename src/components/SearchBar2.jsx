"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const ref = useRef(null);

  const history = [
    "Data Analyst",
    "Cloud Computing",
    "Artificial Intelligence",
    "Product Designer",
    "Digital Marketing",
  ];

  const handleSearch = () => {
    if (query.trim().toLowerCase() === "data analyst") {
      router.push(`/roadmap/data-analyst`);
      setShowHistory(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setShowHistory(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowHistory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-[1280px] mx-auto relative px-4 md:px-0" ref={ref}>
      <div
        className="flex items-center border border-[#ACB7C6] rounded-[8px] bg-white px-3 py-2 md:px-4 md:py-3 gap-2"
        onClick={() => setShowHistory(true)}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={showHistory ? "Ketik sesuatu.." : "Misalnya Data Analyst"}
          className="flex-1 outline-none text-sm md:text-base font-normal"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        {query && (
          <X
            className="w-5 h-5 text-gray-500 cursor-pointer"
            onClick={handleClear}
          />
        )}
        <Search
          className="w-5 h-5 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {showHistory && (
        <div className="bg-[#F3F4F6] absolute w-full border border-[#8A929E] rounded-[8px] p-4 z-50 shadow-md">
          {history.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item === "Data Analyst") {
                  setQuery(item);
                  setShowHistory(false);
                }
              }}
              className="cursor-pointer px-2 py-2 rounded hover:bg-gray-300 transition"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
