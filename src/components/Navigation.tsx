import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-professional border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              T. Seljevoll
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Hjem', 'Om oss', 'Tjenester', 'Kontakt'].map((item, index) => {
              const sectionIds = ['hero', 'about', 'services', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`font-medium transition-colors duration-300 hover:text-primary-light ${
                    isScrolled ? 'text-foreground hover:text-primary' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              <Phone className="h-4 w-4" />
              <span>+47 905 80 592</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              {['Hjem', 'Om oss', 'Tjenester', 'Kontakt'].map((item, index) => {
                const sectionIds = ['hero', 'about', 'services', 'contact'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionIds[index])}
                    className={`text-left font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary-light'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              <div className={`flex items-center space-x-2 text-sm pt-2 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                <Phone className="h-4 w-4" />
                <span>+47 905 80 592</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;