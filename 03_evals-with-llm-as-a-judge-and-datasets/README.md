# 03 · Evals with LLM-as-a-judge and datasets

**Goal:** score answers against expected answers with LLM judges, and organise the eval questions into datasets.

## What changed from [02](../02_agent-with-evals-tests/)

- Evals moved to [`src/evals/`](src/evals/). [`deep-search.eval.ts`](src/evals/deep-search.eval.ts) scores each answer with three scorers: the link check from 02, a factuality judge and an answer-relevancy judge.
- **Factuality judge:** a model compares the answer with an expert answer and picks one of five categories (prompt taken from autoevals). Each category maps to a fixed score.
- **Answer-relevancy judge:** a model splits the answer into statements, then marks each one relevant, unsure or not relevant. The score is the average.
- Three datasets: [`dev.ts`](src/evals/dev.ts) has questions about current versions, [`ci.ts`](src/evals/ci.ts) is about TDD and [`regression.ts`](src/evals/regression.ts) is about DDD. `EVAL_DATASET` picks the set: `DEV` runs dev (2 questions), `CI` adds CI (4), and `REGRESSION` adds CI and regression (6).
- The judge models are separate exports in [`src/models/index.ts`](src/models/index.ts). For now they use the same `gemini-2.0-flash-001` model as the agent.
- The number of Serper results comes from `SEARCH_RESULTS_COUNT` (default 10) instead of being hard-coded.
- Vitest timeouts are raised to 1 hour for long eval runs.

> In the original version of this stage, `EVAL_DATASET` had no effect: the eval always ran the two regression questions. That was fixed later in every stage that has this eval (03–06).

## Key files

- [`src/evals/deep-search.eval.ts`](src/evals/deep-search.eval.ts): dataset selection and scorers
- [`src/evals/judges/factuality.judge.ts`](src/evals/judges/factuality.judge.ts), [`answer-relevancy.judge.ts`](src/evals/judges/answer-relevancy.judge.ts), [`source-links.judge.ts`](src/evals/judges/source-links.judge.ts): the judges
- [`src/evals/dev.ts`](src/evals/dev.ts), [`ci.ts`](src/evals/ci.ts), [`regression.ts`](src/evals/regression.ts): the datasets
- [`src/models/index.ts`](src/models/index.ts): agent and judge models

## How to run

Follow [How to run a stage](../README.md#how-to-run-a-stage) in the root README, inside this folder. Then:

```bash
EVAL_DATASET=CI pnpm evals   # DEV, CI or REGRESSION
```

`EVAL_DATASET` is also required to start the app. The expected answers in `dev.ts` were written in August 2025, so factuality scores on them will drop as new versions come out.

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
