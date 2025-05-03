import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../ui/LanguageSelector';
import Logo from '../../assets/images/logo-morocco-travel.png' ;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
          onClick={closeMobileMenu}
        >
          <img 
            src={Logo}
            alt="Morocco Travel Logo" 
            className="h-10 md:h-12 transition-transform hover:scale-105"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 relative group"
          >
            Accueil
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/destinations" 
            className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 relative group"
          >
            Destinations
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/tours" 
            className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 relative group"
          >
            Circuits
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 relative group"
          >
            À propos
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/booking" 
            className="bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ml-4"
          >
            Réserver
          </Link>
          <div className="ml-2">
            <LanguageSelector />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-4 space-y-3">
          <Link 
            to="/" 
            className="block py-2 text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Accueil
          </Link>
          <Link 
            to="/destinations" 
            className="block py-2 text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Destinations
          </Link>
          <Link 
            to="/tours" 
            className="block py-2 text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            Circuits
          </Link>
          <Link 
            to="/about" 
            className="block py-2 text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            À propos
          </Link>
          <Link 
            to="/booking" 
            className="block py-2 text-center bg-amber-500 text-white rounded-full hover:bg-amber-500-dark transition-colors duration-200 mt-2"
            onClick={closeMobileMenu}
          >
            Réserver
          </Link>
          <div className="py-2 flex justify-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;