import { Chain } from './types';

export const parseEvolution = (
  chain: Chain,
  evolves: string[] = []
): string[] => {
  const { name } = chain.species;
  if (chain.evolves_to.length > 0)
    if (chain.evolves_to.length > 1)
      return [name, ...chain.evolves_to.map((e) => e.species.name)];
    else return [...parseEvolution(chain.evolves_to[0], [...evolves, name])];
  return [...evolves, name];
};
