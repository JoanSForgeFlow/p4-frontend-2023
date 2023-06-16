import { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokeApi';
import { PokemonData } from '../types/types';

const usePokemonDetail = (name: string) => {
  const [pokemon, setPokemon] = useState<PokemonData | {}>({});

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(name);

      if (data.height) data.height = data.height / 10;
      if (data.weight) data.weight = data.weight / 10;

      setPokemon(data);
    };

    fetchPokemon();
  }, [name]);

  return pokemon;
};

export default usePokemonDetail;


