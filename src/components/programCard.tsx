import Image from 'next/image'
import Link from 'next/link'

type Program = {
    name: string,
    url: string,
    imageUrl: string,
    classes?: string,
}

export default function ProgramCard({name, url, imageUrl, classes}: Program) {
    return (
        <div className='h-full'>
            <div
                className="max-w-sm h-full border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-yellow-500 hover:text-gray-700 hover:shadow-xl m-auto"
            >
                <Link href={url}>
                    <Image 
                        className="rounded-t-lg w-full" 
                        src={imageUrl} 
                        alt={name}
                        width={200} 
                        height={200}/>
                </Link>
                <div className="p-5">
                    <Link href={url}>
                        <h2 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h2>
                    </Link>
                </div>
            
            </div>
        </div>

    )
}