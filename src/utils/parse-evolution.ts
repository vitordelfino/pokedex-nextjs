import { Chain } from './types';

export const parseEvolution = (
  chain: Chain,
  evolves: string[] = []
): string[] => {
  const { name } = chain.species;
  if (chain.evolves_to.length > 0)
    return [...parseEvolution(chain.evolves_to[0], [...evolves, name])];
  return [...evolves, name];
};
