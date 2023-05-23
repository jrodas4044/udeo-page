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
    </div>
  )
}
