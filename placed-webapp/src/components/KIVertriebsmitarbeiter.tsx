import { User, MessageSquare, Database, CheckCircle, Target } from "lucide-react";
import FadeIn from "./FadeIn";
import PrimaryButton from "./PrimaryButton";
import AnimatedScore from "./AnimatedScore";

const dataAccessHighlights = [
  {
    text: "Wir sammeln Stellen ",
    highlight: "direkt von Firmenwebseiten",
    suffix: " aller wichtigen Unternehmen und von vielen großen und regionalen",
    suffixHighlight: " Stellenbörsen.",
  },
  {
    text: "Wichtige Signale, zusätzlich zur Stelle: Unsere KI ermittelt, ob Personalvermittler zur Besetzung einer spezifischen Stelle mit eigenen Stellenausschreibungen suchen.",
    highlight: " Stelle beauftragt wurden",
    suffix: " (bei öffentlichen Stellenausschreibungen).",
    suffixHighlight: "",
  },
  {
    text: "Unsere KI reichert die Stelle auf Knopfdruck mit ",
    highlight: "Kontakt- und Unternehmensdaten",
    suffix: " an, auch wenn diese nicht in der Stellenanzeige stehen.",
    suffixHighlight: "",
  },
  {
    text: "Sie haben mit Ihrer Lizenz uneingeschränkten Zugriff auf alle uns verfügbaren Stellendaten: ",
    highlight: "Keine Begrenzung",
    suffix: " nach Region oder Berufsgruppen.",
    suffixHighlight: "",
  },
];

const partnerLogos = [
  { src: "/LinkedIn-Logo.png", alt: "LinkedIn" },
  { src: "/Indeed.png", alt: "Indeed" },
  { src: "/joblift.png", alt: "Joblift" },
  { src: "/stepstone_logo.svg", alt: "Stepstone" },
  { src: "/XINGlogo.png", alt: "XING" },
  { src: "/kununu-logo.png", alt: "kununu" },
  { src: "/kimetalogo.png", alt: "Kimeta" },
  { src: "/talentlogo.png", alt: "Talent.com" },
];

const KIVertriebsmitarbeiter = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-pale-blue/20 to-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-placed-blue/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-work-blue text-3xl md:text-4xl font-bold">Ihr neuer KI-Vertriebsmitarbeiter</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Unsere KI-Technologie analysiert Kandidatenprofile und Stellenangebote in Echtzeit. Sie erhalten präzise
              Matches, optimierte Lebensläufe und maßgeschneiderte Gesprächsleitfäden – alles automatisiert und 100%
              DSGVO-konform.
            </p>
          </div>

          <div className="space-y-24">
            {/* KI-Matching Section */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                  src="/Matching.png"
                  alt="Matching"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-xl relative z-10"
                  style={{ boxShadow: "0 8px 32px 0 rgba(80, 80, 120, 0.10)" }}
                />
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                      <User className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-work-blue">Einfach Suchen</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    PLACED übernimmt für Sie die Suche nach den Stellen, die am besten zu Ihrem Kandidaten passen. Die
                    KI analysiert den hochgeladenen Kandidaten-CV und gleicht diesen mit passenden Stellen im deutschen
                    Markt ab.
                  </p>
                </div>
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 max-w-lg mx-auto z-20"
                  style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)" }}
                />
              </div>
            </div>

            {/* PLACED Score Section */}
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center relative">
                <img
                  src="/Placed Score.png"
                  alt="PLACED Score"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-xl relative z-10"
                  style={{ boxShadow: "0 8px 32px 0 rgba(80, 80, 120, 0.10)" }}
                />
                <div className="space-y-6 w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                      <Target className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-work-blue">Relevante Stellen finden</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Suchergebnisse werden nicht nach Datum, sondern nach Relevanz sortiert: Unser PLACED-Score zeigt
                    Ihnen die Vermittlungswahrscheinlichkeit. Diese beinhaltet die Passung von Kandidat zur Stelle und
                    die Dringlichkeit des Unternehmens die Stelle zu besetzen.
                  </p>
                </div>
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 max-w-lg mx-auto z-20"
                  style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)" }}
                />
              </div>
            </div>

            {/* Profil-Optimierung */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                  src="/Profil.png"
                  alt="Profil Optimierung"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-xl relative z-10"
                  style={{ boxShadow: "0 8px 32px 0 rgba(80, 80, 120, 0.10)" }}
                />
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 max-w-lg mx-auto z-20"
                  style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)" }}
                />
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                      <User className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-work-blue">Bessere Vertriebsgespräche</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere KI bietet Optimierungsvorschläge für Kandidatenprofile in Sekunden, indem sie fehlende
                    Informationen im Lebenslauf aufzeigt und konkrete Verbesserungsvorschläge macht, damit Ihr Kandidat
                    optimal beim Kunden ankommt.
                  </p>
                </div>
              </div>
            </div>

            {/* KI Sales Script */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-work-blue">Kontakte, die passen</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere KI erstellt personalisierte Sales-Skripte, die Ihnen helfen, Neukunden zu gewinnen, indem sie
                    präzise aufzeigt, warum Ihr Kandidat perfekt zur Stelle passt und die Dringlichkeit bei der
                    Stellenbesetzung identifiziert. Zudem recherchiert die KI blitzschnell die erweiterten Kontaktdaten
                    von Ansprechpartnern und Entscheidern.
                  </p>
                </div>
                <img
                  src="/contact_data_enrichment.png"
                  alt="KI Sales Script"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-xl relative z-10 max-h-[550px] object-cover object-top"
                  style={{ boxShadow: "0 8px 32px 0 rgba(80, 80, 120, 0.10)" }}
                />
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 max-w-lg mx-auto z-20"
                  style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Access Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-work-blue mb-6">
                Ein Zugang: Unlimitierte Stellen- und Kontaktdaten.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als PLACED-Nutzer profitieren Sie von unlimitiertem Datenzugriff ohne Beschränkungen nach Berufsgruppen
                oder Region.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-16 text-left">
                {dataAccessHighlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-placed-green flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">
                      {item.text}
                      <span className="font-semibold text-work-blue">{item.highlight}</span>
                      {item.suffix}
                      <span className="font-semibold text-work-blue">{item.suffixHighlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/*<FadeIn delay={0.3} className="mt-20">*/}
            {/*  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">*/}
            {/*    Unsere Datenquellen & Integrationen*/}
            {/*  </h3>*/}
            {/*  <p className="text-sm text-muted-foreground mb-8">*/}
            {/*    Jobbörsen, ATS-Systeme und Firmenwebseiten*/}
            {/*  </p>*/}
            {/*  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">*/}
            {/*    {partnerLogos.map((logo, index) => (*/}
            {/*      <div key={index} className="group transition-all duration-300 hover:scale-110 flex items-center justify-center" style={{height: '80px', width: '200px'}}>*/}
            {/*        <img*/}
            {/*          src={logo.src}*/}
            {/*          alt={logo.alt}*/}
            {/*          className="h-16 w-40 object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0 mx-auto"*/}
            {/*          loading="lazy"*/}
            {/*        />*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*  <p className="text-sm text-muted-foreground mt-4 text-left mx-auto w-fit">Viele weitere Jobbörsen und Firmenwebseiten</p>*/}
            {/*</FadeIn>*/}

            <FadeIn delay={0.4} className="text-center mt-16">
              <PrimaryButton data-gtm="demo-buchen-kivertriebsmitarbeiter" />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default KIVertriebsmitarbeiter;
