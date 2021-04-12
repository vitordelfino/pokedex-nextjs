import { useQuery } from "react-query";
import api from "../services/api";

export const getCountPokemons = async () => {
  const response = await api.get("/pokemon");
  return response.data;
};

export const useGetCountPokemons = () => {
  return useQuery("count-pokemons", getCountPokemons, {
    initialData: {
      count: 0,
    },
  });
};

export const getAllPokemonNames = async () => {
  const countPokemons = await api.get("/pokemon");
  const allPokemons = await api.get(
    `/pokemon?offset=0&limit=${countPokemons.data.count || 1118}`
  );

  return allPokemons.data.results.map((p: any) => ({
    label: p.name,
    value: p.name,
  }));
};

export const useAllPokemonNames = () => {
  return useQuery("all-pokemon-names", getAllPokemonNames, {
    initialData: [],
  });
};
