import { UserInputError } from "apollo-server-express";
import * as logger from "firebase-functions/logger";
import { GraphQLError, GraphQLFormattedError } from "graphql";
import { isProduction } from "./environment";
import { AppError } from "./errors";

export const formatError = (error: GraphQLError): GraphQLFormattedError => {
  if (
    error.originalError instanceof AppError ||
    error instanceof UserInputError
  ) {
    return error;
  }

  logger.error(error);
  if (isProduction) {
    return new AppError("An unexpected error occurred", "UNEXPECTED_ERROR");
  }
  return error;
};
