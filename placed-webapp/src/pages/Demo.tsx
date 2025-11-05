import DemoHeader from '../components/DemoHeader';
import Footer from '../components/Footer';
import DemoHero from '../components/DemoHero';
import DemoTrustedBy from '../components/DemoTrustedBy';
import DemoAIRevolution from '../components/DemoAIRevolution';
import DemoIntegrations from '../components/DemoIntegrations';
import DemoCompliance from '../components/DemoCompliance';
import DemoKIVertriebsmitarbeiter from '../components/DemoKIVertriebsmitarbeiter';
import DemoCTA from '../components/DemoCTA';

const Demo = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DemoHeader />
      <main className="flex-grow">
        <DemoHero />
        <DemoTrustedBy />
        <DemoAIRevolution />
        <DemoIntegrations />
        <DemoCompliance />
        <DemoKIVertriebsmitarbeiter />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Demo;