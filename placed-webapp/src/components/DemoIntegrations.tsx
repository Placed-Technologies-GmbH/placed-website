import FadeIn from './FadeIn';
import { Card, CardContent } from '@/components/ui/card';

const integrations = [
  {
    name: 'Personio',
    logo: '/personio-logo.png',
  },
  {
    name: 'Rexx',
    logo: '/rexx-logo.png',
  },
  {
    name: 'Zvoove',
    logo: '/zvoove-logo.jpeg',
  },
  {
    name: 'd.vinci',
    logo: '/dvinci-logo.png',
  },
];

const DemoIntegrations = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-work-blue">
              Placed integriert sich nahtlos in Ihr existierendes Setup
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <Card
                  key={integration.name}
                  className="border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center space-y-3 min-h-[120px]">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900 text-center">
                      {integration.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoIntegrations;

