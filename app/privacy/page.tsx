import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Privacybeleid van Rik de Wit Audio. Wij beschermen uw persoonsgegevens.',
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">1. Inleiding</h2>
              <p>
                Rik de Wit Audio (hierna: "wij" of "ons") respecteert uw privacy en beschermt uw persoonsgegevens. Dit privacybeleid beschrijft hoe wij uw gegevens verzamelen, gebruiken en beschermen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">2. Persoonsgegevens die wij verzamelen</h2>
              <p>Wij kunnen de volgende persoonsgegevens verzamelen:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
                <li>Informatie over uw project of evenement</li>
                <li>Eventueel andere informatie die u vrijwillig deelt</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">3. Hoe wij uw gegevens gebruiken</h2>
              <p>Uw persoonsgegevens worden gebruikt voor:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Het beantwoorden van uw vragen en verzoeken</li>
                <li>Het leveren van onze diensten</li>
                <li>Communicatie over projecten en overeenkomsten</li>
                <li>Verbetering van onze dienstverlening</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">4. Gegevensbeveiliging</h2>
              <p>
                Wij nemen passende maatregelen om uw persoonsgegevens te beschermen tegen onbevoegde toegang, wijziging, verwijdering of openbaarmaking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">5. Uw rechten</h2>
              <p>U heeft het recht om:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uw persoonsgegevens in te zien</li>
                <li>Onjuiste gegevens te corrigeren</li>
                <li>Uw gegevens te laten verwijderen</li>
                <li>Bezwaar in te dienen tegen bepaald verwerking</li>
              </ul>
              <p>Neem contact met ons op via audio@rikdewit.nl om deze rechten uit te oefenen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">6. Contact</h2>
              <p>
                Voor vragen over dit privacybeleid kunt u contact opnemen via:
              </p>
              <p>
                Email: <a href="mailto:audio@rikdewit.nl" className="text-blue-600 hover:underline">audio@rikdewit.nl</a><br />
                Telefoon: <a href="tel:+31637231247" className="text-blue-600 hover:underline">+31 6 37 23 12 47</a>
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
