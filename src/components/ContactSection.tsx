import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      content: "+47 905 80 592",
      link: "tel:+4790580592"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-post",
      content: "t.seljevoll@online.no",
      link: "mailto:t.seljevoll@online.no"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lokasjon",
      content: "Brønnøysund, Norge"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Åpningstider",
      content: "Alltid åpen"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt Oss
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ta kontakt for pristilbud eller spørsmål om våre tjenester
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card border border-border text-center group hover:shadow-professional transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4 w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 mx-auto">
                <div className="text-primary group-hover:text-primary-dark transition-colors duration-300">
                  {info.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {info.title}
              </h3>
              
              {info.link ? (
                <a 
                  href={info.link}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-muted-foreground">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Facebook Section */}
        <div className="bg-card rounded-lg p-8 shadow-card border border-border text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Facebook className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Besøk oss på Facebook
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Følg oss på Facebook for oppdateringer og bilder fra våre prosjekter
          </p>
          
          <Button 
            variant="professional" 
            size="lg"
            onClick={() => window.open('https://www.facebook.com/TSeljevoll-Maskinentrepren%C3%B8r-191931621148045/?fref=ts', '_blank')}
          >
            <Facebook className="mr-2 h-5 w-5" />
            Besøk Facebook-siden
          </Button>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Klar for å starte ditt prosjekt?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Kontakt oss i dag for et uforpliktende pristilbud
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = 'tel:+4790580592'}
            className="text-lg px-8 py-4 h-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            Ring nå: +47 905 80 592
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;