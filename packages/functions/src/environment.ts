import * as logger from "firebase-functions/logger";

const validate = (value: string | undefined, name: string): string => {
  if (!value) {
    const errorMessage = `${name} is not defined in env`;
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  return value;
};

export const isProduction = process.env.NODE_ENV === "production";

export class Env {
  private static instance: Env;
  private constructor() {}
  static getInstance() {
    if (!Env.instance) {
      Env.instance = new Env();
    }
    return Env.instance;
  }
  get FRONTEND_ENDPOINT() {
    return validate(process.env.FRONTEND_ENDPOINT, "FRONTEND_ENDPOINT");
  }

  get ALLOW_CORS_ALL() {
    return process.env.ALLOW_CORS_ALL === "true";
  }
}
