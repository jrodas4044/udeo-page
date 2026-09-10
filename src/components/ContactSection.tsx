import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white border-t border-black/10 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-2/5">
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              Hablemos de tu siguiente paso
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Déjanos tus datos y un asesor académico se pondrá en contacto
              contigo para resolver dudas sobre programas, horarios e inscripción.
            </p>
            <dl className="text-sm space-y-3 text-gray-700">
              <div>
                <dt className="text-gray-500">Teléfono</dt>
                <dd><a href="tel:+50224584551" className="hover:text-udeo-red">+(502) 2458-4551</a></dd>
              </div>
              <div>
                <dt className="text-gray-500">Correo</dt>
                <dd><a href="mailto:informacion@udeoberistain.edu.gt" className="hover:text-udeo-red">informacion@udeoberistain.edu.gt</a></dd>
              </div>
            </dl>
          </div>
          <div className="md:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
