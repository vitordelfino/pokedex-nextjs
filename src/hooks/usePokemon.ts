import {  useQuery } from 'react-query';
import api from '../services/api';

export const usePokemon = (pokemon: string) => {
  const fetchPokemon = async () => {
    const response = await api.get(`/pokemon/${pokemon}`);
    return response.data
  };

  return useQuery(
    ['pokemon', pokemon],
    fetchPokemon,
    { staleTime: Infinity, enabled: !!pokemon }
  )
}