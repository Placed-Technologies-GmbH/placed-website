import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import DemoHeader from '../components/DemoHeader';
import Footer from '../components/Footer';

const DemoMeeting = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if this is a success redirect from HubSpot
    // HubSpot typically redirects with parameters like eventType, meetingId, etc.
    const eventType = searchParams.get('eventType');
    const meetingId = searchParams.get('meetingId');
    const isSuccess = eventType === 'MEETING_CONFIRMED' || meetingId || searchParams.get('success') === 'true';

    if (isSuccess) {
      // Redirect to success page with all parameters
      navigate(`/demo/meeting/booked?${searchParams.toString()}`, { replace: true });
      return;
    }

    // Load HubSpot Meetings Embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for HubSpot meeting booking events
    const handleMessage = (event: MessageEvent) => {
      // HubSpot sends postMessage events when meetings are booked
      if (event.data && event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        // Redirect to success page
        navigate('/demo/meeting/booked', { replace: true });
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, [searchParams, navigate]);

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

