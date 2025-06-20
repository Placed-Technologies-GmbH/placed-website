
import { Brain, Clock, Shield, Target, Users, Zap, Search, TrendingUp, FileText, CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';
import { Button } from './ui/button';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Unbegrenzte Stellensuche',
      description: 'Zugriff auf alle Stellenanzeigen in Deutschland - ohne regionale oder berufliche Einschränkungen.',
      highlights: ['500.000+ Stellenanzeigen täglich', '24/7 Monitoring', 'Alle Branchen']
    },
    {
      icon: Brain,
      title: 'KI-gestütztes Matching',
      description: 'Hochpräzise KI analysiert CVs und findet automatisch die passendsten Stellenanzeigen.',
      highlights: ['CV-Upload für Matching', 'Automatische Priorisierung', 'Intelligente Bewertung']
    },
    {
      icon: Target,
      title: 'PLACED-Score',
      description: 'Unser exklusiver KI-Score bewertet die Vermittlungswahrscheinlichkeit jeder Stelle.',
      highlights: ['Vermittlungswahrscheinlichkeit', 'Dringlichkeit-Analyse', 'Erfolgs-Prognose']
    },
    {
      icon: FileText,
      title: 'Sales-Skripte',
      description: 'KI generiert personalisierte Gesprächsleitfäden für perfekte Kundengespräche.',
      highlights: ['Personalisierte Skripte', 'Argumentationshilfen', 'Erfolgsoptimierung']
    },
    {
      icon: Users,
      title: 'Erweiterte Kontaktdaten',
      description: 'Direktzugang zu Entscheidern mit vollständigen Kontaktinformationen.',
      highlights: ['Direkte Ansprechpartner', 'Telefonnummern', 'E-Mail-Adressen']
    },
    {
      icon: TrendingUp,
      title: 'Erfolgs-Tracking',
      description: 'Verfolgen Sie Ihre Vermittlungsquote und optimieren Sie kontinuierlich Ihre Ergebnisse.',
      highlights: ['Performance-Dashboard', 'Erfolgsanalyse', 'Optimierungsempfehlungen']
    }
  ];

  return (
    <section id="platform" className="py-24 relative">
      <div className="container mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="tracking-tight mb-6 text-work-blue">
            KI-Recruiting
            <br />
            der nächsten Generation
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mit PLACED revolutionieren Sie Ihr Recruiting durch modernste KI-Technologie.
            Finden Sie schneller die richtigen Kandidaten und steigern Sie Ihre Vermittlungsquote erheblich.
          </p>
        </div>

        {/* Features Grid - Clean Linear style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} className="group p-6 rounded-xl glass-effect bg-card/80 transition-all duration-300 hover:shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-pale-blue flex items-center justify-center mb-4 group-hover:bg-placed-blue/20 transition-colors">
                <feature.icon className="text-work-blue w-6 h-6" />
              </div>
              
              <h3 className="mb-3 text-work-blue">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {feature.description}
              </p>

              <ul className="space-y-1">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="text-placed-green mr-2 w-5 h-5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.3} className="text-center mt-16">
          <Button variant="default" size="lg" className="bg-work-blue text-white rounded-lg px-6 py-3">
            Plattform kostenlos testen
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Features;
