import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Video Background Section */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://puppytoyperu.com/wp-content/uploads/2025/11/videoiniciopuppytoyperu-1-1-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Welcome Section */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center mb-8 md:mb-12">
            Bienvenido a la familia de{' '}
            <span className="text-[#C83B15]">PUPPY TOY PERÚ</span>
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Somos criadores con más de 10 años de experiencia, dedicados a preservar 
                la raza Caniche/Poodle con los más altos estándares de calidad. Nuestro 
                compromiso es brindar cachorros sanos, felices y bien socializados que 
                se conviertan en miembros amados de tu familia.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Nos especializamos en la salud, reproducción responsable y genética de 
                nuestros ejemplares. Cada cachorro es criado con amor, cuidado y atención 
                personalizada, garantizando su bienestar físico y emocional desde el primer día.
              </p>
            </div>

            {/* Vimeo Video */}
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/1145848703?muted=1&autoplay=1&loop=1&background=1"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Puppy Toy Peru Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
