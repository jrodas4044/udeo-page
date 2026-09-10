interface PensumCardProps {
  period: string;
  index: number;
  courses?: string[];
  description?: string;
}

export default function PensumCard({ period, index, courses, description }: PensumCardProps) {
  return (
    <div className="bg-white border border-black/10 rounded-md p-5 flex flex-col h-full">
      <div className="flex items-baseline gap-3 pb-3 mb-4 border-b border-black/10">
        <span className="font-serif text-udeo-red text-2xl leading-none tabular-nums">{index}</span>
        <h3 className="text-lg leading-snug">{period}</h3>
      </div>
      {courses && (
        <ul className="space-y-2">
          {courses.map((course, i) => (
            <li key={i} className="text-gray-700 text-sm leading-snug">{course}</li>
          ))}
        </ul>
      )}
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
}
