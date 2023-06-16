import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonData } from '../types/types';
import TypeTag from './TypeTag';

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
      <h1>{detailedPokemon.name}</h1>
      <img src={detailedPokemon.sprites?.other?.['official-artwork']?.front_default} alt={detailedPokemon.name} />
      <div className="attributes-container">
        <div className="attribute">
          <span role="img" aria-label="Ruler emoji">📏</span>
          <p>Height: {detailedPokemon.height}m</p>
        </div>
        <div className="attribute">
          <span role="img" aria-label="Weight scale emoji">⚖️</span>
          <p>Weight: {detailedPokemon.weight}kg</p>
        </div>
      </div>
      <div className="types">
        {detailedPokemon.types?.map((type: {type: {name: string}}) => (
          <TypeTag key={type.type.name} type={type.type.name} />
        ))}
      </div>
      <table>
        <tbody>
          {detailedPokemon.stats?.map((stat: {stat: {name: string}, base_stat: number}) => (
            <tr key={stat.stat.name}>
              <td>{(stat.stat.name === 'hp') ? 'HP': stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</td>
              <td>{stat.base_stat}</td>
              <td>{getStatBar(stat.base_stat)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back to Menu</button>
    </div>
  );
};

export default PokemonDetail;
