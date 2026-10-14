import { evalite } from "evalite";
import type { Message } from "ai";
import { askDeepSearch } from "~/app/api/services/deep-search.service";
import { sourceLinksJudge } from "./judges/source-links.judge";
import { devDataSet } from "./dev";
import { env } from "~/env";
import { CIDataSet } from "./ci";
import { regressionDataSet } from "./regression";
import { factualityJudge } from "./judges/factuality.judge";
import { answerRelevancyJudge } from "./judges/answer-relevancy.judge";

// DEV runs the dev data, CI adds the CI data,
// REGRESSION adds the CI data AND the regression data
const datasets = {
  DEV: devDataSet,
  CI: [...devDataSet, ...CIDataSet],
  REGRESSION: [...devDataSet, ...CIDataSet, ...regressionDataSet],
};

evalite(`Deep search eval, ${env.EVAL_DATASET} dataset`, {
  data: async (): Promise<{ input: string; expected: string }[]> => {
    return datasets[env.EVAL_DATASET];
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
  scorers: [sourceLinksJudge, factualityJudge, answerRelevancyJudge],
});
