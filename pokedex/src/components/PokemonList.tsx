import React from 'react';
import usePokemons from '../hooks/usePokemons';

const PokemonList: React.FC = () => {
  const pokemons = usePokemons();

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
