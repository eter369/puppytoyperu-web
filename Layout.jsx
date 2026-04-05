import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Main layout wrapper that provides consistent page structure
 * Includes sticky navbar, main content area, and footer
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 * @param {string} props.title - Optional page title for SEO
 * @param {string} props.description - Optional page description for SEO
 */
const Layout = ({ children, title, description }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SEO Meta Tags */}
      {title && (
        <title>{title} | Puppy Toy Perú</title>
      )}
      {description && (
        <meta name="description" content={description} />
      )}

      {/* Navigation Bar - Sticky */}
      <Navbar />

      {/* Main Content Area */}
      {/* Padding top accounts for navbar height (top bar + main nav) */}
      <main 
        className="flex-grow w-full"
        style={{ paddingTop: 'calc(40px + 80px + 10px)' }} // Top bar + nav height + border
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
