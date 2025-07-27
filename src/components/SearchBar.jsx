import { useState } from "react";
import { Search, X } from "lucide-react";

const suggestions = [
  "SQL untuk Data Analyst",
  "Sertifikasi Product Manager",
  "Fullstack Developer",
  "Growth Marketing Skill",
  "Machine Learning Career Path",
];

export default function SearchBar({ query, setQuery }) {
  const [isFocused, setIsFocused] = useState(false);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex items-center border border-gray-400 rounded-md px-4 py-3 bg-white">
        <input
          type="text"
          className="flex-grow outline-none text-sm text-[#13171B] bg-transparent placeholder:text-[#13171B]"
          placeholder="Masukkan role atau skill yang Anda minati"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        />
        {query.length > 0 ? (
          <X
            className="w-4 h-4 mr-3 text-gray-500 cursor-pointer"
            onClick={() => setQuery("")}
          />
        ) : null}
        <Search className="w-4 h-4 text-gray-500 cursor-pointer" /> 
      </div>

      {/* Dropdown Results */}
      {isFocused && query.length > 0 && (
        <ul
          className="absolute w-full bg-[#F3F4F6] rounded-b-md border border-[#8A929E] z-10"
          aria-label="Rekomendasi pencarian"
        >
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-200 cursor-pointer"
                onClick={() => setQuery(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500 italic">
              Tidak ada hasil.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
