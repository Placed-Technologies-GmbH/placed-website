import { useEffect } from 'react';
import DemoHeader from '../components/DemoHeader';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const DemoMeetingSuccess = () => {

  useEffect(() => {
    // Track conversion in Google Analytics and Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Google Analytics event
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-17188911511/demo_booking',
        value: 1.0,
        currency: 'EUR',
      });

      // Google Analytics custom event
      (window as any).gtag('event', 'demo_booking_confirmed', {
        event_category: 'engagement',
        event_label: 'demo_meeting',
      });

      // Google Tag Manager dataLayer
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'demo_booking_confirmed',
          eventCategory: 'conversion',
          eventAction: 'demo_booking',
          eventLabel: 'hubspot_meeting',
        });
      }
    }
  }, []);


  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DemoHeader />
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-16 lg:pt-20">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-placed-green/10 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-placed-green" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-work-blue mb-4">
                  Termin erfolgreich gebucht!
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                  Vielen Dank für Ihre Buchung. Wir freuen uns auf unser Gespräch.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Sie erhalten eine Bestätigungs-E-Mail mit allen Details zu Ihrem Termin.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Haben Sie Fragen? Kontaktieren Sie uns gerne.
                </p>
                <a
                  href="/"
                  className="text-work-blue hover:underline font-medium"
                >
                  Zurück zur Startseite
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DemoMeetingSuccess;

