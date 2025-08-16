export const CIDataSet = [
  {
    input:
      "Does Test-Driven Development (TDD) only apply to unit tests? Explain briefly.",
    expected: `No. TDD is a design workflow that applies across levels: unit tests (code-level behavior),
           component/integration tests (collaboration between modules), and acceptance/end-to-end tests
            (user-facing behavior, often called ATDD/BDD). The core loop stays the same at every
             level: write a failing test (red), make it pass with the simplest change (green),
              then refactor safely while keeping tests passing (refactor).`,
  },
  {
    input:
      "List the core benefits TDD brings to a software team—keep it concise.",
    expected: `1) Clear, testable designs. 2) Fast feedback and fewer regressions. 3)
         Safe refactoring with executable specs. 4) Better cohesion/looser coupling via seams.
          5) Living documentation that supports onboarding and maintenance.`,
  },
];
