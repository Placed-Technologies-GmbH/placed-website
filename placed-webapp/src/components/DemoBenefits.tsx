import { Users, Zap, Brain, Target, Shield, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Alle Stellenanzeigen",
    description: "Zugriff auf den gesamten Stellenmarkt ohne regionale oder berufliche Einschränkungen.",
  },
  {
    icon: Brain,
    title: "KI-Matching",
    description: "Präzises Matching von Kandidaten mit Stellenanzeigen durch intelligente KI-Technologie.",
  },
  {
    icon: Zap,
    title: "KI-Assistenten",
    description: "Persönliche KI-Assistenten für Sales-Gespräche, Profilanalysen und Vermittlungsscores.",
  },
  {
    icon: Target,
    title: "Zusätzliche Kontakte",
    description: "KI findet relevante Ansprechpartner unabhängig von aktuellen Stellenanzeigen.",
  },
  {
    icon: Shield,
    title: "100% DSGVO-konform",
    description: "Zertifiziert nach DSGVO, EU AI Act, GVP-Richtlinien und APSCo-Standards.",
  },
];

const DemoBenefits = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-work-blue mb-4">
              Was Sie in der Demo erwartet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie die wichtigsten Features unserer Plattform und wie sie Ihre Arbeit vereinfachen.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-pale-blue flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-work-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Trust badges */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-6">Zertifizierungen & Standards</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <img
                src="/DGSVO.png"
                alt="DSGVO-konform Siegel"
                className="h-16 md:h-18 object-contain"
                loading="lazy"
              />
              <img
                src="/EU_AI_Act.png"
                alt="EU AI Act"
                className="h-16 md:h-18 object-contain"
                loading="lazy"
              />
              <img
                src="/GVP-Logo_Mitglied_RGB_blau.png"
                alt="GVP-zertifiziert Siegel"
                className="h-16 md:h-20 object-contain"
                loading="lazy"
              />
              <img
                src="/APSCo-Trusted-Partner.png"
                alt="APSCo Trusted Partner"
                className="h-16 md:h-20 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoBenefits;

