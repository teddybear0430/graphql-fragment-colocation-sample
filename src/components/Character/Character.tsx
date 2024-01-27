import { graphql } from "../../gql/gql";
import { FragmentType, useFragment } from "../../gql/fragment-masking";

// Fragment Colocationを使って、コンポーネントが必要とするGraphQLのフィールドを定義する
export const CHARACTER_FIELD = graphql(`
  fragment CharacterField on Character {
    image {
      medium
    }
    name {
      native
    }
  }
`);

export function Character(props: {
  character: FragmentType<typeof CHARACTER_FIELD>;
}) {
  // useFragmentを使うことで、Fragment Colocationで定義したフィールドからデータを取り出すことができる
  // 逆にuseFragment経由でなければデータの取り出しはできない
  const character = useFragment(CHARACTER_FIELD, props.character);
  return (
    <div>
      <p>{character.name?.native}</p>
      {character.image?.medium ? (
        <img src={character.image.medium} alt={character.name?.native || ""} />
      ) : (
        <p>No Image</p>
      )}
    </div>
  );
}
