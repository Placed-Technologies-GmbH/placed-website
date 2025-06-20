
import React from "react";
import { CheckCircle, Shield, Users, Zap, Target, Brain } from "lucide-react";
import FadeIn from "./FadeIn";
import { Button } from "./ui/button";

const features = [
  {
    icon: Users,
    title: "Alle Stellenanzeigen",
    description: "PLACED bietet die umfangreichste und aktuellste Übersicht über den Stellenmarkt.",
    points: [
      "Unlimited Stellenanzeigen",
      "Alle Regionen",
      "Alle Berufe", 
      "24/7 Monitoring"
    ],
  },
  {
    icon: Brain,
    title: "KI-Matching mit CV",
    description: "Laden Sie den Kandidaten-CV hoch und erhalten Sie sofort eine priorisierte Stellenliste.",
    points: [
      "Hochpräzises, intelligentes Matching",
      "Sofortige Ergebnisse",
      "Automatische Bewertung"
    ],
  },
  {
    icon: Zap,
    title: "KI-Assistenten", 
    description: "Für alle Team-Mitglieder stehen persönliche KI-Assistenten bereit.",
    points: [
      "Sales-KI: Sales-Skripte für perfekte Vertriebsgespräche",
      "Profil-KI: Potenzial-Analyse des CVs",
      "PLACED-Score (KI): Vermittlungswahrscheinlichkeit"
    ],
  },
];

const AIRevolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8 md:px-16 space-y-20">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="tracking-tight text-work-blue">
            Die KI-Revolution im Vertrieb
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            PLACED revolutioniert den Personalvertrieb mit KI-gestützter Technologie.
            Unsere Plattform maximiert Ihre Vermittlungsquote durch präzises Matching und automatisierte Prozesse.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1} className="p-6 rounded-xl glass-effect bg-card/80 transition-colors shadow-sm space-y-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pale-blue">
                <feature.icon className="text-work-blue w-6 h-6" />
              </div>
              <h3 className="text-foreground text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {feature.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle className="text-placed-green mr-2 mt-0.5 w-5 h-5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        {/* Key Benefits Section */}
        <FadeIn delay={0.2}>
          <div className="bg-pale-blue py-20 rounded-xl flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Mehr aus Ihrer Vertriebszeit rausholen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-3xl">
              {/* Recruiting Benefit */}
              <div className="flex flex-col items-center space-y-3">
                <Target className="w-8 h-8 text-work-blue" />
                <h4 className="text-lg font-semibold text-center">KI CV Optimierer</h4>
                <p className="text-gray-700 text-sm leading-snug text-center">
                  Perfekte Kandidatenprofile in Sekunden.
                </p>
              </div>
              {/* Sales Benefit */}
              <div className="flex flex-col items-center space-y-3">
                <Brain className="w-8 h-8 text-work-blue" />
                <h4 className="text-lg font-semibold text-center">KI Sales Script</h4>
                <p className="text-gray-700 text-sm leading-snug text-center">
                  Perfekte Vertriebsgespräche mit KI-Unterstützung.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Compliance Section */}
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center space-y-6">
            <h3 className="text-center text-2xl md:text-3xl font-bold mb-6">
              100% konform nach DSGVO & EU AI Act
            </h3>
            <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap">
              <img
                src="/DGSVO.png"
                alt="DSGVO Siegel"
                className="h-16 md:h-20 object-contain"
              />
              <img
                src="/EU_AI_Act.png"
                alt="EU AI Siegel"
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-placed-green w-5 h-5" />
                <span>Nach höchsten Datenschutzstandards unabhängig zertifiziert</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-placed-green w-5 h-5" />
                <span>Gütesiegel für DSGVO und EU AI Act</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AIRevolution;
