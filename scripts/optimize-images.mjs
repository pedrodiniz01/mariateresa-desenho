import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");
const MAX_WIDTH = 1600;
const QUALITY = 80;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

const entries = await fs.readdir(ASSETS_DIR, { withFileTypes: true });
const images = entries
  .filter((e) => e.isFile() && EXTENSIONS.has(path.extname(e.name).toLowerCase()))
  .map((e) => e.name)
  .sort();

let savedBytes = 0;

for (const name of images) {
  const inputPath = path.join(ASSETS_DIR, name);
  const base = name.replace(/\.(jpe?g|png)$/i, "");
  const outputPath = path.join(ASSETS_DIR, `${base}.webp`);

  const inputStat = await fs.stat(inputPath);
  const image = sharp(inputPath, { failOn: "none" });
  const meta = await image.metadata();

  let pipeline = sharp(inputPath, { failOn: "none" }).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality: QUALITY, effort: 4 }).toFile(outputPath);

  const outputStat = await fs.stat(outputPath);
  const delta = inputStat.size - outputStat.size;
  savedBytes += Math.max(delta, 0);

  const inKb = (inputStat.size / 1024).toFixed(0);
  const outKb = (outputStat.size / 1024).toFixed(0);
  const dims = `${meta.width ?? "?"}x${meta.height ?? "?"}`;
  console.log(`${name} (${dims}, ${inKb} KB) → ${base}.webp (${outKb} KB)`);
}

console.log(`\nSaved ~${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
