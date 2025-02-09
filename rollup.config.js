import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

import { terser } from "rollup-plugin-terser";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: "src/index.svelte",
  output: [
    { file: `dist/${pkg.module}`, format: "es" },
    { file: `dist/${pkg.main}`, format: "umd", name }
  ],
  plugins: [terser(), svelte({ customElement: true }), resolve()]
};
