import { defer } from "@remix-run/node";
import { graphqlClient } from "~/graphql.server";
import { graphql } from "~/gql";
import { Await, useLoaderData } from "@remix-run/react";
import { Pokemon } from "~/components/Pokemon";
import { Suspense } from "react";

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

export const loader = () => {
  const gen3SpeciesPromise = graphqlClient.request(samplePokeAPIquery);
  return defer({ gen3SpeciesPromise });
};

export default function Index() {
  const { gen3SpeciesPromise } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Pokemon Gen3 Species</h1>
      <Suspense fallback={<p>loading...</p>}>
        <ul>
          <Await resolve={gen3SpeciesPromise} errorElement={<p>Error!!</p>}>
            {({ gen3Species }) =>
              gen3Species.map((pokemon, i) => (
                <li key={`pokemon-${i}`}>
                  <Pokemon pokemon={pokemon} />
                </li>
              ))
            }
          </Await>
        </ul>
      </Suspense>
    </>
  );
}
