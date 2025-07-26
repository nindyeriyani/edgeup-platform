"use client";

export default function TagSearch({
  title = "Rekomendasi Pencarian",
  tags = [],
  onSelect,
  tagClass = "",
  interactive = true, // default: bisa diklik
}) {
  return (
    <div className="mt-6">
      {title && (
        <h2 className="font-semibold mb-3 text-sm text-black">{title}</h2>
      )}
      <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
        {tags.map((tag, index) => (
          <li
            key={index}
            className={`px-3 py-1 border text-sm rounded-lg ${
              interactive ? "cursor-pointer" : "cursor-default"
            } ${tagClass}`}
            onClick={interactive ? () => onSelect?.(tag) : undefined}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
