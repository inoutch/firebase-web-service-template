import gql from "graphql-tag";

export const exampleDefs = gql`
  query getExample {
    getExample {
      id
    }
  }

  mutation setExample($id: String!) {
    setExample(id: $id) {
      id
    }
  }
`;
