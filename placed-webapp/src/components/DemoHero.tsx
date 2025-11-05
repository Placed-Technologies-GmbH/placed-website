import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DemoHero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <p className="text-lg font-medium text-work-blue">
              Die KI-Vertriebsplattform für die Personalbranche
            </p>

            {/* Three Benefit Lines */}
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Mehr Umsatz
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Mehr Telefonzeit
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Mehr Spaß im Vertrieb
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Finden Sie Stellen, optimieren Sie Kandidatenprofile mit KI und erhalten Sie perfekte Gesprächsleitfäden – alles in einer Plattform für maximale Vermittlungserfolge.
            </p>

            {/* Demo Button */}
            <div className="pt-4">
              <a
                href="/demo/meeting"
                className={cn(
                  'inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg bg-[#EBFF4A] text-work-blue font-semibold text-base hover:bg-[#EBFF4A]/90 active:scale-[0.97] transition-all duration-200 group'
                )}
                aria-label="Demo buchen"
              >
                Demo buchen
                <ArrowRight className="h-5 w-5 text-work-blue transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{height: '70vh', minHeight: '400px', maxHeight: '700px'}}>
              <img
                className="w-full h-full object-cover object-center"
                style={{boxShadow: '0 8px 32px 0 rgba(80, 80, 120, 0.10)'}}
                src="/ProductHero.png"
                alt="PLACED Platform Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
