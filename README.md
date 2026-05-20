# Goalixa Engineering Blog

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![MDX](https://img.shields.io/badge/MDX-Markdown-orange)
![License](https://img.shields.io/badge/License-MIT-green)

Engineering notes, architecture updates, and DevOps learnings from building Goalixa.

## Topics

| Category | Description |
|----------|-------------|
| **Architecture** | System design and patterns |
| **Software Engineering** | Development practices |
| **DevOps** | Infrastructure, monitoring |
| **GitOps** | ArgoCD, deployment automation |
| **Incident Reports** | Post-mortems and learnings |
| **Goalixa Story** | Personal journey and challenges |

## Featured Posts

- Latency Taught Me Better Software Engineering
- Migrate to PWA Successfully
- BFF in Goalixa: How PWA and Services Stay Clean
- From Fragmented UIs to One PWA
- Monitoring Stack Setup: Prometheus, Grafana, Alertmanager

## Tech Stack

- **Next.js** - Framework
- **MDX** - Content
- **GitHub Pages** - Hosting

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Writing Posts

1. Create `.md` file in `posts/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2026-01-01"
   category: "DevOps"
   ---
   ```
3. Write content in Markdown

## Structure

```
├── posts/
│   ├── goalixa-story/
│   ├── software-engineering/
│   ├── incident-reports/
│   ├── devops/
│   ├── gitops/
│   └── architecture/
├── components/
├── lib/
└── pages/
```

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built by [Amirreza Rezaie](https://github.com/amirrezarezaie)
