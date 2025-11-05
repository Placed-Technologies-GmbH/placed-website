import { User, Target, MessageSquare } from 'lucide-react';
import FadeIn from './FadeIn';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: User,
    title: 'Einfach Suchen',
    description:
      'PLACED übernimmt für Sie die Suche nach den Stellen, die am besten zu Ihrem Kandidaten passen. Die KI analysiert den hochgeladenen Kandidaten-CV und gleicht diesen mit passenden Stellen im deutschen Markt ab.',
  },
  {
    icon: Target,
    title: 'Relevante Stellen finden',
    description:
      'Die Suchergebnisse werden nicht nach Datum, sondern nach Relevanz sortiert: Unser PLACED-Score zeigt Ihnen die Vermittlungswahrscheinlichkeit. Diese beinhaltet die Passung von Kandidat zur Stelle und die Dringlichkeit des Unternehmens die Stelle zu besetzen.',
  },
  {
    icon: User,
    title: 'Bessere Vertriebsgespräche',
    description:
      'Unsere KI bietet Optimierungsvorschläge für Kandidatenprofile in Sekunden, indem sie fehlende Informationen im Lebenslauf aufzeigt und konkrete Verbesserungsvorschläge macht, damit Ihr Kandidat optimal beim Kunden ankommt.',
  },
  {
    icon: MessageSquare,
    title: 'Kontakte, die passen',
    description:
      'Unsere KI erstellt personalisierte Sales-Skripte, die Ihnen helfen, Neukunden zu gewinnen, indem sie präzise aufzeigt, warum Ihr Kandidat perfekt zur Stelle passt und die Dringlichkeit bei der Stellenbesetzung identifiziert. Zudem recherchiert die KI blitzschnell die erweiterten Kontaktdaten von Ansprechpartnern und Entscheidern.',
  },
];

const DemoKIVertriebsmitarbeiter = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-work-blue">
              Ihr neuer KI-Vertriebsmitarbeiter
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Unsere KI-Technologie analysiert Kandidatenprofile und Stellenangebote in Echtzeit. Sie erhalten präzise
              Matches, optimierte Lebensläufe und maßgeschneiderte Gesprächsleitfäden - alles automatisiert und 100%
              DSGVO-konform.
            </p>
          </div>
        </FadeIn>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pale-blue flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-work-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoKIVertriebsmitarbeiter;

