# Observations · 03 Evals with LLM-as-a-judge and datasets

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

---

The factuality judge doesn't ask the model for a number. The model picks one of five categories (prompt taken from autoevals), and the code maps each category to a fixed score.

---

Answer relevancy is scored statement by statement: the answer is split into statements, each one gets yes, unsure or no, and the score is the average.

---

The datasets are split by purpose. DEV questions are about current versions (TypeScript, Next.js 15), so their expected answers are dated and go stale. CI and regression questions are about stable concepts (TDD, DDD).

---

The judge models are separate exports from the agent model, so a different model can be used as the judge. For now they all point to the same model.
