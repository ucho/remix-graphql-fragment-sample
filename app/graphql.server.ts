import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  process.env.GRAPHQL_ENDPOINT ?? ""
);
