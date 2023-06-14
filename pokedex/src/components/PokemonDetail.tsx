import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemon = usePokemonDetail(params.name);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* Display other details as desired */}
    </div>
  );
};

export default PokemonDetail;

