import { ContextFunction } from "apollo-server-core/src/types";

export type ResolverContext = {};

export const getContext: ContextFunction<{
  req: { headers: { [key in string]?: string }; cookies: unknown };
}> = async ({}): Promise<ResolverContext> => {
  return {};
};
