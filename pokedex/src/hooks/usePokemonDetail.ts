import { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokeApi';

const usePokemonDetail = (name: string) => {
  const [pokemon, setPokemon] = useState<any>([]);  

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(name);
      setPokemon(data);
    };

    fetchPokemon();
  }, [name]);

  return pokemon;
};

export default usePokemonDetail;

