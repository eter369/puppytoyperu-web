import React from 'react';
import { Truck, Gift, Award, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Truck,
    title: 'Entrega a Domicilio',
    subtitle: 'Recibe a tu caniche en la puerta de tu hogar, con total seguridad y cariño.',
  },
  {
    id: 2,
    icon: Gift,
    title: 'Regalo Especial',
    subtitle: 'Sorprende a quien más quieres con un tierno caniche lleno de amor.',
  },
  {
    id: 3,
    icon: Award,
    title: 'Cachorros de Calidad',
    subtitle: 'Caniches con pedigree, vacunados y criados en ambiente familiar',
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Compra con Confianza',
    subtitle: 'Atención personalizada y asesoría antes y después de la compra.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <IconComponent
                    size={48}
                    strokeWidth={1.5}
                    style={{ color: '#C83B15' }}
                  />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
