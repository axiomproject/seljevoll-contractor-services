import { Shovel, Truck, Snowflake } from 'lucide-react';
import RevealAnimation from './animations/RevealAnimation';
import StaggeredReveal from './animations/StaggeredReveal';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shovel className="h-8 w-8" />,
      title: "Graving",
      description: "Har du en tomt som trenger rydding for nye bygninger, eller trenger du hjelp til å planere tomta? Vi tar alle typer graveoppdrag, små som store.",
      image: "/gallery/1.jpg"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Massetransport",
      description: "Vi sørger for at overskuddsmasse etter graving blir transportert bort. Vi henter også jord, stein og singel etter behov. Kontakt for priser.",
      image: "/gallery/5.jpg"
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Brøyting og strøing",
      description: "Trenger du å fjerne snø fra en parkeringsplass eller privatvei, har vi nødvendig maskineriet for å få dette gjort på en fullstendig og ryddig måte. Skulle det være glatt har vi også strøutstyr.",
      image: "/gallery/10.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <RevealAnimation width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Våre Tjenester
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vi leverer profesjonelle entreprenørtjenester med moderne utstyr og lang erfaring
            </p>
          </div>
        </RevealAnimation>

        <StaggeredReveal delay={0.2} staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group bg-card rounded-lg overflow-hidden shadow-card border border-border transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggeredReveal>

        {/* Additional Services Info */}
        <RevealAnimation direction="up" delay={0.4} width="100%">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-primary/5 rounded-lg p-8 text-center border border-primary/10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Leveranser
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi leverer grus, singel, pukk i de fleste fraksjoner. Har også solbær jord. 
              Kontakt oss for pristilbud. Leverer også på kveldstid og i helger.
            </p>
            <motion.div 
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
                Alltid åpen
              </span>
            </motion.div>
          </motion.div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;