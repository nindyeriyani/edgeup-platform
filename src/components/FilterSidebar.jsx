"use client";

import { useState, useEffect } from "react";

export default function FilterSidebar({ onChange }) {
  const [levels, setLevels] = useState([]);

  const handleLevelChange = (value) => {
    const updated = levels.includes(value)
      ? levels.filter((l) => l !== value)
      : [...levels, value];
    setLevels(updated);
  };

  // Kirim ke parent saat ada perubahan level
  useEffect(() => {
    onChange && onChange({ levels });
  }, [levels]);

  return (
    <aside>
      <h3 className="text-lg font-semibold mb-4 text-black">Filter</h3>

      {/* Level */}
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-sm text-black">Level</h4>
        <div className="space-y-2 text-sm text-gray-800">
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
