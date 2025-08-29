import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Phone, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealAnimation from './animations/RevealAnimation';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = ['/carousel1.jpg', '/carousel2.jpg', '/carousel3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      {backgroundImages.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
      >
        <RevealAnimation direction="down" delay={0.3} width="100%">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Terje Seljevoll
            <span className="block text-4xl md:text-5xl font-light mt-2">
              Maskinentreprenør
            </span>
          </h1>
        </RevealAnimation>
        
        <RevealAnimation delay={0.6} width="100%">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
            Graving, planering, plenbehandling eller andre utfordringer.
            <span className="block mt-2 font-semibold">Vi tar alt.</span>
          </p>
        </RevealAnimation>
        
        <RevealAnimation delay={0.9} width="100%">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg px-8 py-4 h-auto"
              >
                Kontakt oss i dag
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:+4790580592">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" /> Ring nå
                </Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" onClick={scrollToServices} className="text-lg px-8 py-4 h-auto">
                <Wrench className="mr-2 h-5 w-5" /> Se tjenester
              </Button>
            </motion.div>
          </div>
        </RevealAnimation>
      </motion.div>
    </section>
  );
};

export default HeroSection;