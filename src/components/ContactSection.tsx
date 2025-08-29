import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Vennligst skriv inn navnet ditt'),
  email: z.string().email('Ugyldig e-postadresse'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Meldingen er for kort'),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = (values: FormValues) => {
    const mailto = `mailto:t.seljevoll@online.no?subject=Henvendelse%20fra%20nettstedet%20-%20${encodeURIComponent(values.name)}&body=${encodeURIComponent(
      `Navn: ${values.name}\nE-post: ${values.email}\nTelefon: ${values.phone ?? ''}\n\nMelding:\n${values.message}`
    )}`;
    window.location.href = mailto;
  };

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

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col h-full">
            <div className="bg-card rounded-lg p-8 shadow-card border border-border h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Kontaktinformasjon</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <Phone className="h-6 w-6 text-primary" strokeWidth={2.25} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Telefon</div>
                    <a href="tel:+4790580592" className="text-lg text-foreground hover:text-primary transition-colors">+47 905 80 592</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <Mail className="h-6 w-6 text-primary" strokeWidth={2.25} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">E-post</div>
                    <a href="mailto:t.seljevoll@online.no" className="text-lg text-foreground hover:text-primary transition-colors">t.seljevoll@online.no</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <MapPin className="h-6 w-6 text-primary" strokeWidth={2.25} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Lokasjon</div>
                    <div className="text-lg text-foreground">Brønnøysund, Norge</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <Clock className="h-6 w-6 text-primary" strokeWidth={2.25} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Åpningstider</div>
                    <div className="text-lg text-foreground">Alltid åpen</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 pt-2">
                  <div className="mt-0.5">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Facebook</div>
                    <button
                      onClick={() => window.open('https://www.facebook.com/TSeljevoll-Maskinentrepren%C3%B8r-191931621148045/?fref=ts', '_blank')}
                      className="text-lg text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      Besøk Facebook-siden
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-card border border-border h-full flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send oss en melding</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Navn</FormLabel>
                      <FormControl>
                        <Input placeholder="Ditt navn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="din@epost.no" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (valgfritt)</FormLabel>
                        <FormControl>
                          <Input placeholder="+47 000 00 000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Melding</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Hvordan kan vi hjelpe deg?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" variant="hero" className="px-8">Send</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center mt-16">
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