import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-yellow-400 shadow-lx border border-gray-200">
            <nav className="flex items-center justify-between p-4">
                <Image 
                    src="/logo.png" 
                    width={150}
                    height={150}
                    alt="UDEO BERISTAIN" 
                />
                <ul className="flex space-x-4">
                    <li className="border-l  border-0  border-l-red-900 py-2 px-4">
                        <Link href='/' className="font-bold hover:text-red-900">
                            Inicio
                        </Link>
                    </li>
                    <li className="border-l  border-0  border-l-red-900 py-2 px-4">
                        <Link href='/' className="font-bold hover:text-red-900">
                            Acerca de
                        </Link>
                    </li>
                    <li className="border-l  border-0  border-l-red-900 py-2 px-4">
                        <Link href='#offerts' className="font-bold hover:text-red-900">
                            Carreras
                        </Link>
                    </li>
                   
                </ul>
            </nav>
      </header>
    )
}