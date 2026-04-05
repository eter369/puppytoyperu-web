import React, { useState, useRef, useEffect } from 'react';

const VideosSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Video IDs for carousel (repeating pattern for 9 cards)
  const videoIds = [
    1158025487, 1158016645, 1158016638,
    1158025487, 1158016645, 1158016638,
    1158025487, 1158016645, 1158016638
  ];

  const totalDots = 10;
  const cardsPerView = 3;
  const maxSlide = Math.ceil(videoIds.length / cardsPerView) - 1;

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / videoIds.length;
      const scrollPosition = index * cardWidth * cardsPerView;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : maxSlide;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < maxSlide ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

  // Update current slide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const cardWidth = carouselRef.current.scrollWidth / videoIds.length;
        const newSlide = Math.round(scrollLeft / (cardWidth * cardsPerView));
        setCurrentSlide(Math.min(newSlide, maxSlide));
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [videoIds.length, maxSlide]);

  return (
    <div className="w-full">
      {/* SECTION 1: Nuestros cachorros en el extranjero */}
      <section 
        className="relative w-full py-16 md:py-24 overflow-hidden"
        style={{ 
          backgroundColor: '#C83B15',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M30 5l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center mb-6 tracking-wide">
            Nuestros cachorros en el extranjero
          </h2>
          
          {/* Description */}
          <p className="text-white/90 text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Todos nuestros cachorros cuentan con microchip de identificación y documentación 
            completa para importación. Garantizamos un proceso seguro y transparente para 
            llevar a tu nuevo compañero a cualquier parte del mundo.
          </p>

          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/1145848655?muted=1&autoplay=1&loop=1&background=1"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Nuestros cachorros en el extranjero"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CANICHES EN SU NUEVO HOGAR */}
      <section 
        className="relative w-full py-16 md:py-24"
        style={{ backgroundColor: '#F8F8F8' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center mb-12 tracking-wide">
            CANICHES EN SU NUEVO HOGAR
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: '#C83B15' }}
              aria-label="Previous slide"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: '#C83B15' }}
              aria-label="Next slide"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Video Cards Carousel */}
            <div 
              ref={carouselRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8 sm:px-12 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videoIds.map((videoId, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ border: '6px solid #C83B15' }}
                >
                  <div className="relative pb-[177.78%]">
                    <iframe
                      src={`https://player.vimeo.com/video/${videoId}?muted=1&autoplay=1&loop=1&background=1`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`Video ${index + 1}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index % (maxSlide + 1))}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#C83B15] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default VideosSection;
