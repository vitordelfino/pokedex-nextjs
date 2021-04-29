import { useQuery, UseQueryResult } from 'react-query';
import api from '../services/api';
import { Pokemon } from '../utils/types';

export const useSearchPokemon = (pokemon: string): UseQueryResult<Pokemon> => {
  const fetchPokemon = async () => {
    const response = await api.get<Pokemon>(`/pokemon/${pokemon}`);
    return response.data;
  };

  return useQuery(['pokemon', pokemon], fetchPokemon, {
    staleTime: Infinity,
    enabled: !!pokemon,
  });
};
