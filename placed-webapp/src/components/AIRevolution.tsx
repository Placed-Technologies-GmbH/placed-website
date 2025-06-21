import React from "react";
import { CheckCircle, Shield, Users, Zap, Target, Brain } from "lucide-react";
import FadeIn from "./FadeIn";
import PrimaryButton from "./PrimaryButton";
import { Button } from '@/components/ui/button';

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
            <Button
              variant="default"
              className="bg-signal-yellow text-work-blue hover:bg-signal-yellow/90 rounded-xl px-6 py-3 font-semibold mt-8"
            >
              Jetzt Demo buchen
            </Button>
          </div>
        </FadeIn>

        {/* Compliance Section */}
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto py-16 text-center space-y-6">
            <h3 className="text-center text-2xl font-bold mb-6">
              100% konform nach DSGVO & EU AI Act
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Bei PLACED hat Datenschutz höchste Priorität. Wir wissen, dass sensible 
              Informationen, wie sie beim Hochladen von Lebensläufen anfallen, höchste Sorgfalt 
              erfordern. Deshalb sichern wir Ihre Daten durch zertifizierte Prozesse und klare 
              Garantien:
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap">
              <img
                src="/DGSVO.png"
                alt="DSGVO Siegel"
                className="h-16 object-contain"
              />
              <img
                src="/EU_AI_Act.png"
                alt="EU AI Siegel"
                className="h-16 object-contain"
              />
            </div>
            <div className="inline-block text-left space-y-3 text-sm text-gray-500 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Regelmäßige externe Audits garantieren, dass unsere Datenverarbeitung den aktuellsten DSGVO-Standards entspricht.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Unsere Zertifizierung nach dem EU AI Act garantiert eine ethische und sichere KI.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-placed-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Hochgeladene Lebensläufe werden anonymisiert und personenbezogene Daten niemals zum Training unserer KI genutzt.</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AIRevolution;
