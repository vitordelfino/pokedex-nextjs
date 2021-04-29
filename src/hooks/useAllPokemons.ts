import { useQuery, UseQueryResult } from 'react-query';
import api from '../services/api';
import { PokemonCount } from '../utils/types';

export const getCountPokemons = async (): Promise<PokemonCount> => {
  const response = await api.get<PokemonCount>('/pokemon');
  return response.data;
};
export const useGetCountPokemons = (): UseQueryResult<PokemonCount> =>
  useQuery('count-pokemons', getCountPokemons, {
    initialData: {
      count: 0,
      results: [],
      next: '',
      previous: '',
    },
  });

export const getAllPokemonNames = async (): Promise<
  Array<{ label: string; value: string }>
> => {
  const countPokemons = await api.get<PokemonCount>('/pokemon');
  const allPokemons = await api.get<PokemonCount>(
    `/pokemon?offset=0&limit=${countPokemons.data.count || 1118}`
  );

  return allPokemons.data.results.map((p) => ({
    label: p.name,
    value: p.name,
  }));
};

export const useAllPokemonNames = (): UseQueryResult<
  Array<{ label: string; value: string }>
> =>
  useQuery<Array<{ label: string; value: string }>>(
    'all-pokemon-names',
    getAllPokemonNames,
    {
      initialData: [],
    }
  );
