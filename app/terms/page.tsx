import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden voor de diensten van Rik de Wit Audio.',
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">1. Algemeen</h2>
              <p>
                Deze algemene voorwaarden regelen de relatie tussen Rik de Wit Audio en de klant. Door onze diensten in te schakelen, aanvaardt u deze voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">2. Diensten</h2>
              <p>
                Rik de Wit Audio biedt professionele audio-technische diensten aan, waaronder live mixing, geluidstechnische ondersteuning en evenementtechniek. De precieze diensten worden bepaald in overleg met de klant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">3. Prijzen en Betaling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prijzen worden vooraf schriftelijk vastgesteld</li>
                <li>Betaling dient plaats te vinden overeenkomstig de factuurdatum</li>
                <li>Reiskosten en extra diensten worden apart berekend</li>
                <li>Bij gebreke van betaling kunnen wij de diensten weigeren</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">4. Annulering en Wijzigingen</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Annuleringen moeten minimaal 2 weken vooraf schriftelijk geschieden</li>
                <li>Bij annulering minder dan 2 weken vooraf wordt 50% van het totaalbedrag in rekening gebracht</li>
                <li>Bij annulering minder dan 1 week vooraf wordt het volledige bedrag in rekening gebracht</li>
                <li>Wijzigingen van afspraken moeten zo snel mogelijk schriftelijk worden bevestigd</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">5. Aansprakelijkheid</h2>
              <p>
                Rik de Wit Audio is niet aansprakelijk voor:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schade door onvoorziene omstandigheden of overmacht</li>
                <li>Schade aan apparatuur van de klant</li>
                <li>Verliezen door ontoereikende voorbereiding van de klant</li>
              </ul>
              <p>
                De klant is verantwoordelijk voor alle voor het project benodigde apparatuur, beveiligingsmaatregelen en vergunningen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">6. Intellectueel Eigendom</h2>
              <p>
                Alle foto's, video's en opnamen gemaakt tijdens het project zijn eigendom van Rik de Wit Audio, tenzij anders schriftelijk vastgesteld.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">7. Geschillen</h2>
              <p>
                Geschillen worden in eerste instantie door onderhandeling opgelost. Indien geen overeenstemming bereikt wordt, zijn de rechtbanken in Nederland bevoegd.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">8. Wijzigingen</h2>
              <p>
                Rik de Wit Audio behoudt het recht deze voorwaarden te wijzigen. Wijzigingen worden schriftelijk gemeld aan de klant.
              </p>
            </section>

            <section className="text-sm text-gray-500 mt-12">
              <p>Laatst bijgewerkt: maart 2026</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
