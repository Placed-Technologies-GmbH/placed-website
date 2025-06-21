import { User, MessageSquare, Database, CheckCircle, Target } from 'lucide-react'
import FadeIn from './FadeIn'
import PrimaryButton from './PrimaryButton'

const dataAccessHighlights = [
  {
    text: 'Wir sammeln Stellen ',
    highlight: 'direkt von Firmenwebseiten',
    suffix: ' aller wichtigen Unternehmen und integrieren große sowie Nischen-Stellenbörsen.',
  },
  {
    text: 'Erfahren Sie, welches Unternehmen ',
    highlight: 'Headhunter',
    suffix: ' beauftragt.',
  },
  {
    text: 'Anreicherung von ',
    highlight: 'Kontakt- und Unternehmensdaten',
    suffix: ' für höchste Datenqualität.',
  },
  {
    text: '',
    highlight: 'Keine Begrenzung',
    suffix: ' nach Region oder Berufsgruppen – Sie haben Zugriff auf alle Stellen und Daten.',
  },
];

const partnerLogos = [
  { src: '/LinkedIn-Logo.png', alt: 'LinkedIn' },
  { src: '/Indeed.png', alt: 'Indeed' },
  { src: '/joblift.png', alt: 'Joblift' },
  { src: '/stepstone_logo.svg', alt: 'Stepstone' },
];

const KIVertriebsmitarbeiter = () => {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-pale-blue/20 to-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-placed-blue/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-8 md:px-16">

          <div className="text-center mb-20">
            <h2 className="mb-6 text-work-blue text-4xl font-bold">Ihr neuer KI-Vertriebsmitarbeiter</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Unsere KI-Technologie analysiert Kandidatenprofile und Stellenangebote in Echtzeit. Sie erhalten
              präzise Matches, optimierte Lebensläufe und maßgeschneiderte Sales-Pitches – alles automatisiert
              und DSGVO-konform.
            </p>
          </div>

          <div className="space-y-24">
            {/* PLACED Score Section */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                      <Target className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-work-blue">PLACED Score</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    KI Vertrieb: Unsere fortschrittliche Matching-Engine findet sofort die
                    passendsten Stellen für Kandidaten-CVs. Suchergebnisse werden nicht nach
                    Datum, sondern nach Relevanz sortiert: Unser PLACED-Score zeigt Ihnen die
                    Vermittlungswahrscheinlichkeit.
                  </p>
                </div>
                <img src="/Placed Score.png" alt="PLACED Score" className="w-full max-w-lg mx-auto" />
              </div>
            </div>

            {/* Profil-Optimierung */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img src="/Placed Score.png" alt="Profil Optimierung" className="w-full max-w-lg mx-auto" />
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                      <User className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-work-blue">Profil-Optimierung</h3>
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
                    <h3 className="text-2xl font-bold text-work-blue">KI Sales Script</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere KI erstellt personalisierte Sales-Skripte, die Ihnen helfen, Neukunden zu gewinnen, 
                    indem sie präzise aufzeigt, warum Ihr Kandidat perfekt zur Stelle passt und die Dringlichkeit 
                    bei der Stellenbesetzung identifiziert.
                  </p>
                </div>
                <img src="/Placed Score.png" alt="KI Sales Script" className="w-full max-w-lg mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Access Section */}
      <section className="py-24 bg-gradient-to-br from-work-blue/5 to-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-signal-yellow/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">

            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-work-blue mb-6">
                Ein Zugang: Alle Stellen. Alle Kontakte. Alle Daten. Unlimitierter Zugriff.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PLACED hat Deutschlands größte Datenbank für Jobs und Entscheiderkontakte. 
                Greifen Sie auf die umfangreichste Sammlung von Stellenangeboten und Firmenkontakten zu. 
                Als PLACED Nutzer profitieren sie von unlimitierten Datenzugriff ohne Beschränkungen nach Beruf oder Region.
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
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-20">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Unsere Datenquellen & Integrationen
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Jobbörsen, ATS-Systeme und Firmenwebseiten
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="group transition-all duration-300 hover:scale-110">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 md:h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">+ weitere 100 Jobbörsen</p>
            </FadeIn>

            <FadeIn delay={0.4} className="text-center mt-16">
              <PrimaryButton />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default KIVertriebsmitarbeiter;