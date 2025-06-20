
import Header from '../components/Header';
import Hero from '../components/Hero';
import AIRevolution from '../components/AIRevolution';
import KIVertriebsmitarbeiter from '../components/KIVertriebsmitarbeiter';
import ComparisonSection from '../components/ComparisonSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow space-y-24">
        <Hero />
        <AIRevolution />
        <KIVertriebsmitarbeiter />
        <ComparisonSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
