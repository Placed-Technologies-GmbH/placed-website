
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from './FadeIn';

const ReadyToUse = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-work-blue mb-4">
              Sofort einsatzbereit
            </h2>
          </div>

          {/* Features Grid */}
          <div className="space-y-16">
            {/* Feature 1 - Integration */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Anbindung an bestehende Systemlandschaft
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  PLACED ergänzt Ihre vorhandene Infrastruktur nahtlos – ob Sie mit Bullhorn, 
                  Zoove, Compleet oder einem anderen ATS arbeiten. Dank direkter 
                  Schnittstellen, API-Zugriff und einfacher Datenübergabe lässt sich PLACED in 
                  jeden Workflow integrieren. Sie müssen nichts umstellen. Ihre Systeme bleiben, 
                  wie sie sind – nur Ihre Ergebnisse werden besser.
                </p>
              </div>
              <FadeIn delay={0.1} className="order-first md:order-last">
                <Card className="bg-card shadow-sm">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="System Integration"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Feature 2 - No Setup */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Kein Setup, keine IT, keine Hürden
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  PLACED ist sofort einsatzbereit. Intuitiv und unkompliziert, auch für Nicht-Techniker. 
                  Keine Schulung, keine Softwareinstallation, kein Projekt. Bereits 
                  beim ersten Login erhalten Sie Zugang zu offenen Stellen, Ansprechpartnern 
                  und potenziellen Kunden.
                </p>
              </div>
              <FadeIn delay={0.2}>
                <Card className="bg-card shadow-sm">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Easy Setup"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Feature 3 - Results */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Ergebnisse ab dem ersten Tag
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mit PLACED identifizieren Sie sofort passende Stellen, sprechen mit den 
                  richtigen Ansprechpartnern und generieren relevante Gespräche. Die Zahl an 
                  zielführenden Kundengesprächen steigt spürbar – oft schon in der ersten 
                  Woche.
                </p>
              </div>
              <FadeIn delay={0.3} className="order-first md:order-last">
                <Card className="bg-card shadow-sm">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Results Dashboard"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToUse;
