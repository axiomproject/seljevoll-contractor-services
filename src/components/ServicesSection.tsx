import { Shovel, Truck, Snowflake } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shovel className="h-8 w-8" />,
      title: "Graving",
      description: "Har du en tomt som trenger rydding for nye bygninger, eller trenger du hjelp til å planere tomta? Vi tar alle typer graveoppdrag, små som store."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Massetransport",
      description: "Vi sørger for at overskuddsmasse etter graving blir transportert bort. Vi henter også jord, stein og singel etter behov. Kontakt for priser."
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Brøyting og strøing",
      description: "Trenger du å fjerne snø fra en parkeringsplass eller privatvei, har vi nødvendig maskineriet for å få dette gjort på en fullstendig og ryddig måte. Skulle det være glatt har vi også strøutstyr."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Våre Tjenester
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi leverer profesjonelle entreprenørtjenester med moderne utstyr og lang erfaring
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg p-8 shadow-card border border-border hover:shadow-professional transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex items-center justify-center mb-6 w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 mx-auto">
                <div className="text-primary group-hover:text-primary-dark transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="bg-primary/5 rounded-lg p-8 text-center border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Leveranser
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vi leverer grus, singel, pukk i de fleste fraksjoner. Har også solbær jord. 
            Kontakt oss for pristilbud. Leverer også på kveldstid og i helger.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
              Alltid åpen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;