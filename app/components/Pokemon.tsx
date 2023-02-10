import { type FragmentType, useFragment } from "~/gql/fragment-masking";
import { graphql } from "~/gql/gql";

export const PokemonFragment = graphql(/* GraphQL */ `
  fragment Pokemon on pokemon_v2_pokemonspecies {
    id
    name
  }
`);

export const Pokemon = (props: {
  pokemon: FragmentType<typeof PokemonFragment>;
}) => {
  const { id, name } = useFragment(PokemonFragment, props.pokemon);
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
};
