import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'POODLE TOY NEGRO',
    category: 'TOY',
    price: 'S/2,500.00',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/ptp-fotos-prod-15_11_11zon-800x800.webp',
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: 'POODLE MINI TOY NEGRO',
    category: 'MINI TOY',
    price: 'S/3,500.00',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/ptp-fotos-prod-1_4_11zon-800x800.webp',
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: 'POODLE TOY BEIGE',
    category: 'TOY',
    price: 'S/2,500.00',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/ptp-fotos-prod-11_5_11zon-800x800.webp',
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: 'POODLE MINI TOY ROJO',
    category: 'MINI TOY',
    price: 'S/4,900.00',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/ptp-fotos-prod-5_8_11zon-800x800.webp',
    originalPrice: null,
    discount: null,
  },
  {
    id: 5,
    name: 'POODLE TOY MARRON CHOCOLATE',
    category: 'TOY',
    price: 'S/4,000.00',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/ptp-fotos-prod-14_3_11zon-800x800.webp',
    originalPrice: null,
    discount: null,
  },
  {
    id: 6,
    name: 'POODLE TOY ROJO',
    category: 'TOY',
    price: 'S/4,500.00',
    originalPrice: 'S/5,000.00',
    discount: '-10%',
    image: 'https://puppytoyperu.com/wp-content/uploads/2025/11/puppy-wb_11zon-800x800.webp',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount && (
          <span className="absolute top-3 left-3 bg-[#C83B15] text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        {/* Category */}
        <a
          href="#"
          className="text-xs text-gray-500 hover:text-[#C83B15] transition-colors uppercase tracking-wide"
        >
          {product.category}
        </a>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 mt-1 mb-2 text-sm uppercase">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-3">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm mr-2">
              {product.originalPrice}
            </span>
          )}
          <span className="text-[#C83B15] font-bold text-lg">
            {product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#FDE8E3] hover:bg-[#C83B15] text-[#C83B15] hover:text-white transition-colors duration-300 py-2.5 px-4 rounded-lg text-sm font-medium">
          <ShoppingCart size={16} />
          <span>Añadir al carrito</span>
        </button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            CACHORROS
          </h2>
          <div className="w-24 h-1 bg-[#C83B15] mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
