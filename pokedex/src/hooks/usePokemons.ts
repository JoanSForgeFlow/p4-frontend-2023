import { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokeApi';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return pokemons;
};

export default usePokemons;
