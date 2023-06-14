import React from 'react';
import { Link } from 'react-router-dom';
import usePokemons from '../hooks/usePokemons';

const PokemonList: React.FC = () => {
  const pokemons = usePokemons();
  if (!pokemons) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
