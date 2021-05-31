import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import api from '../services/api';
import { EvolutionChain, Specie } from '../utils/types';

export const getSpecie = async (name: string): Promise<Specie> => {
  const response = await api.get<Specie>(`/pokemon-species/${name}`);
  return response.data;
};

export const getEvolutionChain = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useEvolutionChain = (
  name: string
): UseQueryResult<EvolutionChain> => {
  const fetchEvolution = async () => {
    const specie = await getSpecie(name);
    const evolution = await getEvolutionChain(specie.evolution_chain.url);
    return evolution;
  };

  return useQuery(['evolution-chain', name], fetchEvolution, {
    staleTime: Infinity,
    enabled: !!name,
  });
};
