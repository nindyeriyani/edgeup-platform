"use client";

import { useState } from "react";

export default function FilterSidebar() {
  const [levels, setLevels] = useState([]);
  const [prices, setPrices] = useState([]);

  const handleLevelChange = (value) => {
    setLevels((prev) =>
      prev.includes(value) ? prev.filter((l) => l !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (value) => {
    setPrices((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  };

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
                value={level}
                checked={levels.includes(level)}
                onChange={() => handleLevelChange(level)}
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Harga */}
      <div>
        <h4 className="font-medium mb-2 text-sm text-black">Harga</h4>
        <div className="space-y-2 text-sm text-gray-800">
          {[
            "Gratis",
            "<Rp1.000.000",
            "Rp1.000.000-Rp5.000.000",
            "Rp5.000.000-Rp10.000.000",
            ">Rp10.000.000",
          ].map((price) => (
            <label key={price} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={price}
                checked={prices.includes(price)}
                onChange={() => handlePriceChange(price)}
              />
              {price}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
