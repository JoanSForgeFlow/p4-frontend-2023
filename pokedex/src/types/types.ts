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
    other?: {
      'official-artwork'?: {
        front_default?: string;
      }
    }
  };
};


export type PokemonListData = {
  name: string;
  url: string;
};

export type TypeColors = {
  [key in 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy']: string;
};
