import React from 'react';

const categories = [
  {
    id: 1,
    name: 'MINI TOY',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/1-1300x588.webp',
    link: '/categoria/mini-toy'
  },
  {
    id: 2,
    name: 'TOY',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/2-1300x599.webp',
    link: '/categoria/toy'
  },
  {
    id: 3,
    name: 'ENANO',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/3-1300x571.webp',
    link: '/categoria/enano'
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-8" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
            ELIGE A TU CACHORRO
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-pink-500 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group block"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Category Image */}
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ borderRadius: '12px 12px 0 0' }}
                  />
                </div>
                
                {/* Category Name */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wider group-hover:text-pink-500 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
