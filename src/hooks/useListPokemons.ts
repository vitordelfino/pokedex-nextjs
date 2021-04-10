import { useInfiniteQuery } from "react-query";
import axios from 'axios'
export const useListPokemon = () => {
  const fetchPokemons = async ({pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12'}) => {
    const response = await axios.get(pageParam);
    return response.data
  }

  return useInfiniteQuery(['list-pokemons'], fetchPokemons, {
      staleTime: Infinity,
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (lastPage) => lastPage.previous     
    }
  )
}