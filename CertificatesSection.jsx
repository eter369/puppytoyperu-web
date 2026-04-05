import React from 'react';
import { Stethoscope, FileText, Cpu } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: 'TEST CANINO',
    icon: Stethoscope,
    description: 'El Test de parvovirus y distemper canino se realiza para detectar posibles enfermedades infectocontagiosas o parásitos, asegurando que los cachorros están sanos antes de ser entregados.',
    note: null,
  },
  {
    id: 2,
    title: 'PEDIGREE',
    icon: FileText,
    description: 'Es un documento oficial que certifica la ascendencia de un perro a través de un identificador de microchip, y el AEKC es el club canino que lo otorga a la raza.',
    note: '(COSTO ADICIONAL)',
  },
  {
    id: 3,
    title: 'MICROCHIP',
    icon: Cpu,
    description: 'Es un dispositivo que se implanta en los cachorros desde su país de origen para identificarles de manera única, facilitando su recuperación en caso de pérdida y verificando su propiedad.',
    note: '(COSTO ADICIONAL)',
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 uppercase tracking-wide mb-12">
          CERTIFICADO DE CACHORROS Y GARANTIA
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesData.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent
                    size={56}
                    strokeWidth={1.5}
                    style={{ color: '#C83B15' }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {cert.description}
                </p>

                {/* Note (if applicable) */}
                {cert.note && (
                  <p className="text-gray-400 text-xs uppercase tracking-wide">
                    {cert.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
