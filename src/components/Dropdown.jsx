"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  "Data & Analytics",
  "Design & Creative",
  "Software & Development",
];

export default function JobCategoryDropdown({ selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 flex justify-between items-center shadow-sm hover:border-gray-400 focus:outline-none"
      >
        <span>{selected || "Bidang Pekerjaan"}</span>
        <ChevronDown size={18} />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
