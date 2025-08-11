(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__372757bf._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "register": ()=>register
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$otel$40$1$2e$13$2e$0_$40$opentelemetry$2b$api$2d$logs$40$0$2e$203$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$opentelemetry$2b$i_nqgs6r6xu3kzxtofzivkhft2bu$2f$node_modules$2f40$vercel$2f$otel$2f$dist$2f$edge$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+otel@1.13.0_@opentelemetry+api-logs@0.203.0_@opentelemetry+api@1.9.0_@opentelemetry+i_nqgs6r6xu3kzxtofzivkhft2bu/node_modules/@vercel/otel/dist/edge/index.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langfuse$2d$vercel$40$3$2e$38$2e$4_ai$40$4$2e$3$2e$19_react$40$18$2e$3$2e$1_zod$40$3$2e$25$2e$76_$2f$node_modules$2f$langfuse$2d$vercel$2f$lib$2f$index$2e$mjs__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langfuse-vercel@3.38.4_ai@4.3.19_react@18.3.1_zod@3.25.76_/node_modules/langfuse-vercel/lib/index.mjs [instrumentation-edge] (ecmascript)");
;
;
function register() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$otel$40$1$2e$13$2e$0_$40$opentelemetry$2b$api$2d$logs$40$0$2e$203$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$opentelemetry$2b$i_nqgs6r6xu3kzxtofzivkhft2bu$2f$node_modules$2f40$vercel$2f$otel$2f$dist$2f$edge$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["registerOTel"])({
        serviceName: "langfuse-deep-search",
        traceExporter: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langfuse$2d$vercel$40$3$2e$38$2e$4_ai$40$4$2e$3$2e$19_react$40$18$2e$3$2e$1_zod$40$3$2e$25$2e$76_$2f$node_modules$2f$langfuse$2d$vercel$2f$lib$2f$index$2e$mjs__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["LangfuseExporter"]({
            environment: ("TURBOPACK compile-time value", "development")
        })
    });
}
}),
"[project]/edge-wrapper.js { MODULE => \"[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)\" } [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i("[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__372757bf._.js.map