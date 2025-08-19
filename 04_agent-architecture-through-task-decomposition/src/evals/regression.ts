export const regressionDataSet = [
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
