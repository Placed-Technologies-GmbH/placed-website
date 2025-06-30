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
              <h1 className="text-4xl sm:text-5xl font-bold text-work-blue mt-12 mb-8">
                PLACED auf dem Tag der Personaldienstleister: Ein gelungener Launch.
              </h1>
              <img
                src="/ProductHero.png"
                alt="PLACED Produktansicht"
                className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto mx-auto rounded-xl shadow-lg mb-12"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          </section>

          {/* New Launch Event Content */}
          <section className="pt-8 sm:pt-12 pb-12 sm:pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-800 leading-relaxed">
              <p>
                Am 24. Juni haben wir unsere KI Vertriebsplattform erstmals der Branche vorgestellt. Beim Sommerfest des Gesamtverbands der Personaldienstleister in Berlin konnten wir zahlreiche Gespräche führen und wertvolles Feedback sammeln.
              </p>
              <p>
                In vielen Begegnungen mit Entscheiderinnen und Entscheidern wurde deutlich, wie groß das Interesse an KI-gestützen Lösungen für effiziente Vertriebsunterstützung ist. Unsere Plattform traf auf offene Ohren, viele der Gespräche führten direkt zu vereinbarten Demos.
              </p>
              <div>
                <strong>Was bleibt:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Ein gelungener Abend mit großem Interesse an unserer Lösung</li>
                  <li>Spürbare Bewegung in der Branche und der Wunsch, neue Technologien praxisnah einzusetzen</li>
                </ul>
              </div>
              <p>
                Wir bedanken uns bei allen Gästen für den Austausch und freuen uns auf die nächsten Gespräche.
              </p>
              <div className="flex justify-center mt-10">
                <PrimaryButton data-gtm="demo-buchen-launch-event" />
              </div>
              {/* Event Photos Grid */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <img src="/GVP1.jpg" alt="PLACED Event Foto 1" className="w-full rounded-xl shadow-lg object-cover" loading="lazy" />
                <img src="/GVP2.jpg" alt="PLACED Event Foto 2" className="w-full rounded-xl shadow-lg object-cover" loading="lazy" />
                <img src="/GVP3.jpg" alt="PLACED Event Foto 3" className="w-full rounded-xl shadow-lg object-cover" loading="lazy" />
                <img src="/GVP4.jpeg" alt="PLACED Event Foto 4" className="w-full rounded-xl shadow-lg object-cover" loading="lazy" />
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
