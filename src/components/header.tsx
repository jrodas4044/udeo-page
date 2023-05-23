import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-white shadow-lx border border-gray-200">
            <nav className="flex items-center justify-between p-4">
                <Image 
                    src="/logo.png" 
                    width={150}
                    height={150}
                    alt="UDEO BERISTAIN" 
                />
                <ul className="flex space-x-4">
                    <li>
                        
                    </li>
                </ul>
            </nav>
      </header>
    )
}