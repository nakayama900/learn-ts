import {
  constructURL,
  merge,
  isValidURL,
  parse,
  download,
} from "google-fonts-helper";
import path from 'node:path';
import fs from 'node:fs';
import process from 'node:process'

const current = process.cwd()


const outputDir = path.join(current, "static");
const fontsDir = "font"
const noto_URL = constructURL({ families: { "Noto Sans JP": true } })

await fs.promises.mkdir(path.join(outputDir, fontsDir), { recursive: true })
if (noto_URL == false) {
  throw new Error("Invalid font identifier");
  // process.exit(1)
}
const downloader = download(
  noto_URL,
  {
    outputDir,
    fontsDir
  }
)
await downloader.execute()