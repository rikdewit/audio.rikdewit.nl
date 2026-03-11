'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProjectNavbar from '../../components/ProjectNavbar';

const backstageMastersMeta = {
  title: 'Backstage Masters',
  role: ['Stagehand', 'Podiumtechniek', 'Event Productie'],
  year: '2025 – Heden',
  category: 'Podiumtechniek & Productie',
  description: 'Professionele stagecrew bij Backstage Masters',
  images: {
    logo: '/projects/backstage-masters/images/logo.png',
    banner: '/projects/backstage-masters/images/banner.jpg',
    crew: '/projects/backstage-masters/images/crew.jpg',
    setup: '/projects/backstage-masters/images/setup.jpg',
    showtime: '/projects/backstage-masters/images/showtime.jpg',
  },
  links: {
    backstagemasters: 'https://backstagemasters.nl',
    concertjobs: 'https://concertjobs.nl',
  }
};

export default function BackstageMastersProject() {
  return (
    <div className="relative min-h-screen bg-white">
      <ProjectNavbar
        projectTitle={backstageMastersMeta.title}
        darkBackground={true}
      />

      {/* Full-width Banner with Logo */}
      <section className="relative w-full aspect-video md:aspect-[16/6] bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Image
            src={backstageMastersMeta.images.logo}
            alt="Backstage Masters Logo"
            width={999}
            height={461}
            className="w-auto h-auto max-h-full max-w-full object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-12 px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {backstageMastersMeta.role.map((r, index) => (
                  <span
                    key={index}
                    className="text-xs font-bold tracking-[0.2em] uppercase bg-gray-100 px-4 py-2 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 md:text-right">
              <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                {backstageMastersMeta.year}
              </p>
              <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                {backstageMastersMeta.category}
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
                Achter de schermen van live muziek
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-8">
                <p>
                  Toen ik begon met geluidstechniek, realiseerde ik me al snel dat geluid slechts één onderdeel is van een veel groter geheel. Achter elke succesvolle show zit een heel team aan mensen die ervoor zorgen dat alles soepel verloopt.
                </p>
                <p>
                  Met Backstage Masters sluit ik aan bij een professioneel team van stagehands en crew bij Backstage Masters. Hier werk ik aan grootschalige concerten en festivals, meewerken aan de opbouw van stages bij venues zoals de Ziggo Dome en AFAS Live.
                </p>
                <p>
                  Dit werk leerde me dat het altijd om teamwork gaat. Of je nu geluidsapparatuur installeert, kabels legt, of materiaal verplaatst—alles moet synchroon gebeuren. De communicatie, timing en samenwerking onder druk zijn cruciaal. Je bent samen verantwoordelijk voor het succes van een event.
                </p>
                <p>
                  Als stagehand ervaar ik live muziek en events van een heel ander perspectief. Ik zie hoe alles in elkaar grijpt, wat er werkelijk nodig is om een professionele productie op te zetten, en hoe belangrijk het is om elkaar te ondersteunen.
                </p>
              </div>
            </div>

            {/* Placeholder Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-2xl">📸</span>
                </div>
                <p className="text-gray-500 text-sm">Afbeelding placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Phases Section */}
      <section className="py-12 px-6 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-16">
            Werk in vier fasen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Load In */}
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Load In</h3>
              <p className="text-gray-700 mb-4">
                We zijn de eersten op locatie, voordat de concertopbouw begint. Het is cruciaal om een goed plan te hebben, efficiënt in te werken en de juiste volgorde aan te houden zodat alles op tijd klaar is.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Materiaal en apparatuur aanvoeren</li>
                <li>• Basisinfrastructuur opzetten</li>
                <li>• Kabelwerk en signaalrouting</li>
                <li>• Voorbereiding voor volgende teams</li>
              </ul>
            </div>

            {/* Podiumbouw */}
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Podiumbouw</h3>
              <p className="text-gray-700 mb-4">
                Licht, geluid en podium kunnen niet zonder stagehands. Dit is waar alle systemen samenwerken: stage structuur, lichtinstallatie, geluidssysteem, en alle technische details.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Stage construct assembly</li>
                <li>• Licht- en geluidsequipment installatie</li>
                <li>• Technische integratie en testen</li>
                <li>• Veiligheidscontroles</li>
              </ul>
            </div>

            {/* Showtime */}
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Showtime</h3>
              <p className="text-gray-700 mb-4">
                Tijdens de live shows werken we backstage en achter de schermen. We assisteren waar nodig, zorgen voor vlotte transitions en ondersteunen het artistieke moment.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Backstage ondersteuning artiesten</li>
                <li>• Technische live ondersteuning</li>
                <li>• Changeover management</li>
                <li>• Equipment monitoring</li>
              </ul>
            </div>

            {/* Load Out */}
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Load Out</h3>
              <p className="text-gray-700 mb-4">
                Als laatste naar huis. Load out is waar alles wordt afgebroken, gesorteerd en teruggevoerd. Dit vereist dezelfde precisie en teamwork als load in.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Volle afbouw en deconstructie</li>
                <li>• Equipment schoonmaken en checken</li>
                <li>• Truck laden en organisatie</li>
                <li>• Slot control en locatie afronding</li>
              </ul>
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
                  Tegenstelling tot wat je misschien denkt, is stagework niet zwaar en eentonig werk. Het vereist volledige aandacht, strategisch denken en constante communicatie. Je bent afhankelijk van je teamleden en zij zijn afhankelijk van jou.
                </p>
                <p>
                  Ik heb geleerd dat grote producties niet door individuen worden uitgevoerd, maar door teams. Iedereen speelt een rol, van de stagehand tot de projectleider. Zonder respect voor al die rollen, valt alles uiteen.
                </p>
                <p>
                  Timing is alles. Perfecte coordinatie tussen tientallen mensen onder grote tijdsdruk. Je moet kalm blijven, oplettend zijn, en kunnen samenwerken met mensen uit verschillende culturen en achtergronden.
                </p>
                <p>
                  Het professionele world van live events werkt anders dan ik verwachtte. Efficiency, veiligheid, communicatie, en standaarden zijn niet niveaux maar fundamentele principes. Dit inzicht helpt me als geluidstechnicus veel beter begrijpen wat nodig is voor veilige, professionele opstellingen.
                </p>
              </div>
            </div>

            {/* Placeholder Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-2xl">📸</span>
                </div>
                <p className="text-gray-500 text-sm">Afbeelding placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4">Stagehand</h3>
              <p className="text-gray-500">Professionele stagecrew bij Backstage Masters</p>
            </div>

            <div className="flex gap-8">
              <a
                href={backstageMastersMeta.links.backstagemasters}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
              >
                Backstage Masters
              </a>
              <a
                href={backstageMastersMeta.links.concertjobs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
              >
                Concert Jobs
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
