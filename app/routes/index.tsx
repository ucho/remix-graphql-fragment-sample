import { json } from "@remix-run/node";
import { graphqlClient } from "~/graphql.server";
import { graphql } from "~/gql";
import { useLoaderData } from "@remix-run/react";
import { Pokemon } from "~/components/Pokemon";

const samplePokeAPIquery = graphql(/* GraphQL */ `
  query samplePokeAPIquery {
    gen3Species: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: { _eq: "generation-iii" } } }
      order_by: { id: asc }
    ) {
      ...Pokemon
    }
  }
`);

export const loader = async () => {
  const { gen3Species } = await graphqlClient.request(samplePokeAPIquery);
  return json(gen3Species);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon, i) => (
          <Pokemon key={`pokemon-${i}`} pokemon={pokemon} />
        ))}
      </tbody>
    </table>
  );
}
