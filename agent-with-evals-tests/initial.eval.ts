import { evalite } from "evalite";
import { Levenshtein } from "autoevals";
import type { Message } from "ai";
import { askDeepSearch } from "~/app/api/services/deep-search.service";

evalite("Deep search eval", {
  data: async (): Promise<{ input: Message[] }[]> => {
    return [
      {
        input: [
          {
            id: "1",
            role: "user",
            content: "What is the latest version of TypeScript?",
          },
        ],
      },
      {
        input: [
          {
            id: "2",
            role: "user",
            content: "What are the main features of Next.js 14?",
          },
        ],
      },
    ];
  },
  task: async (input) => {
    return askDeepSearch(input);
  },
  scorers: [
    {
        name : "Contains Links",
        description : "The response contains at least one markdown link",
        scorer : ({output}) => {

            const links = output.match(/\[.*\]\(.*\)/g) ?? [];

            return  links.length > 0 ? 1 : 0;
        }
    }
  ],
});
