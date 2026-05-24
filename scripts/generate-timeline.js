#!/usr/bin/env node

/**
 * Generate timeline entries from MDX frontmatter
 * Run: node scripts/generate-timeline.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const PAGES_DIR = path.join(__dirname, '../pages');
const TIMELINE_FILE = path.join(__dirname, '../pages/timeline.mdx');

// Category color mapping
const categoryColors = {
  'Platform': { bg: '#dbeafe', color: '#1e40af' },
  'Infrastructure': { bg: '#f3e8ff', color: '#6b21a8' },
  'Software Engineering': { bg: '#fef3c7', color: '#92400e' },
  'GitOps': { bg: '#dcfce7', color: '#166534' },
  'Incident Report': { bg: '#fee2e2', color: '#991b1b' },
  'Goalixa Story': { bg: '#fed7aa', color: '#9a3412' },
};

function getAllMdxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next') {
        getAllMdxFiles(filePath, fileList);
      }
    } else if (file.endsWith('.mdx') && file !== 'index.mdx' && file !== 'timeline.mdx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(content);

  // Get relative path from pages directory
  const relativePath = path.relative(PAGES_DIR, filePath).replace(/\.mdx$/, '');
  const urlPath = '/' + relativePath;

  return {
    title: data.title || path.basename(filePath, '.mdx'),
    description: data.description || '',
    date: data.date,
    category: data.category || 'Uncategorized',
    readTime: data.readTime || '5 min',
    path: urlPath,
    filePath: relativePath
  };
}

function parseDate(dateStr) {
  // Handle various date formats
  if (!dateStr) return null;

  // Try parsing different formats
  const formats = [
    /^(\w+) (\d+), (\d+)$/, // "May 23, 2026"
    /^(\d+)-(\d+)-(\d+)$/,  // "2026-05-23"
  ];

  for (const format of formats) {
    const match = dateStr.match(format);
    if (match) {
      if (format === formats[0]) {
        // Month Day, Year
        const month = match[1];
        const day = parseInt(match[2]);
        const year = parseInt(match[3]);
        return new Date(`${month} ${day}, ${year}`);
      } else if (format === formats[1]) {
        // YYYY-MM-DD
        return new Date(dateStr);
      }
    }
  }

  // Fallback to Date parsing
  return new Date(dateStr);
}

function groupByMonthYear(entries) {
  const grouped = {};

  entries.forEach(entry => {
    const date = parseDate(entry.date);
    if (!date || isNaN(date)) return;

    const monthYear = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    const dayMonth = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    if (!grouped[monthYear]) {
      grouped[monthYear] = {};
    }

    if (!grouped[monthYear][dayMonth]) {
      grouped[monthYear][dayMonth] = [];
    }

    grouped[monthYear][dayMonth].push({
      ...entry,
      dateObj: date
    });
  });

  return grouped;
}

function generateTimelineMarkdown() {
  const files = getAllMdxFiles(PAGES_DIR);
  const entries = files
    .map(extractMetadata)
    .filter(entry => entry.date) // Only include entries with dates
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA; // Newest first
    });

  const grouped = groupByMonthYear(entries);

  let markdown = `---
title: 'Timeline'
description: 'A chronological view of the Goalixa journey - from initial architecture decisions to incident responses and future planning'
---

import TimelinePage from '../components/TimelinePage'
import TimelineFilters from '../components/TimelineFilters'

<TimelinePage>

<TimelineFilters />

---

`;

  // Sort months descending
  const months = Object.keys(grouped).sort((a, b) => {
    return new Date(b) - new Date(a);
  });

  months.forEach(monthYear => {
    markdown += `## ${monthYear}\n\n`;

    const days = Object.keys(grouped[monthYear]).sort((a, b) => {
      return new Date(b) - new Date(a);
    });

    days.forEach(dayMonth => {
      const dayEntries = grouped[monthYear][dayMonth];

      markdown += `### ${dayMonth}\n\n`;

      dayEntries.forEach(entry => {
        const colors = categoryColors[entry.category] || { bg: '#e5e7eb', color: '#374151' };

        markdown += `[**${entry.title}**](${entry.path})\n`;
        markdown += `<span style={{ background: '${colors.bg}', color: '${colors.color}', padding: '3px 9px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>${entry.category}</span>\n`;
        markdown += `<span style={{ marginLeft: '8px', color: '#64748b', fontSize: '0.85rem' }}>🕐 ${entry.readTime}</span>\n\n`;
        markdown += `---\n\n`;
      });
    });
  });

  markdown += `## Timeline Categories

- **Platform** - System design, microservices, API Gateway, patterns
- **Infrastructure** - DevOps, monitoring, Kubernetes, GitOps
- **Software Engineering** - Development practices, AI-assisted coding, lessons learned
- **Incident Report** - Production issues, root cause analysis, resolutions
- **Goalixa Story** - Personal journey, challenges, learning experiences

---

*Want the narrative version? See the [Journey page](/journey) for the full story format.*

</TimelinePage>
`;

  return markdown;
}

// Main execution
try {
  const timelineContent = generateTimelineMarkdown();
  fs.writeFileSync(TIMELINE_FILE, timelineContent);
  console.log('✅ Timeline generated successfully!');
  console.log(`📝 Updated: ${TIMELINE_FILE}`);
} catch (error) {
  console.error('❌ Error generating timeline:', error);
  process.exit(1);
}
