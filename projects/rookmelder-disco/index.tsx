'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProjectNavbar from '../../components/ProjectNavbar';

// Metadata object with all project data
export const rookmelderDiscoMeta = {
  id: 1,
  slug: 'rookmelder-disco',
  title: 'Rookmelder Disco',
  category: 'Artiest / Band',
  role: ['Gitarist', 'Producer', 'Bandleider'],
  year: '2023–heden',
  description: 'Bandleider en producer van Rookmelder Disco, een elektronische popband met experimentele elementen.',
  thumbnail: '/projects/rookmelder-disco/images/04-band.jpg',
  images: {
    guitar: '/projects/rookmelder-disco/images/01-guitar.jpg',
    performance: '/projects/rookmelder-disco/images/03-performance.jpg',
    live: '/projects/rookmelder-disco/images/02-live.jpg',
  },
  links: {
    spotify: 'https://open.spotify.com/artist/6XOiN2K0StRf35xUTbzjuk?si=Iu5fDMacQ0KMQGUL9nvS5Q',
    instagram: 'https://instagram.com/rookmelder.disco',
  },
};

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
      <section className="relative w-full" style={{ aspectRatio: '16 / 6' }}>
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
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-32">
            Het verhaal
          </h2>

          {/* Story Text */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mt-8">
            <p>
              Rookmelder Disco is meer dan een band—het is een experiment, een samenwerking en een
              platform voor elektronische en experimentele pop. Als bandleider en producer heb ik het
              genoegen om deze groep te leiden en samen met talentvolle muzikanten aan deze unieke
              geluidswereld te bouwen.
            </p>
            <p>
              Met veel aandacht voor details en een voorkeur voor het onconventionele, creëren we
              nummers die zowel experimenteel als toegankelijk zijn. Elk optreden is een gelegenheid
              om onze visie op elektronische muziek met het publiek te delen.
            </p>
            <p>
              De combinatie van gitaar, synths en elektronische productiemiddelen vormt het hart van
              onze aanpak. We geloven in het verkennen van grenzen en het creëren van iets nieuws.
            </p>
          </div>
        </div>
      </section>

      {/* Roles & Tasks Section */}
      <section className="py-12 px-6 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-32">
                Rollen & Taken
              </h2>

              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-wide">Gitarist</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Leadgitaar en synthesizer-gitaar arrangement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Compositie en arrangement van gitaarpartijen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Samenwerking met producers aan elektronische soundscapes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-wide">Producer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Mixen en mastering van nummers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Creatie van elektronische elementen en achtergrondsounds</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Creatie en productie van nummers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-wide">Bandleider</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Leiding over repetities en opnames</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Directie van live performances</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black font-light">—</span>
                      <span>Artistieke visie en bandfilosofie bepalen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-12 px-6 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-32">
                Wat ik heb geleerd
              </h2>

              <div className="space-y-8 text-lg text-gray-700 leading-relaxed mt-8">
                <p>
                  Rookmelder Disco heeft me veel geleerd over leiderschap, samenwerking en het balanceren
                  van artistieke visie met praktische realiteit. Het samenstellen van een band vereist geduld,
                  communicatie en flexibiliteit.
                </p>
                <p>
                  Productie-wise heb ik dieper inzicht gekregen in het mixen van elektronische elementen met
                  akoestische instrumenten. Het is een voortdurend proces van experimenten en refinement.
                </p>
                <p>
                  Als gitarist in een elektronische context heb ik ontdekt dat traditie en innovatie samen
                  kunnen gaan. Door de gitaar op ongebruikelijke manieren in te zetten, hebben we een unieke
                  klank gecreëerd die onderscheidend is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Embed Section */}
      <section className="px-6" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none text-center" style={{ marginTop: '20px', marginBottom: '24px' }}>
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
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-32">
            Verbinding met geluidstechniek
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-3xl mt-8">
            <p>
              Mijn werk met Rookmelder Disco raakt nauw samen met mijn expertise in geluidstechniek.
              Als audio technicus weet ik hoe geluid zich gedraagt in verschillende omgevingen, en dit
              inzicht stelt me in staat om betere producties te creëren.
            </p>
            <p>
              Het mixen van onze nummers profiteert van mijn kennis van acoustica, signaalflow en
              professionele audio-uitrusting. Dit zorgt ervoor dat onze elektronische popgeluid
              helder, gedefinieerd en impact vol is.
            </p>
            <p>
              Live optredens vereisen extra zorg voor het geluid. Door mijn ervaring in live mixing
              kunnen we ervoor zorgen dat ons geluid op het podium net zo goed is als op opnames.
              Dit is cruciaal voor het leveren van een consistente artistieke visie.
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
