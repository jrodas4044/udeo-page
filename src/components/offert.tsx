import { Festive } from "next/font/google";
import Image from "next/image"

export default function Offerts() {
    return (   
        <div className=" flex flex-col md:flex-row">
            <div className="flex bg-gray-900 hover:bg-slate-800 w-full md:w-1/2 m-4 p-0 items-center shadow-lg">
                <div>        
                    <Image
                    src='/taf.jpg'
                    width={300}
                    height={300}
                    alt='UDEO BERISTAIN'
                    className="h-full"
                    />
                
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl text-white">
                        Técnico Universitario Auditor Forense en Investigaciones Criminales     
                    </h2>    
                </div>
            </div>

            <div className="flex bg-gray-900 hover:bg-slate-800 w-1/2 m-4 items-center shadow-lg rounded-xl">
                <div>        
                    <Image
                    src='/lics.jpg'
                    width={300}
                    height={300}
                    alt='UDEO BERISTAIN'
                    />
                
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl text-white">
                        Licenciatura en Investigación Criminal y Seguridad    
                    </h2>    
                </div>
            </div>

        </div>
    )

}