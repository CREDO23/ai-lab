const CHUNK_PUBLIC_PATH = "server/instrumentation.js";
const runtime = require("./chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules__pnpm_d4a3073d._.js");
runtime.loadChunk("server/chunks/[root-of-the-server]__85c52d68._.js");
runtime.getOrInstantiateRuntimeModule("[project]/src/instrumentation.ts [instrumentation] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/instrumentation.ts [instrumentation] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
