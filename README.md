# Jeonghwan Kim’s website

A Jekyll academic homepage with an editorial design: warm ivory, forest-green accents, serif headings, and responsive publication layouts.

## Updating content

- `_data/main_info.yaml`: name, profile photo, contact details, and profile links.
- `_data/publications.yaml`: publication titles, authors, venues, images, and resource links. Entries with `selected: y` appear on the homepage in file order. Add `award: "Spotlight"` to show a gold trophy badge alongside the venue.
- `_data/experience.yaml`: education and service records.
- `index.html`: introduction, biography, fellowship, and research experience.
- `libs/custom/editorial.css`: layout, typography, colors, and responsive styles.
- `_layouts/default.html`: shared navigation, metadata, and footer.

Publication images use their original aspect ratio inside a consistent frame. Keep local asset paths rooted at `/assets/`; Jekyll’s `relative_url` filter supports deployment under a base URL.

## Local preview

With Jekyll installed:

```sh
jekyll serve
```

Open `http://localhost:4000`. To build without a server:

```sh
jekyll build
```

The generated site goes in `_site/`. The `work/` directory contains design and verification artifacts and is excluded from the published site.

The homepage works without JavaScript. Fonts use Google Fonts with local serif and sans-serif fallbacks; Google Analytics remains configured in `_includes/google_analytics.html`.

Originally based on [Martin Saveski’s template](https://web.media.mit.edu/~msaveski/).
