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
    <div className="h-full">
      <Link href={url} className="block">
        <div
          className={`relative bg-white shadow-md p-3 rounded-lg transform ${
            Math.random() > 0.5 ? "rotate-2" : "-rotate-2"
          } transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-xl hover:shadow-udeo-red/10 cursor-pointer`}
        >
          <div className="top-0 left-0 absolute bg-yellow-100 opacity-20 w-full h-full"></div>
          <Image
            className="border-4 border-white w-full"
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            layout="responsive"
          />
          <div className="p-4">
            <h2 className="font-bold text-center text-gray-800 text-xl tracking-tight">
              {name}
            </h2>
            <p className="text-center text-udeo-red text-sm mt-2 font-semibold hover:underline">
              Ver programa →
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
