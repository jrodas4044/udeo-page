const fields = [
  { id: "nombre", label: "Nombre", type: "text", autoComplete: "given-name" },
  { id: "apellido", label: "Apellido", type: "text", autoComplete: "family-name" },
  { id: "email", label: "Correo electrónico", type: "email", autoComplete: "email" },
  { id: "telefono", label: "Teléfono", type: "tel", autoComplete: "tel" },
];

const inputClass =
  "w-full border border-black/15 rounded-md py-3 px-3.5 text-gray-900 bg-white focus:outline-none focus:border-udeo-red focus:ring-2 focus:ring-udeo-red/20 text-base";

export default function ContactForm() {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.map((f) => (
          <div key={f.id}>
            <label className="block text-gray-800 text-sm font-medium mb-1.5" htmlFor={f.id}>
              {f.label}
            </label>
            <input
              className={inputClass}
              id={f.id}
              name={f.id}
              type={f.type}
              autoComplete={f.autoComplete}
              required
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 bg-udeo-red hover:bg-udeo-red-dark text-white font-semibold py-3.5 px-8 rounded-md transition-colors w-full md:w-auto"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
