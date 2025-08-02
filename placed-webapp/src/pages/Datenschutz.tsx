import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const sections = [
  { id: 'einleitung', label: '1. Einleitung' },
  { id: 'kontaktdaten', label: '1.1 Kontaktdaten' },
  { id: 'umfang-datenverarbeitung', label: '1.2 Umfang der Datenverarbeitung, Verarbeitungszwecke und Rechtsgrundlagen' },
  { id: 'datenverarbeitung-ausserhalb', label: '1.3 Datenverarbeitung außerhalb des EWR' },
  { id: 'speicherdauer', label: '1.4 Speicherdauer' },
  { id: 'rechte-betroffenen', label: '1.5 Rechte der Betroffenen' },
  { id: 'pflicht-bereitstellung', label: '1.6 Pflicht zur Bereitstellung von Daten' },
  { id: 'automatische-entscheidung', label: '1.7 Keine automatische Entscheidungsfindung im Einzelfall' },
  { id: 'kontaktaufnahme', label: '1.8 Kontaktaufnahme' },
  { id: 'newsletter', label: '2. Newsletter' },
  { id: 'datenverarbeitung-website', label: '3. Datenverarbeitung auf unserer Website' },
  { id: 'hinweis-deutschland', label: '3.1 Hinweis für Websitebesucher aus Deutschland' },
  { id: 'informatorische-nutzung', label: '3.2 Informatorische Nutzung der Website' },
  { id: 'webhosting', label: '3.3 Webhosting und Bereitstellung der Website' },
  { id: 'stellenanzeigen', label: '3.4 Stellenanzeigen' },
  { id: 'buchung-termine', label: '3.5 Buchung von Terminen' },
  { id: 'login-bereich', label: '3.6 Log-In-Bereich' },
  { id: 'angebot-dienstleistungen', label: '3.7 Angebot von Dienstleistungen' },
  { id: 'zahlungsdienstleister', label: '3.8 Zahlungsdienstleister' },
  { id: 'technisch-cookies', label: '3.9 Technisch notwendige Cookies' },
  { id: 'drittanbieter', label: '3.10 Drittanbieter' },
  { id: 'usercentrics', label: '3.10.1 Usercentrics' },
  { id: 'hubspot', label: '3.10.2 HubSpot' },
  { id: 'intercom', label: '3.10.3 Intercom' },
  { id: 'chargebee', label: '3.10.4 Chargebee' },
  { id: 'google-analytics', label: '3.10.5 Google Analytics' },
  { id: 'google-tag-manager', label: '3.10.6 Google Tag Manager' },
  { id: 'calendly', label: '3.10.7 Calendly' },
  { id: 'stripe', label: '3.10.8 Stripe' },
  { id: 'heydata', label: '3.10.9 heyData' },
  { id: 'social-media', label: '4. Datenverarbeitung auf Social Media-Plattformen' },
  { id: 'instagram', label: '4.1 Instagram' },
  { id: 'linkedin', label: '4.2 LinkedIn' },
  { id: 'aenderungen', label: '5. Änderungen dieser Datenschutzerklärung' },
  { id: 'fragen-kommentare', label: '6. Fragen und Kommentare' },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const DatenschutzNew = () => {
  useEffect(() => {
    // Optional: highlight anchor on scroll
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="w-full bg-background pt-40 sm:pt-32 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-work-blue text-center px-4">
          Datenschutzerklärung Website
        </h1>
        <p className="text-center text-base sm:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Im Folgenden informieren wir über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website und unserer Profile in Sozialen Medien.
        </p>
      </div>
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents */}
        <nav aria-label="Inhaltsverzeichnis" className="mb-10 bg-muted/40 rounded-lg p-4 border border-muted">
          <h2 className="text-lg font-semibold mb-2">Inhaltsverzeichnis</h2>
          <div>
          {sections.map((section, index) => {
            const currentDots = section.label.split('.').length - 1;
            const prevDots = index > 0 ? sections[index - 1].label.split('.').length - 1 : -1;

            // Indentation
            const padding =
              currentDots === 0 ? 'pl-0' :
              currentDots === 1 ? 'pl-4' :
              'pl-8';

            // Font + size
            const font =
              currentDots === 0 ? 'font-semibold text-base' :
              currentDots === 1 ? 'font-medium text-[15px]' :
              'font-normal text-sm text-muted-foreground';

            // Vertical spacing
            const spacing =
              currentDots === 0 ? 'mt-6 mb-2' :
              prevDots < currentDots ? 'mt-2 mb-1' :
              prevDots > currentDots ? 'mt-4 mb-1' :
              'mb-1';

            return (
              <div key={section.id} className={`${padding} ${spacing}`}>
                <a
                  href={`#${section.id}`}
                  className={`text-work-blue hover:underline focus:underline block ${font}`}
                >
                  {section.label}
                </a>
              </div>
            );
          })}
          </div>
        </nav>
        <div className="prose prose-lg max-w-none">
          {/* Section 1 - Einleitung */}
          <div id="einleitung" className="scroll-mt-32">
            <h2>1. Einleitung</h2>
            <div className="h-2"></div>
            <p>Im Folgenden informieren wir über die Verarbeitung personenbezogener Daten bei der<br />
            Nutzung<br />
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>unserer Website <a href="https://www.getplaced.de/" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.getplaced.de/</a></li>
              <li>unserer Profile in Sozialen Medien.</li>
            </ul>
            </p>
            <p>Personenbezogene Daten sind alle Daten, die auf eine konkrete natürliche Person beziehbar sind, z. B. ihr Name oder ihre IP-Adresse.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 1.1 - Kontaktdaten */}
          <div id="kontaktdaten" className="scroll-mt-32">
            <h2 className="mt-12">1.1 Kontaktdaten</h2>
            <div className="h-2"></div>
            <p>Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist Placed Technologies GmbH, Rosa-Luxemburg-Straße 14, Berlin, Deutschland, E-Mail: info@getplaced.de. Gesetzlich vertreten werden wir durch Kai Künne; Fatih Temel.</p>
            <div className="h-2"></div>
            <p>Unser Datenschutzbeauftragter ist über die heyData GmbH, Schützenstraße 5, 10117 Berlin, <a href="http://www.heydata.eu" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">www.heydata.eu</a>, E-Mail: <a href="mailto:datenschutz@heydata.eu" className="text-work-blue underline">datenschutz@heydata.eu</a> erreichbar.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 1.2 - Umfang der Datenverarbeitung */}
          <div id="umfang-datenverarbeitung" className="scroll-mt-32">
            <h2 className="mt-12">1.2 Umfang der Datenverarbeitung, Verarbeitungszwecke und Rechtsgrundlagen</h2>
            <div className="h-2"></div>
            <p>Den Umfang der Verarbeitung der Daten, Verarbeitungszwecke und Rechtsgrundlagen führen wir im Detail weiter unten aus. Als Rechtsgrundlage für eine Datenverarbeitung kommen grundsätzlich die folgenden in Betracht:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Art. 6 Abs. 1 S. 1 lit. a DSGVO</strong> dient uns als Rechtsgrundlage für Verarbeitungsvorgänge, für die wir eine Einwilligung einholen.</li>
              <li><strong>Art. 6 Abs. 1 S. 1 lit. b DSGVO</strong> ist Rechtsgrundlage, soweit die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrages erforderlich ist, z.B. wenn ein Seitenbesucher von uns ein Produkt erwirbt oder wir für ihn eine Leistung ausführen. Diese Rechtsgrundlage gilt auch für Verarbeitungen, die für vorvertragliche Maßnahmen erforderlich sind, etwa bei Anfragen zu unseren Produkten oder Leistungen.</li>
              <li><strong>Art. 6 Abs. 1 S. 1 lit. c DSGVO</strong> findet Anwendung, wenn wir mit der Verarbeitung personenbezogener Daten eine rechtliche Verpflichtung erfüllen, wie es z.B. im Steuerrecht der Fall sein kann.</li>
              <li><strong>Art. 6 Abs. 1 S. 1 lit. f DSGVO</strong> dient als Rechtsgrundlage, wenn wir uns zur Verarbeitung personenbezogener Daten auf berechtigte Interessen berufen können, z.B. für Cookies, die für den technischen Betrieb unserer Website erforderlich sind.</li>
            </ul>
          </div>
          <hr className="my-8 border-muted" /> 

          {/* Section 1.3 - Datenverarbeitung außerhalb des EWR */}
          <div id="datenverarbeitung-ausserhalb" className="scroll-mt-32">
            <h2 className="mt-12">1.3 Datenverarbeitung außerhalb des EWR</h2>
            <div className="h-2"></div>
            <p>Soweit wir Daten an Dienstleister oder sonstige Dritte außerhalb des EWR übermitteln, garantieren Angemessenheitsbeschlüsse der EU-Kommission nach Art. 45 Ab. 3 DSGVO die Sicherheit der Daten bei der Weitergabe, soweit diese vorhanden sind, wie dies z.B. für Großbritannien, Kanada und Israel der Fall ist.</p>
            <div className="h-2"></div>
            <p>Bei der Datenweitergabe an Dienstleister in den USA, ist Rechtsgrundlage für die Datenweitergabe ein Angemessenheitsbeschluss der EU-Kommission, wenn sich der Dienstleister zusätzlich unter dem EU US Data Privacy Framework zertifiziert hat.</p>
            <div className="h-2"></div>
            <p>In anderen Fällen (z.B. wenn kein Angemessenheitsbeschluss existiert), sind Rechtsgrundlage für die Datenweitergabe im Regelfall, also soweit wir keinen abweichenden Hinweis geben, Standardvertragsklauseln. Diese sind ein von der EU-Kommission verabschiedetes Regelwerk und Teil des Vertrags mit dem jeweiligen Dritten. Nach Art. 46 Abs. 2 lit. b DSGVO gewährleisten sie die Sicherheit der Datenweitergabe. Viele der Anbieter haben über die Standardvertragsklauseln hinausgehende vertragliche Garantien abgegeben, die die Daten über die Standardvertragsklauseln hinaus schützen. Das sind z.B. Garantien hinsichtlich der Verschlüsselung der Daten oder hinsichtlich einer Pflicht des Dritten zum Hinweis an Betroffene, wenn Strafverfolgungsorgane auf Daten zugreifen wollen.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 1.4 - Speicherdauer */}
          <div id="speicherdauer" className="scroll-mt-32">
            <h2 className="mt-12">1.4 Speicherdauer</h2>
            <div className="h-2"></div>
            <p>Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird ihre Verarbeitung eingeschränkt, d.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die wir aus handels- oder steuerrechtlichen Gründen aufbewahren müssen.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 1.5 - Rechte der Betroffenen */}
          <div id="rechte-betroffenen" className="scroll-mt-32">
            <h2 className="mt-12">1.5 Rechte der Betroffenen</h2>
            <div className="h-2"></div>
            <p>Betroffene haben gegenüber uns folgende Rechte hinsichtlich der sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Recht auf Auskunft,</li>
              <li>Recht auf Berichtigung oder Löschung,</li>
              <li>Recht auf Einschränkung der Verarbeitung,</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung,</li>
              <li>Recht auf Datenübertragbarkeit,</li>
              <li>Recht, eine erteilte Einwilligung jederzeit zu widerrufen.</li>
            </ul>
            <p>Betroffene haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung ihrer personenbezogenen Daten zu beschweren. Kontaktdaten der Datenschutz-Aufsichtsbehörden sind unter <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a> abrufbar.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 1.6 - Pflicht zur Bereitstellung von Daten */}
          <div id="pflicht-bereitstellung" className="scroll-mt-32">
            <h2 className="mt-12">1.6 Pflicht zur Bereitstellung von Daten</h2>
            <div className="h-2"></div>
            <p>Kunden, Interessenten oder Dritte müssen uns im Rahmen einer Geschäftsbeziehung oder sonstigen Beziehung nur diejenigen personenbezogenen Daten bereitstellen, die für die Begründung, Durchführung und Beendigung der Geschäftsbeziehung oder für die sonstige Beziehung erforderlich sind oder zu deren Erhebung wir gesetzlich verpflichtet sind. Ohne diese Daten werden wir in der Regel den Abschluss eines Vertrages oder die Bereitstellung einer Leistung ablehnen müssen oder einen bestehenden Vertrag oder sonstige Beziehung nicht mehr durchführen können.</p>
            <p>Pflichtangaben sind als solche gekennzeichnet.</p>
          </div>
          <hr className="my-8 border-muted" /> 

          {/* Section 1.7 - Keine automatische Entscheidungsfindung */}
          <div id="automatische-entscheidung" className="scroll-mt-32">
            <h2 className="mt-12">1.7 Keine automatische Entscheidungsfindung im Einzelfall</h2>
            <div className="h-2"></div>
            <p>Zur Begründung und Durchführung einer Geschäftsbeziehung oder sonstigen Beziehung nutzen wir grundsätzlich keine vollautomatisierte Entscheidungsfindung gemäß Artikel 22 DSGVO. Sollten wir diese Verfahren in Einzelfällen einsetzen, werden wir hierüber gesondert informieren, sofern dies gesetzlich geboten ist.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 1.8 - Kontaktaufnahme */}
          <div id="kontaktaufnahme" className="scroll-mt-32">
            <h2 className="mt-12">1.8 Kontaktaufnahme</h2>
            <div className="h-2"></div>
            <p>Bei der Kontaktaufnahme mit uns, z.B. per E-Mail oder Telefon, werden die uns mitgeteilten Daten (z.B. Namen und E-Mail-Adressen) von uns gespeichert, um Fragen zu beantworten. Rechtsgrundlage für die Verarbeitung ist unser berechtigtes Interesse (Art. 6 Abs. 1 S. 1 lit. f DSGVO), an uns gerichtete Anfragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 2 - Newsletter */}
          <div id="newsletter" className="scroll-mt-32">
            <h2 className="mt-12">2. Newsletter</h2>
            <div className="h-2"></div>
            <p>Wir behalten uns vor, Kunden, die bereits Dienstleistungen von uns in Anspruch genommen haben oder Waren gekauft haben, von Zeit zu Zeit per E-Mail oder auf anderem Weg über unsere Angebote zu informieren, falls sie dem nicht widersprochen haben. Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Direktwerbung (Erwägungsgrund 47 DSGVO). Kunden können der Verwendung ihrer E-Mail-Adresse zu Werbezwecken jederzeit ohne zusätzliche Kosten widersprechen, zum Beispiel über den Link am Ende einer jeden E-Mail oder per E-Mail an unsere oben genannte E-Mail-Adresse.</p>
            <div className="h-2"></div>
            <p>Interessenten haben die Möglichkeit, einen kostenlosen Newsletter zu abonnieren. Wir verarbeiten die bei der Anmeldung angegebenen Daten ausschließlich für den Versand des Newsletters. Die Anmeldung erfolgt über die Auswahl des entsprechenden Feldes auf unserer Website, durch Ankreuzen des entsprechenden Feldes in einem Papierdokument oder durch eine andere eindeutige Handlung, wodurch Interessenten ihr Einverständnis in die Verarbeitung ihrer Daten erklären, so dass Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. a DSGVO ist. Die Einwilligung kann jederzeit widerrufen werden, z.B. durch Klicken des entsprechenden Links im Newsletter oder Hinweis an unsere oben angegebene E-Mail-Adresse. Die Verarbeitung der Daten bis zum Widerruf bleibt auch im Falle eines Widerrufs rechtmäßig.</p>
            <div className="h-2"></div>
            <p>Auf Grundlage der Einwilligung der Empfänger (Art. 6 Abs. 1 S. 1 lit. a DSGVO) messen wir auch die Öffnungs- und Klickrate unserer Newsletter, um zu verstehen, welche Inhalte relevant für unsere Empfänger sind.</p>
            <ul className="list-disc pl-6">
              <li className="mt-2 leading-relaxed">Wir versenden Newsletter mit dem Tool HubSpot des Anbieters HubSpot, Inc., 25 1st Street Cambridge, MA 0214, USA. Der Anbieter verarbeitet dabei Inhalts-, Nutzungs-, Meta-/Kommunikationsdaten und Kontaktdaten in der EU. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a
                  href="https://legal.hubspot.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-work-blue underline"
                >
                  https://legal.hubspot.com/privacy-policy
                </a> abrufbar. 
              </li>
            </ul>
          </div>
          <hr className="my-8 border-muted" /> 

          {/* Section 3 - Datenverarbeitung auf unserer Website */}
          <div id="datenverarbeitung-website" className="scroll-mt-32">
            <h2 className="mt-12">3. Datenverarbeitung auf unserer Website</h2>
            
            {/* Section 3.1 - Hinweis für Websitebesucher aus Deutschland */}
            <div id="hinweis-deutschland" className="scroll-mt-32">
              <h3 className="mt-8">3.1 Hinweis für Websitebesucher aus Deutschland</h3>
              <div className="h-2"></div>
              <p>Unsere Website speichert Informationen in der Endeinrichtung von Websitebesuchern (z.B. Cookies) oder greift auf Informationen zu, die bereits in der Endeinrichtung gespeichert sind (z.B. IP-Adressen). Welche Informationen dies im Einzelnen sind, ist den folgenden Abschnitten zu entnehmen.</p>
              <div className="h-2"></div>
              <p>Diese Speicherung und dieser Zugriff erfolgt auf Grundlage der folgenden Bestimmungen:</p>
              <ul className="list-disc pl-6">
                <li>Soweit diese Speicherung oder dieser Zugriff unbedingt erforderlich ist, damit wir dem von Websitebesuchern ausdrücklich gewünschten Dienst unserer Website zur Verfügung stellen (z.B. zur Durchführung eines vom Websitebesucher genutzten Chatbot oder zur Sicherstellung der IT-Sicherheit unserer Website), erfolgt sie auf Grundlage von § 25 Abs. 2 Nr. 2 des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG).</li>
                <div className="h-2"></div>
                <li>Im Übrigen erfolgt diese Speicherung oder dieser Zugriff auf Grundlage der Einwilligung der Websitebesucher (§ 25 Abs. 1 TDDDG).</li>
              </ul>
              <p>Die nachgelagerte Datenverarbeitung erfolgt nach Maßgabe der folgenden Abschnitte und auf Grundlage der Vorschriften der DSGVO.</p>
            </div>

            {/* Section 3.2 - Informatorische Nutzung der Website */}
            <div id="informatorische-nutzung" className="scroll-mt-32">
              <h3 className="mt-8">3.2 Informatorische Nutzung der Website</h3>
              <div className="h-2"></div>
              <p>Bei der informatorischen Nutzung der Website, also wenn Seitenbesucher uns nicht gesondert Informationen übermitteln, erheben wir die personenbezogenen Daten, die der Browser an unseren Server übermittelt, um die Stabilität und Sicherheit unserer Website zu gewährleisten. Darin liegt unser berechtigtes Interesse, so dass Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO ist.</p>
              <div className="h-2"></div>
              <p>Diese Daten sind:</p>
              <ul className="list-disc pl-6">
                <li>IP-Adresse</li> <div className="h-2"></div>
                <li>Datum und Uhrzeit der Anfrage</li> <div className="h-2"></div>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li> <div className="h-2"></div>
                <li>Inhalt der Anfrage (konkrete Seite)</li> <div className="h-2"></div>
                <li>Zugriffsstatus/HTTP-Statuscode</li> <div className="h-2"></div>
                <li>jeweils übertragene Datenmenge</li> <div className="h-2"></div>
                <li>Website, von der die Anfrage kommt</li> <div className="h-2"></div>
                <li>Browser</li> <div className="h-2"></div>
                <li>Betriebssystem und dessen Oberfläche</li> <div className="h-2"></div>
                <li>Sprache und Version der Browsersoftware</li> <div className="h-2"></div>
              </ul>
              <p>Diese Daten werden außerdem in Logfiles gespeichert. Sie werden gelöscht, wenn ihre Speicherung nicht mehr erforderlich ist, spätestens nach 14 Tagen.</p>
            </div>

            {/* Section 3.3 - Webhosting */}
            <div id="webhosting" className="scroll-mt-32">
              <h3 className="mt-8">3.3 Webhosting und Bereitstellung der Website</h3>
              <div className="h-2"></div>
              <p>Unsere Website hostet IONOS. Anbieter ist IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland. Der Anbieter verarbeitet dabei die über die Website übermittelten personenbezogenen Daten, z.B. Inhalts-, Nutzungs-, Meta-/Kommunikationsdaten oder Kontaktdaten, in der EU. Weitere Informationen finden sich in der Datenschutzerklärung des Anbieters unter <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>.</p>
              <div className="h-2"></div>
              <p>Es ist unser berechtigtes Interesse, eine Website zur Verfügung zu stellen, so dass die Rechtsgrundlage der beschriebenen Datenverarbeitung Art. 6 Abs. 1 S. 1 lit. f DSGVO ist.</p>
            </div>

            {/* Section 3.4 - Stellenanzeigen */}
            <div id="stellenanzeigen" className="scroll-mt-32">
              <h3 className="mt-8">3.4 Stellenanzeigen</h3>
              <div className="h-2"></div>
              <p>Wir veröffentlichen Stellenanzeigen auf unserer Website, auf mit der Website verbundenen Seiten oder auf Websites von Dritten. Die Verarbeitung der im Rahmen der Bewerbung angegebenen Daten erfolgt zur Durchführung des Bewerbungsverfahrens. Soweit diese für unsere Entscheidung, ein Beschäftigungsverhältnis zu begründen, erforderlich sind, ist Rechtsgrundlage Art. 88 Abs. 1 DSGVO i. V. m. § 26 Abs. 1 BDSG. Die zur Durchführung des Bewerbungsverfahrens erforderlichen Daten haben wir entsprechend gekennzeichnet oder weisen auf sie hin. Wenn Bewerber diese Daten nicht angeben, können wir die Bewerbung nicht bearbeiten. Weitere Daten sind freiwillig und nicht für eine Bewerbung erforderlich. Falls Bewerber weitere Angaben machen, ist Grundlage ihre Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO).</p>
              <div className="h-2"></div>
              <p>Wir bitten Bewerber, in Lebenslauf und Anschreiben auf Angaben zu politischen Meinungen, religiösen Anschauungen und ähnlich sensiblen Daten zu verzichten. Sie sind nicht für eine Bewerbung erforderlich. Wenn Bewerber dennoch entsprechende Angaben machen, können wir ihre Verarbeitung im Rahmen der Verarbeitung des Lebenslaufes oder Anschreibens nicht verhindern. Ihre Verarbeitung beruht dann auch auf der Einwilligung der Bewerber (Art. 9 Abs. 2 lit. a DSGVO).</p>
              <div className="h-2"></div>
              <p>Schließlich verarbeiten wir die Daten der Bewerber für weitere Bewerbungsverfahren, wenn sie uns dazu ihre Einwilligung erteilt haben. In diesem Fall ist Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. a DSGVO.</p>
              <div className="h-2"></div>
              <p>Die Daten der Bewerber geben wir an die zuständigen Mitarbeiter der Personalabteilung, an unsere Auftragsverarbeiter im Bereich Recruiting und an die im Übrigen im Bewerbungsverfahren beteiligten Mitarbeiter weiter.</p>
              <div className="h-2"></div>
              <p>Wenn wir im Anschluss an das Bewerbungsverfahren ein Beschäftigungsverhältnis mit dem Bewerber eingehen, löschen wir die Daten erst nach Beendigung des Beschäftigungsverhältnisses. Andernfalls löschen wir die Daten spätestens sechs Monate nach Ablehnung eines Bewerbers.</p>
              <div className="h-2"></div>
              <p>Wenn Bewerber uns ihre Einwilligung erteilt haben, ihre Daten auch für weitere Bewerbungsverfahren zu verwenden, löschen wir ihre Daten erst ein Jahr nach Erhalt der Bewerbung.</p>
            </div>

            {/* Section 3.5 - Buchung von Terminen */}
            <div id="buchung-termine" className="scroll-mt-32">
              <h3 className="mt-8">3.5 Buchung von Terminen</h3>
              <div className="h-2"></div>
              <p>Seitenbesucher können auf unserer Website Termine mit uns buchen. Dafür verarbeiten wir neben den eingegebenen Daten Meta- oder Kommunikationsdaten. Wir haben ein berechtigtes Interesse daran, Interessenten eine nutzerfreundliche Möglichkeit zur Vereinbarung von Terminen anzubieten. Deshalb ist Rechtsgrundlage der Datenverarbeitung Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
              <p>Soweit wir für die Vereinbarung ein Tool eines Drittanbieters verwenden, sind die Informationen dazu unter "Drittanbieter" zu finden.</p>
            </div>

            {/* Section 3.6 - Log-In-Bereich */}
            <div id="login-bereich" className="scroll-mt-32">
              <h3 className="mt-8">3.6 Log-In-Bereich</h3>
              <div className="h-2"></div>
              <p>Wir unterhalten für Kunden einen Log-In-Bereich. In diesem Rahmen verarbeiten wir Daten auf Grundlage des mit Kunden geschlossenen Auftragsverarbeitungsvertrags.</p>
            </div>

            {/* Section 3.7 - Angebot von Dienstleistungen */}
            <div id="angebot-dienstleistungen" className="scroll-mt-32">
              <h3 className="mt-8">3.7 Angebot von Dienstleistungen</h3>
              <div className="h-2"></div>
              <p>Wir bieten über unsere Website Dienstleistungen an. Dabei verarbeiten wir im Rahmen der Bestellung die folgenden Daten:</p>
              <ul className="list-disc pl-6">
                <li>Name</li>
                <li>Unternehmen</li>
                <li>Zahlungsinformationen</li>
              </ul>
              <p>Die Verarbeitung der Daten erfolgt zur Erbringung des mit dem jeweiligen Seitenbesucher geschlossenen Vertrags (Art. 6 Abs. 1 S. 1 lit. b DSGVO).</p>
            </div>

            {/* Section 3.8 - Zahlungsdienstleister */}
            <div id="zahlungsdienstleister" className="scroll-mt-32">
              <h3 className="mt-8">3.8 Zahlungsdienstleister</h3>
              <div className="h-2"></div>
              <p>Zur Abwicklung von Zahlungen nutzen wir Zahlungsabwickler, die selbst datenschutzrechtlich Verantwortliche im Sinne von Art. 4 Nr. 7 DSGVO sind. Soweit diese von uns im Bestellprozess eingegebene Daten und Zahlungsdaten erhalten, erfüllen wir damit den mit unseren Kunden geschlossenen Vertrag (Art. 6 Abs. 1 S. 1 lit. b DSGVO).</p>
              <p>Diese Zahlungsdienstleister sind:</p>
              <ul className="list-disc pl-6">
                <li>Stripe Payments Europe, Ltd., Ireland</li>
              </ul>
            </div>

            {/* Section 3.9 - Technisch notwendige Cookies */}
            <div id="technisch-cookies" className="scroll-mt-32">
              <h3 className="mt-8">3.9 Technisch notwendige Cookies</h3>
              <div className="h-2"></div>
              <p>Unsere Website setzt Cookies. Cookies sind kleine Textdateien, die im Webbrowser auf dem Endgerät eines Seitenbesuchers gespeichert werden. Cookies helfen dabei, das Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Soweit diese Cookies für den Betrieb unserer Website oder ihre Funktionen erforderlich sind (nachfolgend "Technisch notwendige Cookies"), ist Rechtsgrundlage der damit verbundenen Datenverarbeitung Art. 6 Abs. 1 S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse, Kunden und anderen Seitenbesuchern eine funktionsfähige Website zur Verfügung zu stellen.</p>
              <p>Zu den folgenden Zwecken setzten wir konkret technisch notwendige Cookies,</p>
              <ul className="list-disc pl-6">
                <li>die Log-In-Daten speichern</li>
                <li>die sich Suchbegriffe merken</li>
                <li>die Zahlungsanbieter zur Zahlungsabwicklung setzen und nicht das Nutzerverhalten analysieren</li>
              </ul>
            </div>

            {/* Section 3.10 - Drittanbieter */}
            <div id="drittanbieter" className="scroll-mt-32">
              <h3 className="mt-8">3.10 Drittanbieter</h3>
              <h4 id="usercentrics" className="mt-6 font-semibold">3.10.1 Usercentrics</h4>
              <div className="h-2"></div>
              <p>Wir setzen Usercentrics zum Management von Einwilligungen ein. Der Anbieter ist Usercentrics GmbH, Sendlinger Straße 7, 80331 München. Der Anbieter verarbeitet Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen) in der EU.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran, die Einwilligungen der Websitebesucher zu Cookies auf einfache Weise zu verwalten.</p>
              <div className="h-2"></div>
              <p>Die Daten werden gelöscht, wenn der Zweck ihrer Erhebung entfallen ist und keine Aufbewahrungspflicht entgegensteht. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://usercentrics.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://usercentrics.com/privacy-policy/</a> abrufbar.</p>

              <h4 id="hubspot" className="mt-6 font-semibold">3.10.2 HubSpot</h4>
              <div className="h-2"></div>
              <p>Wir setzen HubSpot zur Analyse, zur Automatisierung des Marketings, zur Generierung von Leads ein. Der Anbieter ist HubSpot, Inc., 25 1st Street Cambridge, MA 0214, USA. Der Anbieter verarbeitet Inhaltsdaten (z.B. Eingaben in Onlineformularen), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten) in der EU.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse, Daten auf einfachem und günstigen Weg zu verwalten.</p>
              <div className="h-2"></div>
              <p>Die Daten werden gelöscht, wenn der Zweck ihrer Erhebung entfallen ist und keine Aufbewahrungspflichten entgegenstehen. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://legal.hubspot.com/privacy-policy</a> abrufbar.</p>

              <h4 id="intercom" className="mt-6 font-semibold">3.10.3 Intercom</h4>
              <div className="h-2"></div>
              <p>Wir setzen Intercom zur Kommunikation mit Nutzern ein. Der Anbieter ist Intercom R&D Unlimited Company 2nd Floor, Stephen Court, 18-21 St. Stephen's Green, Dublin 2, Irland. Der Anbieter verarbeitet Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), Kontaktdaten (z.B. E-Mail-Adressen, Telefonnummern), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten) in der EU.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse, die Interaktion mit unseren Websitebesuchern zu optimieren.</p>
              <div className="h-2"></div>
              <p>Wir löschen die Daten, wenn der Zweck ihrer Erhebung entfallen ist. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.intercom.com/legal/privacy</a> abrufbar.</p>

              <h4 id="chargebee" className="mt-6 font-semibold">3.10.4 Chargebee</h4>
              <div className="h-2"></div>
              <p>Wir setzen Chargebee zur Verwaltung von Abonnements, für das Management von Rechnungen ein. Der Anbieter ist Chargebee, Inc., 340 S. Lemon Avenue, Suite #1537, Walnut, Kalifornien 91789, USA. Der Anbieter verarbeitet Stammdaten (z.B. Namen, Adressen), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie) in der EU.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO. Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich, dessen Vertragspartei die betroffene Person ist, oder da sie zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, die auf Anfrage der betroffenen Person erfolgen.</p>
              <div className="h-2"></div>
              <p>Die Daten werden innerhalb von 120 Tagen gelöscht, wenn der Zweck ihrer Erhebung entfallen ist und keine Aufbewahrungspflicht entgegensteht. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://www.chargebee.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.chargebee.com/privacy/</a> abrufbar.</p>

              <h4 id="google-analytics" className="mt-6 font-semibold">3.10.5 Google Analytics</h4>
              <div className="h-2"></div>
              <p>Wir setzen Google Analytics zur Analyse ein. Der Anbieter ist Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Der Anbieter verarbeitet Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten) in den USA.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. a DSGVO. Die Verarbeitung erfolgt auf der Basis von Einwilligungen. Betroffene können ihre Einwilligung jederzeit widerrufen, indem sie uns z.B. unter den in unserer Datenschutzerklärung angegebenen Kontaktdaten kontaktieren. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung bis zum Widerruf.</p>
              <div className="h-2"></div>
              <p>Die Übermittlung personenbezogener Daten in ein Land außerhalb des EWR erfolgt auf der Rechtsgrundlage Angemessenheitsbeschluss. Die Sicherheit der in das Drittland (also einem Land außerhalb des EWR) übermittelten Daten ist gewährleistet, weil die EU-Kommission im Rahmen eines Angemessenheitsbeschlusses nach Art. 45 Abs. 3 DSGVO beschlossen hat, dass das Drittland ein angemessenes Schutzniveau bietet.</p>
              <div className="h-2"></div>
              <p>Die Daten werden gelöscht, wenn der Zweck ihrer Erhebung entfallen ist und keine Aufbewahrungspflicht entgegensteht. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://business.safety.google/privacy/</a> abrufbar.</p>

              <h4 id="google-tag-manager" className="mt-6 font-semibold">3.10.6 Google Tag Manager</h4>
              <div className="h-2"></div>
              <p>Wir setzen Google Tag Manager für Werbung, zur Analyse ein. Der Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Anbieter verarbeitet Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten) in den USA.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. a DSGVO. Die Verarbeitung erfolgt auf der Basis von Einwilligungen. Betroffene können ihre Einwilligung jederzeit widerrufen, indem sie uns z.B. unter den in unserer Datenschutzerklärung angegebenen Kontaktdaten kontaktieren. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung bis zum Widerruf.</p>
              <div className="h-2"></div>
              <p>Die Übermittlung personenbezogener Daten in ein Land außerhalb des EWR erfolgt auf der Rechtsgrundlage Angemessenheitsbeschluss. Die Sicherheit der in das Drittland (also einem Land außerhalb des EWR) übermittelten Daten ist gewährleistet, weil die EU-Kommission im Rahmen eines Angemessenheitsbeschlusses nach Art. 45 Abs. 3 DSGVO beschlossen hat, dass das Drittland ein angemessenes Schutzniveau bietet.</p>
              <div className="h-2"></div>
              <p>Wir löschen die Daten, wenn der Zweck ihrer Erhebung entfallen ist. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://business.safety.google/privacy/</a> abrufbar.</p>

              <h4 id="calendly" className="mt-6 font-semibold">3.10.7 Calendly</h4>
              <div className="h-2"></div>
              <p>Wir setzen Calendly zur Planung von Terminen ein. Der Anbieter ist Calendly LLC, BB&T Tower, 271 17th St NW, Atlanta, GA 30363, USA. Der Anbieter verarbeitet Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Kontaktdaten (z.B. E-Mail-Adressen, Telefonnummern), Stammdaten (z.B. Namen, Adressen) in den USA.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. a DSGVO. Die Verarbeitung erfolgt auf der Basis von Einwilligungen. Betroffene können ihre Einwilligung jederzeit widerrufen, indem sie uns z.B. unter den in unserer Datenschutzerklärung angegebenen Kontaktdaten kontaktieren. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung bis zum Widerruf.</p>
              <div className="h-2"></div>
              <p>Die Übermittlung personenbezogener Daten in ein Land außerhalb des EWR erfolgt auf der Rechtsgrundlage Angemessenheitsbeschluss. Die Sicherheit der in das Drittland (also einem Land außerhalb des EWR) übermittelten Daten ist gewährleistet, weil die EU-Kommission im Rahmen eines Angemessenheitsbeschlusses nach Art. 45 Abs. 3 DSGVO beschlossen hat, dass das Drittland ein angemessenes Schutzniveau bietet.</p>
              <div className="h-2"></div>
              <p>Wir löschen die Daten, wenn der Zweck ihrer Erhebung entfallen ist. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://calendly.com/pages/privacy" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://calendly.com/pages/privacy</a> abrufbar.</p>

              <h4 id="stripe" className="mt-6 font-semibold">3.10.8 Stripe</h4>
              <div className="h-2"></div>
              <p>Wir setzen Stripe für Zahlungen ein. Der Anbieter ist Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland. Der Anbieter verarbeitet Stammdaten (z.B. Namen, Adressen), Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie) in den USA.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO. Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich, dessen Vertragspartei die betroffene Person ist, oder da sie zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, die auf Anfrage der betroffenen Person erfolgen.</p>
              <div className="h-2"></div>
              <p>Die Übermittlung personenbezogener Daten in ein Land außerhalb des EWR erfolgt auf der Rechtsgrundlage Angemessenheitsbeschluss. Die Sicherheit der in das Drittland (also einem Land außerhalb des EWR) übermittelten Daten ist gewährleistet, weil die EU-Kommission im Rahmen eines Angemessenheitsbeschlusses nach Art. 45 Abs. 3 DSGVO beschlossen hat, dass das Drittland ein angemessenes Schutzniveau bietet.</p>
              <div className="h-2"></div>
              <p>Wir löschen die Daten, wenn der Zweck ihrer Erhebung entfallen ist. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://stripe.com/de/privacy#translation" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://stripe.com/de/privacy#translation</a> abrufbar.</p>

              <h4 id="heydata" className="mt-6 font-semibold">3.10.9 heyData</h4>
              <div className="h-2"></div>
              <p>Wir haben ein Datenschutz-Siegel auf unserer Website eingebunden. Der Anbieter ist heyData GmbH, Schützenstraße 5, 10117 Berlin, Deutschland. Der Anbieter verarbeitet Meta-/Kommunikationsdaten (z.B. IP-Adressen) in der EU.</p>
              <div className="h-2"></div>
              <p>Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse, Website-Besuchern eine Bestätigung über unsere Datenschutz-Compliance zur Verfügung zu stellen. Gleichzeitig hat der Anbieter ein berechtigtes Interesse daran, sicherzustellen, dass nur Kunden mit bestehenden Verträgen seine Siegel nutzen, weshalb eine bloße Bildkopie des Zertifikats keine gangbare Alternative zur Bestätigung darstellt.</p>
              <div className="h-2"></div>
              <p>Die Daten werden nach der Erhebung maskiert, damit kein Personenbezug mehr besteht. Weitere Informationen sind in der Datenschutzerklärung des Anbieters unter <a href="https://heydata.eu/datenschutzerklaerung" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://heydata.eu/datenschutzerklaerung</a> abrufbar.</p>
            </div>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 4 - Social Media */}
          <div id="social-media" className="scroll-mt-32">
            <h2 className="mt-12">4. Datenverarbeitung auf Social Media-Plattformen</h2>
            <div className="h-2"></div>
            <p>Wir sind in Social Media-Netzwerken vertreten, um dort unsere Organisation und unsere Leistungen vorzustellen. Die Betreiber dieser Netzwerke verarbeiten Daten ihrer Nutzer regelmäßig zu Werbezwecken. Unter anderem erstellen sie aus ihrem Onlineverhalten Nutzerprofile, die beispielsweise dazu verwendet werden, um auf den Seiten der Netzwerke und auch sonst im Internet Werbung zu zeigen, die den Interessen der Nutzer entspricht. Dazu speichern die Betreiber der Netzwerke Informationen zu dem Nutzungsverhalten in Cookies auf dem Rechner der Nutzer.</p>
            <div className="h-2"></div>
            <p>Es ist außerdem nicht auszuschließen, dass die Betreiber diese Informationen mit weiteren Daten zusammenführen. Weitere Informationen sowie Hinweise, wie Nutzer der Verarbeitung durch die Seitenbetreiber widersprechen können, erhalten Nutzer in den unten aufgeführten Datenschutzerklärungen der jeweiligen Betreiber. Es kann auch sein, dass die Betreiber oder ihre Server in Nicht-EU-Staaten sitzen, so dass sie Daten dort verarbeiten. Hierdurch können sich für die Nutzer Risiken ergeben, z.B. weil die Durchsetzung ihrer Rechte erschwert wird oder staatliche Stellen Zugriff auf die Daten nehmen.</p>
            <div className="h-2"></div>
            <p>Wenn Nutzer der Netzwerke mit uns über unsere Profile in Kontakt treten, verarbeiten wir die uns mitgeteilten Daten, um die Anfragen zu beantworten. Darin liegt unser berechtigtes Interesse, so dass Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. f DSGVO ist.</p>

            <h3 className="mt-8 font-semibold">4.1 Instagram</h3>
            <div id="instagram" className="scroll-mt-32">
              <p>Wir unterhalten ein Profil auf Instagram. Betreiber ist Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Die Datenschutzerklärung ist hier abrufbar: <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://help.instagram.com/519522125107875</a>.</p>
            </div>

            <h3 className="mt-8 font-semibold">4.2 LinkedIn</h3>
            <div id="linkedin" className="scroll-mt-32">
              <p>Wir unterhalten ein Profil auf LinkedIn. Betreiber ist LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland. Die Datenschutzerklärung ist hier abrufbar: <a href="https://www.linkedin.com/legal/privacy-policy?_l=de_DE" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.linkedin.com/legal/privacy-policy?_l=de_DE</a>. Eine Möglichkeit, der Datenverarbeitung zu widersprechen, ergibt sich über die Einstellungen für Werbeanzeigen: <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer" className="text-work-blue underline">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</p>
            </div>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 5 - Änderungen */}
          <div id="aenderungen" className="scroll-mt-32">
            <h2 className="mt-12">5. Änderungen dieser Datenschutzerklärung</h2>
            <div className="h-2"></div>
            <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung mit Wirkung für die Zukunft zu ändern. Eine aktuelle Version ist jeweils hier verfügbar.</p>
          </div>
          <hr className="my-8 border-muted" />

          {/* Section 6 - Fragen und Kommentare */}
          <div id="fragen-kommentare" className="scroll-mt-32">
            <h2 className="mt-12">6. Fragen und Kommentare</h2>
            <div className="h-2"></div>
            <p>Für Fragen oder Kommentare bezüglich dieser Datenschutzerklärung stehen wir gern unter den oben angegebenen Kontaktdaten zur Verfügung.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatenschutzNew; 