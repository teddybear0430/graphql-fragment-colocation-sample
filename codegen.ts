import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  // クライアントサイド用のコードを生成するために必要
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      // @graphql-codegen/typescript: GraphQLスキーマに基づいて、TypeScriptの型定義を生成する
      plugins: ["typescript"]
    }
  }
};

export default config;
