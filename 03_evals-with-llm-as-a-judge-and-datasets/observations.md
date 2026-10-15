# Observations · 03 Evals with LLM-as-a-judge and datasets

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**Have the judge pick a category, not a number.** The factuality judge (prompt from autoevals) picks one of five verdicts, like "subset of the expert answer", and the code maps each to a score. A category is easier for a model to choose consistently than a number, and the scoring stays in your code.

**Score relevancy statement by statement.** The answer is split into statements, each rated yes, unsure or no, and the score is the average. The verdicts are kept with the score, so you can see which part went off-topic.

**Expected answers go stale.** DEV asks about current versions (TypeScript, Next.js 15), dated "12 Aug 2025" in `dev.ts`; CI and regression use stable topics (TDD, DDD). Date time-sensitive cases, or keep long-lived checks on stable topics.

**Judge with a different model than the agent.** The judges have their own exports in `src/models/index.ts` but still point at the agent's model, so they may share its blind spots. Changing one line there swaps them.
