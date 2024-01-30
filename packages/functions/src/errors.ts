import { ApolloError } from "apollo-server-express";

export class AppError extends ApolloError {
  constructor(message: string, code: string) {
    super(message, code);
  }
}
