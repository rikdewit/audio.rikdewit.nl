'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProjectNavbar from '../../components/ProjectNavbar';
import { rookmelderDiscoMeta } from './meta';

// Extract artist ID from Spotify URL for embed
const extractSpotifyArtistId = (spotifyUrl: string): string => {
  const match = spotifyUrl.match(/artist\/([a-zA-Z0-9]+)/);
  return match ? match[1] : '';
};

export default function RookmelderDiscoProject() {
  const artistId = extractSpotifyArtistId(rookmelderDiscoMeta.links.spotify);

  return (
    <div className="relative min-h-screen bg-white">
      <ProjectNavbar
        projectTitle={rookmelderDiscoMeta.title}
        darkBackground={true}
      />

      {/* Full-width Live Performance Banner */}
      <section className="relative w-full aspect-video md:aspect-[16/6]">
        <Image
          src={rookmelderDiscoMeta.images.live}
          alt="Rookmelder Disco live performance banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-4xl md:text-8xl font-light tracking-tight text-white text-center leading-none drop-shadow-xl" style={{ fontSize: 'clamp(2rem, 6vw, 6.5rem)' }}>
            {rookmelderDiscoMeta.title}
          </h1>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-12 px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Role Badges & Details */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {rookmelderDiscoMeta.role.map((r, index) => (
                  <span
                    key={index}
                    className="text-xs font-bold tracking-[0.2em] uppercase bg-gray-100 px-4 py-2 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Year and Category */}
            <div className="space-y-2 md:text-right">
              <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                {rookmelderDiscoMeta.year}
              </p>
              <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                {rookmelderDiscoMeta.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-6 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-12">
                Mijn eerste band
              </h2>

              {/* Story Text */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-8">
                <p>
                  Rookmelder Disco ontstond uit het lustrumjaar van de Eindhovense Studenten Roeivereniging Thêta. Een feestelijk jaar in het teken van 50 jaar geschiedenis. Met mijn ervaring als bedroom producer en gitarist zag ik mijn kans om meer met muziek te doen en samen op te treden.
                </p>
                <p>
                  Voor veel van ons was dit de eerste keer in een band, mezelf inbegrepen. We waren aan het begin een bij elkaar geraapt zooitje. We lachen nog steeds als we terugdenken aan die eerste repetitie en hoe matig die was.
                </p>
                <p>
                  We kwamen bij elkaar zonder ervaring, wat zowel uitdagend als leerzaam was. In korte tijd zijn we naar elkaar toe gegroeid, leerden van elkaar en creëerden iets moois. We mochten prachtige optredens doen voor veel vrienden en bekenden, zoals in de skatehal van Area51 en het beursgebouw bij Vibes. We mochten meeliften met het succes van de vereniging en de vele vrijwilligers die de shows organiseerden. Daar ben ik nog steeds dankbaar voor.
                </p>
                <p>
                  Ik heb van dicht bij mogen meemaken hoe het leven van een artiest eruit ziet. Zowel de optredens en de voorbereiding achter de schermen, als de technische problemen en de mensen met wie je te maken hebt. Het creatieve proces, van liedjes schrijven en opnemen tot het nemen van beslissingen over de richting van de nummers. Wie bepaalt wat we spelen, hoe een show eruit ziet, welke nummers in de setlist passen. Je zit vast aan die keuzes eenmaal je ze hebt gemaakt. Het was een les in teamwork en onder druk presteren in een groep.
                </p>
              </div>
            </div>

            {/* Band Photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={rookmelderDiscoMeta.images.band}
                alt="Rookmelder Disco band"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Tasks Section */}
      <section className="py-12 px-6 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guitar Photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={rookmelderDiscoMeta.images.guitar}
                alt="Rik de Wit with guitar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-12">
                Rollen & Taken
              </h2>

              <div className="space-y-10 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide">Gitarist</h3>
                  <p className="text-gray-700 mb-4 text-base">
                    Als ritme gitarist focuste ik op samenwerking en het belang van solide groovewerk. Ik componeerde en arrangeerde gitaarpartijen voor de nummers, en nam deze op met mijn eerste distortion pedaal. Dit was een praktische toepassing van wat ik in het produceproces leerde.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Compositie en arrangement van gitaarpartijen</li>
                    <li>Gitaar opnemen met distortion pedaal</li>
                    <li>Samenwerking met bandleden aan arrangementen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide">Producer</h3>
                  <p className="text-gray-700 mb-4 text-base">
                    Dit was mijn eerste keer drums en vocalen op te nemen, samen met anderen. Plaatsing van microfoons, 8 sporen tegelijk opnemen. Wat heeft de ruimte voor invloed op de sound? Waar zijn goede opnamelocaties voor een laag budget? Je bent ook een soort coach, hoe krijg je het beste spel uit de muzikant die je opneemt?
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Opnemen van drums, vocalen en instrumenten</li>
                    <li>Samenwerking met mix engineer en feedback rondes</li>
                    <li>Extra productielagen en arrangementen toevoegen</li>
                    <li>Album <em>Ontvlamd</em> geproduceerd, opgenomen en (bijna helemaal) uitgebracht</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide">Songwriter</h3>
                  <p className="text-gray-700 mb-4 text-base">
                    Ik schreef teksten voor nummers en had een hand in songwriting. Onder andere tekstcovers en originele composities met bandleden.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><em>Hoe til je een C4?</em> (<em>Reelin' in the Years</em> - Steely Dan)</li>
                    <li><em>50 jaar</em> (<em>Sinds een dag of 2</em> - Doe Maar)</li>
                    <li><em>Ontvlamd</em> — Rookmelder Disco</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide">Bandleider</h3>
                  <p className="text-gray-700 mb-4 text-base">
                    Als bandleider organiseerde ik repetities, afspraken en communicatie met venues en technici—lessen in verantwoordelijkheid en teamleiding.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Plannen en leiden van repetities</li>
                    <li>Afspraken en communicatie met bandleden, venues en geluidstechnici</li>
                    <li>Maken van een rider en stageplot</li>
                    <li>Shows doen met een budget van nul</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-12 px-6 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-12">
                Wat ik heb geleerd
              </h2>

              <div className="space-y-8 text-lg text-gray-700 leading-relaxed mt-8">
                <p>
                  Ik speel vooral ritme gitaar, heb geleerd hoe belangrijk ritme is en dat samen spelen belangrijker is dan alle noten perfect spelen. Ik leerde met een plectrum te spelen en kocht mijn eerste distortion pedaal.
                </p>
                <p>
                  Een show geven die het publiek leuk vindt is het belangrijkste, niet hoe perfect je technisch
                  alles speelt. Contact maken met het publiek, plezier hebben.
                </p>
                <p>
                  Goed voorbereiden en afspraken maken met organisatie, geluidstechnici en bandleden, dat zijn
                  de echte prioriteiten. Er is geen perfecte show, je geniet van het moment.
                </p>
                <p>
                  Rustig blijven onder tijdsdruk en stress, iedereen met respect behandelen en samenwerken,
                  dat is fundamenteel. De juiste mensen kennen en elkaar helpen, dat is super belangrijk.
                </p>
                <p>
                  Het geluid op het podium is net zo belangrijk voor een goede show als het geluid in de zaal.
                  Als je jezelf niet hoort op het podium, kan je ook niet goed spelen als muzikant. Dat inzicht
                  veranderde alles voor me.
                </p>
              </div>
            </div>

            {/* Performance Photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={rookmelderDiscoMeta.images.performance}
                alt="Rookmelder Disco performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Embed Section */}
      <section className="px-6" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none text-center" style={{ marginTop: '20px', marginBottom: '12px' }}>
            Luisteren op Spotify
          </h2>

          <div className="flex justify-center" style={{ marginTop: '16px', marginBottom: '20px' }}>
            <iframe
              style={{ borderRadius: '12px' }}
              src={`https://open.spotify.com/embed/artist/${artistId}?utm_source=generator`}
              width="100%"
              height="390"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              sandbox="allow-autoplay allow-same-origin allow-scripts"
              className="max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* Connection to Sound Engineering Section */}
      <section className="py-12 px-6 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-12">
            Verbinding met geluidstechniek
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-3xl mt-8">
            <p>
              We ondervonden ook de moeilijkheden: geluidstechnici zonder bekwaamheid en onze eigen
              unervarenheid met soundchecks en technische problemen. Deze ervaringen waren frustrerend
              maar hebben me doen beseffen wat echt belangrijk is in live muziek.
            </p>
            <p>
              Rookmelder Disco was het keerpunt. We speelden met veel enthousiasme, we hadden sterke
              opvoeringen en veel steun van vrienden en bekenden. Maar telkens stuitten we op hetzelfde
              probleem: slechte geluidskwaliteit en communicatieproblemen met onbekwame geluidstechnici.
              Het frustreerde me diep dat zoveel voorbereiding en passie door slecht geluid werd
              ondermijnd.
            </p>
            <p>
              Deze frustratie werd mijn inspiratie. Ik realiseerde me dat ik als muzikant iets zag dat
              veel technici niet begrepen: wat een artiest nodig heeft, wat het publiek nodig heeft,
              en hoe cruciaal goede communicatie is. Ik besloot geluidstechniek te gaan studeren,
              niet om weg te lopen van muziek, maar om het beter te dienen.
            </p>
            <p>
              Nu begrijp ik het volledig: slecht geluid kan de beste muziek verpesten; goed geluid
              kan gewone muziek onvergetelijk maken. Als geluidstechnicus wil ik het verschil zijn
              dat ik toen miste. Ik wil artiesten ondersteunen met dezelfde toewijding waarmee zij
              hun muziek creëren—zodat hun geluid tot zijn recht komt en andere bands niet dezelfde
              frustratie hoeven meemaken als wij.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4">Rookmelder Disco</h3>
              <p className="text-gray-500">Elektronische pop met experimentele elementen</p>
            </div>

            <div className="flex gap-8">
              <a
                href={rookmelderDiscoMeta.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
              >
                Spotify
              </a>
              <a
                href={rookmelderDiscoMeta.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
            >
              ← Terug naar home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
