import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonData } from '../types';

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemon = usePokemonDetail(params.name);

  if (!('name' in pokemon)) {  // Añadir esta verificación
    return <div>Cargando...</div>;
  }

  const detailedPokemon = pokemon as PokemonData;
  return (
    <div>
      <h1>{detailedPokemon.name}</h1>
      <p>Height: {detailedPokemon.height}</p>
      <p>Weight: {detailedPokemon.weight}</p>
      {/* Display other details as desired */}
    </div>
  );
};

export default PokemonDetail;


