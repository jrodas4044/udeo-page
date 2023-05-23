import Image from "next/image"

export default function Footer() {
    return (
        <div>
            <footer className="bg-white text-gray-900 flex justify-between items-center  sm:flex-col lg:flex-row mt-6">
            <div className="w-1/3 p-6">
                <p>
                La Universidad de Occidente basa el núcleo de su filosofía en el respeto y observancia de los derechos y libertades de cada individuo. Nuestros mentores son Mises y Hayek.
                </p>
            </div>
            <div className="w-1/3 p-6">
                <div className="my-2">
                    <strong>Email:</strong> infirmacion@udeoberistain.edu.gt
                </div>
                <div className="my-2">
                    <strong>PBX:</strong> +(502) 2458-4550
                </div>
                <div className="my-2">
                2ª Calle 31-38 Oficinas Interior del Colegio Montecarmelo Calzada Doroteo Guamuch Flores Guatemala, Guatemala.
                </div>
            </div>
            <div className="w-1/3 p-6 flex items-center">
                <div>
                    <a href='https://www.facebook.com/UniversidadDeOccidenteExtensionAntonioBeristain/'>
                        <Image 
                            className="text-white"
                            width={30}
                            height={30}
                            src="/facebook.svg" 
                            alt="facebook" 
                        />
                    </a>
                </div>
                <div className="ml-4">
                    <a href='https://wa.link/o7fyaa'>
                        <Image 
                            className="text-white"
                            width={30}
                            height={30}
                            src="/whatsapp.svg" 
                            alt="whatsapp" 
                        />
                    </a>
                </div>
            </div>
        </footer>
        <div className="bg-gray-900 text-white p-4 text-center">
            Facultad de Ciencias Forenses e Investigación Criminal - Universidad de Occidente - Extensión Antonio Beristain. Todos los derechos reservados.
        </div>
        </div>
    )
}