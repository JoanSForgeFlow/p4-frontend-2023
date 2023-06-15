export type PokemonData = {
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
};


export type PokemonListData = {
  name: string;
  url: string;
};
  