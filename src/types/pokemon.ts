export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonData {
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

export type PokemonListData = PokemonData[];
