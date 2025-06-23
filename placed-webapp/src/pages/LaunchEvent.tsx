import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryButton from '@/components/PrimaryButton';

const LaunchEvent = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex-grow">
        <div className="pt-36 sm:pt-48">
          {/* Hero Section */}
          <section className="bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-6">
              <img
                src="/GVPPlaced.png"
                alt="PLACED x GVP"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto mx-auto"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h1 className="text-4xl sm:text-5xl font-bold text-work-blue">
                PLACED ist neues Fördermitglied<br />im GVP
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Unser Engagement für Qualität und Innovation in der Personaldienstleistungsbranche
              </p>
              <PrimaryButton />
              <img
                src="/ProductHero.png"
                alt="PLACED Produktansicht"
                className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto mx-auto rounded-xl shadow-lg !mt-16"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          </section>

          {/* Press release content */}
          <section className="pt-8 sm:pt-12 pb-12 sm:pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800 leading-relaxed">
              <p className="text-lg">
                Wir präsentieren unsere KI-Vertriebsplattform am 24. Juni 2025 in Berlin. Treffen Sie uns ab 18:30 Uhr beim Sommerfest und entdecken Sie, wie KI Ihren Vertrieb revolutioniert.
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-work-blue">
                Treffen Sie uns beim Sommerfest an der PLACED Spritz-Bar
                </h2>
                <p>
                Im Rahmen des Sommerfests laden wir Sie herzlich zu unserer gesponserten Spritz-Bar ein. Ab 18:30 Uhr können Sie in entspannter Atmosphäre kostenlose Spritz-Getränke genießen und die Gelegenheit für einen produktiven Austausch nutzen. Erfahren Sie mehr über unsere Plattform, vernetzen Sie sich mit Branchenkollegen und lassen Sie den Abend gemeinsam ausklingen.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-work-blue">
                Live-Einblicke: Revolutionieren Sie Ihre Vermittlungsprozesse
                </h2>
                <p>
                Erleben Sie Live, wie die KI-Vertriebsplattform von PLACED Ihre Vermittlungsprozesse transformiert. Wir demonstrieren Ihnen, wie unsere KI-Technologie Kandidaten und Stellen matched, den Vertrieb durch KI optimiert und Sie bei Ihren Herausforderungen unterstützt.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  Wir freuen uns auf Sie!
                </p>
                <p className="text-lg">
                  Ihr PLACED-Team
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LaunchEvent;
