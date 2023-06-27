import Image from 'next/image'


export default function Page() {
    return (
        <div className='container m-auto items-center justify-center py-24 px-8'>
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-700 from-yellow-400">Facultad de Ciencias Forenses <br /> e Investigación Criminal</span></h1>
          <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">La  Facultad de ciencias forenses e investigación criminal está comprometida con la sociedad en darle  a nuestros estudiantes una educación integral de la más alta calidad tanto a nivel pregrado, posgrado, maestría y doctorado, basada en valores cristianos, éticos y la filosofía de la escuela austriaca de economía, creando espacios que estimulen la formación, el debate, la crítica, el estudio científico, aportando los conocimientos de las diferentes ciencias que contribuyan  a la prevención de hechos que transgredan la paz del ser humano.</p>
        </div>

        <div className='flex flex-col md:flex-row  mt-6 justify-center items-center'>
            <div className='text-lg font-normal text-justify text-gray-700 lg:text-xl md:w-1/2'>
                En el estudio de las ciencias forenses y la investigación criminal existen más de ciento  cincuenta líneas de trabajo que se pueden transformar en programas educativos e investigaciones generando procesos de cambios sociales, siendo uno de  los objetivos de la Universidad de Occidente hacer de la facultad de ciencias forenses e investigación criminal  la pionera en temas de vanguardia forense y que en ella se ofrezca un amplio programa educativo y científico, esta unidad se centrará en temas de problemática social con ejes de trabajo en donde se brindarán cursos presenciales, cursos virtuales, diplomados, seminarios, técnicas, licenciaturas, maestrías, especialidades y  doctorados que contribuyan a la excelencia académica.
            </div>
            <div className='ml-6 md:w-1/2 md:mt-0 mt-6'>
                <Image 
                    className="rounded-t-lg shadow-xl" 
                    src={'/taf.jpg'}
                    width={600}
                    height={600}
                    alt='forense'
                />
            </div>
                        
        </div>
      </div>
    )
}