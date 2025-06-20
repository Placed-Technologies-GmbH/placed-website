import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LaunchEvent = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            PLACED ist neues Fördermitglied im GVP
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2">
            Unser Engagement für Qualität und Innovation in der Personaldienstleistungsbranche
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-signal-yellow text-work-blue hover:bg-signal-yellow/90 rounded-xl px-6 py-3 font-semibold inline-flex items-center"
          >
            Demo buchen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Press release content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800 leading-relaxed text-base">
          <p>
            Wir präsentieren unsere KI-Vertriebsplattform am 24. Juni 2025 in Berlin. Treffen Sie uns ab 18:30 Uhr beim Sommerfest und entdecken Sie, wie KI Ihren Vertrieb revolutioniert.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Treffen Sie uns beim Sommerfest: PLACED Spritz-Bar
            </h2>
            <p>
              Im Rahmen des Sommerfests laden wir Sie herzlich an unsere gesponserte PLACED Spritz-Bar ein. Ab 18:30 Uhr können Sie in entspannter Atmosphäre kostenlose Spritz-Getränke genießen und die Gelegenheit für einen produktiven Austausch nutzen. Erfahren Sie mehr über unsere Plattform, vernetzen Sie sich mit Branchenkollegen und lassen Sie den Abend gemeinsam ausklingen.
            </p>
            <div className="flex justify-center py-6">
              <img src="/placeholder.svg" alt="Logo GVP" className="max-w-xs" loading="lazy" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Live-Demos: Revolutionieren Sie Ihre Vermittlungsprozesse
            </h2>
            <p>
              Erleben Sie in unseren Live-Demos, wie die PLACED Plattform Ihre Vermittlungsprozesse transformiert. Wir demonstrieren Ihnen, wie unsere KI-Technologie Kandidaten und Stellen matched, den Vertrieb durch KI optimiert und Sie bei Ihren Herausforderungen unterstützt.
            </p>
            <p className="font-semibold">
              Sie möchten vorher schon mehr erfahren?
            </p>
            <p>
              Kontaktieren Sie uns gerne für weiterführende Informationen oder einen persönlichen Termin vor dem Event.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchEvent;
