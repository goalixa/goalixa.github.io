#!/usr/bin/env node
/**
 * Link Validation Script
 * Validates all internal links in React components against actual built files
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');
const COMPONENTS_DIR = path.join(__dirname, 'components');

// Extract all href attributes from a file
function extractHrefs(content) {
  const hrefPattern = /href="([^"]+)"/g;
  const hrefs = [];
  let match;

  while ((match = hrefPattern.exec(content)) !== null) {
    const href = match[1];
    // Only check internal links (not external URLs)
    if (!href.startsWith('http') && !href.startsWith('mailto:')) {
      hrefs.push(href);
    }
  }

  return hrefs;
}

// Check if a path exists in the out directory
function checkPathExists(href) {
  // Remove leading slash
  const cleanPath = href.startsWith('/') ? href.slice(1) : href;

  // Try multiple variations
  const variations = [
    path.join(OUT_DIR, cleanPath, 'index.html'),
    path.join(OUT_DIR, cleanPath + '.html'),
    path.join(OUT_DIR, cleanPath),
  ];

  for (const varPath of variations) {
    if (fs.existsSync(varPath)) {
      return { exists: true, path: varPath };
    }
  }

  return { exists: false, path: variations[0] };
}

// Main validation
function validateLinks() {
  console.log('🔍 Validating Blog Links\n');
  console.log('=' .repeat(80));

  const componentFiles = [
    'WelcomePage.jsx',
    'AboutPage.jsx',
    'JourneyPage.jsx',
    'AllPostsPage.jsx',
    'ArchitecturePage.jsx',
    'TimelinePage.jsx'
  ];

  const allLinks = new Map();
  const brokenLinks = [];

  // Extract links from each component
  componentFiles.forEach(file => {
    const filePath = path.join(COMPONENTS_DIR, file);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Component not found: ${file}`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const hrefs = extractHrefs(content);

    console.log(`\n📄 ${file}`);
    console.log('-'.repeat(80));

    hrefs.forEach(href => {
      if (!allLinks.has(href)) {
        allLinks.set(href, []);
      }
      allLinks.get(href).push(file);

      const result = checkPathExists(href);

      if (result.exists) {
        console.log(`  ✅ ${href}`);
      } else {
        console.log(`  ❌ ${href} (NOT FOUND)`);
        brokenLinks.push({ href, file, expectedPath: result.path });
      }
    });
  });

  // Summary
  console.log('\n');
  console.log('=' .repeat(80));
  console.log('📊 SUMMARY');
  console.log('=' .repeat(80));
  console.log(`Total unique links found: ${allLinks.size}`);
  console.log(`Broken links: ${brokenLinks.length}`);

  if (brokenLinks.length > 0) {
    console.log('\n❌ BROKEN LINKS REPORT:');
    console.log('=' .repeat(80));

    brokenLinks.forEach(({ href, file, expectedPath }) => {
      console.log(`\n🔴 ${href}`);
      console.log(`   Used in: ${file}`);
      console.log(`   Expected: ${expectedPath}`);
    });

    console.log('\n');
    return 1; // Exit with error
  } else {
    console.log('\n✅ All links are valid!');
    return 0;
  }
}

// Run validation
const exitCode = validateLinks();
process.exit(exitCode);
