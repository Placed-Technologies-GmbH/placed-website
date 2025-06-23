import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'
import PrimaryButton from './PrimaryButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Wer ist PLACED?',
      answer: (
        <>
          <p>
          PLACED ist ein in Berlin ansässiges Technologieunternehmen mit dem Anspruch, 
          die Personalbranche durch den gezielten Einsatz von Künstlicher Intelligenz grundlegend zu verändern. 
          Unsere Gründer, Kai Künne und Fatih Temel, verfügen über mehrjährige unternehmerische Erfahrung in der 
          Personalvermittlung und Softwareentwicklung und kennen die spezifischen prozessualen Herausforderungen des Personalvertriebs aus eigener Praxis.
          </p>
          <p className="mt-2">
          Auf dieser Grundlage entstand PLACED. Die Plattform basiert auf modernster KI-Technologie und 
          wurde von einem hochspezialisierten Team aus erfahrenen Softwareentwicklern und KI-Experten entwickelt. 
          Unterstützt von führenden europäischen Investoren verfolgen wir ein klares Ziel: 
          Personalvermittler erfolgreicher zu machen, indem wir ihre Prozesse effizient und datengestützt gestalten. 
          Damit mehr Zeit für die wirklich wichtigen Dinge bleibt: Kandidaten rekrutieren, betreuen und sie zu ihrer beruflichen Situation beraten. 
          </p>
        </>
      )
    },
    {
      question: 'Wie funktioniert unser KI-Matching?',
      answer: (
        <>
          <p>
          PLACED nutzt eine KI gestützte Matchingtechnologie, die Lebensläufe von Kandidaten automatisch analysiert und mit allen verfügbaren Stellen im Markt abgleicht. 
          Dabei werden Qualifikationen, Berufserfahrung und Soft Skills ganzheitlich berücksichtigt. 
          Unsere KI versteht nicht nur Stichworte, sondern interpretiert Zusammenhänge und Anforderungen im Kontext.
          </p>
          <p className="mt-2">
          Aus dem Abgleich errechnet sich ein Matching Score, der die inhaltliche Passung zwischen Kandidat und Stelle angibt. 
          Ergänzt wird dieser durch den Dringlichkeitswert einer Vakanz, zum Beispiel basierend auf Laufzeit, 
          beauftragten Personalvermittlern oder Suchverhalten. Beide Werte zusammen ergeben den PLACED-Score, nach dem die Suchergebnisse automatisch priorisiert werden. 
          Sie sehen immer zuerst die Stellen mit der höchsten Wahrscheinlichkeit auf eine erfolgreiche Vermittlung.
          </p>
          <p className="mt-2">
          Neben dem Matching unterstützt PLACED Sie aktiv im Vertrieb. KI-gestützte Gesprächsleitfäden liefern konkrete Hinweise, wie Sie den Kunden ansprechen, 
          den Bedarf kommunizieren und das Profil überzeugend vorstellen können. Die Plattform zeigt auch, 
          welche Informationen im Profil noch fehlen, um die Erfolgswahrscheinlichkeit zu erhöhen. 
          So können Sie gezielt nachfragen und optimieren.
          </p>
          <p className="mt-2">
            <strong className="font-bold">Das Ergebnis:</strong> Weniger Zeitaufwand für Recherche, mehr Effizienz im Vertrieb und mehr erfolgreiche Vermittlungen.
          </p>
        </>
      )
    },
    {
      question: 'Wie wird der Datenschutz sichergestellt?',
      answer: (
        <>
          <p>
            Bei PLACED hat Datenschutz oberste Priorität. Wir wissen, dass die
            Verarbeitung personenbezogener Daten, wie sie beim Hochladen von
            Lebensläufen in unsere Plattform geschieht, höchste Sorgfalt
            erfordert. Deshalb stellen wir mit regelmäßigen externen Audits und
            umfassenden technischen und organisatorischen Maßnahmen (TOMs)
            sicher, dass unsere Prozesse und die Verarbeitung Ihrer Daten stets
            den aktuellsten DSGVO-Standards entsprechen.
          </p>
          <p className="mt-2">
            Unsere KI-Plattform ist nicht nur DSGVO zertifiziert, sondern erfüllt
            auch die Anforderungen des EU AI Acts. Dieses Siegel garantiert, dass
            unsere KI-Plattform höchste Standards in Bezug auf Sicherheit,
            Transparenz, Datenqualität und den Schutz von Grundrechte im Rahmen
            der Verwendung von KI-Technologie erfüllt und dabei ein umfassendes
            Risikomanagement und menschliche Aufsicht gewährleistet. PLACED ist
            nach DSGVO- und EU AI Act-Konformität durch externe Datenschutzexperten
            nach höchsten Qualitätsstandards zertifiziert. Diese Zertifizierung
            wird in regelmäßigen Abständen wiederholt.
          </p>
          <p className="mt-2">
            Wir garantieren, dass personenbezogene Daten aus Kandidaten-Lebensläufen
            verschlüsselt verarbeitet werden und ausschließlich auf Servern
            innerhalb der EU gespeichert werden. Die Daten werden nicht zum
            Training unserer KI verwendet. Erfahren Sie mehr in unserer
            detaillierten{' '}
            <a
              href="https://www.getplaced.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-placed-blue hover:underline"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </>
      )
    },
    {
      question: 'Wie funktioniert der Start mit PLACED?',
      answer: (
        <>
          <p>
            Der Weg zu einem effizienteren, KI-gestützten Vertrieb mit PLACED ist
            einfach und flexibel:
          </p>
          <p className="mt-2">
            <strong>Produkt-Demo anfragen:</strong> Starten Sie mit einer
            persönlichen Produkt-Demo. Hier zeigen wir Ihnen nicht nur alle
            unsere Features live, sondern besprechen auch Ihren spezifischen
            Bedarf und Nutzungskontext. So können wir Ihnen den optimalen Nutzen
            von PLACED zeigen.
          </p>
          <p className="mt-2">
            <strong>10 Tage unverbindlich testen:</strong> Optional können Sie im
            Anschluss an die Demo (oder auch direkt, falls Sie keine Demo
            wünschen) PLACED kostenlos und unverbindlich für 10 Tage testen. Sie
            erhalten vollen Zugriff auf die Plattform und können sich selbst von
            den Vorteilen überzeugen.
          </p>
          <p className="mt-2">
            <strong>Implementierung &amp; Support:</strong> Nach dem Kauf begleiten
            wir Sie umfassend bei der Implementierung. Da PLACED eine SaaS-Lösung
            ist, benötigen Sie keine Installation – alles ist bequem über Ihren
            Webbrowser zugänglich. Unser Team steht Ihnen dabei jederzeit zur
            Seite und ist immer für Sie via Live-Chat erreichbar.
          </p>
        </>
      )
    },
    {
      question: 'Systemvoraussetzungen & Integrationen',
      answer: (
        <p>
          PLACED ist eine webbasierte Lösung, die über alle gängigen Webbrowser
          zugänglich ist, ohne dass spezielle Software erforderlich ist. Wir
          arbeiten aktiv an der Entwicklung weiterer API-Schnittstellen zu CRM-
          und ATS-Systemen und sind stets offen für neue Integrationsmöglichkeiten,
          um PLACED nahtlos in Ihre bestehende HR-Landschaft einzubinden.
        </p>
      )
    },
    {
      question: 'Fördermitgliedschaft im GVP: Unser Engagement für die Branche',
      answer: (
        <p>
          Als Fördermitglied des Gesamtverbands der Personaldienstleister (GVP)
          unterstreichen wir unser Engagement für die Personaldienstleistungsbranche
          und die hohen Qualitätsstandards, die sie prägen. Durch unsere
          Mitgliedschaft sind wir nicht nur ein wichtiger Teil des GVP-Netzwerks,
          sondern tragen mit unserer Expertise und unseren Ressourcen dazu bei,
          die Ziele des Verbands aktiv voranzutreiben.
        </p>
      )
    }
  ];

  return (
    <div id="faq" className="mt-12 max-w-2xl mx-auto">
      <h2 className="text-center mb-6 text-work-blue tracking-tight">Häufige Fragen</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem value={`faq-${index}`} key={index} className="border-b border-gray-200">
            <AccordionTrigger>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed bg-gray-50 rounded-md px-4 py-3 mt-2 border-l-2 border-gray-200 pl-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
