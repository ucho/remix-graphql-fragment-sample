/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment Pokemon on pokemon_v2_pokemonspecies {\n    id\n    name\n  }\n": types.PokemonFragmentDoc,
    "\n  query samplePokeAPIquery {\n    gen3Species: pokemon_v2_pokemonspecies(\n      where: { pokemon_v2_generation: { name: { _eq: \"generation-iii\" } } }\n      order_by: { id: asc }\n    ) {\n      ...Pokemon\n    }\n  }\n": types.SamplePokeApIqueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Pokemon on pokemon_v2_pokemonspecies {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment Pokemon on pokemon_v2_pokemonspecies {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query samplePokeAPIquery {\n    gen3Species: pokemon_v2_pokemonspecies(\n      where: { pokemon_v2_generation: { name: { _eq: \"generation-iii\" } } }\n      order_by: { id: asc }\n    ) {\n      ...Pokemon\n    }\n  }\n"): (typeof documents)["\n  query samplePokeAPIquery {\n    gen3Species: pokemon_v2_pokemonspecies(\n      where: { pokemon_v2_generation: { name: { _eq: \"generation-iii\" } } }\n      order_by: { id: asc }\n    ) {\n      ...Pokemon\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;