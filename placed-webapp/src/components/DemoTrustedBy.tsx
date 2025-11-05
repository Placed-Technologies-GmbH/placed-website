import { CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const features = [
  {
    title: 'Zusätzliche Ansprechpartner.',
    description: 'KI findet Kontakte, unabhängig von Stellen.',
  },
  {
    title: 'Alle Jobs, alle Regionen.',
    description: 'Ohne Zusatzkosten, weil jede Stelle zählt.',
  },
  {
    title: 'Unbegrenzte CV-Suchen.',
    description: 'Keine Limits, keine teuren Upgrades.',
  },
  {
    title: 'Echtes KI-Matching.',
    description: 'Nicht nur Keywords, unsere KI versteht Kontext.',
  },
  {
    title: 'Smart Sales mit KI.',
    description: 'Individuelle Profilanalyse & Leitfäden.',
  },
  {
    title: 'Automatische Qualitätskontrolle.',
    description: 'KI erkennt, was andere übersehen.',
  },
];

const DemoTrustedBy = () => {
  return (
    <>
      {/* Trust badges */}
      <section className="pt-6 pb-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6">
              <img
                src="/DGSVO.png"
                alt="DSGVO-konform Siegel"
                className="h-16 md:h-18 object-contain"
                loading="lazy"
              />
              <img
                src="/EU_AI_Act.png"
                alt="EU AI Act"
                className="h-16 md:h-18 object-contain"
                loading="lazy"
              />
              <img
                src="/GVP-Logo_Mitglied_RGB_blau.png"
                alt="GVP-zertifiziert Siegel"
                className="h-16 md:h-20 object-contain"
                loading="lazy"
              />
              <img
                src="/APSCo-Trusted-Partner.png"
                alt="APSCo Trusted Partner"
                className="h-16 md:h-20 object-contain"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features section - gray background */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-placed-green w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default DemoTrustedBy;
