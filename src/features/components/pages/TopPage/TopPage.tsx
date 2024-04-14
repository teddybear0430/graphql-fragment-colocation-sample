import { useQuery } from "@apollo/client";
import { graphql } from "~/gql/gql";
import { Character } from "~/features";

// GraphQL Code Generatorで生成されたgraphql関数を使って、クエリを定義することで、
// 型安全にクエリを書くことができる
const query = graphql(`
  query Characters {
    Page {
      characters {
        ...CharacterField
      }
    }
  }
`);

export const TopPage = () => {
  const { loading, data } = useQuery(query);

  if (data?.Page?.__typename !== "Page") return <></>;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data.Page.characters?.map(
        (character, i) =>
          character && (
            <Character key={`character_${i}`} character={character} />
          )
      )}
    </div>
  );
};
