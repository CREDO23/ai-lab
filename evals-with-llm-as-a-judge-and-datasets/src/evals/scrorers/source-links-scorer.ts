import { createScorer } from "evalite";

export const sourceLinksScorer = createScorer<string, string, string>({
  name: "Contains Links",
  description: "The response contains at least one markdown link",
  scorer: async ({ output }) => {
    const links = output.match(/\[.*\]\(.*\)/g) ?? [];

    return {
      score: links.length > 0 ? 1 : 0,
    };
  },
});
