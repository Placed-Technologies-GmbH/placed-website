import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const sections = [
  { id: 'einleitung', label: '1. Einleitung und Geltungsbereich' },
  { id: 'begriffsbestimmungen', label: '2. Begriffsbestimmungen' },
  { id: 'verantwortlicher', label: '3. Name und Kontaktdaten des Verantwortlichen' },
  { id: 'datenschutzbeauftragter', label: '4. Datenschutzbeauftragter' },
  { id: 'arten-daten', label: '5. Arten der verarbeiteten Daten' },
  { id: 'zwecke-rechtsgrundlagen', label: '6. Zwecke der Datenverarbeitung und Rechtsgrundlagen' },
  { id: 'weitergabe', label: '7. Weitergabe von Daten an Dritte und Auftragsverarbeiter' },
  { id: 'drittländer', label: '8. Datenübermittlung in Drittländer' },
  { id: 'cookies', label: '9. Cookies und ähnliche Technologien' },
  { id: 'rechte', label: '10. Ihre Rechte als betroffene Person' },
  { id: 'speicherdauer', label: '11. Speicherdauer der personenbezogenen Daten' },
  { id: 'datensicherheit', label: '12. Datensicherheit' },
  { id: 'aenderungen', label: '13. Änderungen dieser Datenschutzerklärung' },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Datenschutz = () => {
  useEffect(() => {
    // Optional: highlight anchor on scroll
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="w-full bg-background pt-40 sm:pt-32 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-work-blue text-center px-4">
          Datenschutzerklärung
        </h1>
        <p className="text-center text-base sm:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen. Auf dieser Seite informieren wir Sie transparent und verständlich über die Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer Angebote.
        </p>
      </div>
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents */}
        <nav aria-label="Inhaltsverzeichnis" className="mb-10 bg-muted/40 rounded-lg p-4 border border-muted">
          <h2 className="text-lg font-semibold mb-2">Inhaltsverzeichnis</h2>
          <ul className="list-disc pl-5 space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-work-blue hover:underline focus:underline">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="prose prose-lg max-w-none">
          <p><strong>Placed Technologies GmbH</strong><br />Rosa-Luxemburg-Str. 14<br />10178 Berlin<br />info@getplaced.de<br />+49 30 89 84 98 9</p>

          {/* Section 1 */}
          <div id="einleitung" className="scroll-mt-32">
            <h2>1. Einleitung und Geltungsbereich</h2>
            <p>Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten (im Folgenden "Daten") innerhalb der Online-Angebote und der damit verbundenen Webseiten, Funktionen und Inhalte (nachfolgend gemeinsam als "Website" bezeichnet) sowie externer Online-Präsenzen, wie z.B. Social Media Profile (nachfolgend gemeinsam "Online-Angebot") der Placed Technologies GmbH.</p>
            <p>Die <strong>Placed Technologies GmbH</strong> (im Folgenden <strong>"PLACED"</strong> genannt) legt größten Wert auf den Schutz Ihrer Daten. PLACED verarbeitet Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 2 */}
          <div id="begriffsbestimmungen" className="scroll-mt-32">
            <h2>2. Begriffsbestimmungen</h2>
            <ul>
              <li><strong>Personenbezogene Daten:</strong> Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z.B. Name, E-Mail-Adresse, IP-Adresse).</li>
              <li><strong>Verarbeitung:</strong> Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten (z.B. Erheben, Speichern, Anpassen, Verwenden, Offenlegen, Löschen).</li>
              <li><strong>Verantwortlicher:</strong> Die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. In dieser Datenschutzerklärung ist PLACED.</li>
              <li><strong>Auftragsverarbeiter:</strong> Eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</li>
              <li><strong>Drittland:</strong> Ein Land außerhalb der Europäischen Union (EU) und des Europäischen Wirtschaftsraums (EWR).</li>
            </ul>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 3 */}
          <div id="verantwortlicher" className="scroll-mt-32">
            <h2>3. Name und Kontaktdaten des Verantwortlichen</h2>
            <p>Placed Technologies GmbH<br />Rosa-Luxemburg-Str. 14, 10178 Berlin<br />info@getplaced.de<br />+49 30 89 84 98 9<br /><a href="https://www.getplaced.de/impressum" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.getplaced.de/impressum</a></p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 4 */}
          <div id="datenschutzbeauftragter" className="scroll-mt-32">
            <h2>4. Datenschutzbeauftragter</h2>
            <p>PLACED hat einen Datenschutzbeauftragten bestellt. Unser Datenschutzbeauftragter ist die heyData GmbH, Schützenstraße 5, 10117 Berlin, <a href="http://www.heydata.eu" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">www.heydata.eu</a>, <a href="mailto:datenschutz@heydata.eu" className="text-work-blue underline">datenschutz@heydata.eu</a>.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 5 */}
          <div id="arten-daten" className="scroll-mt-32">
            <h2>5. Arten der verarbeiteten Daten</h2>
            <p>PLACED erhebt und verarbeitet verschiedene Arten von Daten, abhängig von Ihrer Interaktion mit der Website und den Diensten:</p>
            <ul>
              <li><strong>Bestandsdaten:</strong> Name, Adresse, E-Mail-Adresse, Telefonnummer (z.B. bei der Nutzung von Kontaktformularen, Registrierung oder bei der Vertragsanbahnung).</li>
              <li><strong>Nutzungsdaten:</strong> IP-Adresse, besuchte Seiten, Zugriffszeiten, verwendeter Browser, Gerätetyp, Referrer-URL (die zuvor besuchte Seite). Diese Daten werden unter anderem in Server-Logfiles erfasst.</li>
              <li><strong>Inhaltsdaten:</strong> Eingaben in Formularen, Chatnachrichten, Kommentare (z.B. über Live-Chats oder Support-Anfragen).</li>
              <li><strong>Bewerbungsdaten:</strong> Lebenslauf, Zeugnisse, Qualifikationen, Anschreiben, Referenzen, Kontaktdaten (im Rahmen von Bewerbungsprozessen).</li>
              <li><strong>Kommunikationsdaten:</strong> Inhalt der Kommunikation (z.B. E-Mails, Telefonate, Chatverläufe über WhatsApp Business).</li>
            </ul>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 6 */}
          <div id="zwecke-rechtsgrundlagen" className="scroll-mt-32">
            <h2>6. Zwecke der Datenverarbeitung und Rechtsgrundlagen</h2>
            <p>PLACED verarbeitet Ihre Daten für folgende Zwecke und auf Basis der genannten Rechtsgrundlagen:</p>
            <ul>
              <li><strong>Bereitstellung des Online-Angebots und Funktionsfähigkeit der Website:</strong><br />
                  <strong>Zweck:</strong> Ermöglichung des Zugriffs auf die Website, Sicherstellung der technischen Funktionalität und Stabilität, Anzeige von Inhalten wie Webfonts. Die Erfassung von Server-Logfiles dient der Erkennung und Abwehr von Angriffen sowie der Fehleranalyse.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung eines funktionierenden, sicheren und attraktiven Online-Angebots).</li>
              <li><strong>Kommunikation mit Ihnen:</strong><br />
                  <strong>Zweck:</strong> Beantwortung von Anfragen über Kontaktformulare, E-Mail, Telefon, Live-Chat oder WhatsApp Business.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der effektiven Kommunikation mit Interessenten und Kunden).</li>
              <li><strong>Vertragsanbahnung und -abwicklung:</strong><br />
                  <strong>Zweck:</strong> Abschluss und Durchführung von Verträgen über Produkte und Dienstleistungen mit Kunden und Partnern, Rechnungsstellung und Zahlungsabwicklung.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen).</li>
              <li><strong>Marketing und Vertrieb:</strong><br />
                  <strong>Zweck:</strong> Zusendung von Informationen über Produkte und Dienstleistungen, Personalisierung von Marketingmaßnahmen, Lead-Generierung, Durchführung von Kundenumfragen zur Verbesserung der Angebote.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z.B. für E-Mail-Newsletter oder bestimmte Marketing-Cookies), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Direktwerbung und Kundenbindung, sofern keine Einwilligung erforderlich ist und Ihre Interessen nicht überwiegen).</li>
              <li><strong>Analyse und Optimierung des Online-Angebots:</strong><br />
                  <strong>Zweck:</strong> Verbesserung der Nutzerfreundlichkeit, Reichweitenmessung, Fehlerbehebung, Weiterentwicklung der Dienste und Inhalte.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z.B. für nicht-essentielle Cookies und Analysetools), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse und Optimierung des Online-Angebots).</li>
              <li><strong>Bewerbungsmanagement:</strong><br />
                  <strong>Zweck:</strong> Bearbeitung und Verwaltung von Bewerbungen, Durchführung des Einstellungsprozesses.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person), § 26 BDSG. Eine darüber hinausgehende Speicherung Ihrer Bewerbungsdaten über sechs Monate hinaus oder die Weitergabe an potenzielle Arbeitgeber erfolgt nur mit Ihrer expliziten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</li>
              <li><strong>Sicherheitsmaßnahmen:</strong><br />
                  <strong>Zweck:</strong> Gewährleistung der Sicherheit der IT-Systeme von PLACED, Verhinderung von Missbrauch, Erkennung von Angriffen und Betrugsversuchen.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit der Datenverarbeitung und der Verhinderung von Kriminalität).</li>
              <li><strong>Erfüllung rechtlicher Verpflichtungen:</strong><br />
                  <strong>Zweck:</strong> Einhaltung gesetzlicher Aufbewahrungspflichten (z.B. handels- und steuerrechtliche Vorgaben), Beantwortung behördlicher Anfragen oder gerichtlicher Anordnungen.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. c DSGVO (Erfüllung einer rechtlichen Verpflichtung).</li>
            </ul>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 7 */}
          <div id="weitergabe" className="scroll-mt-32">
            <h2>7. Weitergabe von Daten an Dritte und Auftragsverarbeiter</h2>
            <p>PLACED gibt Ihre Daten grundsätzlich nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben, Sie haben eingewilligt oder es ist zur Erfüllung des Vertragszwecks notwendig.</p>
            <p>PLACED setzt für bestimmte Dienstleistungen Auftragsverarbeiter ein, die im Auftrag und gemäß den Anweisungen von PLACED Daten verarbeiten. PLACED hat mit diesen Auftragsverarbeitern entsprechende Verträge zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO abgeschlossen, um den Schutz Ihrer Daten zu gewährleisten.</p>
            <p>Im Folgenden listet PLACED die Tools und Dienste auf, die PLACED verwendet und die im Rahmen ihrer Funktionalität personenbezogene Daten verarbeiten können. Für die genauen Details der Datenverarbeitung und die jeweiligen Datenschutzbestimmungen wird auf die Datenschutzerklärungen der Anbieter verwiesen.</p>

            <h3 className="mt-10 mb-4 text-2xl font-bold">Übersicht der von PLACED genutzten Tools und Dienste:</h3>

            {/* 7.1 Hosting und Infrastruktur */}
            <h4 className="mt-8 mb-2 text-xl font-semibold">7.1 Hosting und Infrastruktur:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">Amazon Web Services (AWS)</span> (USA, gehostet in EU): Cloud-Infrastruktur und Hosting-Dienste.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Bereitstellung der Website und Anwendungen, Speicherung von Daten.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit AWS abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt, der Daten auch in der EU hosten kann.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://aws.amazon.com/de/privacy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://aws.amazon.com/de/privacy/</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Google Cloud</span> (USA, gehostet in EU): Cloud-Infrastruktur und Hosting-Dienste.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Bereitstellung der Website und Anwendungen, Speicherung von Daten.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Google Cloud abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt, der Daten auch in der EU hosten kann.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://cloud.google.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://cloud.google.com/privacy/</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Netlify</span> (USA): Hosting für Webprojekte.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Bereitstellung der Website und Anwendungen.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Netlify abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.netlify.com/privacy/</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Supabase</span> (USA): Open-Source-Alternative zu Firebase für Datenbanken und Authentifizierung.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Datenbankmanagement, Authentifizierungsdienste für die Anwendungen von PLACED.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Supabase abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://supabase.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Webflow</span> (USA): Visueller Website-Builder und Hosting.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Erstellung und Hosting der Website von PLACED.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Webflow abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://webflow.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://webflow.com/legal/privacy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.2 CRM & Marketing Automation */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.2 CRM & Marketing Automation:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">HubSpot</span> (USA, gehostet in EU): CRM, Marketing Automation, Sales und Service Plattform.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Kundenbeziehungsmanagement, E-Mail-Marketing, Lead-Management, Website-Tracking.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit HubSpot abgeschlossen. HubSpot bietet seit 2022 EU-Server für die Datenspeicherung an.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://legal.hubspot.com/de/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://legal.hubspot.com/de/privacy-policy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">HubSpot LiveChat</span> (USA, gehostet in EU): Chatfunktion auf der Website von PLACED.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Direkte Kommunikation mit Website-Besuchern.</li>
                  <li><span className="font-bold">Hinweis:</span> Teil der HubSpot-Plattform, AVV mit HubSpot deckt dies ab.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> Siehe HubSpot.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Intercom</span> (Irland, gehostet in EU): Kundenkommunikationsplattform (Chat, Support, Marketing).
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Kundenbetreuung, Live-Chat, gezielte Nachrichten.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Intercom abgeschlossen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.intercom.com/legal/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Notion</span> (USA): Workspace für Dokumente, Notizen, Aufgabenmanagement und Kundenbeziehungen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Interne Organisation, Projektmanagement, Kundenbeziehungsmanagement.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Notion abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.notion.so/de-de/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.notion.so/de-de/privacy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.3 Analysetools und Dienste von Google */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.3 Analysetools und Dienste von Google:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">Google Analytics 4 (über Google Tag Manager)</span> (USA): Webanalyse-Dienst.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Analyse des Nutzerverhaltens auf der Website von PLACED zur Optimierung des Angebots und zur Reichweitenmessung.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED nutzt Google Analytics 4 mit IP-Anonymisierung. Die Daten werden pseudonymisiert verarbeitet. PLACED hat einen AVV mit Google abgeschlossen. Die Übermittlung von Daten in die USA erfolgt auf Basis der Standardvertragsklauseln der EU-Kommission und ggf. zusätzlicher Schutzmaßnahmen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://policies.google.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Google Tag Manager</span> (USA): Tool zur Verwaltung von Website-Tags.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Verwaltung und Ausspielung von Website-Tags (z.B. Google Analytics). Der Google Tag Manager selbst erhebt keine Daten, sondern steuert andere Dienste, die Daten erheben können.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://policies.google.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Google Fonts</span> (USA): Bereitstellung von Schriftarten.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Einheitliche und ansprechende Darstellung der Schriftarten auf der Website von PLACED. Beim Aufruf der Website lädt Ihr Browser die benötigten Schriftarten in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Dabei wird Ihre IP-Adresse an Google übermittelt.</li>
                  <li><span className="font-bold">Hinweis:</span> Die Einbindung erfolgt lokal oder so, dass möglichst keine Datenübertragung stattfindet. Wo dies nicht möglich ist, hat PLACED einen AVV mit Google abgeschlossen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://policies.google.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Google CDN (Content Delivery Network)</span> (USA): Bereitstellung von Website-Inhalten.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Beschleunigung der Ladezeiten der Website von PLACED durch Auslieferung von Inhalten über Server an verschiedenen Standorten. Dabei können technische Daten wie Ihre IP-Adresse an Google übermittelt werden.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Google abgeschlossen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://policies.google.com/privacy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.4 Kommunikation & Kollaboration */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.4 Kommunikation & Kollaboration:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">Microsoft 365</span> (Global, gehostet in EU): Bürosoftware und Cloud-Dienste (einschließlich OneDrive, SharePoint, Teams).
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Interne Kommunikation, Dokumentenmanagement, E-Mail-Verkehr, Video-Konferenzen.</li>
                  <li><span className="font-bold">Hinweis:</span> Microsoft bietet umfassende Datenschutz- und Sicherheitsstandards. PLACED hat einen AVV mit Microsoft abgeschlossen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://privacy.microsoft.com/de-de/privacestatement" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://privacy.microsoft.com/de-de/privacestatement</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Microsoft SharePoint</span> (Global, gehostet in EU): Dokumentenmanagement und Zusammenarbeit.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Teilen und Verwalten von Dokumenten.</li>
                  <li><span className="font-bold">Hinweis:</span> Teil von Microsoft 365, AVV mit Microsoft deckt dies ab.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> Siehe Microsoft 365.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Microsoft Teams</span> (Global, gehostet in EU): Kommunikations- und Kollaborationsplattform.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Online-Meetings, Chats, Telefonie.</li>
                  <li><span className="font-bold">Hinweis:</span> Teil von Microsoft 365, AVV mit Microsoft deckt dies ab.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> Siehe Microsoft 365.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">OneDrive for Business</span> (Global, gehostet in EU): Cloud-Speicher für Unternehmen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Speicherung und Synchronisation von Dateien.</li>
                  <li><span className="font-bold">Hinweis:</span> Teil von Microsoft 365, AVV mit Microsoft deckt dies ab.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> Siehe Microsoft 365.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">WhatsApp Business</span> (USA): Kommunikationsdienst für Unternehmen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Kommunikation mit Kunden und Partnern, sofern Sie PLACED aktiv über diesen Kanal kontaktieren.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED weist darauf hin, dass WhatsApp Daten in die USA übermittelt. PLACED hat mit WhatsApp entsprechende Vereinbarungen getroffen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.whatsapp.com/legal/privacy-policy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">tl;dv</span> (USA): KI-gestützte Aufnahmen und Transkriptionen von Videokonferenzen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Aufzeichnung und Analyse von Meetings (z.B. für Protokolle, Trainingszwecke).</li>
                  <li><span className="font-bold">Hinweis:</span> Die Nutzung erfolgt nur mit vorheriger Information und Möglichkeit zum Widerspruch der Teilnehmer. PLACED hat einen AVV mit tl;dv abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://tldv.io/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://tldv.io/privacy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.5 Recruiting & HR */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.5 Recruiting & HR:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">join.com</span> (USA): Recruiting-Plattform.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Verwaltung von Stellenanzeigen und Bewerbungen.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit join.com abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.join.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.join.com/privacy-policy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">LinkedIn Recruiter (Lite)</span> (USA): Tool für die Personalsuche und -ansprache auf LinkedIn.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Identifizierung und Kontaktaufnahme mit potenziellen Kandidaten.</li>
                  <li><span className="font-bold">Hinweis:</span> Die Datenverarbeitung erfolgt im Rahmen der LinkedIn-Datenschutzbestimmungen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.linkedin.com/legal/privacy-policy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.6 Projektmanagement & Interne Organisation */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.6 Projektmanagement & Interne Organisation:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">Airtable</span> (USA): Datenbank und Kollaborationstool.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Datenmanagement, Projektorganisation, Content-Planung.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Airtable abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.airtable.com/company/privacy/de" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.airtable.com/company/privacy/de</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Linear</span> (USA): Projekt- und Issue-Tracking-Tool.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Projektmanagement, Aufgabenverwaltung, Fehlerverfolgung.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Linear abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://linear.app/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://linear.app/privacy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.7 Zahlungsabwicklung & Finanzmanagement */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.7 Zahlungsabwicklung & Finanzmanagement:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">Moss</span> (Deutschland): Finanzmanagement und Ausgabenlösung.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Verwaltung von Unternehmensausgaben und Rechnungen.</li>
                  <li><span className="font-bold">Hinweis:</span> Moss ist ein deutsches Unternehmen, was die Einhaltung der DSGVO erleichtert.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://getmoss.com/de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://getmoss.com/de/datenschutz</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Stripe</span> (USA/Irland): Online-Zahlungsabwicklung.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Abwicklung von Zahlungen für Produkte/Dienstleistungen.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED nutzt Stripe für die Zahlungsabwicklung. Ihre Zahlungsdaten werden direkt an Stripe übermittelt. PLACED hat einen AVV mit Stripe abgeschlossen. Stripe verarbeitet Daten in der EU und den USA.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://stripe.com/de/privacy</a></li>
                </ul>
              </li>
            </ul>

            {/* 7.8 Sonstige Dienstleistungen */}
            <h4 className="mt-12 mb-2 text-xl font-semibold">7.8 Sonstige Dienstleistungen:</h4>
            <ul className="space-y-8">
              <li>
                <span className="font-bold">1Password</span> (Kanada): Passwort-Manager.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Sichere Verwaltung von Zugangsdaten für interne Zwecke.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://1password.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://1password.com/legal/privacy/</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Azure DevOps</span> (USA): Entwicklungs- und Kollaborationsplattform.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Softwareentwicklung, Versionskontrolle, Projektmanagement für Entwicklerteams.</li>
                  <li><span className="font-bold">Hinweis:</span> Teil der Microsoft Azure Cloud, AVV mit Microsoft deckt dies ab.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> Siehe Microsoft Azure.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Azure OpenAI Service</span> (USA): KI-Dienstleistungen von Microsoft Azure.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Nutzung von KI-Modellen für bestimmte Anwendungsfälle in der Software von PLACED.</li>
                  <li><span className="font-bold">Hinweis:</span> Datenverarbeitung über Microsoft Azure, d.h. in einer geschützten Umgebung, die vom öffentlichen OpenAI getrennt ist. AVV mit Microsoft deckt dies ab.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> Siehe Microsoft Azure.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Calendly</span> (USA): Terminplanungstool.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Online-Terminbuchung für Besprechungen mit PLACED.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Calendly abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://calendly.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">ChatGPT (OpenAI)</span> (USA): KI-Sprachmodell.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Unterstützung bei der Texterstellung, Ideengenerierung, etc.</li>
                  <li><span className="font-bold">Hinweis:</span> <strong>Besondere Vorsicht bei personenbezogenen Daten!</strong> PLACED stellt sicher, dass keine sensiblen oder unverschlüsselten personenbezogenen Daten in ChatGPT eingegeben werden. Wenn die API oder eine Enterprise-Version genutzt wird, hat PLACED einen Datenverarbeitungszusatz (DPA) mit OpenAI abgeschlossen, der die Nicht-Nutzung von Daten zum Training zusichert.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://openai.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">clinq</span> (Deutschland): Kommunikationssoftware.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Telefonie und Kundenkommunikation.</li>
                  <li><span className="font-bold">Hinweis:</span> Deutsche Anbieter sind grundsätzlich einfacher datenschutzkonform zu betreiben.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.clinq.com/legal/datenschutz" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.clinq.com/legal/datenschutz</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Dropbox Business</span> (USA): Cloud-Speicherdienst für Unternehmen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Speicherung und Freigabe von Dateien.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Dropbox abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.dropbox.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.dropbox.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Figma</span> (USA): Design- und Kollaborationstool.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Design von Benutzeroberflächen und Grafiken.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Figma abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.figma.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.figma.com/privacy/</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Google SSO</span> (USA): Single Sign-On über Google-Konten.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Erleichterte Anmeldung bei Diensten, die PLACED nutzt.</li>
                  <li><span className="font-bold">Hinweis:</span> Wird für interne Anwendungen oder externe Dienste, die PLACED verwendet, genutzt, um Anmeldeprozesse zu vereinfachen und zu sichern.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://policies.google.com/privacy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">PandaDoc</span> (USA): Dokumentenmanagement und E-Signatur.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Erstellung, Verwaltung und Signatur von Dokumenten (z.B. Verträge, Angebote).</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit PandaDoc abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.pandadoc.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.pandadoc.com/privacy-policy/</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Perspective</span> (USA): ClickFunnels-Alternative, Marketing-Funnels.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Erstellung und Verwaltung von Marketing-Funnels und Landing Pages.</li>
                  <li><span className="font-bold">Hinweis:</span> PLACED hat einen AVV mit Perspective abgeschlossen. Beachten Sie, dass es sich um einen US-Anbieter handelt.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.perspective.co/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.perspective.co/privacy-policy</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Sipgate</span> (Deutschland): Cloud-Telefonanlage.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Telefonie, Sprachnachrichten, Callcenter-Funktionen.</li>
                  <li><span className="font-bold">Hinweis:</span> Sipgate ist ein deutscher Anbieter, was die Einhaltung der DSGVO erleichtert.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://www.sipgate.de/rechtliches/datenschutz" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://www.sipgate.de/rechtliches/datenschutz</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">YouSign</span> (Frankreich): Elektronische Signaturen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Digitale Signatur von Dokumenten.</li>
                  <li><span className="font-bold">Hinweis:</span> YouSign ist ein europäischer Anbieter.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://yousign.com/de-de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://yousign.com/de-de/datenschutz</a></li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Zapier</span> (USA): Automatisierungen zwischen Anwendungen.
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><span className="font-bold">Zweck:</span> Verbindung und Automatisierung von Arbeitsabläufen zwischen verschiedenen Softwareanwendungen.</li>
                  <li><span className="font-bold">Hinweis:</span> Zapier ist ein US-Anbieter. PLACED hat einen AVV mit Zapier abgeschlossen.</li>
                  <li><span className="font-bold">Datenschutzerklärung:</span> <a href="https://zapier.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">https://zapier.com/privacy</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="my-8 border-muted" />
        </div>
        <hr className="my-8 border-muted" />

        {/* Section 8 */}
        <div id="drittländer" className="scroll-mt-32">
          <h2>8. Datenübermittlung in Drittländer</h2>
          <p>Einige der oben genannten Dienstleister haben ihren Sitz in Ländern außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR), insbesondere in den USA. In diesen Drittländern kann das Datenschutzniveau von dem der EU abweichen.</p>
          <p><strong>Beim Nutzen der webbasierten Software von PLACED verbleiben alle von Ihnen hochgeladenen Lebensläufe und sonstigen Unterlagen und Daten ausschließlich auf Servern in Deutschland.</strong></p>
          <p>PLACED stellt sicher, dass bei der Übermittlung von Daten in andere Drittländer angemessene Garantien für den Schutz Ihrer Daten bestehen. Dies geschieht in der Regel durch:</p>
          <ul>
            <li><strong>Standardvertragsklauseln (SCCs) der EU-Kommission:</strong> PLACED schließt mit den Anbietern Standardvertragsklauseln ab, die von der EU-Kommission genehmigt wurden und einen angemessenen Schutzstandard gewährleisten sollen. Dies beinhaltet gegebenenfalls zusätzliche Schutzmaßnahmen wie Verschlüsselung oder Pseudonymisierung.</li>
            <li><strong>Angemessenheitsbeschlüsse:</strong> Falls die EU-Kommission für ein Drittland einen Angemessenheitsbeschluss erlassen hat (z.B. im Rahmen des EU-U.S. Data Privacy Frameworks), kann die Datenübermittlung auf dieser Grundlage erfolgen.</li>
            <li><strong>Ihre ausdrückliche Einwilligung:</strong> In Einzelfällen kann die Übermittlung auf Ihrer ausdrücklichen Einwilligung beruhen (Art. 49 Abs. 1 lit. a DSGVO), nachdem PLACED Sie über die Risiken einer solchen Übermittlung belehrt hat.</li>
          </ul>
          <p>PLACED überwacht die aktuelle Rechtslage bezüglich des Drittlandtransfers und passt die Verträge und Schutzmaßnahmen bei Bedarf an.</p>
        </div>
        <hr className="my-8 border-muted" />

        {/* Section 9 */}
        <div id="cookies" className="scroll-mt-32">
          <h2>9. Cookies und ähnliche Technologien</h2>
          <p>PLACED verwendet auf seiner Website Cookies und ähnliche Technologien (z.B. Pixel-Tags), um die Funktionalität der Website zu gewährleisten, Ihr Nutzererlebnis zu verbessern und das Online-Angebot zu analysieren und zu optimieren.</p>
          <ul>
            <li><strong>Was sind Cookies?</strong> Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Tablet, Smartphone) gespeichert werden, wenn Sie die Website von PLACED besuchen. Sie enthalten Informationen, die bei späteren Besuchen wieder ausgelesen werden können.</li>
            <li><strong>Arten von Cookies:</strong>
              <ul>
                <li><strong>Notwendige Cookies (essenziell):</strong> Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Ohne sie könnte die Website nicht korrekt funktionieren (z.B. Warenkorbfunktion, Login, grundlegende Sicherheit). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionierenden Website).</li>
                <li><strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung (z.B. Sprachauswahl, Merken von Einstellungen). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
                <li><strong>Analyse- und Statistik-Cookies:</strong> Diese Cookies helfen PLACED, das Nutzerverhalten auf der Website zu verstehen und die Angebote zu verbessern (z.B. welche Seiten am häufigsten besucht werden, Verweildauer). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
                <li><strong>Marketing-Cookies:</strong> Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und die Effektivität der Marketingkampagnen von PLACED zu messen. Sie können von PLACED oder Partnern gesetzt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
              </ul>
            </li>
          </ul>

          <h3>Ihre Cookie-Einstellungen:</h3>
          <p>Sie haben die Kontrolle über die Verwendung von Cookies. Sie können Ihre Einwilligung über das <strong>Consent Management Tool (Cookie-Banner)</strong> von PLACED, das beim ersten Besuch der Website erscheint, erteilen oder widerrufen. Sie können Ihre Einstellungen dort jederzeit ändern und auch eine detaillierte Übersicht über die verwendeten Cookies einsehen. Alternativ können Sie die Speicherung von Cookies über die Einstellungen Ihres Browsers steuern und bereits gesetzte Cookies löschen. Beachten Sie, dass das Blockieren bestimmter Cookies die Funktionalität der Website einschränken kann.</p>
        </div>
        <hr className="my-8 border-muted" />

        {/* Section 10 */}
        <div id="rechte" className="scroll-mt-32">
          <h2>10. Ihre Rechte als betroffene Person</h2>
          <p>Nach der DSGVO stehen Ihnen in Bezug auf die Verarbeitung Ihrer personenbezogenen Daten folgende Rechte zu:</p>
          <ul>
            <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob PLACED personenbezogene Daten verarbeitet, die Sie betreffen. Ist dies der Fall, haben Sie ein Recht auf Auskunft über diese Daten und auf weitere Informationen zur Verarbeitung.</li>
            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die unverzügliche Berichtigung unrichtiger personenbezogener Daten oder die Vervollständigung unvollständiger Daten zu verlangen.</li>
            <li><strong>Recht auf Löschung („Recht auf Vergessenwerden") (Art. 17 DSGVO):</strong> Sie haben das Recht, die unverzügliche Löschung Ihrer personenbezogenen Daten zu verlangen, wenn bestimmte Gründe vorliegen (z.B. die Daten sind für die Zwecke, für die sie erhoben wurden, nicht mehr notwendig oder Sie widerrufen Ihre Einwilligung).</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen, wenn bestimmte Voraussetzungen erfüllt sind (z.B. Sie bestreiten die Richtigkeit der Daten für einen Zeitraum, der es PLACED ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen).</li>
            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie PLACED bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen zu übermitteln.</li>
            <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong>
              <ul>
                <li>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO (öffentliches Interesse oder berechtigtes Interesse) erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. PLACED verarbeitet die personenbezogenen Daten dann nicht mehr, es sei denn, PLACED kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                <li>Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.</li>
              </ul>
            </li>
            <li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Wenn die Verarbeitung Ihrer Daten auf Ihrer Einwilligung beruht, haben Sie das Recht, Ihre Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.</li>
            <li><strong>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.</li>
          </ul>
          <p>Die für PLACED zuständige Aufsichtsbehörde ist:<br />Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />Friedrichstr. 219<br />10969 Berlin</p>
        </div>
        <hr className="my-8 border-muted" />

        {/* Section 11 */}
        <div id="speicherdauer" className="scroll-mt-32">
          <h2>11. Speicherdauer der personenbezogenen Daten</h2>
          <p>PLACED speichert personenbezogene Daten nur so lange, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, erforderlich ist oder wie es gesetzliche Vorschriften (z.B. handels- und steuerrechtliche Aufbewahrungsfristen von 6 oder 10 Jahren) vorsehen.</p>
          <p>Nach Ablauf der jeweiligen Fristen werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder seitens PLACED kein berechtigtes Interesse an der Weiterspeicherung fortbesteht (z.B. zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen).</p>

          <h2>12. Datensicherheit</h2>
          <p>PLACED setzt technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Die Sicherheitsmaßnahmen von PLACED werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Dazu gehören unter anderem die Verwendung von SSL/TLS-Verschlüsselung für die sichere Datenübertragung, Zugriffskontrollen, sichere Speicherung, interne Richtlinien und Verfahren, Sicherungsverfahren sowie die regelmäßige Überprüfung der Systeme.</p>

          <h2>13. Änderungen dieser Datenschutzerklärung</h2>
          <p>PLACED behält sich vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen, oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Sofern Einwilligungen der Nutzer erforderlich sind oder Bestandteile der Datenschutzerklärung Regelungen des Vertragsverhältnisses mit den Nutzern enthalten, erfolgen die Änderungen nur mit Zustimmung der Nutzer. Die Nutzer werden gebeten, sich regelmäßig über den Inhalt zu informieren.</p>

          <p><strong>Stand: 13. März 2025</strong></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz; 