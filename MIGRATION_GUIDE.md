# Nextra Migration Guide

## What's Been Done ✅

- Created `package.json` with Nextra dependencies
- Created `next.config.js` for Next.js configuration
- Created `tsconfig.json` for TypeScript configuration
- Created `theme.config.js` for Nextra theme customization
- Created `.gitignore` for Next.js/Nextra
- Created `/pages/index.mdx` (home page)
- Created `/pages/about.mdx` (about page)
- Created directory structure for posts

## What You Need to Do

### 1. Install Dependencies

```bash
cd /Users/snapp/Desktop/projects/Goalixa/Services/goalixa.github.io
npm install
```

### 2. Migrate Content Files

Copy/convert these files to the `/pages/` directory:

```
Current Location          →  Nextra Location
-----------------------------------------------
README.md                →  pages/index.mdx ✅ (done)
about.md                 →  pages/about.mdx ✅ (done)
timeline.md              →  pages/timeline.mdx
journey.md               →  pages/journey.mdx
goalixa-architecture.md  →  pages/architecture.mdx
tags.md                  →  pages/tags.mdx

/posts/welcome-to-goalixa-blog.md
                      →  pages/posts/welcome.mdx

/posts/software-engineering/*.md
                      →  pages/posts/software-engineering/*.mdx

/posts/devops/*.md
                      →  pages/posts/devops/*.mdx

/posts/gitops/*.md
                      →  pages/posts/gitops/*.mdx

/posts/incident-reports/*.md
                      →  pages/posts/incident-reports/*.mdx

/posts/goalixa-story/*.md
                      →  pages/posts/goalixa-story/*.mdx

/posts/ai/*.md
                      →  pages/posts/ai/*.mdx

(And so on for all other posts...)
```

### 3. Add Frontmatter to MDX Files

Each page needs frontmatter at the top:

```yaml
---
title: 'Page Title'
description: 'Page description for SEO'
---
```

### 4. Remove Old Files (After Testing)

Once everything works:
```bash
rm index.html
rm _coverpage.md
rm _navbar.md
rm _sidebar.md
rm styles.css
```

### 5. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see your new Nextra blog!

### 6. Deploy to GitHub Pages

The build output goes to `/out` directory. You can configure GitHub Pages to serve from there.

## Quick Content Migration Script

```bash
# Convert all .md files to .mdx
find posts -name "*.md" -type f -exec mv {} {}.mdx \;

# Rename .md.mdx to .mdx
find posts -name "*.md.mdx" -type f | while read f; do mv "$f" "${f%.md}"; done
```

## Benefits of Nextra

✅ **Better UI** - Modern, clean design
✅ **Fast** - Built on Next.js with static generation
✅ **SEO** - Built-in SEO optimization
✅ **Search** - Built-in full-text search
✅ **Dark Mode** - Built-in theme switching
✅ **MDX Support** - Use React components in markdown
✅ **Great Mobile Experience** - Responsive design
✅ **Active Development** - Regular updates and improvements

## Need Help?

- [Nextra Documentation](https://nextra.site)
- [Nextra Docs Theme](https://nextra-theme-docs.vercel.app)
