import React from 'react';
import TypeTag from './TypeTag';
import { TypeColors } from '../types/types';

type PokemonTypesProps = {
    types: {type: {name: keyof TypeColors}}[];
};
  
const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => (
  <div className="types">
    {types.map((type) => (
      <TypeTag key={type.type.name} type={type.type.name} />
    ))}
  </div>
);

export default PokemonTypes;


  