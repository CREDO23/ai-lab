# Observations · 03 Evals with LLM-as-a-judge and datasets

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**I had the judge pick a category, not a number.** The factuality judge (prompt from autoevals) picks one of five verdicts, like "subset of the expert answer", and the code maps each to a score. A category seems easier for a model to choose consistently than a number, and the scoring stays in my code.

**Scoring relevancy per statement shows what went off-topic.** The answer is split into statements, each rated yes, unsure or no, and the score is the average. The verdicts are kept with the score, so I can see which part drifted.

**Expected answers go stale.** DEV asks about current versions (TypeScript, Next.js 15), dated "12 Aug 2025" in `dev.ts`; CI and regression use stable topics (TDD, DDD). Next time I'd date time-sensitive cases, or keep long-lived checks on stable topics.

**The judge should probably be a different model.** The judges have their own exports in `src/models/index.ts` but still point at the agent's model, so they may share its blind spots. Changing one line there swaps them.
