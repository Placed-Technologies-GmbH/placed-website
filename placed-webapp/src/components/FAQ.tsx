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
            PLACED nutzt eine KI-gestützte <a href="https://www.getplaced.de/matchingtechnologie" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">Matchingtechnologie</a>, die Lebensläufe von Kandidaten automatisch analysiert und mit allen verfügbaren Stellen im Markt abgleicht. Dabei werden Qualifikationen, Berufserfahrung und Soft Skills ganzheitlich berücksichtigt. Unsere KI versteht nicht nur Stichworte, sondern interpretiert Zusammenhänge und Anforderungen im Kontext.
          </p>
          <p className="mt-2">
            Aus dem Abgleich errechnet sich ein Matching-Score, der die inhaltliche Passung zwischen Kandidat und Stelle angibt. Ergänzt wird dieser durch den <a href="https://www.getplaced.de/dringlichkeits-score" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">Dringlichkeits-Score</a> einer Vakanz, beispielsweise basierend auf Laufzeit, beauftragten Personalvermittlern oder Suchverhalten. Beide Werte zusammen ergeben den PLACED-Score, nach dem die Suchergebnisse automatisch priorisiert werden. Sie sehen immer zuerst die Stellen mit der höchsten Wahrscheinlichkeit auf eine erfolgreiche Vermittlung.
          </p>
          <p className="mt-2">
            Neben dem Matching unterstützt PLACED Sie aktiv im Vertrieb. KI-gestützte Gesprächsleitfäden liefern konkrete Hinweise, wie Sie den Kunden ansprechen, den Bedarf kommunizieren und das Profil überzeugend vorstellen können. Die Plattform zeigt auch, welche Informationen im Profil noch fehlen, um die Erfolgswahrscheinlichkeit zu erhöhen. So können Sie gezielt nachfragen und optimieren.
          </p>
          <p className="mt-2">
            <strong>Das Ergebnis:</strong> Weniger Zeitaufwand für Recherche, mehr Effizienz im Vertrieb und bis zu 5x mehr Vermittlungen.
          </p>
        </>
      )
    },
    {
      question: 'Wie wird der Datenschutz sichergestellt?',
      answer: (
        <>
          <p>
            Datenschutz hat bei PLACED höchste Priorität. Wir verarbeiten personenbezogene Daten mit größter Sorgfalt und in voller Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) sowie den Anforderungen des EU AI Acts.
          </p>
          <p className="mt-2">
            Unsere Plattform ist extern <a href="https://www.getplaced.de/audit" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">auditiert</a> und sowohl DSGVO- als auch EU-AI-Act-konform zertifiziert. Die zugrunde liegende KI-Technologie erfüllt strenge Auflagen hinsichtlich Sicherheit, Transparenz, Datenqualität und Grundrechtsschutz. Sämtliche Daten werden verschlüsselt verarbeitet und ausschließlich auf Servern innerhalb der EU (Frankfurt, AWS) gespeichert.
          </p>
          <p className="mt-2">
            Besonders sensibel behandeln wir Lebensläufe und Profildaten: Diese werden nicht zum Training von KI-Modellen verwendet. Darüber hinaus setzen wir umfassende technische und organisatorische Maßnahmen (TOMs) sowie regelmäßige <a href="https://www.getplaced.de/datenschutz-audit" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">Datenschutz-Audits</a> ein, um höchste Standards in der Datensicherheit dauerhaft zu gewährleisten.
          </p>
          <p className="mt-2">
            Weitere Informationen finden Sie in unserer <a href="https://www.getplaced.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">Datenschutzerklärung</a>.
          </p>
        </>
      )
    },
    {
      question: 'Wie starte ich mit PLACED?',
      answer: (
        <>
          <p>
            Der Einstieg in die KI-gestützte Vertriebsplattform von PLACED ist einfach und sofort möglich, ohne Schulungsaufwand oder komplexes Onboarding.
          </p>
          <p className="mt-4 font-bold">1. Persönliche Demo (optional)</p>
          <p>
            Auf Wunsch beginnen Sie mit einer unverbindlichen Live Demo. Dabei zeigen wir Ihnen die wichtigsten Funktionen im Überblick und besprechen gemeinsam Ihre individuellen Anforderungen.
          </p>
          <p className="mt-4 font-bold">2. 14 Tage kostenlos testen</p>
          <p>
            Im Anschluss, oder direkt ohne Demo, testen Sie PLACED für 14 Tage kostenfrei und mit vollem Funktionsumfang. So erleben Sie unmittelbar, wie Sie schneller vermitteln und einfacher Neukunden gewinnen.
          </p>
          <p className="mt-4 font-bold">3. Sofort einsatzbereit</p>
          <p>
            PLACED funktioniert direkt im Browser, ohne Installation oder Einrichtung. Die Anwendung ist intuitiv bedienbar, auch ohne Vorkenntnisse.
          </p>
          <p className="mt-4 font-bold">4. Persönliche Begleitung</p>
          <p>
            Unser Team unterstützt Sie bei jedem Schritt, sei es im Test oder beim produktiven Einsatz. Wir sind jederzeit für Sie erreichbar, per Live Chat oder auf Wunsch auch persönlich.
          </p>
          <p className="mt-4">
            PLACED steht für einen schnellen Einstieg, einfache Nutzung und maximale Wirkung im Vertrieb.
          </p>
        </>
      )
    },
    {
      question: 'Wie kann ich PLACED in die bestehende IT-Landschaft integrieren?',
      answer: (
        <>
          <p>
            PLACED ist eine vollständig webbasierte Softwarelösung, die ohne Installation sofort über jeden modernen Browser einsatzbereit ist. Damit kann der Einstieg ohne technische Hürden erfolgen, unabhängig von Standort, Gerät oder IT-Infrastruktur.
          </p>
          <p className="mt-2">
            Für tiefergehende Integrationen in Ihre bestehenden Systeme bietet PLACED darüber hinaus eine stetig wachsende Zahl an Schnittstellen (APIs) zu führenden CRM- und Bewerbermanagementsystemen. Die Integration erfolgt standardisiert oder individuell angepasst, je nach Bedarf und Systemlandschaft.
          </p>
          <p className="mt-2">
            Die KI-Plattform von PLACED ist so konzipiert, dass sie sich nahtlos in bestehende HR- und Vertriebsprozesse einfügt. Auch spezifische Anforderungen wie SSO-Anbindung, Nutzerverwaltung über zentrale Systeme oder Datenexporte in BI-Tools können umgesetzt werden.
          </p>
          <p className="mt-2">
            Kurzum: PLACED lässt sich flexibel in jede moderne Systemlandschaft integrieren, von KMUs bis Enterprise-Unternehmen. Das Experten-Team von PLACED begleitet Sie bei Bedarf Schritt für Schritt durch die technische Anbindung.
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
      question: 'Wie engagiert sich PLACED für die Personalbranche?',
      answer: (
        <>
          <p>
            PLACED versteht sich nicht nur als Softwareanbieter, sondern als aktiver Partner der Personalbranche. Als Fördermitglied des Gesamtverbands der Personaldienstleister (GVP) bringen wir unsere technologische Expertise und Branchenperspektive in die strategische Weiterentwicklung des Sektors ein.
          </p>
          <p className="mt-2">
            Unser Ziel ist es, Personalvermittler und <span className="underline">Zeitarbeitsfirmen</span> gezielt zu stärken – insbesondere im Wettbewerb mit digitalen Plattformmodellen. Mit unserer KI-gestützten Infrastruktur ermöglichen wir es Personaldienstleistern, ihre Kunden noch schneller, transparenter und erfolgreicher zu bedienen.
          </p>
          <p className="mt-2">
            PLACED setzt sich dafür ein, dass moderne Technologie nicht als Bedrohung, sondern als strategischer Hebel genutzt wird, um Qualität, Reaktionsfähigkeit und Vermittlungsleistung der Branche auf ein neues Niveau zu heben.
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
          <AccordionItem value={`faq-${index}`} key={index} className="border-b border-gray-200">
            <AccordionTrigger className={index === faqs.length - 1 ? 'text-left' : 'text-left sm:text-center'}>
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
