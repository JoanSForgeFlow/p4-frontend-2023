import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonData } from '../types/types';
import PokemonHeader from './PokemonHeader';
import PokemonAttributes from './PokemonAttributes';
import PokemonTypes from './PokemonTypes';
import PokemonStats from './PokemonStats';

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const pokemonName = params.name || 'default';
  const pokemon = usePokemonDetail(pokemonName);

  if (!('name' in pokemon)) {
    return <div>Loading...</div>;
  }

  const detailedPokemon = pokemon as PokemonData;

  const getStatBar = (value: number) => {
    let color;
    if (value < 55) {
      color = '#808080';
    } else if (value < 90) {
      color = 'yellow';
    } else {
      color = 'green';
    }

    const percentage = (value / 255) * 100;
    return (
      <div className="stat-bar">
        <div className="stat-value" style={{width: `${percentage}%`, backgroundColor: color}}></div>
      </div>
    );
  };

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)}>Back to Menu</button>
      <PokemonHeader 
        name={detailedPokemon.name} 
        image={detailedPokemon.sprites?.other?.['official-artwork']?.front_default || ''} 
      />
      <PokemonAttributes 
        height={detailedPokemon.height} 
        weight={detailedPokemon.weight} 
      />
      <PokemonTypes types={detailedPokemon.types} />
      <PokemonStats stats={detailedPokemon.stats} getStatBar={getStatBar} />
      <button onClick={() => navigate(-1)}>Back to Menu</button>
    </div>
  );
};

export default PokemonDetail;
