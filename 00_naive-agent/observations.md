# Observations · 00 Naive agent

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

---

The best way I've currently found to store messages in the database is to store them as a JSON blob. I find this pretty dangerous, because the shape of your database then has a dependency on what the AI SDK expects.
