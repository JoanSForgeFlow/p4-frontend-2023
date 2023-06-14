import { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokeApi';
import { PokemonListData, PokemonData } from '../types';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonListData[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons();
      setPokemons(data);
      console.log(data);
    };

    fetchPokemons();
  }, []);

  return pokemons;
};

export default usePokemons;
