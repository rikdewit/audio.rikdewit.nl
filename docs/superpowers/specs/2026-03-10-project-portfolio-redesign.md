# Project Portfolio Redesign - Design Spec
**Date:** 2026-03-10
**Author:** Rik de Wit
**Status:** Approved

## Overview
Replace 6 placeholder portfolio projects with real, content-rich project pages that tell the story of Rik's work in audio engineering and music production. Each project will showcase role, photos, embedded content, and connections between different areas of work.

## Current State
- Grid of 6 portfolio items with Unsplash placeholder images
- Basic title and category only
- No detail pages or real content

## Target State
- Grid remains unchanged (6 items)
- Each project has a detail page with narrative content
- Replace placeholders one by one as content is prepared
- Consistent structure across all projects for ease of content creation

## Project Page Structure

### Data Organization
```
projects/
├── rookmelder-disco/
│   ├── index.tsx          # Component with all data hardcoded
│   └── images/            # 4-6 photos
```

### Page Sections (in order)
1. **Hero**: Title + role(s) + year(s)
2. **Intro**: Opening paragraph + first image
3. **The Story** ("Het verhaal"): Main narrative with 1-2 images distributed throughout
4. **My Role & Tasks** ("Mijn rol & taken"): Specific responsibilities and activities
5. **What I Learned** ("Wat ik leerde"): Key learnings + image
6. **Embedded Content**: Spotify player (if music project) or relevant media
7. **Connection to Sound Engineering** ("Verbinding naar geluidstechniek"): How this experience connects to current sound engineering work
8. **Links**: Instagram, Spotify, band website (where applicable)
9. **Navigation**: Back button to portfolio grid

### Component Structure (index.tsx)

All data is hardcoded in a single TypeScript component with full customization freedom:

```typescript
export const rookmelderDiscoMeta = {
  id: 1,
  slug: 'rookmelder-disco',
  title: 'Rookmelder Disco',
  role: ['Gitarist', 'Producer', 'Bandleider'],
  year: '2023–heden',
  // ... etc
};

export default function RookmelderDiscoProject() {
  // JSX component with all sections rendered directly
}
```

**Advantages:**
- No external files to parse
- Full layout/styling flexibility per project
- TypeScript type safety
- Single source of truth per project

## Implementation Strategy

**Per Project:**
1. Create `projects/[slug]/index.tsx` with component + hardcoded data
2. Update `app/projects/[slug]/page.tsx` to import and register project
3. Update PORTFOLIO item in `constants.tsx` with real image and slug
4. Test routing and responsive design

**Replacement Strategy:**
- Replace 6 portfolio placeholders one by one as content is ready
- Each project can have unique layout/styling (no constraints)
- Minimal boilerplate—maximum customization

## First Project: Rookmelder Disco
- Photos ready in `projects/rookmelder-disco/images/`
- This is the pilot—establishes pattern for remaining 5 projects
- Tests the hardcoded TypeScript approach at scale

## Success Criteria
- Detail page renders correctly with all sections
- Images display properly at various screen sizes
- Spotify player embeds and plays
- Links work (Instagram, external sites)
- Navigation back to grid functions smoothly
- Structure is replicable for remaining 5 projects
- One project can be completed in ~1-2 sessions

## Future Considerations
- Remaining 5 projects: Woes Nos, The Jack, Festum, Stichting Burgers, Backstage Masters
- Content creation for each project (~30 min per project for text, images already sourced)
- Possible additional fields: testimonials, video embeds, gear used
- Analytics: track which projects get most engagement
