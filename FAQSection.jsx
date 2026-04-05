import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "¿Cómo Adquiero a mi cachorro?",
    answer: "Agendas una visita a través de nuestro único número de WhatsApp a nombre del propietario, realizas la reservación de 200 soles y enseguida te brindaremos los cachorros disponibles para que puedas venir escoger a tu nuevo ejemplar en nuestras instalaciones."
  },
  {
    id: 2,
    question: "¿Realizan envíos nacionales?",
    answer: "Si claro, se programa el pago del envió y te brindamos dos opciones de envió mayormente dependen del tamaño y la edad del cachorro para escoger una vía aérea o terrestre, te realizamos una videollamada para que puedas ver y comprobar que será el mismo cachorro que te ofrecieron, adicionalmente te indicaremos su número de identificación a través del lector de microchip, su documentación senasa con el mismo nombre y código."
  },
  {
    id: 3,
    question: "Compromiso: Garantía y Trasparencia",
    answer: "Es una decisión más que importante incorporar un cachorrito a casa es un momento único. Los invitamos a conocernos en persona, a ponerse en contacto con papis de perritos nuestros que vivan en su zona, o a tener una videollamada con nosotros. No se cansen de preguntar y buscar antes de decidir. Nunca hay que precipitarse, es por ello que en Puppy Toy te brindaremos toda la documentación de tu cachorro desde su país de origen."
  },
  {
    id: 4,
    question: "Traslado del cachorro a Perú",
    answer: "Todos nuestros cachorros son recogidos por transportistas autorizados y con ellos sus documentos de importación y legalidad para ser traídos a Perú, brindándoles descansos para que los cachorros no se estresen y adicional a ellos suplementándolos vitamínicamente para fortalecer su sistema inmunológico."
  },
  {
    id: 5,
    question: "Estafas comunes",
    answer: "En nuestra trayectoria como criadores responsables, hemos detectado diversas estafas, como el pintado ilegal de los cachorros para hacerlos parecer de un color más costoso. También hemos observado intentos de asegurar un tamaño de cachorro que, con el tiempo, no se cumple. Además, algunas personas indican que sus cachorros tienen microchip de identificación, asegurando que sea uno nacional; en estos casos, nosotros brindamos el código internacional del microchip. Otra problemática es la usurpación de identidad; por ello, garantizamos a nuestros clientes que el mismo código del propietario aparece en todos los documentos y depósitos realizados."
  },
  {
    id: 6,
    question: "Nombre de empresa",
    answer: "Por seguridad solo brindamos los datos de la empresa a nuestros clientes, siendo así el número de cuenta bancaria, nombre del criador, datos del transportista senasa, datos del código microchip internacional."
  },
  {
    id: 7,
    question: "Alergia - Hipoalergénico",
    answer: "El caniche es considerado un cachorro hipoalergénico porque no pierde mucho pelo, tiene menos escamas en la piel y produce menos saliva, lo que reduce las probabilidades de causar alergias. Además, existen vacunas para tratar estas alergias si fuera necesario. Si has tocado un caniche y te ha dado alergia, es importante verificar si realmente es un caniche puro o un cruce, ya que los cruces pueden tener más potencial alergénico."
  },
  {
    id: 8,
    question: "Características de un Caniche",
    answer: "Destaca por su tamaño, pelo rizado y colorido, y su carácter amigable y activo. Aunque generalmente saludable, requiere cuidados específicos como un cepillado regular, ejercicio moderado, buena alimentación y revisiones veterinarias. Su historia, belleza y temperamento lo convierten en un compañero ideal para familias. En el Criadero de Caniches Puppy Toy, se enfatiza la importancia de la salud y el bienestar de la raza mediante pruebas y cuidado responsable."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 px-2 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-bold text-gray-800 text-sm md:text-base pr-4">
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 px-2 text-gray-600 text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-pink-500 font-medium text-sm md:text-base tracking-wide uppercase mb-2">
            PUPPY TOY PERÚ
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
