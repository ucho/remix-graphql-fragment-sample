import { type FragmentType, getFragmentData } from "~/gql/fragment-masking";
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
  const { id, name } = getFragmentData(PokemonFragment, props.pokemon);
  return <>{`${id}: ${name}`}</>;
};
