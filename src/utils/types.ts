/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
export type Result = {
  name: string;
  url: string;
};

export type Specie = {
  evolution_chain: {
    url: string;
  };
};
export type PokemonCount = {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
};

export interface Ability {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Ability;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}
export interface Officialartwork {
  front_default: string;
}

export interface Dreamworld {
  front_default: string;
  front_female?: any;
}
export interface Other {
  dream_world: Dreamworld;
  'official-artwork': Officialartwork;
}
export interface Redblue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}
export interface Generationi {
  'red-blue': Redblue;
  yellow: Redblue;
}
export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
export interface Generationii {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}
export interface Emerald {
  front_default: string;
  front_shiny: string;
}
export interface Generationiii {
  emerald: Emerald;
  'firered-leafgreen': Crystal;
  'ruby-sapphire': Crystal;
}

export interface Diamondpearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}
export interface Generationiv {
  'diamond-pearl': Diamondpearl;
  'heartgold-soulsilver': Diamondpearl;
  platinum: Diamondpearl;
}
export interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}
export interface Omegarubyalphasapphire {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}
export interface Generationv {
  'black-white': Blackwhite;
}
export interface Generationviii {
  icons: Dreamworld;
}

export interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Omegarubyalphasapphire;
}

export interface Generationvi {
  'omegaruby-alphasapphire': Omegarubyalphasapphire;
  'x-y': Omegarubyalphasapphire;
}

export interface Versions {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}
export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

export interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

export interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

export interface Gameindex {
  game_index: number;
  version: Ability;
}

export interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export type Pokemon = {
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export interface Trigger {
  name: string;
  url: string;
}
export interface Evolutiondetail {
  gender?: any;
  held_item?: any;
  item?: any;
  known_move?: any;
  known_move_type?: any;
  location?: any;
  min_affection?: any;
  min_beauty?: any;
  min_happiness?: any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species?: any;
  party_type?: any;
  relative_physical_stats?: any;
  time_of_day: string;
  trade_species?: any;
  trigger: Trigger;
  turn_upside_down: boolean;
}

export interface Evolvesto {
  evolution_details: Evolutiondetail[];
  evolves_to: any[];
  is_baby: boolean;
  species: Trigger;
}
export interface Chain {
  evolution_details: any[];
  evolves_to: Evolvesto[];
  is_baby: boolean;
  species: Trigger;
}

export interface EvolutionChain {
  baby_trigger_item?: any;
  chain: Chain;
  id: number;
}

/* eslint-disable camelcase */

export interface Doubledamagefrom {
  name: string;
  url: string;
}
export interface Name {
  language: Doubledamagefrom;
  name: string;
}

export interface Damagerelations {
  double_damage_from: Doubledamagefrom[];
  double_damage_to: Doubledamagefrom[];
  half_damage_from: Doubledamagefrom[];
  half_damage_to: Doubledamagefrom[];
  no_damage_from: any[];
  no_damage_to: any[];
}

export interface TypeSpecs {
  damage_relations: Damagerelations;
  game_indices: Gameindex[];
  generation: Doubledamagefrom;
  id: number;
  move_damage_class: Doubledamagefrom;
  moves: Doubledamagefrom[];
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}
