import React from "react";
import { CheckCircle, Users, Zap, Brain } from "lucide-react";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import PrimaryButton from "./PrimaryButton";

const features = [
  {
    icon: Users,
    title: "Alle Stellenanzeigen",
    description: "PLACED bietet die aktuellste Übersicht über den Stellenmarkt.",
    points: [
      "Keine Einschränkung nach Region oder Beruf",
      "Kontaktdaten mit einem Klick anreichern",
      "Stellen in Echtzeit aktualisieren",
    ],
  },
  {
    icon: Brain,
    title: "KI-Matching mit CV",
    description: "Laden Sie den Kandidaten-CV hoch und erhalten Sie sofort eine priorisierte Stellenliste.",
    points: ["Hochpräzises, intelligentes Matching", "Sofortige Ergebnisse", "Erweiterte Filter einstellbar"],
  },
  {
    icon: Zap,
    title: "KI-Assistenten",
    description: "Für alle Team-Mitglieder stehen persönliche KI-Assistenten bereit.",
    points: [
      "Sales-KI: Gesprächsleitfäden für perfekte Vertriebsgespräche",
      "Profil-KI: Potenzial-Analyse des CVs",
      "PLACED-Score (KI): Vermittlungswahrscheinlichkeit",
    ],
  },
];

const DemoAIRevolution = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-work-blue">
              Die KI-Revolution im Vertrieb
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              PLACED revolutioniert den Personalvertrieb mit KI-gestützter Technologie. Unsere Plattform maximiert Ihre
              Vermittlungsquote durch unlimitierte Stellendaten, extra Kontaktdaten, präzises Matching und automatisierte Prozesse.
            </p>
          </div>
        </FadeIn>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-pale-blue">
                    <feature.icon className="text-work-blue w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Demo Button */}
        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-12">
            <PrimaryButton data-gtm="demo-buchen-ai-revolution" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoAIRevolution;

