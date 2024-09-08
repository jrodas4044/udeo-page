import React from "react";

const FingerprintCard: React.FC = () => {
  const fingerprints = [
    "Pulgar derecho",
    "Índice derecho",
    "Medio derecho",
    "Anular derecho",
    "Meñique derecho",
    "Pulgar izquierdo",
    "Índice izquierdo",
    "Medio izquierdo",
    "Anular izquierdo",
    "Meñique izquierdo",
  ];

  const Fingerprint = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />
      <path
        d="M50 10 Q50 90 90 50 Q50 90 10 50 Q50 90 50 10"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />
      <path d="M30 30 Q50 70 70 30" fill="none" stroke="#333" strokeWidth="1" />
      <path d="M25 50 Q50 20 75 50" fill="none" stroke="#333" strokeWidth="1" />
    </svg>
  );

  return (
    <div className="bg-gray-100 shadow-lg mx-auto p-6 rounded-lg max-w-4xl">
      <h2 className="mb-4 font-bold text-2xl text-center">
        Ficha Decadactilar
      </h2>
      <div className="gap-4 grid grid-cols-5">
        {fingerprints.map((finger, index) => (
          <div key={index} className="bg-white shadow p-2 rounded">
            <div className="mb-2 aspect-square">
              <Fingerprint />
            </div>
            <p className="text-center text-xs">{finger}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FingerprintCard;
