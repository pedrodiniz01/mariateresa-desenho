import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public", "logo.svg"));

for (const size of [1200, 512, 128]) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: "Georgia",
    },
  });
  const file = join(root, "public", size === 1200 ? "logo-google.png" : `logo-${size}.png`);
  writeFileSync(file, resvg.render().asPng());
  console.log(`Wrote ${file} (${size}x${size})`);
}
