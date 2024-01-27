import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  // クライアントサイド用のコードを生成するために必要
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      // @graphql-codegen/client-preset: apollo-clientやurqlなどのGraphQLクライアント向けのコードを生成するためのプリセット
      // このプリセットを使うことで個別のGraphQLクライアント向けプラグイン（typescript-react-apolloやtypescript-urqlなど）が不要になる
      preset: "client",
      plugins: []
    }
  }
};

export default config;
