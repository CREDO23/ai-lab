# Observations · 00 Naive agent

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**Storing AI SDK messages as JSON is quick, but it ties your data to the SDK version.** `message.parts` goes straight into a JSON column (`message.ts`): no mapping code, and new tools need no schema change. But AI SDK 5 changed the format (tool calls became `tool-<name>` parts, `args`/`result` became `input`/`output`), so upgrading means [migrating every stored chat](https://ai-sdk.dev/docs/migration-guides/migration-guide-5-0-data). For data you keep, convert to and from the SDK format in one function, so an upgrade changes that function, not every row.
