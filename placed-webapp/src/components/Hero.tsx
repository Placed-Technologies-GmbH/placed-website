import PrimaryButton from './PrimaryButton';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-96 pb-12 sm:pb-16" style={{ paddingTop: '12rem' }}>
      {/* Clean background with subtle brand color accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-pale-blue/30 to-background"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-placed-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-signal-yellow/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-work-blue">
          Die KI-Vertriebsplattform für die Personalbranche.
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 mb-10">
        Finden Sie Stellen, optimieren Sie Kandidatenprofile mit KI und erhalten Sie perfekte Gesprächsleitfäden – alles in einer Plattform für maximale Vermittlungserfolge.
        </p>

        <div className="mb-10 flex justify-center">
          <PrimaryButton data-gtm="demo-buchen-hero" />
        </div>

        <p className="text-sm text-gray-500 mt-8 mb-4 text-center">Geeignet für:</p>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mt-6">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Personalvermittler</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Zeitarbeitsunternehmen</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Verlage</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Stellenportale</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Personalberater</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Headhunter</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Recruiting-Agenturen</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800 font-medium">Executive Search</span>
        </div>

       

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 mt-6">
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
      </div>
    </section>
  );
};

export default Hero;
