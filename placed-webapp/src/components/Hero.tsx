
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-8 md:px-16">
      {/* Clean background with subtle brand color accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-pale-blue/30 to-background"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-placed-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-signal-yellow/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center py-32">
        {/* Main Headline */}
        <h1 className="text-6xl font-bold tracking-tight mb-6 text-work-blue">
          Die KI-Vertriebsplattform für die Personalbranche.
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 mb-10">
          Finden Sie relevante Stellenausschreibungen, verbessern Sie CVs mit KI und erhalten Sie perfekte Sales-Pitches – alles in einer Plattform für maximale Vermittlungserfolge.
        </p>

        <div className="mb-10 flex justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-signal-yellow text-work-blue hover:bg-signal-yellow/90 rounded-xl px-6 py-3 font-semibold flex items-center gap-2"
          >
            Demo buchen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Support text */}
        <p className="text-sm text-muted-foreground mb-8">
          Von digitalen Assistenten unterstützt, die speziell für die Personalbranche entwickelt wurden.
        </p>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 mt-6">
          <img
            src="/DGSVO.png"
            alt="DSGVO-konform Siegel"
            className="h-10 md:h-12 object-contain"
            loading="lazy"
          />
          <img
            src="/GVP-Logo_Mitglied_RGB_blau.png"
            alt="GVP-zertifiziert Siegel"
            className="h-10 md:h-12 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
