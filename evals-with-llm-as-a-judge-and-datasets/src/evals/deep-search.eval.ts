import { evalite } from "evalite";
import type { Message } from "ai";
import { askDeepSearch } from "~/app/api/services/deep-search.service";
import { factualityScorer } from "./scrorers/factuality-scorer";
import { sourceLinksScorer } from "./scrorers/source-links-scorer";
import { devDataSet } from "./dev";
import { env } from "~/env";
import { CIDataSet } from "./ci";
import { regressionDataSet } from "./regression";

const data = devDataSet;


if (env.EVAL_DATASET === "CI") {
  // If CI, add the CI data
  data.push(...CIDataSet);
} else if (env.EVAL_DATASET === "REGRESSION") {
  // If Regression, add the regression data AND the CI data
  data.push(...CIDataSet, ...regressionDataSet);
}

evalite(`Deep search eval, ${env.EVAL_DATASET} dataset`, {
  data: async (): Promise<{ input: string; expected: string }[]> => {
    return [
      {
        input:
          "Define a Bounded Context in DDD and explain how it differs from (or relates to) a microservice. Keep it short.",
        expected: `A Bounded Context is the explicit boundary within which a domain model and its Ubiquitous Language are
         consistent. Teams split large domains into multiple bounded contexts and map relationships between them. 
         A microservice often implements one bounded context, but the mapping is not strictly 1:1—one context can be
          split across services or several contexts can live in one service depending on design and operational needs.`,
      },
      {
        input:
          "A change must touch multiple aggregates. Which DDD pattern should you use to coordinate it, and what consistency trade-off does it imply?",
        expected: `Use Domain Events to propagate and handle side effects across aggregates. Model the initial change in one aggregate, 
        publish a domain event, and react in other aggregates. This favors eventual consistency instead of a single distributed ACID transaction.`,
      },
    ];
  },
  task: async (input) => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: input,
      },
    ];
    return askDeepSearch(messages);
  },
  scorers: [sourceLinksScorer, factualityScorer],
});
