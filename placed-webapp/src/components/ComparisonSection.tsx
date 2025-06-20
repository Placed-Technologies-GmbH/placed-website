
import React from 'react';
import { Check, X } from 'lucide-react';
import FadeIn from './FadeIn';
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
      placed: 'Unlimitiert, alle Regionen, alle Berufe',
      competitor1: 'Limitiert nach Region und Beruf',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Kontaktdaten',
      placed: 'Erweiterte persönliche Kontaktdaten in Zusammenarbeit mit Databyte, auch wenn diese nicht in der Stellenanzeige stehen',
      competitor1: 'Y',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Firmendaten',
      placed: 'Erweiterte Firmendaten in Zusammenarbeit mit Databyte',
      competitor1: 'Basic',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI Score und Kandidatenbewertung zu Fit für Position',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI Score zu Dringlichkeit der Suche des Kunden',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Automatisiertes Rematching Ihrer Kandidaten mit neuen Suchen von Bestands- und Zielkunden',
      placed: 'Y',
      competitor1: 'N',
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
      feature: 'KI Sales Script',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Vorbereitungszeit pro Vertriebsanruf',
      placed: '1 Minute',
      competitor1: '5-10 Minuten (Schätzung aus Praxiserfahrung)',
      competitor2: '>30 Minuten',
      placedHasAdvantage: true
    },
    {
      feature: 'API Schnittstellen',
      placed: 'Auf Anfrage',
      competitor1: 'Auf Anfrage',
      competitor2: 'N',
      placedHasAdvantage: false
    },
    {
      feature: 'Filter auf Zeitarbeitsjobs',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Erweiterung um zusätzl. Quellen (neue Print und Online Medien)',
      placed: 'Y',
      competitor1: 'Aufpreis',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Kostenlose Testphase',
      placed: '10 Tage umsonst',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Alles hierunter als "bald verfügbar"',
      placed: '',
      competitor1: '',
      competitor2: '',
      placedHasAdvantage: false,
      isHeader: true
    },
    {
      feature: 'Bezahlte Jobanzeigen',
      placed: 'Y',
      competitor1: 'Y',
      competitor2: 'N',
      placedHasAdvantage: false
    },
    {
      feature: 'KI CV Optimierer',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'KI Textsuche (Prompt) "Ich suche die 20 größten Logistikunternehmen in Berlin +30km"',
      placed: 'Y',
      competitor1: 'N',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Marktanalyse und Statistiken',
      placed: 'Y',
      competitor1: 'Y mit Aufpreis',
      competitor2: 'N',
      placedHasAdvantage: true
    },
    {
      feature: 'Frei konfigurierbarer Datenexport & Emailanhang',
      placed: 'Y',
      competitor1: 'Y mit Aufpreis',
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
            Im Vergleich zu anderer Software bietet PLACED nicht nur unbegrenzte Stellenanzeigen, Regionen
            und erweiterte Kontaktdaten, sondern revolutioniert den Recruitingprozess mit KI-gestütztem
            Matching, automatischer Kandidatenbewertung, CV Optimierung und Sales-Skripten.
          </p>
          <p className="text-sm text-muted-foreground">
            Führen Sie perfekte Vertriebsgespräche in nur einer Minute - lange Vorbereitung und schlechte 
            Telefonate gehören der Vergangenheit an.
          </p>
        </div>

        {/* Comparison Table */}
        <FadeIn delay={0.1} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow className="border-0 border-t border-gray-100 border-b-0 bg-pale-blue">
                <TableHead className="w-[40%] py-4 px-6 text-left align-top text-xs font-semibold text-work-blue uppercase">
                  Funktion
                </TableHead>
                <TableHead className="w-[20%] py-4 px-6 text-center align-top text-xs font-semibold text-work-blue uppercase bg-indigo-50 dark:bg-indigo-900/20">
                  <div className="inline-flex items-center justify-center gap-x-1">
                    PLACED
                  </div>
                </TableHead>
                <TableHead className="w-[20%] py-4 px-6 text-center align-top text-xs font-semibold text-work-blue uppercase">
                  INDEX
                </TableHead>
                <TableHead className="w-[20%] py-4 px-6 text-center align-top text-xs font-semibold text-work-blue uppercase">
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
        </FadeIn>

      </div>
    </section>
  );
};

export default ComparisonSection;
