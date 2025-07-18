const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { Client } = require("@notionhq/client");

// Load environment config
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const notionToken = process.env.GATSBY_NOTION_TOKEN;
if (!notionToken) throw new Error("❌ GATSBY_NOTION_TOKEN is missing.");

const notion = new Client({ auth: notionToken });

const DATABASE_IDS = process.env.GATSBY_NOTION_DATABASES
  ? process.env.GATSBY_NOTION_DATABASES.split(",").map((id) => id.trim())
  : [];

if (!DATABASE_IDS.length) {
  throw new Error("❌ GATSBY_NOTION_DATABASES is missing or empty.");
}

const OUTPUT_DIR = path.join(__dirname, "..", "static", "notion-images");
const MANIFEST_PATH = path.join(OUTPUT_DIR, "notion-image-map.json");

const imageMap = fs.existsSync(MANIFEST_PATH)
  ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"))
  : {};

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
  const buffer = await res.buffer();
  await fsPromises.writeFile(filepath, buffer);
}

async function getAllPages(databaseId) {
  const pages = [];
  let cursor;

  do {
    const res = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    });
    pages.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return pages;
}

async function processDatabase(dbId) {
  try {
    const pages = await getAllPages(dbId);
    console.log(`📘 Processing ${pages.length} pages in database: ${dbId}`);

    for (const page of pages) {
      const pageId = page.id.replace(/-/g, "");
      const pictureProp = page.properties?.Picture;

      if (
        pictureProp?.type === "files" &&
        Array.isArray(pictureProp.files) &&
        pictureProp.files.length > 0
      ) {
        const file = pictureProp.files[0];
        const url =
          file.type === "external" ? file.external.url : file.file.url;

        try {
          const { pathname } = new URL(url);
          const ext = path.extname(pathname).split("?")[0] || ".jpg";
          const cleanExt = ext.replace(/^\./, "").toLowerCase();
          const filename = `notion-${pageId}-0.${cleanExt}`;
          const filepath = path.join(OUTPUT_DIR, filename);

          if (fs.existsSync(filepath)) {
            console.log(`⚠️  Skipping download, file already exists: ${filename}`);
          } else {
            console.log(`⬇️  Downloading image for page ${pageId} → ${filename}`);
            await downloadImage(url, filepath);
          }

          imageMap[page.id] = cleanExt;
        } catch (err) {
          console.warn(`❌ Failed to process image for ${pageId}: ${err.message}`);
        }
      } else {
        console.log(`ℹ️ No Picture found for page: ${pageId}`);
      }
    }
  } catch (err) {
    console.error(`❌ Failed to process database ${dbId}: ${err.message}`);
  }
}

async function fetchImages() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const dbId of DATABASE_IDS) {
      await processDatabase(dbId);
    }

    await fsPromises.writeFile(MANIFEST_PATH, JSON.stringify(imageMap, null, 2));
    console.log(`✅ Wrote image manifest to ${MANIFEST_PATH}`);
  } catch (err) {
    console.error("❌ Fatal error during fetchImages:", err);
  }
}

fetchImages();
