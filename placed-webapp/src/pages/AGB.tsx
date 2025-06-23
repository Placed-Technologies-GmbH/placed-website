import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="w-full bg-background pt-40 sm:pt-32 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-work-blue text-center px-4">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
      </div>
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg max-w-none">
          <h2>1. Vertragsgegenstand</h2>
          <p>PLACED stellt dem Kunden eine webbasierte SaaS-Plattform zur Verfügung, die es ermöglicht, Stellenanzeigen, Unternehmensdaten, Ansprechpartner sowie KI-gestützte Matching-Intelligenz für den Einsatz im Recruiting und Vertrieb zu analysieren und operativ zu nutzen. Die Plattform wird ausschließlich als Software-as-a-Service (SaaS) bereitgestellt. Der Kunde erhält Zugriff über das Internet und benötigt hierfür keine lokale Installation.</p>
          <p>Die Plattform ist konform nach DSGVO sowie EU AI Act und wird ausschließlich in zertifizierten Rechenzentren in Deutschland (AWS, Frankfurt) betrieben. Auf Wunsch können Enterprise-Funktionen, individuelle Systemanpassungen oder Whitelabel-Lösungen beauftragt werden.</p>

          <h2 className="mt-12">2. Registrierung und Zugang</h2>
          <p>Der Zugang zur Plattform erfolgt über personalisierte, benannte Benutzerkonten. Die Anzahl der Benutzer richtet sich nach dem im Angebot vereinbarten Nutzungsumfang. Die Nutzung eines Accounts durch mehrere natürliche Personen ist nicht zulässig. Die Weitergabe von Zugangsdaten, auch innerhalb des Unternehmens, ist untersagt.</p>
          <p>Der Kunde verpflichtet sich, alle Zugangsdaten vertraulich zu behandeln und vor unbefugtem Zugriff zu schützen. Eine Mehrfachnutzung von Accounts kann zu datenschutzrechtlichen Verstößen und zur Verletzung interner Compliance-Richtlinien führen. PLACED übernimmt keine Haftung für daraus entstehende Schäden.</p>

          <h2 className="mt-12">3. Nutzungsrechte</h2>
          <p>Der Kunde erhält für die Dauer des Vertrages ein einfaches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an der Plattform. Die Nutzung ist ausschließlich im Rahmen des vertraglich vereinbarten Zwecks und innerhalb der im Angebot definierten Nutzungseinheiten (z. B. Module, Benutzer, Datenvolumen) gestattet.</p>
          <p>Die Inhalte der Plattform dürfen ausschließlich zur internen Geschäftszwecken verwendet und nicht an Dritte weitergegeben, vervielfältigt oder veröffentlicht werden. Eine gewerbliche Verwertung der Plattforminhalte außerhalb des vereinbarten Zwecks ist nicht zulässig.</p>

          <h2 className="mt-12">4. Technische Schutzmaßnahmen & verbotene Nutzung</h2>
          <p>Jeglicher automatisierter Zugriff auf die Plattform, insbesondere durch Scraping, Bots, automatisierte API-Zugriffe ohne Freigabe oder ähnliche Technologien, ist strikt untersagt. Ebenso verboten ist die Umgehung technischer Schutzmaßnahmen oder der Versuch, Inhalte systematisch zu exportieren oder zu vervielfältigen.</p>
          <p>PLACED behält sich vor, Verstöße automatisiert zu erkennen und entsprechende technische sowie rechtliche Maßnahmen einzuleiten. Dazu gehört insbesondere die temporäre oder dauerhafte Sperrung des Zugangs sowie die Geltendmachung von Schadensersatz. Wiederholte oder vorsätzliche Verstöße führen zum sofortigen Ausschluss von der Nutzung.</p>

          <h2 className="mt-12">5. Verfügbarkeit und Wartung</h2>
          <p>PLACED gewährleistet eine durchschnittliche Plattformverfügbarkeit von 98 % im Monatsmittel (ausgenommen Wartungszeiten und Ereignisse höherer Gewalt). Geplante Wartungsarbeiten werden dem Kunden mit angemessener Vorlaufzeit angekündigt und möglichst außerhalb üblicher Geschäftszeiten durchgeführt.</p>

          <h2 className="mt-12">6. Preise und Zahlungsbedingungen</h2>
          <p>Vor Beauftragung hat jeder Kunde Anspruch PLACED 14 Tage kostenlos zu testen.</p>
          <p>Die Preise richten sich nach dem Angebot und den gebuchten Paketbestandteilen (z. B. Nutzerzahl, Module, Datenzugänge). Sämtliche Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.</p>
          <p>PLACED ist berechtigt, die Preise für laufende Verträge einmal jährlich, um maximal 20 % anzupassen, sofern dies zur Anpassung an gestiegene Kosten oder zur Erweiterung des Leistungsumfangs erforderlich ist. Eine entsprechende Ankündigung erfolgt mindestens 6 Wochen im Voraus. Die Anpassung gilt mit Beginn des nächsten Abrechnungszeitraums als vereinbart.</p>
          <p>Rechnungen werden jährlich oder monatlich im Voraus gestellt und sind innerhalb von 14 Tagen ohne Abzug zahlbar. Bei Zahlungsverzug behält sich PLACED das Recht vor, den Zugang zur Plattform bis zur vollständigen Zahlung zu sperren.</p>

          <h2 className="mt-12">7. Vertragslaufzeit und Kündigung</h2>
          <p>Die Vertragslaufzeit ergibt sich aus dem individuell unterzeichneten Angebot. Sofern keine Kündigung mit einer Frist von 4 Wochen vor Laufzeitende erfolgt, verlängert sich der Vertrag automatisch um den Zeitraum der Mindestvertragslaufzeit.</p>
          <p>Kündigungen bedürfen der Textform (z. B. per E-Mail). Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Im Falle einer Vertragsverletzung, insbesondere im Hinblick auf Lizenzmissbrauch oder Datenmanipulation, ist PLACED berechtigt, das Vertragsverhältnis mit sofortiger Wirkung zu beenden.</p>

          <h2 className="mt-12">8. Datenschutz und Hosting</h2>
          <p>PLACED verarbeitet personenbezogene Daten im Rahmen der gesetzlichen Vorgaben der DSGVO sowie des EU AI Acts. Der Kunde bleibt für die Rechtmäßigkeit der von ihm verarbeiteten Daten verantwortlich. Die Plattform wird nach ISO 27001 zertifizierten Rechenzentren in Deutschland (AWS Frankfurt) gehostet.</p>

          <h2 className="mt-12">9. Vertraulichkeit</h2>
          <p>Beide Parteien verpflichten sich, alle im Rahmen des Vertragsverhältnisses bekannt gewordenen geschäftlichen, technischen oder sonstigen Informationen vertraulich zu behandeln. Die Vertraulichkeit gilt auch nach Beendigung des Vertragsverhältnisses fort.</p>

          <h2 className="mt-12">10. Eigentum an Daten und Inhalten</h2>
          <p>Sämtliche Rechte an der Plattform, den bereitgestellten Inhalten, Datenbankstrukturen und technischen Komponenten verbleiben bei PLACED. Der Kunde erwirbt keinerlei Eigentumsrechte an Software, Datenbanken oder Algorithmen.</p>
          <p>Die Inhalte dürfen weder manuell noch automatisiert kopiert, extrahiert, weitergegeben oder archiviert werden. Eine Verwertung oder kommerzielle Nutzung der Daten außerhalb der Plattform ist untersagt.</p>

          <h2 className="mt-12">11. Haftung</h2>
          <p>PLACED haftet im Rahmen der gesetzlichen Bestimmungen nur für Vorsatz und grobe Fahrlässigkeit. Eine Haftung für mittelbare Schäden, Folgeschäden oder entgangenen Gewinn ist ausgeschlossen, soweit nicht zwingende gesetzliche Vorschriften entgegenstehen.</p>
          <p>Für einfache Fahrlässigkeit haftet PLACED nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vertragstypisch vorhersehbaren Schaden.</p>

          <h2 className="mt-12">12. Schlussbestimmungen</h2>
          <p>Erfüllungsort und Gerichtsstand ist Berlin. Es gilt ausschließlich deutsches Recht. Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Regelung tritt eine gesetzlich zulässige Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.</p>

          <p className="mt-8"><strong>Stand: Juni 2025</strong></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB; 