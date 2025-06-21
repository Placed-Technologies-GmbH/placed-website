import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {/* Heading far below navbar, full width */}
      <div className="w-full bg-background pt-40 pb-6">
        <h1 className="text-3xl font-bold text-work-blue text-center">Impressum</h1>
        <div className="max-w-2xl mx-auto mt-8 text-base text-gray-700 leading-relaxed space-y-4 text-center">
          <p className="font-semibold">Anbieterkennzeichnung gemäß Telemediengesetz (TMG):</p>
          <p>
            Placed Technologies GmbH<br />
            Rosa-Luxemburg-Str. 14<br />
            10178 Berlin<br />
            Amtsgericht Charlottenburg: HRB 268249 B
          </p>
          <p>
            <span className="font-semibold">Kontakt und Vertretungsberechtigte:</span><br />
            Geschäftsführer: Kai Künne, Fatih Temel
          </p>
          <p>
            Kontakt E-Mail: <a href="mailto:info@getplaced.de" className="text-work-blue underline">info@getplaced.de</a>
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 text-base text-gray-700 leading-relaxed space-y-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Disclaimer – rechtliche Hinweise:</h2>
          <p><strong>§ 1 Warnhinweis zu Inhalten</strong><br />
            Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
          </p>
          <p><strong>§ 2 Externe Links</strong><br />
            Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
          </p>
          <p><strong>§ 3 Urheber- und Leistungsschutzrechte</strong><br />
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
          </p>
          <p><strong>§ 4 Besondere Nutzungsbedingungen</strong><br />
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
          </p>
        </div>
      </div>
      <main className="flex-grow max-w-3xl mx-auto px-4 py-8">
        <section className="space-y-10 text-gray-700 text-base leading-relaxed">
          <div className="space-y-8">
            <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Placed Technologies GmbH<br />Rosa-Luxemburg-Str. 14<br />10178 Berlin<br />Deutschland</p>
            <p>Handelsregister: HRB 123456<br />Registergericht: Amtsgericht Berlin-Charlottenburg</p>
            <p>Vertreten durch die Geschäftsführer:<br />Kai Künne, Fatih Temel</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
            <p>Telefon: +49 (0)30 12345678<br />E-Mail: info@getplaced.de</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />DE123456789</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Kai Künne<br />Rosa-Luxemburg-Str. 14<br />10178 Berlin</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum; 