import { useQuery, gql } from "@apollo/client";
import { CharactersQuery } from "../gql/graphql";

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

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.Page?.characters?.map((character) => (
            <div key={character?.name?.native}>
              <p>{character?.name?.native}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
