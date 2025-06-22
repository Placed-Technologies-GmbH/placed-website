import Header from '../components/Header';
import Footer from '../components/Footer';

const legalText = [
  {
    title: '1. Verantwortliche Stelle',
    content: [
      'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
      'Placed Technologies GmbH',
      'Rosa-Luxemburg-Str. 14, 10178 Berlin',
      'Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).'
    ]
  },
  {
    title: '2. Ihre Rechte',
    content: [
      'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
      'Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
      'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
      'Als Betroffener steht Ihnen imFalle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei derzuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglichdatenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes,in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellteine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: ',
      'https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.',
      'Recht auf Datenübertragbarkeit',
      'Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllungeines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zulassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichenverlangen, erfolgt dies nur, soweit es technisch machbar ist.',
      'Recht auf Auskunft, Berichtigung, Sperrung, Löschung',
      'Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht aufunentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.'
    ]
  },
  {
    title: '3. SSL- bzw. TLS-Verschlüsselung',
    content: [
      'Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nichtmitlesbar. Sie erkennen eine verschlüsselte Verbindung an der "https://"Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.'
    ]
  },
  {
    title: '4. Server-Log-Dateien',
    content: [
      'In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Diese sind:',
      'Besuchte Seite auf unserer Domain',
      'Datum und Uhrzeit der Serveranfrage',
      'Browsertyp und Browserversion',
      'Verwendetes Betriebssystem',
      'Referrer URL',
      'Hostname des zugreifenden Rechners',
      'IP-Adresse',
      'Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitungbildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.'
    ]
  },
  // ... (for brevity, the rest of the sections can be added similarly)
];

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="w-full bg-background pt-40 sm:pt-32 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-work-blue text-center px-4">
          Datenschutzerklärung
        </h1>
      </div>
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg max-w-none">
          {legalText.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-work-blue mb-3">
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz; 