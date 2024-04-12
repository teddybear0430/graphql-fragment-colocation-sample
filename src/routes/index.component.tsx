import { useQuery } from "@apollo/client";
import { graphql } from "~/gql/gql";
import { Character } from "~/components/Character/Character";

// GraphQL Code Generatorで生成されたgraphql関数を使って、クエリを定義することで、
// 型安全にクエリを書くことができる
const GET_CHARACTERS = graphql(`
  query Characters {
    Page {
      characters {
        ...CharacterField
      }
    }
  }
`);

export const component = function Page() {
  const { loading, data } = useQuery(GET_CHARACTERS);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.Page?.characters?.map(
            (character, i) =>
              character && (
                <Character key={`character_${i}`} character={character} />
              )
          )}
        </>
      )}
    </div>
  );
};
