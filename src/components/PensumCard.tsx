interface PensumCardProps {
  period: string;
  index: number;
  courses?: string[];
  description?: string;
}

export default function PensumCard({ period, index, courses, description }: PensumCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-udeo-red/20 transition-all duration-300 flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-udeo-red to-udeo-red-dark px-5 py-4 flex items-center gap-3">
        <span className="text-white/20 font-black text-4xl leading-none select-none tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-white font-bold text-sm leading-snug">{period}</h3>
      </div>
      {/* Body */}
      <div className="p-5 flex-1">
        {courses && (
          <ul className="space-y-2.5">
            {courses.map((course, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-udeo-red mt-[5px] flex-shrink-0" />
                {course}
              </li>
            ))}
          </ul>
        )}
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
