import { ContextFunction } from "apollo-server-core/src/types";

// eslint-disable-next-line @typescript-eslint/ban-types
export type ResolverContext = {};

export const getContext: ContextFunction<{
  req: { headers: { [key in string]?: string }; cookies: unknown };
}> = async (): Promise<ResolverContext> => {
  return {};
};
