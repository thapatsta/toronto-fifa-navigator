interface TransitOptionProps {
  icon: string;
  method: string;
  description: string;
  color: "green" | "blue" | "red" | "orange";
}

const colorMap = {
  green: "bg-green-50 border-green-200",
  blue: "bg-blue-50 border-blue-200",
  red: "bg-red-50 border-red-200",
  orange: "bg-orange-50 border-orange-200",
};

const textColorMap = {
  green: "text-green-900",
  blue: "text-blue-900",
  red: "text-red-900",
  orange: "text-orange-900",
};

export default function TransitOption({ icon, method, description, color }: TransitOptionProps) {
  return (
    <div className={`rounded-xl border p-3 ${colorMap[color]}`}>
      <div className="flex items-center gap-2 mb-1">
        <span>{icon}</span>
        <span className={`text-xs font-bold ${textColorMap[color]}`}>{method}</span>
      </div>
      <p className={`text-xs ${textColorMap[color]} opacity-90 leading-relaxed`}>{description}</p>
    </div>
  );
}
