import { useQuery, gql } from "@apollo/client";
import { CharactersQuery } from "../gql/graphql";
import { Character } from "../components/Character/Character";

export const component = function Index() {
  const GET_CHARACTERS = gql`
    query Characters {
      Page {
        characters {
          image {
            medium
          }
          name {
            native
          }
        }
      }
    }
  `;

  const { loading, data } = useQuery<CharactersQuery>(GET_CHARACTERS);

  if (!data?.Page?.characters) return <p>No data</p>;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.Page.characters.map((character) => (
            <Character
              key={character?.name?.native}
              name={character?.name?.native}
              image={character?.image?.medium}
            />
          ))}
        </>
      )}
    </div>
  );
};
