
import { Target, User, MessageSquare, Database, CheckCircle, ArrowRight } from 'lucide-react'
import { Progress } from './ui/progress'
import FadeIn from './FadeIn'
import PrimaryButton from './PrimaryButton'

const optimizationSuggestions = [
  'Detaillierte Führung von Teams (3-5 Direkte/Jahr) sollte von Kandidat auch durch konkrete Schulungen erweitert',
  'Kent GitHub oder Key Repository/Organzing SCRUM/AGILE und nicht vorteilhaft, aber für zukünftige Projekte',
  'SAP PIM Kenntnisse für die Verwaltung/Leading Marina können teilzeit weiterhin werden',
  'Implementierung MONOMER sind nicht informativ/en, können aber für Personalmarketing interessant sein',
  'Lean Manufacturing Prinzipien sind nicht explizit erwähnt, jedoch für Prozessverbesserung nützlich',
];

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
        {/* Background decoration */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-placed-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8 md:px-16">
          {/* Main Header */}
          <div className="text-center mb-20">
            <h2 className="mb-6 text-work-blue">
              Ihr neuer KI-Vertriebsmitarbeiter
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Unsere KI-Technologie analysiert Kandidatenprofile und Stellenangebote in Echtzeit. Sie erhalten
              präzise Matches, optimierte Lebensläufe und maßgeschneiderte Sales-Pitches – alles automatisiert
              und DSGVO-konform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* PLACED-Score */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-work-blue flex items-center justify-center">
                  <Target className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-work-blue">PLACED-Score</h3>
              </div>

              <FadeIn delay={0.1} className="glass-effect bg-card/80 rounded-xl p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-work-blue">Kandidateninformationen</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="text-placed-green w-5 h-5 mt-0.5" />
                        <span>Senior Software Engineer mit 8+ Jahren Erfahrung in React und Node.js</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="text-placed-green w-5 h-5 mt-0.5" />
                        <span>Führungserfahrung in agilen Entwicklungsteams</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="text-placed-green w-5 h-5 mt-0.5" />
                        <span>Verfügbar ab sofort</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center ml-4">
                    <div className="text-3xl font-bold text-work-blue">85%</div>
                    <div className="text-xs text-muted-foreground">Vermittlungsrate</div>
                  </div>
                </div>
                <Progress value={85} />
              </FadeIn>

              <p className="text-muted-foreground leading-relaxed text-sm">
                KI Vertrieb: Unsere fortschrittliche Matching-Engine findet sofort die
                passendsten Stellen für Kandidaten-CVs. Suchergebnisse werden nicht nach
                Datum, sondern nach Relevanz sortiert: Unser PLACED-Score zeigt Ihnen die
                Vermittlungswahrscheinlichkeit.
              </p>
            </div>

            {/* Profil-Optimierung */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-placed-blue flex items-center justify-center">
                  <User className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-work-blue">Profil-Optimierung</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Unsere KI bietet Optimierungsvorschläge für 
                Kandidatenprofile in Sekunden, indem sie fehlende 
                Informationen im Lebenslauf aufzeigt und konkrete 
                Verbesserungsvorschläge macht, damit Ihr Kandidat 
                optimal beim Kunden ankommt.
              </p>

              {/* Optimization suggestions */}
              <div className="space-y-3">
                <div className="text-sm font-medium mb-3">Was fehlt?</div>
                <div className="space-y-2">
                  {optimizationSuggestions.map((suggestion, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <div className="w-4 h-4 rounded-full bg-signal-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-work-blue"></div>
                      </div>
                      <span className="text-muted-foreground">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KI Sales Script */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-signal-yellow flex items-center justify-center">
                <MessageSquare className="text-work-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-work-blue">KI Sales Script</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unsere KI erstellt personalisierte Sales-Skripte, die Ihnen 
                  helfen, Neukunden zu gewinnen, indem sie präzise 
                  aufzeigt, warum Ihr Kandidat perfekt zur Stelle passt und 
                  die Dringlichkeit bei der Stellenbesetzung identifiziert.
                </p>
              </div>

              <FadeIn delay={0.2} className="bg-card/80 glass-effect rounded-lg p-6">
                <div className="text-sm text-red-500 font-medium mb-4">TBD Sales Script Screenshot</div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">KI-Sales Script</span>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground ml-4">
                      <li>• Unternehmen: Siemens AG GmbH | 30-499 Mitarbeiter | 78 Agenturpartner | 7 offene Stellen</li>
                      <li>• Ansprechpartner: Andreas Müller (Head Recruiting)</li>
                      <li>• Urgency: 7 Wochen | 4 Termine | Wettbewerber ca. 4.400 €</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-border/50 pt-3">
                    <div className="font-medium text-xs mb-2">Potenzielle Problemstellung:</div>
                    <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                      <li>• Personelle Erwüßsung: Entwicklung & Digitalprojentkette</li>
                      <li>• Relevante Erfahrung: Marketing / Fachberatung, Wechsel, Jahresplanungen in projektebasierten Unternehmen</li>
                      <li>• Fit-Matching/optimaler Standort: Bereichserhalt für Wertschöpfung und unter 30-Minuten-Anfahrzeiten</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Data Access Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-work-blue/5 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-signal-yellow/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <FadeIn delay={0.1} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-work-blue flex items-center justify-center">
                  <Database className="text-white w-6 h-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-work-blue">
                  1 Zugang: Alle Stellen. Alle Kontakte. Alle Daten.
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                PLACED hat Deutschlands größte Datenbank für Jobs und Entscheiderkontakte. 
                Greifen Sie auf die umfangreichste Sammlung von Stellenangeboten und Firmenkontakten zu. 
                Unser System aktualisiert die Daten stündlich in Echtzeit und priorisiert die Jobs nach Vermittlungswahrscheinlichkeit.
              </p>
            </FadeIn>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {dataAccessHighlights.map((item, index) => (
                <FadeIn key={index} delay={0.1 + index * 0.1} className="glass-effect bg-card/80 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-placed-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-placed-green" />
                    </div>
                    <div className="text-base text-foreground leading-relaxed">
                      {item.text}
                      <span className="font-semibold text-work-blue">{item.highlight}</span>
                      {item.suffix}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Partner Logos Section */}
            <FadeIn delay={0.4} className="text-center">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">
                Unsere Datenquellen & Integrationen
              </h3>
              <div className="glass-effect bg-card/60 rounded-2xl p-8">
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
              </div>
            </FadeIn>

            <FadeIn delay={0.5} className="text-center mt-12">
              <PrimaryButton />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default KIVertriebsmitarbeiter;
