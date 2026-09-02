# acton.energy

Static website of Acton Energy Holding GmbH. No frameworks, no build step; fonts, images and the project map are self-hosted. Deployed via GitHub Pages from `main`.

Preview: https://marvinroeben.github.io/acton-energy-website/

## Structure

| Path | Content |
|---|---|
| `index.html` | Home (hero, KPI band, generations story, project teaser, impact teaser, team) |
| `model.html` | Business model (Own, Operate, Optimize) |
| `projects.html` | Portfolio with interactive Germany map |
| `impact.html` | Sustainability page, every figure with source footnote |
| `company.html` | Leadership, milestones, values, locations |
| `partners.html` | Landowners, municipalities, developers |
| `contact.html`, `imprint.html`, `privacy.html` | Contact and legal |
| `assets/site.css` | Design system (colors, typography, components) |
| `assets/site.js` | Navigation, scroll reveals |
| `assets/projects-map.js` | Central project data and SVG map renderer |
| `assets/img/`, `assets/fonts/` | Self-hosted images (credits: see imprint) and Archivo variable font |

## Editing

1. Edit the HTML/CSS/JS files directly (project data lives in `assets/projects-map.js` and feeds map, cards and tooltips).
2. Preview locally: open the files in a browser, or run `python3 -m http.server` in the repo root.
3. Commit and push to `main`. GitHub Pages redeploys automatically within about a minute.

Image credits in `imprint.html` must be kept in sync when images change. Page text is English; typographic dashes are not used by editorial convention.
