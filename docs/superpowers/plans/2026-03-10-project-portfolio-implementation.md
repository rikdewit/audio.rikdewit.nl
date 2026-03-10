# Project Portfolio Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a detailed project page system for portfolio projects, starting with Rookmelder Disco as the pilot, allowing narrative content about roles, learnings, and connections to current work.

**Architecture:** Data-driven approach using metadata (meta.json) + markdown content (content.md) for each project. Create a new detail page route that renders project content. Keep existing grid unchanged; replace placeholders incrementally as content is ready.

**Tech Stack:** Next.js (routing), React (components), TypeScript, Tailwind CSS

---

## File Structure

**To Create:**
- `projects/rookmelder-disco/index.tsx` — All data & component (hardcoded, fully customizable)
- `app/projects/[slug]/page.tsx` — Detail page route

**To Modify:**
- `constants.tsx` — Update PORTFOLIO items to include route links
- Portfolio grid component — Make cards clickable (link to detail page)

---

## Chunk 1: Create Rookmelder Disco Project Component

### Task 1: Create Rookmelder Disco project component with hardcoded data

**Files:**
- Create: `projects/rookmelder-disco/index.tsx`

- [ ] **Step 1: Create project directory**

```bash
mkdir -p projects/rookmelder-disco
```

- [ ] **Step 2: Write component with all data hardcoded**

```typescript
// projects/rookmelder-disco/index.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';

export const rookmelderDiscoMeta = {
  id: 1,
  slug: 'rookmelder-disco',
  title: 'Rookmelder Disco',
  category: 'Music Production',
  role: ['Gitarist', 'Producer', 'Bandleider'],
  year: '2023–heden',
  description: 'Bandleider en producer van Rookmelder Disco, een elektronische popband met experimentele elementen.',
  thumbnail: '/projects/rookmelder-disco/images/04-band.jpg',
  images: {
    hero: '/projects/rookmelder-disco/images/01-concert.jpg',
    story: [
      '/projects/rookmelder-disco/images/02-live.jpg',
      '/projects/rookmelder-disco/images/03-performance.jpg',
    ],
  },
  links: {
    spotify: 'https://open.spotify.com/artist/6XOiN2K0StRf35xUTbzjuk?si=Iu5fDMacQ0KMQGUL9nvS5Q',
    instagram: 'https://instagram.com/woesnos',
  },
};

export default function RookmelderDiscoProject() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        href="/"
        className="text-sm font-medium text-gray-600 hover:text-gray-900 mb-8 inline-flex items-center"
      >
        ← Terug naar portfolio
      </Link>

      {/* Hero section */}
      <header className="mb-12">
        <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={rookmelderDiscoMeta.images.hero}
            alt={rookmelderDiscoMeta.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">{rookmelderDiscoMeta.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {rookmelderDiscoMeta.role.map(r => (
            <span key={r} className="inline-block bg-gray-100 px-3 py-1 rounded text-sm font-medium">
              {r}
            </span>
          ))}
        </div>
        <p className="text-gray-600">{rookmelderDiscoMeta.year}</p>
      </header>

      {/* Story section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Het verhaal</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Rookmelder Disco is een elektronische popband met roots in experimentele muziek. Wat begon als een solo-project groeide uit tot een volledige band met live optredens op festivals en in venues door het land.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          De naam is een charmante verwijzing naar het geluid van een brandmelder die af gaat - iets wat veel voorkomt in het dagelijks leven, maar wat we op creatieve manier hebben getransformeerd tot muziek. Dit spirit van het vinden van schoonheid in onverwachte geluid zit in het hart van wat we doen.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Onze muziek combineert elektronische productie met live instrumenten, wat resulteert in een unieke sound die moeilijk in één genre te vatten is.
        </p>

        {/* Story image */}
        {rookmelderDiscoMeta.images.story[0] && (
          <div className="my-8 relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src={rookmelderDiscoMeta.images.story[0]}
              alt="Performance moment"
              fill
              className="object-cover"
            />
          </div>
        )}
      </section>

      {/* Roles and tasks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mijn rol & taken</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Creatieve leiding: bepalen van artistieke richting, songwriting, arrangementen</li>
          <li>Producer: opnemen, mixen en masteren van bandalbum</li>
          <li>Bandleider: coördineren repetitieschema's, communiceren met bandleden</li>
          <li>Technische voorbereiding: opstellen van riders, stageplots, inputlijsten en monitoringplannen</li>
          <li>Live performance: gitaar spelen en muzikale cohesie bewaken</li>
        </ul>
      </section>

      {/* Learnings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Wat ik leerde</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Door mijn rol als bandleider heb ik veel geleerd over leiderschap en communicatie. Ik moet regelmatig moeilijke keuzes maken over arrangementen en moet mijn visie kunnen uitleggen aan andere muzikanten die andere ideeën hebben.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Het producerwerk leerde me veel over akoestiek, klankkleur en hoe verschillende instrumenten samenbrengen in een mix. Ik heb geleerd hoe je laagjes geluid kan bouwen en hoe je space creëert zodat alles goed te horen is.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          De live optredens en het organiseren daarvan toonden me het belang van planning, voorbereiding en communicatie met venues, geluidstechnici en teamleden.
        </p>

        {/* Learnings image */}
        {rookmelderDiscoMeta.images.story[1] && (
          <div className="my-8 relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src={rookmelderDiscoMeta.images.story[1]}
              alt="Learning moment"
              fill
              className="object-cover"
            />
          </div>
        )}
      </section>

      {/* Embedded Spotify */}
      {rookmelderDiscoMeta.links.spotify && (
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Luister op Spotify</h2>
          <iframe
            src={`https://open.spotify.com/embed/artist/${rookmelderDiscoMeta.links.spotify.split('/artist/')[1]?.split('?')[0]}`}
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-lg"
          ></iframe>
        </section>
      )}

      {/* Connection to sound engineering */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Verbinding naar geluidstechniek</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Dit alles sluit perfect aan op mijn werk als geluidstechnicus. De kennis van akoestiek en hoe je een mix bouwt, pas ik direct toe bij het mixen van live evenementen.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Als producer heb ik geleerd hoe je moet luisteren naar wat het publiek nodig heeft - dezelfde skill waarmee ik nu als FOH-technicus werk. Ik begrijp wat artiesten nodig hebben van hun monitor-mix omdat ik zelf performer ben geweest.
        </p>
        <p className="text-gray-700 leading-relaxed">
          De leidingsgeving en communicatieskills helpen me dagelijks bij het werken met bands, venues en andere crew members. Ik weet wat het voelt om op het podium te staan en geluidstechniek nodig te hebben die je ondersteunt.
        </p>
      </section>

      {/* Links footer */}
      <footer className="border-t pt-8 flex gap-4">
        {rookmelderDiscoMeta.links.spotify && (
          <a
            href={rookmelderDiscoMeta.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-medium"
          >
            Spotify
          </a>
        )}
        {rookmelderDiscoMeta.links.instagram && (
          <a
            href={`https://instagram.com/${rookmelderDiscoMeta.links.instagram.replace('https://instagram.com/', '').replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 font-medium"
          >
            Instagram
          </a>
        )}
      </footer>
    </article>
  );
}
```

- [ ] **Step 3: Don't commit yet—review with Rik first**

---

## Chunk 2: Create Dynamic Routing

### Task 2: Create dynamic project route

**Files:**
- Create: `app/projects/[slug]/page.tsx`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p app/projects/\[slug\]
```

- [ ] **Step 2: Write route component that dynamically imports projects**

```typescript
// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Import all project metadata exports for static generation
import { rookmelderDiscoMeta } from '@/projects/rookmelder-disco';

// Map of project slugs to their components
const projectComponents: Record<string, any> = {
  'rookmelder-disco': dynamic(() => import('@/projects/rookmelder-disco')),
  // Add more projects here as they're created
};

// Map of project slugs to their metadata
const projectMetaMap: Record<string, any> = {
  'rookmelder-disco': rookmelderDiscoMeta,
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = projectMetaMap[params.slug];

  if (!meta) {
    return {
      title: 'Project niet gevonden | Rik de Wit Audio',
    };
  }

  return {
    title: `${meta.title} | Rik de Wit Audio`,
    description: meta.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const Component = projectComponents[params.slug];
  const meta = projectMetaMap[params.slug];

  if (!Component || !meta) {
    notFound();
  }

  return <Component />;
}
```

- [ ] **Step 3: Don't commit yet—review with Rik first**

---

## Chunk 3: Update Existing Components

### Task 3: Update portfolio grid to link to detail pages

**Files:**
- Modify: `constants.tsx`

- [ ] **Step 1: Review current PORTFOLIO constant**

Check structure in constants.tsx

- [ ] **Step 2: Add slug field to Rookmelder Disco item**

Find the Rookmelder Disco item and add slug:

```typescript
{
  id: 1,
  imageUrl: '/projects/rookmelder-disco/images/04-band.jpg', // Updated to use real image
  category: 'Music Production',
  title: 'Rookmelder Disco',
  slug: 'rookmelder-disco', // Add this
}
```

- [ ] **Step 3: Don't commit yet—review with Rik first**

---

### Task 4: Make portfolio cards clickable

**Files:**
- Modify: Portfolio grid rendering component (find where PORTFOLIO is mapped)

- [ ] **Step 1: Find grid rendering code**

Locate the component that renders the portfolio grid cards.

- [ ] **Step 2: Import Link and wrap cards**

```typescript
import Link from 'next/link';

// In the map function:
{PORTFOLIO.map(item => (
  <Link
    key={item.id}
    href={`/projects/${item.slug}`}
    className="group"
  >
    {/* existing card content */}
  </Link>
))}
```

- [ ] **Step 3: Add cursor and hover styling if needed**

```typescript
className="group cursor-pointer hover:opacity-90 transition-opacity"
```

- [ ] **Step 4: Don't commit yet—review with Rik first**

---

## Chunk 4: Testing & Verification

### Task 5: Test full flow

**Files:**
- Test: Manual testing of complete flow

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Visit project detail page**

Open `http://localhost:3000/projects/rookmelder-disco` in browser

- [ ] **Step 3: Verify all sections render**

- [ ] Hero image displays
- [ ] Title, roles, year badges appear
- [ ] "Het verhaal" section with text and image
- [ ] "Mijn rol & taken" section renders as bullet list
- [ ] "Wat ik leerde" section with text and image
- [ ] Spotify embed loads and is interactive
- [ ] Links (Spotify, Instagram) at bottom work
- [ ] Back button returns to home and grid shows

- [ ] **Step 4: Test responsive design**

Resize to mobile (375px width):

- [ ] All text readable
- [ ] Images scale properly
- [ ] No horizontal overflow
- [ ] Buttons are tap-friendly

- [ ] **Step 5: Verify home page integration**

1. Go to home page
2. Scroll to portfolio section
3. Verify Rookmelder Disco card shows real image
4. Click card
5. Verify it navigates to detail page

- [ ] **Step 6: Run build check**

```bash
npm run build
```

Expected: Build succeeds with no errors

- [ ] **Step 7: Check for console errors**

Open DevTools console and verify no errors or warnings

- [ ] **Step 8: Don't commit yet—review all changes with Rik first**

---

## Summary

This plan creates:

1. **`projects/rookmelder-disco/index.tsx`** — Complete project component with all hardcoded data (no external files)
2. **`app/projects/[slug]/page.tsx`** — Dynamic route that imports and renders projects
3. **Updated `constants.tsx`** — Adds slug and real image to Rookmelder Disco portfolio item
4. **Updated portfolio grid component** — Makes cards clickable links

**No additional files needed:**
- ❌ No `meta.json`
- ❌ No `content.md`
- ❌ No separate types file
- ❌ No data utilities library

**Advantages:**
- ✅ Full customization per project (layout, styling, content)
- ✅ Single source of truth per project
- ✅ Easy to add custom features per project
- ✅ Minimal file structure
- ✅ All data colocated with component

---

## Next Steps (After This Plan)

1. Refine Rookmelder Disco content with accurate details and personal anecdotes
2. Create remaining 5 projects (Woes Nos, The Jack, Festum, Stichting Burgers, Backstage Masters)
3. Each project: create folder, add images, write component with hardcoded data
4. Register each project in `app/projects/[slug]/page.tsx`
5. Add slug to PORTFOLIO items in constants.tsx
6. Gather high-quality photos for each project
