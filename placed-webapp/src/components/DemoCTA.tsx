import FadeIn from './FadeIn';
import PrimaryButton from './PrimaryButton';

const DemoCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Vertrieb zukunftsfähig machen?
              </h2>
              <p className="text-xl font-medium text-gray-700">
                Sie entscheiden:
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                PLACED kostenlos testen.
              </p>
              <div className="pt-4">
                <PrimaryButton data-gtm="demo-buchen-cta" />
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Dashboard Screenshot */}
          <FadeIn delay={0.1}>
            <div className="w-full">
              <img
                src="/Placed-Job-View.png"
                alt="PLACED Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;

