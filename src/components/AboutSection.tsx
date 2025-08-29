import { CheckCircle, Award, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "La profesjonelle gjøre jobben",
      description: "Våre fagfolk har lang erfaring og nødvendige godkjenninger for å få jobben gjort."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Til avtalt tid og pris",
      description: "Vi holder det vi lover og holder deg som kunde oppdatert til enhver tid."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Kunde i fokus",
      description: "Som kunde hos oss kan du forvente profesjonell og erfaren bemanning som har kunden i fokus."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* About Us */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Hvem er vi?
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Vi ligger i Brønnøy kommune og tar oppdrag i nærområdet og omkringliggende 
              område. Vi har lang tid i bransjen siden vårt etablering i 2007, og har lang 
              erfaring og gode referanser innenfor vårt arbeidsområde.
            </p>
            
            <p>
              I vårt tjenestetilbud finner du graving, busking, massetransport og andre 
              entreprenørtjenester som som asfaltlegging, steinlegging, plenbehandling, 
              drenering, planering og mer.
            </p>
            
            <p className="font-semibold text-foreground">
              Jobben utføres med moderne maskinpark og kundeorientert nøyaktighet.
            </p>
            
            <p>
              Vi tar på oss oppdrag for både bedrifter og privatpersoner, fra små gravejobber 
              til store langtidsprosjekter. Vi har solid erfaring og gjør jobben i tråd med 
              avtalen, til avtalt tid og pris.
            </p>
          </div>
        </div>

        {/* ADK Certification */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card rounded-lg p-8 shadow-card border border-border">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
              ADK Sertifisert
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Med en sertifisering innenfor ADK (Anlegg, Drift og Kontroll), er vi berettiget 
              til å arbeide med hovedledninger og også el-kabler for vann og avløp i alle dimensjoner.
            </p>
          </div>
        </div>

        {/* Professional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card border border-border text-center group hover:shadow-professional transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-primary group-hover:text-primary-light transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;