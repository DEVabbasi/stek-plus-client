const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "node_modules", "occt-import-js", "dist");
const destDir = path.join(root, "public", "occt");

const files = ["occt-import-js.js", "occt-import-js.wasm"];

try {
  if (!fs.existsSync(srcDir)) {
    console.warn("occt-import-js not found. Run npm install first.");
    process.exit(0);
  }

  fs.mkdirSync(destDir, { recursive: true });

  for (const file of files) {
    const src = path.join(srcDir, file);
    const dest = path.join(destDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    } else {
      console.warn(`Missing ${file} in occt-import-js dist.`);
    }
  }

  console.log("occt-import-js assets copied to public/occt");
} catch (err) {
  console.error("Failed to copy occt-import-js assets:", err);
  process.exit(1);
}
