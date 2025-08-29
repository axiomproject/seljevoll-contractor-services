import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reviews = [
  {
    name: 'Frida Strand',
    text: 'Pålitelig og veldig dyktig i det han gjør',
    stars: 5,
  },
  {
    name: 'Lasse Ebbesen',
    text: 'Dyktig og pliktoppfyllende entreprenør som man kan stole. God kommunikasjon og service. Anbefales!',
    stars: 5,
  },
  {
    name: 'Eirik Hatten',
    text: 'Rask og effektiv, holder budsjett og holder alltid avtaler – anbefales på det sterkeste',
    stars: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Anmeldelser</h2>
          <p className="text-muted-foreground mt-2">Tilbakemeldinger fra fornøyde kunder</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="border-border bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  <span>{r.name}</span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{r.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 