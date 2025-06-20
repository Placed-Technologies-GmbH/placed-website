import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import PrimaryButton from '@/components/PrimaryButton';

const LaunchEvent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pale-blue/30 to-background"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-placed-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-signal-yellow/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-8 md:px-16 py-16 relative z-10 glass-effect rounded-2xl text-center space-y-6">
          <h1 className="tracking-tight text-work-blue">
            PLACED Produkt-Launch auf dem GVP Tag der Personaldienstleister
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir präsentieren unsere KI-Vertriebsplattform am 24. Juni 2025 in Berlin. Treffen Sie uns ab 18:30 Uhr beim Sommerfest und entdecken Sie, wie KI Ihren Vertrieb revolutioniert.
          </p>
          <PrimaryButton className="inline-flex" />
        </div>
      </section>

      <main className="container mx-auto px-8 md:px-16 py-24 space-y-16">
        <Card className="bg-card/80 glass-effect border border-border">
          <CardContent className="space-y-4 text-center">
            <h2 className="text-center">
              Treffen Sie uns beim Sommerfest: PLACED Spritz-Bar
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              Im Rahmen des Sommerfests laden wir Sie herzlich an unsere gesponserte PLACED Spritz-Bar ein. Ab 18:30 Uhr können Sie in entspannter Atmosphäre kostenlose Spritz-Getränke genießen und die Gelegenheit für einen produktiven Austausch nutzen. Erfahren Sie mehr über unsere Plattform, vernetzen Sie sich mit Branchenkollegen und lassen Sie den Abend gemeinsam ausklingen.
            </p>
            <div className="flex justify-center py-6">
              <img src="/placeholder.svg" alt="Logo GVP" className="max-w-xs" loading="lazy" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 glass-effect border border-border">
          <CardContent className="space-y-4 text-center">
            <h2 className="text-center">
              Live-Demos: Revolutionieren Sie Ihre Vermittlungsprozesse
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              Erleben Sie in unseren Live-Demos, wie die PLACED Plattform Ihre Vermittlungsprozesse transformiert. Wir demonstrieren Ihnen, wie unsere KI-Technologie Kandidaten und Stellen matched, den Vertrieb durch KI optimiert und Sie bei Ihren Herausforderungen unterstützt.
            </p>
            <p className="font-semibold text-center text-foreground">
              Sie möchten vorher schon mehr erfahren?
            </p>
            <p className="text-center text-muted-foreground">
              Kontaktieren Sie uns gerne für weiterführende Informationen oder einen persönlichen Termin vor dem Event.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default LaunchEvent;
