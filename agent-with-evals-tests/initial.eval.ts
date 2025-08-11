import { evalite } from "evalite";
import { Levenshtein } from "autoevals";

evalite("My Eval", {
  // A function that returns an array of test data
  // - TODO: Replace with my test data
  data: async () => {
    return [
      { input: "Hello", expected: "Hello World!" },
    ];
  },
  // The task to perform
  // - TODO: Replace with my LLM call
  task: async (input) => {
    return input + " World!";
  },
  // The scoring methods for the eval
  scorers: [Levenshtein],
});