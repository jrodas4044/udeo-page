import Offerts from '@/components/offert'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
          <header id="home-header" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
          <div className="h-screen bg-opacity-75 bg-black flex items-center justify-center">
            <div className="mx-2 text-center">
              <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                <span className="text-white">Universidad</span> De Occidente
                </h1>
                <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                  Extensión Antonio Beristain
                </h2>
                <div className="inline-flex">
                  <a
                    href='https://wa.link/o7fyaa' 
                    className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
                    Contactar  
                  </a>           
                </div>
              </div>
          </div>
      </header>
      <div className='container m-auto p-4'>
         <div className='my-6'>
          <h1 className='text-3xl text-center font-bold text-gray-700 border-b border-gray-200 pb-4'>
            Oferta Académica
          </h1>
         </div>
        <Offerts/>
      </div>

      <div className='w-full flex flex-col  md:flex-row items-center justify-center m-auto p-4 bg-yellow-400'>
        <div className='flex-1 p-6'>
          <h1 className='text-3xl text-center font-bold text-gray-700 border-b border-gray-200 pb-4'>
            ¿Por qué estudiar en <br /> UDEO ext. Antonio Beristain?
          </h1>
          <p className='mt-6'>
          Descubre la excelencia académica en la primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala. Nuestros programas únicos, impartidos por los mejores expertos del país, te brindarán los conocimientos y habilidades necesarios para destacarte en el apasionante campo de la investigación criminal. Con una infraestructura especializada y enfoque práctico, te garantizamos una formación integral y las mejores oportunidades laborales.
          </p>
          <h2 className='text-center mt-6 text-xl font-bold text-gray-700 '>¡Únete a nosotros y sé parte de la vanguardia en la lucha por la justicia!</h2>
        </div>
    
        <div>
          <Image
            src='/1.png'
            width={600}
            height={600}
            alt='UDEO BERISTAIN'
            className="h-full"
          />
        </div>
      </div>

      <div className='container items-center justify-center py-24 px-8'>
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-700 from-yellow-400">Facultad de ciencias Forenses <br /> e Investigación Criminal</span></h1>
          <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700">La  Facultad de ciencias forenses e investigación criminal está comprometida con la sociedad en darle  a nuestros estudiantes una educación integral de la más alta calidad tanto a nivel pregrado, posgrado, maestría y doctorado, basada en valores cristianos, éticos y la filosofía de la escuela austriaca de economía, creando espacios que estimulen la formación, el debate, la crítica, el estudio científico, aportando los conocimientos de las diferentes ciencias que contribuyan  a la prevención de hechos que transgredan la paz del ser humano.</p>
        </div>
      </div>

      <div className='flex w-full items-center  justify-center mb-24'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Hj8skiBG2KU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
    </div>
  )
}
