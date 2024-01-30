import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "./src/schema/**/*.ts": {
        noRequire: true,
      },
    },
  ],
  generates: {
    "./src/generated/server.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        enumsAsConst: true,
      },
    },
    "./src/generated/client.ts": {
      documents: "./src/documents/**/*.ts",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        enumsAsConst: true,
      },
    },
  },
};

export default config;
