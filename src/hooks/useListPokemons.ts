import { useQuery, useInfiniteQuery } from "react-query";
import api from "../services/api";
import axios from 'axios'
export const useListPokemon = () => {
  const fetchPokemons = async ({pageParams = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'}) => {
    const response = await axios.get(pageParams);
    return response.data
  }

  return useInfiniteQuery('list-pokemons', fetchPokemons, {
      staleTime: Infinity,
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (lastPage) => lastPage.previous     
    }
  )
}