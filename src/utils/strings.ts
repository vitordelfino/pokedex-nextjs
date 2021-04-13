export const firstLetterUpper = (str: string): string =>
  `${str.charAt(0).toUpperCase()}${str.substr(1)}`;

export const fillPokemonNumber = (num: number): string => 
num < 10 ? `Nº 00${num}` : num < 100 ? `Nº 0${num}` : `Nº ${num}`