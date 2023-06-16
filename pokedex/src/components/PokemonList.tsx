import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePokemons from '../hooks/usePokemons';
import { Helmet } from 'react-helmet';

const PokemonList: React.FC = () => {
  const pokemons = usePokemons();
  const [searchValue, setSearchValue] = useState('');

  if (!pokemons) {
    return <div>Loading...</div>;
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Pokedex</title>
      </Helmet>
      <h1 className="pokedex-header">Pokedex</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search Pokemon..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
