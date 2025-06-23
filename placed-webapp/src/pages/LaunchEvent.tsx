import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryButton from '@/components/PrimaryButton';

const LaunchEvent = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow space-y-24">
        {/* Hero Section */}
        <section className="bg-white pt-32 pb-8 sm:pt-40 sm:pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <img
              src="/GVPPlaced.png"
              alt="PLACED x GVP"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto mx-auto mb-4"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
            <h1 className="text-4xl sm:text-5xl font-bold text-work-blue mb-2">
              PLACED ist neues Fördermitglied<br />im GVP
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Unser Engagement für Qualität und Innovation in der Personaldienstleistungsbranche
            </p>
            <PrimaryButton />
            <img
              src="/ProductHero.png"
              alt="PLACED Produktansicht"
              className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto mx-auto rounded-xl shadow-lg mt-16 mb-12"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </section>

        {/* Press release content */}
        <section className="py-8 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800 leading-relaxed">
            <p className="text-lg">
              Wir präsentieren unsere KI-Vertriebsplattform am 24. Juni 2025 in Berlin. Treffen Sie uns ab 18:30 Uhr beim Sommerfest und entdecken Sie, wie KI Ihren Vertrieb revolutioniert.
            </p>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-work-blue">
                Treffen Sie uns beim Sommerfest: PLACED Spritz-Bar
              </h2>
              <p>
                Im Rahmen des Sommerfests laden wir Sie herzlich an unsere gesponserte PLACED Spritz-Bar ein. Ab 18:30 Uhr können Sie in entspannter Atmosphäre kostenlose Spritz-Getränke genießen und die Gelegenheit für einen produktiven Austausch nutzen. Erfahren Sie mehr über unsere Plattform, vernetzen Sie sich mit Branchenkollegen und lassen Sie den Abend gemeinsam ausklingen.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-work-blue">
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
      </main>
      <Footer />
    </div>
  );
};

export default LaunchEvent;
