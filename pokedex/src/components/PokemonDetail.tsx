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

  const getStatBar = (value: number) => {
    let color;
    if (value < 55) {
      color = 'red';
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
      <table>
        <tbody>
          {detailedPokemon.stats?.map((stat) => (
            <tr key={stat.stat.name}>
              <td>{(stat.stat.name === 'hp') ? 'HP': stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</td>
              <td>{stat.base_stat}</td>
              <td>{getStatBar(stat.base_stat)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetail;
