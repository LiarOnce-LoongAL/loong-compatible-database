import { fileURLToPath } from 'url'
import path from "path";

let dest = path.resolve(path.dirname(fileURLToPath(import.meta.url)))
console.log(dest)