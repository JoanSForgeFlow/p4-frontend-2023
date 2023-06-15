import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonData } from '../types';

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemon = usePokemonDetail(params.name);

  if (!('name' in pokemon)) {
    return <div>Cargando...</div>;
  }

  const detailedPokemon = pokemon as PokemonData;
  return (
    <div className="detail-container">
      <h1>{detailedPokemon.name}</h1>
      <img src={detailedPokemon.sprites?.other?.['official-artwork']?.front_default} alt={detailedPokemon.name} />
      <p>Height: {detailedPokemon.height}</p>
      <p>Weight: {detailedPokemon.weight}</p>
      <p>Abilities: {detailedPokemon.abilities?.map((ability) => ability.ability.name).join(', ')}</p>
      <p>Moves: {detailedPokemon.moves?.slice(0, 5).map((move) => move.move.name).join(', ')}</p>
      <div className="types">
        {detailedPokemon.types?.map((type) => (
          <span key={type.type.name} className="type-tag">{type.type.name}</span>
        ))}
      </div>
      <p>Stats: {detailedPokemon.stats?.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
    </div>
  );
};


export default PokemonDetail;
