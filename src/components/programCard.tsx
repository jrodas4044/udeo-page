import Image from "next/image";
import Link from "next/link";

type Program = {
  name: string;
  url: string;
  imageUrl: string;
  classes?: string;
};

export default function ProgramCard({ name, url, imageUrl, classes }: Program) {
  return (
    <div className={`h-full ${classes ?? ""}`}>
      <Link href={url} className="block h-full">
        <div className="group relative bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-udeo-red/15 h-full flex flex-col">
          {/* Image with overlay */}
          <div className="relative overflow-hidden">
            <Image
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              src={imageUrl}
              alt={name}
              width={400}
              height={200}
            />
            <div className="absolute inset-0 bg-udeo-red/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-wide">Ver programa →</span>
            </div>
          </div>
          {/* Card body */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h2 className="font-bold text-gray-800 text-base leading-snug">{name}</h2>
            <p className="text-udeo-red text-sm font-semibold mt-3 group-hover:underline">
              Ver programa →
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
