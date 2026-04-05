import React from 'react';
import Layout from './Layout';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import ProductsSection from './ProductsSection';
import VideosSection from './VideosSection';
import CertificatesSection from './CertificatesSection';
import FAQSection from './FAQSection';
import FeaturesSection from './FeaturesSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <VideosSection />
      <CertificatesSection />
      <FAQSection />
      <FeaturesSection />
    </Layout>
  );
}

export default App;
