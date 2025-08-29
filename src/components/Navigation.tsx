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

  const labels = ['Hjem', 'Om oss', 'Tjenester', 'Galleri', 'Anmeldelser', 'Kontakt'];
  const sectionIds = ['hero', 'about', 'services', 'gallery', 'reviews', 'contact'];

  return (
    <>
      {/* Contact Info Bar - Always visible */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center space-x-6">
            <a href="tel:+4790580592" className="flex items-center text-sm text-white/90 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5 mr-2" strokeWidth={2} />
              <span>+47 905 80 592</span>
            </a>
            <a href="mailto:post@seljevoll.no" className="flex items-center text-sm text-white/90 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5 mr-2" strokeWidth={2} />
              <span>t.seljevoll@online.no</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className={`fixed top-9 md:top-9 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-professional border-b border-border' 
          : isMobileMenuOpen ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h2 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled || (isMobileMenuOpen && !isScrolled) ? 'text-primary' : 'text-white'
              }`}>
                T. Seljevoll
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {labels.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`font-medium transition-colors duration-300 hover:text-primary-light ${
                    isScrolled ? 'text-foreground hover:text-primary' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="hidden lg:flex items-center">
              <a href="tel:+4790580592">
                <Button variant={isScrolled ? 'hero' : 'secondary'} size="sm" className="gap-2">
                  <Phone className="h-4 w-4" strokeWidth={2.25} /> Ring oss
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                isScrolled || (isMobileMenuOpen && !isScrolled) ? 'text-foreground' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X strokeWidth={2.25} className="h-6 w-6" /> : <Menu strokeWidth={2.25} className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 border-t border-white/20 ${
              isScrolled ? '' : 'bg-background/90 backdrop-blur-sm rounded-b-lg'
            }`}>
              <div className="flex flex-col space-y-4 pt-4 px-2">
                {labels.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionIds[index])}
                    className={`text-left font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-foreground hover:text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <a href="tel:+4790580592" className="pt-2">
                  <Button variant="hero" size="sm" className="w-full gap-2">
                    <Phone className="h-4 w-4" strokeWidth={2.25} /> Ring oss
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;