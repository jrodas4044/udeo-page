import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <div className="container m-auto items-center justify-center mt-12">
        <h1 className="mb-12 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-700 from-yellow-400">
            Facultad de Ciencias Forenses <br /> e Investigación Criminal
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
          La Facultad de ciencias forenses e investigación criminal está
          comprometida con la sociedad en darle a nuestros estudiantes una
          educación integral de la más alta calidad tanto a nivel pregrado,
          posgrado, maestría y doctorado, basada en valores cristianos, éticos y
          la filosofía de la escuela austriaca de economía, creando espacios que
          estimulen la formación, el debate, la crítica, el estudio científico,
          aportando los conocimientos de las diferentes ciencias que contribuyan
          a la prevención de hechos que transgredan la paz del ser humano.
        </p>
      </div>

      <div className="container m-auto flex flex-col md:flex-row  mt-6 justify-center items-center">
        <div className="text-lg font-normal text-justify text-gray-700 lg:text-xl">
          En el estudio de las ciencias forenses y la investigación criminal
          existen más de ciento cincuenta líneas de trabajo que se pueden
          transformar en programas educativos e investigaciones generando
          procesos de cambios sociales, siendo uno de los objetivos de la
          Universidad de Occidente hacer de la facultad de ciencias forenses e
          investigación criminal la pionera en temas de vanguardia forense y que
          en ella se ofrezca un amplio programa educativo y científico, esta
          unidad se centrará en temas de problemática social con ejes de trabajo
          en donde se brindarán cursos presenciales, cursos virtuales,
          diplomados, seminarios, técnicas, licenciaturas, maestrías,
          especialidades y doctorados que contribuyan a la excelencia académica.
        </div>
      </div>

      <div className="w-full m-auto my-8  bg-yellow-200">
        <div className="container m-auto p-8  grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl text-justify shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Misión</h2>
            <p className="text-gray-700">
              La Facultad de ciencias forenses e investigación criminal está
              comprometida con la sociedad en darle a nuestros estudiantes una
              educación integral de la más alta calidad tanto a nivel pregrado,
              posgrado, maestría y doctorado, basada en valores cristianos,
              éticos y la filosofía de la escuela austriaca de economía, creando
              espacios que estimulen la formación, el debate, la crítica, el
              estudio científico, aportando los conocimientos de las diferentes
              ciencias que contribuyan a la prevención de hechos que transgredan
              la paz del ser humano.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl text-justify shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Visión</h2>
            <p className="text-gray-700">
              La Facultad de ciencias forenses e investigación criminal se ha
              propuesto convertirse en la institución modelo de enseñanza en el
              estudio del fenómeno del crimen en América Latina y mantener la
              excelencia en sus egresados, lo que conlleva a conservar,
              fortalecer y desarrollar el liderazgo de las ciencias forenses y
              las investigaciones criminales para que nuestros egresados
              adquieran habilidades y las destrezas necesarias que les permitan
              estar científica y técnicamente capacitados para que se puedan
              desenvolver adecuadamente en los diferentes ámbitos de las
              ciencias forenses.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/1.jpg"
              alt="Imagen 1"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/2.jpg"
              alt="Imagen 2"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/3.jpg"
              alt="Imagen 3"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/4.jpg"
              alt="Imagen 4"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-200 mt-6">
        <div className="container m-auto  py-8">
          <h2 className="text-gray-900 text-2xl font-bold text-center">
            Solicitar más información
          </h2>
          <hr />
          <div className="mt-6">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}
