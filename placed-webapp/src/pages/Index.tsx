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
        {/* Product Hero Image - full-bleed, visually cropped */}
        <div className="relative w-full overflow-hidden" style={{height: '70vh', minHeight: '320px', maxHeight: '700px'}}>
          <img
            className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
            style={{boxShadow: '0 8px 32px 0 rgba(80, 80, 120, 0.10)'}}
            src="/ProductHero.png"
            alt="Product screenshot"
          />
          {/* Gradient fade at bottom */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 w-full z-20" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)'}} />
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
