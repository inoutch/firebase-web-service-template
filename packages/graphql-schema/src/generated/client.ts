import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Example = {
  __typename?: 'Example';
  id?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  setExample: Example;
};


export type MutationSetExampleArgs = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getExample?: Maybe<Example>;
};

export type GetExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExampleQuery = { __typename?: 'Query', getExample?: { __typename?: 'Example', id?: string | null } | null };

export type SetExampleMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SetExampleMutation = { __typename?: 'Mutation', setExample: { __typename?: 'Example', id?: string | null } };


export const GetExampleDocument = gql`
    query getExample {
  getExample {
    id
  }
}
    `;

/**
 * __useGetExampleQuery__
 *
 * To run a query within a React component, call `useGetExampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExampleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExampleQuery(baseOptions?: Apollo.QueryHookOptions<GetExampleQuery, GetExampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExampleQuery, GetExampleQueryVariables>(GetExampleDocument, options);
      }
export function useGetExampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExampleQuery, GetExampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExampleQuery, GetExampleQueryVariables>(GetExampleDocument, options);
        }
export function useGetExampleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetExampleQuery, GetExampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExampleQuery, GetExampleQueryVariables>(GetExampleDocument, options);
        }
export type GetExampleQueryHookResult = ReturnType<typeof useGetExampleQuery>;
export type GetExampleLazyQueryHookResult = ReturnType<typeof useGetExampleLazyQuery>;
export type GetExampleSuspenseQueryHookResult = ReturnType<typeof useGetExampleSuspenseQuery>;
export type GetExampleQueryResult = Apollo.QueryResult<GetExampleQuery, GetExampleQueryVariables>;
export const SetExampleDocument = gql`
    mutation setExample($id: String!) {
  setExample(id: $id) {
    id
  }
}
    `;
export type SetExampleMutationFn = Apollo.MutationFunction<SetExampleMutation, SetExampleMutationVariables>;

/**
 * __useSetExampleMutation__
 *
 * To run a mutation, you first call `useSetExampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetExampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setExampleMutation, { data, loading, error }] = useSetExampleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetExampleMutation(baseOptions?: Apollo.MutationHookOptions<SetExampleMutation, SetExampleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetExampleMutation, SetExampleMutationVariables>(SetExampleDocument, options);
      }
export type SetExampleMutationHookResult = ReturnType<typeof useSetExampleMutation>;
export type SetExampleMutationResult = Apollo.MutationResult<SetExampleMutation>;
export type SetExampleMutationOptions = Apollo.BaseMutationOptions<SetExampleMutation, SetExampleMutationVariables>;