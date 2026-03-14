import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div id="contact" className="bg-udeo-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Contáctanos
            </p>
            <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight">
              ¿Listo para dar el{" "}
              <span className="text-udeo-gold">siguiente paso</span>?
            </h2>
            <p className="text-white/50 mt-4 text-base">
              Déjanos tus datos y un asesor se pondrá en contacto contigo.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
