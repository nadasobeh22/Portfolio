import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' }, 
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent cursor-pointer"
        >
          Eng.Nada Sobeh
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-base lg:text-lg font-medium text-dark-800 hover:text-primary-500 transition-colors relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-dark-800 hover:text-primary-500 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative h-full">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl text-dark-800 hover:text-primary-500 transition-colors p-2"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl sm:text-2xl font-medium text-dark-800 hover:text-primary-500 transition-colors py-2"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;