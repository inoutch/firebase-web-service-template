import { Resolvers } from "@example/graphql-schema/src/generated/server";
import { composeResolvers } from "@graphql-tools/resolvers-composition";
import { ResolverContext } from "./context";

const resolversComposition = {};

const resolversRaw: Resolvers<ResolverContext> = {
  Query: {},
  Mutation: {},
};

export const resolvers: Resolvers = composeResolvers(
  resolversRaw,
  resolversComposition,
);
