import gql from "graphql-tag";

export const exampleTypeDefs = gql`
  type Example {
    id: String
  }

  type Query {
    getExample: Example
  }

  type Mutation {
    setExample(id: String!): Example!
  }
`;
