import React from 'react'
import { Check, X } from 'lucide-react'
import FadeIn from './FadeIn'
import PrimaryButton from './PrimaryButton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const checkIconClass = 'icon-cell text-green-600';
const xIconClass = 'icon-cell text-red-500';

const renderCell = (value: string) => {
  if (value === 'Y') return <Check className={checkIconClass} />;
  if (value === 'N') return <X className={xIconClass} />;
  if (!value) return null;
  return <span className="block text-gray-800">{value}</span>;
};

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Stellenanzeigen',
      placed: 'Unlimitierter Datenzugriff ohne Beschränkung nach Regionen oder Beruf',
      competitor1: 'Limitiert nach Region und Beruf, sonst aufpreispflichtig',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Kontaktdaten',
      placed: 'Erweiterte persönliche Kontaktdaten, auch wenn diese nicht in der Stellenanzeige stehen',
      competitor1: 'Y',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Firmendaten',
      placed: 'Erweiterte Firmendaten',
      competitor1: 'Y',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Filter auf Zeitarbeitsjobs',
      placed: 'Y',
      competitor1: 'Y',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI-Suche mit CV',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI-Score und Kandidatenbewertung zu Fit für Position',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI-Score zu Dringlichkeit der Suche des Kunden',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Automatisiertes Rematching Ihrer CVs mit neuen Suchen von Bestands- und Zielkunden',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI Gesprächsleitfäden',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI-Schätzung, ob andere Personalvermittler auf Stellen arbeiten',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI CV-Analyse pro Stelle',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Vorbereitungszeit pro Vertriebsanruf',
      placed: '1 Min',
      competitor1: '5-10 Min (Schätzung aus Praxiserfahrung)',
      competitor2: '>30 Min',
      placedHasAdvantage: true
    },
    {
      feature: 'Standardintegrationen',
      placed: '100+ ATS und CRM Systeme der nächsten Generation, darunter Bullhorn, SAP, Microsoft Azure, Workday, Personio, Recruitee, SmartRecruiters; viele weitere in Planung',
      competitor1: '<20 Systeme',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Neue Integrationen auf Wunsch',
      placed: 'In wenigen Wochen umgesetzt',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Offene API Schnittstelle',
      placed: 'Auf Anfrage',
      competitor1: 'Auf Anfrage',
      competitor2: 'N',
      placedHasAdvantage: false
    },
    {
      feature: 'Neue Datenquellen auf Wunsch in einer Woche eingebunden',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: false
    },
    {
      feature: 'Kostenlose Testphase',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Live-Chatsupport',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: false
    },   
    {
      feature: 'Neue Funktionen für Ihren Erfolg',
      placed: 'Alle drei Wochen',
      competitor1: '?',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Bald verfügbar',
      placed: '',
      competitor1: '',
      competitor2: '',
      placedHasAdvantage: false,
      isHeader: true
    },
    {
      feature: 'KI Textsuche (Prompt) "Ich suche die 20 größten Logistikunternehmen in Berlin +30km"',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Marktanalyse',
      placed: 'Y',
      competitor1: 'Mit Aufpreis',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Unlimitierter Datenexport & Emailanhang',
      placed: 'Y',
      competitor1: 'Mit Aufpreis',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Unlimitierte Infoagenten pro Nutzer',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    }
  ];

  return (
    <section id="vergleich" className="py-24 bg-background">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
          <h2 className="tracking-tight text-work-blue">
            PLACED im Vergleich
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Im Vergleich zu anderer Software bietet PLACED nicht nur unbegrenzte Stellenanzeigen, Regionen und erweiterte Kontaktdaten, sondern revolutioniert den Vermittlungsprozess mit KI-gestütztem Matching, automatischer Kandidatenbewertung, CV-Optimierung und Gesprächsleitfäden. 
            Führen Sie perfekte Vertriebsgespräche in nur einer Minute. Lange Vorbereitung und unpräzise Telefonate gehören der Vergangenheit an
          </p>
        </div>

        {/* Comparison Table */}
        <FadeIn delay={0.1} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <Table className="table-fixed min-w-[700px]">
              <TableHeader>
                <TableRow className="border-0 border-t border-gray-100 border-b-0">
                  <TableHead className="w-[40%] py-4 px-6 text-left align-top text-lg font-semibold text-work-blue">
                    Funktionen
                  </TableHead>
                  <TableHead className="w-[20%] py-4 px-6 text-center align-top text-l font-semibold text-work-blue uppercase">
                    <img src="/Placed_LogoLockup_Blue.svg" alt="PLACED" className="h-6 mx-auto" />
                  </TableHead>
                  <TableHead className="w-[20%] py-4 px-6 text-center align-top text-lg font-semibold text-work-blue">
                    Andere Anbieter
                  </TableHead>
                  <TableHead className="w-[20%] py-4 px-6 text-center align-top text-lg font-semibold text-work-blue">
                    Manuelle Suche
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={index}
                    className={`border-0 border-t border-gray-100 hover:bg-pale-blue ${row.isHeader ? 'bg-pale-blue font-semibold' : ''}`}
                  >
                    <TableCell className="w-[40%] py-4 px-6 align-top text-sm leading-snug text-gray-800 break-words whitespace-normal">
                      {row.feature}
                    </TableCell>
                    <TableCell className="w-[20%] py-4 px-6 align-top text-center text-sm leading-snug break-words whitespace-normal bg-indigo-50 dark:bg-indigo-900/20">
                      {renderCell(row.placed)}
                    </TableCell>
                    <TableCell className="w-[20%] py-4 px-6 align-top text-center text-sm leading-snug break-words whitespace-normal">
                      {renderCell(row.competitor1)}
                    </TableCell>
                    <TableCell className="w-[20%] py-4 px-6 align-top text-center text-sm leading-snug break-words whitespace-normal">
                      {renderCell(row.competitor2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="text-center mt-16">
          <PrimaryButton data-gtm="demo-buchen-comparison" />
        </FadeIn>

      </div>
    </section>
  );
};

export default ComparisonSection;
