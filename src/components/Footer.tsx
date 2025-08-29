import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Terje Seljevoll Maskinentreprenør
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Vi er et maskinentreprenørfirma som utfører graving, massetransport 
              og brøyting i området rundt Brønnøysund, Norge.
            </p>
            <div className="text-sm text-secondary-foreground/60">
              Etablert 2007 • ADK Sertifisert
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktinformasjon</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary-foreground/60" strokeWidth={2.25} />
                <a 
                  href="tel:+4790580592"
                  className="hover:text-primary-light transition-colors duration-300"
                >
                  +47 905 80 592
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary-foreground/60" strokeWidth={2.25} />
                <a 
                  href="mailto:t.seljevoll@online.no"
                  className="hover:text-primary-light transition-colors duration-300"
                >
                  t.seljevoll@online.no
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-secondary-foreground/60" strokeWidth={2.25} />
                <span>terjeseljevoll.no</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary-foreground/60" strokeWidth={2.25} />
                <span>Brønnøysund, Norge</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Våre Tjenester</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>• Graving og utgraving</li>
              <li>• Massetransport</li>
              <li>• Brøyting og strøing</li>
              <li>• Asfaltlegging</li>
              <li>• Steinlegging</li>
              <li>• Plenbehandling</li>
              <li>• Drenering og planering</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 Terje Seljevoll Maskinentreprenør. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;