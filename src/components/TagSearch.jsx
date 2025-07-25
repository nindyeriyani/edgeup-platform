"use client";

export default function TagSearch({ title = "Rekomendasi Pencarian", tags = [], onSelect, tagClass = "" }) {
  return (
    <div className="mt-6">
      <h2 className="font-semibold mb-3 text-sm text-black">{title}</h2>
      <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
        {tags.map((tag, index) => (
          <li
            key={index}
            className={`px-3 py-1 border text-sm rounded-full cursor-pointer ${tagClass}`}
            onClick={() => onSelect(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
