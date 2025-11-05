import FadeIn from './FadeIn';

const DemoTrustedBy = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Über XX Unternehmen nutzen Placed bereits zur Umsatzsteigerung
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
            <img
              src="/LinkedIn-Logo.png"
              alt="LinkedIn"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
            <img
              src="/Indeed.png"
              alt="Indeed"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
            <img
              src="/joblift.png"
              alt="Joblift"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
            <img
              src="/stepstone_logo.svg"
              alt="Stepstone"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
            <img
              src="/XINGlogo.png"
              alt="XING"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoTrustedBy;

