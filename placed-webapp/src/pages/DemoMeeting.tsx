import { useEffect } from 'react';
import DemoHeader from '../components/DemoHeader';
import Footer from '../components/Footer';

const DemoMeeting = () => {
  useEffect(() => {
    // Load HubSpot Meetings Embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DemoHeader />
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-8 lg:pt-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-work-blue mb-4">
                Demo buchen
              </h1>
              <p className="text-lg text-gray-700">
                Wählen Sie einen passenden Termin für Ihre persönliche Demo.
              </p>
            </div>
            {/* HubSpot Meetings Embed */}
            <div className="meetings-iframe-container" data-src="https://meetings-eu1.hubspot.com/ftemel?embed=true"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DemoMeeting;

