import { mergeTypeDefs } from "@graphql-tools/merge";
import { constraintDirectiveTypeDefs } from "graphql-constraint-directive";
import { exampleTypeDefs } from "./example";

export default mergeTypeDefs([constraintDirectiveTypeDefs, exampleTypeDefs]);
