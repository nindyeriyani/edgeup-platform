"use client";

import { useState, useEffect } from "react";

export default function FilterSidebar({ onChange, className = "" }) {
  const [levels, setLevels] = useState([]);

  const handleLevelChange = (value) => {
    const updated = levels.includes(value)
      ? levels.filter((l) => l !== value)
      : [...levels, value];
    setLevels(updated);
  };

  useEffect(() => {
    onChange && onChange({ levels });
  }, [levels]);

  return (
    <aside className={`w-full lg:w-[240px] p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-black">Filter</h3>

      <div className="mb-6">
        <h4 className="font-medium mb-2 text-sm text-black">Level</h4>
        <div className="flex flex-row flex-wrap gap-3 text-sm text-gray-800 lg:flex-col">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <label key={level} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={level.toLowerCase()}
                checked={levels.includes(level.toLowerCase())}
                onChange={() => handleLevelChange(level.toLowerCase())}
              />
              {level}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
