#!/usr/bin/env node

/**
 * Generate posts data for dynamic AllPostsPage
 * Run: node scripts/generate-posts-data.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const PAGES_DIR = path.join(__dirname, '../pages');
const OUTPUT_FILE = path.join(__dirname, '../data/posts.json');

// Directories to scan for posts
const CONTENT_DIRS = [
  'infrastructure',
  'platform',
  'software-engineering',
  'posts',
  'services'
];

function getAllMdxFiles(dir, fileList = [], baseDir = dir) {
  if (!fs.existsSync(dir)) return fileList;

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        getAllMdxFiles(filePath, fileList, baseDir);
      }
    } else if (file.endsWith('.mdx') && file !== 'index.mdx') {
      fileList.push({ path: filePath, baseDir });
    }
  });

  return fileList;
}

function extractPostData(filePath, baseDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, excerpt } = matter(content, { excerpt: true });

  // Get relative path from base directory
  const relativePath = path.relative(baseDir, filePath).replace(/\.mdx$/, '');
  const urlPath = '/' + path.relative(PAGES_DIR, filePath).replace(/\.mdx$/, '');

  // Extract category from path
  let category = 'Uncategorized';
  const pathParts = urlPath.split('/').filter(p => p);

  if (pathParts[0] === 'infrastructure') {
    if (pathParts.includes('security')) category = 'Security';
    else if (pathParts.includes('cicd')) category = 'CI/CD';
    else if (pathParts.includes('observability')) category = 'Observability';
    else if (pathParts.includes('kubernetes')) category = 'Kubernetes';
    else if (pathParts.includes('incident-reports')) category = 'Incident Reports';
    else category = 'Infrastructure';
  } else if (pathParts[0] === 'platform') {
    category = 'Platform';
  } else if (pathParts[0] === 'software-engineering') {
    category = 'Software Engineering';
  } else if (pathParts[0] === 'posts') {
    if (pathParts[1] === 'goalixa-story') category = 'Goalixa Story';
    else if (pathParts[1] === 'gitops') category = 'GitOps';
    else if (pathParts[1] === 'ai') category = 'AI & Automation';
    else if (pathParts[1] === 'monthly-recaps') category = 'Monthly Recaps';
    else category = pathParts[1] || 'Posts';
  } else if (pathParts[0] === 'services') {
    category = 'Services';
  }

  // Override with frontmatter category if exists
  if (data.category) {
    category = data.category;
  }

  // Parse date
  let dateObj = null;
  let dateStr = null;
  if (data.date) {
    dateStr = data.date;
    dateObj = parseDate(data.date);
  }

  // Extract description from content or frontmatter
  let description = data.description || excerpt || '';
  if (!description && content) {
    // Try to get first paragraph after title
    const lines = content.split('\n');
    for (let line of lines) {
      line = line.trim();
      if (line && !line.startsWith('#') && !line.startsWith('import') && !line.startsWith('<') && !line.startsWith('---')) {
        description = line.substring(0, 150);
        break;
      }
    }
  }

  return {
    title: data.title || path.basename(filePath, '.mdx'),
    description,
    category,
    date: dateStr,
    dateObj,
    readTime: data.readTime || '5 min',
    path: urlPath,
    slug: path.basename(filePath, '.mdx')
  };
}

function parseDate(dateStr) {
  if (!dateStr) return null;

  const formats = [
    /^(\w+) (\d+), (\d+)$/,
    /^(\d+)-(\d+)-(\d+)$/,
  ];

  for (const format of formats) {
    const match = dateStr.match(format);
    if (match) {
      if (format === formats[0]) {
        return new Date(`${match[1]} ${match[2]}, ${match[3]}`);
      } else if (format === formats[1]) {
        return new Date(dateStr);
      }
    }
  }

  return new Date(dateStr);
}

function groupByCategory(posts) {
  const grouped = {};

  posts.forEach(post => {
    const category = post.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(post);
  });

  return grouped;
}

function generatePostsData() {
  let allPosts = [];

  // Scan each content directory
  CONTENT_DIRS.forEach(dir => {
    const dirPath = path.join(PAGES_DIR, dir);
    const files = getAllMdxFiles(dirPath, [], dirPath);
    const posts = files.map(({ path: filePath, baseDir }) =>
      extractPostData(filePath, baseDir)
    );
    allPosts = allPosts.concat(posts);
  });

  // Sort by date (newest first)
  allPosts.sort((a, b) => {
    if (!a.dateObj) return 1;
    if (!b.dateObj) return -1;
    return b.dateObj - a.dateObj;
  });

  // Group by category
  const byCategory = groupByCategory(allPosts);

  // Calculate category stats
  const categories = Object.keys(byCategory).map(name => ({
    name,
    count: byCategory[name].length,
    posts: byCategory[name],
    description: getCategoryDescription(name)
  })).sort((a, b) => b.count - a.count);

  return {
    posts: allPosts,
    categories,
    byCategory,
    total: allPosts.length,
    lastUpdated: new Date().toISOString()
  };
}

function getCategoryDescription(category) {
  const descriptions = {
    'Platform': 'System architecture, microservices, and platform engineering',
    'Infrastructure': 'DevOps, Kubernetes, and infrastructure automation',
    'CI/CD': 'GitOps, ArgoCD, and deployment automation',
    'Observability': 'Monitoring, metrics, and system visibility',
    'Security': 'Zero Trust, access control, and security practices',
    'Software Engineering': 'Development practices and engineering lessons',
    'Goalixa Story': 'The personal journey of building Goalixa',
    'GitOps': 'ArgoCD, deployment automation, and infrastructure as code',
    'AI & Automation': 'AI-powered DevOps and intelligent automation',
    'Incident Reports': 'Production incidents and post-mortem analyses',
    'Monthly Recaps': 'Monthly progress updates and reflections',
    'Services': 'Goalixa platform microservices documentation',
    'Kubernetes': 'Kubernetes cluster management and operations'
  };

  return descriptions[category] || `Articles about ${category}`;
}

// Main execution
try {
  console.log('📝 Scanning for posts...');
  const data = generatePostsData();

  // Ensure data directory exists
  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));

  console.log('✅ Posts data generated successfully!');
  console.log(`📊 Total posts: ${data.total}`);
  console.log(`📁 Categories: ${data.categories.length}`);
  console.log(`📝 Output: ${OUTPUT_FILE}`);

  // Show category breakdown
  console.log('\n📂 Category Breakdown:');
  data.categories.forEach(cat => {
    console.log(`   ${cat.name}: ${cat.count} posts`);
  });

} catch (error) {
  console.error('❌ Error generating posts data:', error);
  process.exit(1);
}
