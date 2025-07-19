import { registerOTel } from "@vercel/otel";
import { LangfuseExporter } from "langfuse-vercel";

export function register() {
  registerOTel({
    serviceName: "langfuse-deep-search",
    traceExporter: new LangfuseExporter({
        environment: process.env.NODE_ENV,
    }),
  });
}