# Scripts

## Timeline Generator

Automatically generates the timeline page from MDX frontmatter.

### Usage

```bash
npm run generate:timeline
```

### How It Works

The script:
1. Scans all `.mdx` files in the `pages/` directory
2. Reads frontmatter metadata (title, date, category, readTime)
3. Groups entries by month and year
4. Sorts chronologically (newest first)
5. Generates timeline.mdx with proper formatting and links

### Adding New Timeline Entries

To add a new page to the timeline, just ensure your MDX file has proper frontmatter:

```mdx
---
title: 'Your Page Title'
description: 'Brief description'
---

import PostMeta from '../../components/PostMeta'

# Your Page Title

<PostMeta
  date="May 24, 2026"
  category="Platform"
  readTime="5 min"
/>
```

**Important:** The `date` in PostMeta is what gets used for the timeline. It must be in the format: `"Month Day, Year"` (e.g., "May 24, 2026")

### Categories

Supported categories with colors:
- **Platform** - Blue
- **Infrastructure** - Purple
- **Software Engineering** - Yellow
- **GitOps** - Green
- **Incident Report** - Red
- **Goalixa Story** - Orange

### When to Regenerate

Run `npm run generate:timeline` after:
- Adding new blog posts
- Changing article dates
- Updating article titles
- Changing categories

The timeline will automatically update with all changes!
