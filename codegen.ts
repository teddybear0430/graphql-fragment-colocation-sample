import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  // クライアントサイド用のコードを生成するために必要
  documents: ["src/**/*.tsx", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
