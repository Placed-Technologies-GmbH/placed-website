import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {/* Heading far below navbar, full width */}
      <div className="w-full bg-background pt-40 pb-6">
        <h1 className="text-3xl font-bold text-work-blue text-center">AGB</h1>
        <div className="max-w-2xl mx-auto mt-8 text-base text-gray-700 leading-relaxed space-y-6 text-left">
          <p>Durch die Nutzung der Services von PLACED stimme ich folgenden Punkten zu:</p>
          <p>
            Mir ist bewusst, dass meine personenbezogenen Daten, die ich PLACED sowie deren Tochtergesellschaften und verbundenen Unternehmen im Rahmen des gesamten Bewerbungsverfahrens mitgeteilt habe, von PLACED zu Zwecken der Stellen-/Projektbesetzung verarbeitet und in diesem Zusammenhang insbesondere an andere Gesellschaften innerhalb von PLACED und an Kunden oder potentielle Kunden übermittelt werden.
          </p>
          <p>
            Ich willige hiermit ausdrücklich ein, dass meine Daten für den Zweck meiner Bewerbung und dem Abschluss eines Arbeitsverhältnisses und/oder einer erfolgreichen Stellen-/Projektbesetzung innerhalb von PLACED genutzt und verarbeitet werden, was auch die Weitergabe meiner Daten an die jeweiligen Kunden von PLACED umfasst.
          </p>
          <p>
            Ich willige hiermit ausdrücklich ein, dass ich per E-Mail, per Telefon, per SMS und per Whatsapp für den Zweck meiner Bewerbung und des Abschlusses eines Arbeitsverhältnisses und/oder einer erfolgreichen Stellen-/Projektbesetzung durch PLACED, deren Tochtergesellschaften und sonstigen verbundenen Unternehmen und deren Kunden kontaktiert werden darf.
          </p>
          <p>
            Ich habe das Recht meine Einwilligung jederzeit, ohne Angabe von Gründen für die Zukunft zu widerrufen. Durch den Widerruf wird die Rechtmäßigkeit, der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
          </p>
          <p>
            Ich weiß, dass diese Einwilligung freiwillig ist. Wenn ich meine Bewerbung PLACED nicht elektronisch zur Verfügung stellen möchte, kann ich meine Bewerbung PLACED auch postalisch zukommen lassen.
          </p>
          <p>
            Mir ist bewusst, dass in diesem Fall, meine Daten dann nicht in die elektronischen Bewerbermanagementsysteme aufgenommen werden können und dies einen Einfluss auf die erfolgreiche Stellen-/Projektbesetzung hat, da PLACED durch meine fehlende Einwilligung für den entsprechenden Besetzungsprozess mir ihre modernen Bewerbungssysteme nicht zur Verfügung stehen können.
          </p>
          <p>
            Mir ist ebenfalls bewusst, dass meine personenbezogenen Daten nicht nur nach der vorstehenden Einwilligung für die vorgenannten Maßnahmen verarbeitet werden, sondern auch aufgrund gesetzlicher Grundlagen, einschließlich des berechtigten Interesses von PLACED. Vollumfängliche Informationen, auch zu meinen Rechten und zur verantwortlichen Stelle, finde ich in der Datenschutzerklärung von PLACED.
          </p>
        </div>
      </div>
      <main className="flex-grow max-w-3xl mx-auto px-4 py-8">
        {/* No additional content for now */}
      </main>
      <Footer />
    </div>
  );
};

export default AGB; 