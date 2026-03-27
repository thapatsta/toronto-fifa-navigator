"use client";

interface NeighbourhoodFilterProps {
  neighbourhoods: string[];
  selected: string;
  onChange: (n: string) => void;
}

export default function NeighbourhoodFilter({ neighbourhoods, selected, onChange }: NeighbourhoodFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          selected === "" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {neighbourhoods.map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selected === n ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}
