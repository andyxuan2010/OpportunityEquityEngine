import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const docsRoot = resolve(root, "docs");
const outputPath = resolve(docsRoot, "docs-index.json");

const categoryTitles = new Map([
  ["00-start-here", "Start here"],
  ["01-initiative", "Initiative and vision"],
  ["02-architecture", "Architecture"],
  ["03-student-guides", "Student guides"],
  ["04-delivery", "Delivery plan"],
  ["05-build", "Build guide"],
  ["06-demo", "Demo deliverables"],
  ["07-research-and-validation", "Research and validation"],
  ["08-student-toolkit", "Student toolkit"],
  ["09-showcase-and-reflection", "Showcase and reflection"],
  ["10-opportunity-sources", "Opportunity resources"]
]);

const articleTypeLabels = new Map([
  ["architecture", "Architecture"],
  ["guide", "Guide"],
  ["reference", "Reference"]
]);

const isLocalized = file => /\.(?:CN|FR)\.md$/i.test(file);
const isMarkdown = file => file.toLowerCase().endsWith(".md");
const normalizePath = file => relative(docsRoot, file).split(sep).join("/");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  const metadata = {};
  if (!match) return { metadata, body: source };
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (field) metadata[field[1]] = field[2].trim().replace(/^['"]|['"]$/g, "");
  }
  return { metadata, body: source.slice(match[0].length) };
}

function stripMarkdown(value) {
  return String(value)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_>#|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function summaryFor(body, title) {
  const paragraph = body
    .split(/\r?\n\s*\r?\n/)
    .map(value => ({ raw: value.trim(), clean: stripMarkdown(value) }))
    .find(value => value.clean.length >= 30 && !/^#{1,6}\s/.test(value.raw) && !value.raw.startsWith("---"))?.clean;
  const summary = paragraph || `Practical guidance for ${title}.`;
  return summary.length <= 220 ? summary : `${summary.slice(0, 217).replace(/\s+\S*$/, "")}…`;
}

function getArticleType(folder, title) {
  const value = `${folder} ${title}`.toLowerCase();
  if (folder === "02-architecture" || /architecture/.test(value)) return "architecture";
  if (/600|source|catalog/.test(value)) return "reference";
  return "guide";
}

function slugFor(file) {
  return basename(file, ".md")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function tagsFor(folder, title) {
  const tags = `${folder} ${title}`
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(token => token.length > 2 && !["and", "the", "for", "with", "from"].includes(token));
  return [...new Set(tags)].slice(0, 8).concat(tags.length < 2 ? ["opportunity", "students"] : []).slice(0, 8);
}

const englishFiles = walk(docsRoot)
  .filter(file => isMarkdown(file) && !isLocalized(file))
  .filter(file => !/^INDEX\.md$/i.test(basename(file)))
  .filter(file => categoryTitles.has(basename(dirname(file))));

const articles = englishFiles.map((file, index) => {
  const folder = basename(dirname(file));
  const { metadata, body } = parseFrontmatter(readFileSync(file, "utf8"));
  const slug = slugFor(file);
  const localized = {};
  for (const [language, suffix] of [["zh", "CN"], ["fr", "FR"]]) {
    const localizedFile = file.replace(/\.md$/i, `.${suffix}.md`);
    if (!existsSync(localizedFile)) continue;
    const parsed = parseFrontmatter(readFileSync(localizedFile, "utf8"));
    localized[language] = {
      path: normalizePath(localizedFile),
      title: parsed.metadata.title || metadata.title,
      summary: summaryFor(parsed.body, parsed.metadata.title || metadata.title),
      tags: tagsFor(folder, parsed.metadata.title || metadata.title),
      readMinutes: Math.max(1, Math.ceil(stripMarkdown(parsed.body).split(/\s+/).filter(Boolean).length / 220))
    };
  }
  const articleType = getArticleType(folder, metadata.title || slug);
  return {
    slug,
    legacySlugs: [],
    title: metadata.title || slug,
    summary: summaryFor(body, metadata.title || slug),
    tags: tagsFor(folder, metadata.title || slug),
    articleType,
    articleTypeLabel: articleTypeLabels.get(articleType) || articleType,
    documentId: `OEE-${String(index + 1).padStart(2, "0")}`,
    lastUpdated: "2026-09-09",
    reviewStatus: "machine-validated",
    reviewCadence: "annual",
    reviewDate: "",
    decisionStatus: "active",
    supersedes: [],
    relatedDocumentIds: [],
    readMinutes: Math.max(1, Math.ceil(stripMarkdown(body).split(/\s+/).filter(Boolean).length / 220)),
    searchText: stripMarkdown(`${metadata.title || slug} ${body}`).slice(0, 6000),
    relatedSlugs: [],
    backlinkSlugs: [],
    status: "published",
    order: 0,
    category: categoryTitles.get(folder),
    categoryFolder: folder,
    path: normalizePath(file),
    localized
  };
});

const categories = [...categoryTitles.entries()].map(([folder, title], index) => ({
  folder,
  title,
  order: index + 1,
  count: articles.filter(article => article.categoryFolder === folder).length
}));

for (const category of categories) {
  articles
    .filter(article => article.categoryFolder === category.folder)
    .forEach((article, index) => { article.order = (index + 1) * 10; });
}

for (const article of articles) {
  article.relatedSlugs = articles
    .filter(candidate => candidate.categoryFolder === article.categoryFolder && candidate.slug !== article.slug)
    .map(candidate => candidate.slug)
    .slice(0, 3);
}

writeFileSync(outputPath, `${JSON.stringify({ generatedBy: "scripts/generate-oee-docs-index.mjs", categories, articles }, null, 2)}\n`, "utf8");
console.log(`Generated ${articles.length} articles across ${categories.length} categories.`);
