import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'
import PrimaryButton from './PrimaryButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Wer ist PLACED?',
      answer: (
        <>
          <p>
            Wir sind ein in Berlin ansässiges Team mit einer klaren Mission: Die
            Personalbranche mit KI zu revolutionieren. Unsere Gründer, Kai Künne
            und Fatih Temel, bringen aus eigener Erfahrung als
            Personaldienstleister das tiefe Verständnis für die täglichen
            Herausforderungen der Branche mit.
          </p>
          <p className="mt-2">
            Aus dieser Branchenkenntnis heraus entstand PLACED – entwickelt von
            einem internationalen Entwicklerteam. Als stark wachsendes
            Unternehmen sind ethische Prinzipien, Diversität und Inklusion fest
            in unserer Unternehmenskultur und der Entwicklung unseres Produkts
            verankert. Wir freuen uns darauf, gemeinsam mit Ihnen die Branche
            voranzubringen.
          </p>
        </>
      )
    },
    {
      question: 'Wie funktioniert unser KI-Matching?',
      answer: (
        <>
          <p>
            Unsere intelligente Matching-KI analysiert den hochgeladenen
            Kandidaten-Lebenslauf und gleicht ihn präzise mit allen Stellen in
            unserer Datenbank ab. Dabei berücksichtigt die KI das gesamte
            Skillset des Kandidaten und versteht die Stellenausschreibungen sowie
            deren Anforderungen im Detail.
          </p>
          <p className="mt-2">
            Aus diesem Abgleich resultiert der Matching Score, der die
            Passgenauigkeit ausdrückt. Zusammen mit dem Urgency Score, der die
            Dringlichkeit der Besetzung einer Position widerspiegelt, bildet sich
            der PLACED Score. Die Suchergebnisse werden zudem nach diesem PLACED
            Score geordnet, sodass Sie immer die Stellen mit der höchsten
            Vermittlungswahrscheinlichkeit zuerst angezeigt bekommen.
          </p>
          <p className="mt-2">
            Darüber hinaus unterstützt Sie unsere KI mit einem KI Sales Script,
            das Ihnen hilft, Neukunden zu gewinnen und Kandidaten optimal zu
            platzieren. Außerdem erhalten Sie KI-Optimierungsvorschläge für
            Kandidaten-CVs, um deren Profile perfekt auf die Anforderungen der
            Stelle anzupassen.
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
    }
  ];

  return (
    <div id="faq" className="mt-12 max-w-2xl mx-auto">
      <h2 className="text-center mb-6 text-work-blue tracking-tight">Häufige Fragen</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem value={`faq-${index}`} key={index}>
            <AccordionTrigger className="text-left text-sm">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-10">
        <PrimaryButton />
      </div>
    </div>
  );
};

export default FAQ;
