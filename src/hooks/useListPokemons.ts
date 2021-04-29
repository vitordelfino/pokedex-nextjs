/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import axios from 'axios';
import { PokemonCount } from '../utils/types';

export const fetchPokemons = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12',
}) => {
  const response = await axios.get<PokemonCount>(pageParam);
  return response.data;
};

export const useListPokemon = (): UseInfiniteQueryResult<PokemonCount> =>
  useInfiniteQuery(['list-pokemons'], fetchPokemons, {
    staleTime: Infinity,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (lastPage) => lastPage.previous,
  });
