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
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative z-0 mx-auto max-w-5xl">
            <img
              className="w-full"
              src="/ProductHero.png"
              alt="Product screenshot"
            />
          </div>
        </div>
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
