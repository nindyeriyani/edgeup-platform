"use client";

export default function Tag({
  tags = [],
  onSelect,
  tagClass = "",
  interactive = true, // default: bisa diklik
}) {
  return (
    <ul className="flex gap-2 flex-wrap">
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
  );
}
