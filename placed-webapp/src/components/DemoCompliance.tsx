import { CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const DemoCompliance = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-work-blue">
              100% konform nach DSGVO & EU AI Act
            </h3>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Bei PLACED hat Datenschutz höchste Priorität. Wir wissen, dass sensible Informationen, wie sie beim
              Hochladen von Lebensläufen anfallen, höchste Sorgfalt erfordern. Deshalb sichern wir Ihre Daten durch
              zertifizierte Prozesse und klare Garantien:
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap pt-4">
              <img src="/DGSVO.png" alt="DSGVO Siegel" className="h-16 md:h-18 object-contain" />
              <img src="/EU_AI_Act.png" alt="EU AI Siegel" className="h-16 md:h-18 object-contain" />
            </div>
            <div className="inline-block text-left space-y-3 text-sm text-gray-600 pt-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Regelmäßige externe Audits garantieren, dass unsere Datenverarbeitung den aktuellsten DSGVO-Standards
                  entspricht.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Unsere Zertifizierung nach dem EU AI Act garantiert eine ethische und sichere KI.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Hochgeladene Lebensläufe werden anonymisiert und personenbezogene Daten niemals zum Training unserer
                  KI genutzt.
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoCompliance;

