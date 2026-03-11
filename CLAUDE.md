# Claude Code Guidelines for audio.rikdewit.nl

## Project Structure & Data Management

### Portfolio Projects
- **Hardcode project data in TypeScript** instead of separate JSON/markdown files
- Each project lives in `projects/[project-slug]/index.tsx`
- Full customization per project (layout, content, styling) without external config
- No separate types file needed—use inline interfaces as needed

### No External Configuration Files
- ✅ TypeScript files
- ❌ JSON metadata files (meta.json)
- ❌ Markdown content files (content.md)
- ❌ Shared types file

## Git Management
- ✅ Commit source code, components, configuration
- ❌ NEVER commit build artifacts (`out/`, `.next/`)
- ❌ NEVER commit generated files (build output, static exports)
- These go in `.gitignore`

## Workflow
- **Don't commit code** until explicitly asked
- Always **check CLAUDE.md first** before making architectural decisions
- Use this file as the source of truth for project conventions

## Content Strategy
- Photos stored in `projects/[slug]/images/`
- Spotify links, Instagram handles embedded directly in component code
- Narrative content written as JSX/components, not markdown
- When editing narrative text: reorganize and reorder existing sentences only. Never add new phrases, metaphors, or descriptive language. Do not use em-dashes (—) in text; use commas, semicolons, or break into new sentences instead.
