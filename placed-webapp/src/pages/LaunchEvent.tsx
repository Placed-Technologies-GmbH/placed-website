import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PrimaryButton from '@/components/PrimaryButton';

const LaunchEvent = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-work-blue text-white py-2 text-center text-sm">
        <span>PLACED launched am 24.06 beim Tag der Personaldienstleister vom GVP am 24.06. ab 18:30 Uhr. <a href="#" className="underline font-semibold">Jetzt mehr erfahren!</a></span>
      </div>
      <Header />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-work-blue">
            PLACED ist neues Fördermitglied im GVP
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Unser Engagement für Qualität und Innovation in der
            Personaldienstleistungsbranche
          </p>
          <div className="mt-8">
            <PrimaryButton />
          </div>
        </div>
      </section>

      {/* Press release content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-800 leading-relaxed">
          <p className="text-lg">
            Wir präsentieren unsere KI-Vertriebsplattform am 24. Juni 2025 in
            Berlin. Treffen Sie uns ab 18:30 Uhr beim Sommerfest und entdecken
            Sie, wie KI Ihren Vertrieb revolutioniert.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-work-blue">
              Treffen Sie uns beim Sommerfest: PLACED Spritz-Bar
            </h2>
            <p>
              Im Rahmen des Sommerfests laden wir Sie herzlich an unsere
              gesponserte PLACED Spritz-Bar ein. Ab 18:30 Uhr können Sie in
              entspannter Atmosphäre kostenlose Spritz-Getränke genießen und die
              Gelegenheit für einen produktiven Austausch nutzen. Erfahren Sie
              mehr über unsere Plattform, vernetzen Sie sich mit
              Branchenkollegen und lassen Sie den Abend gemeinsam ausklingen.
            </p>
            <div className="flex justify-center py-6">
              <img
                src="/GVPPlaced.png"
                alt="Logo GVP"
                className="max-w-full h-auto sm:max-w-sm"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-work-blue">
              Live-Demos: Revolutionieren Sie Ihre Vermittlungsprozesse
            </h2>
            <p>
              Erleben Sie in unseren Live-Demos, wie die PLACED Plattform Ihre
              Vermittlungsprozesse transformiert. Wir demonstrieren Ihnen, wie
              unsere KI-Technologie Kandidaten und Stellen matched, den Vertrieb
              durch KI optimiert und Sie bei Ihren Herausforderungen
              unterstützt.
            </p>
            <p className="font-semibold">
              Sie möchten vorher schon mehr erfahren?
            </p>
            <p>
              Kontaktieren Sie uns gerne für weiterführende Informationen oder
              einen persönlichen Termin vor dem Event.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchEvent;
