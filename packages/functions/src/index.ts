import "./utils/dayjs";
import { typeDefs } from "@example/graphql-schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginLandingPageProductionDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { logger } from "firebase-functions";
import { createApolloQueryValidationPlugin } from "graphql-constraint-directive";
import { Env, isProduction } from "./environment";
import { formatError } from "./formatError";
import { resolvers } from "./resolvers";
import { getContext } from "./resolvers/context";

admin.initializeApp();
admin.firestore().settings({ ignoreUndefinedProperties: true });
dotenv.configDotenv({ path: ".env" });

const initGraphQLApp = () => {
  try {
    const schema = makeExecutableSchema({
      typeDefs,
    });
    const plugins = [
      createApolloQueryValidationPlugin({
        schema,
      }),
    ];
    if (isProduction) {
      plugins.push(ApolloServerPluginLandingPageProductionDefault());
    }
    const server = new ApolloServer({
      typeDefs,
      plugins,
      resolvers,
      context: getContext,
      formatError,
    });
    const app = express();
    app.use(cookieParser());
    server.start().then(() => {
      server.applyMiddleware({
        app,
        path: "/",
        cors: {
          origin: Env.getInstance().ALLOW_CORS_ALL
            ? "*"
            : Env.getInstance().FRONTEND_ENDPOINT,
          credentials: true,
          optionsSuccessStatus: 200,
        },
      });
      logger.info("Start server");
    });
    return app;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

export const graphql = functions
  .region("asia-northeast1")
  .https.onRequest(initGraphQLApp());
