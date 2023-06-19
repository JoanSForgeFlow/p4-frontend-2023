import React from 'react';
import { TypeColors as TypeColorsType } from '../types/types';

const typeColors: TypeColorsType = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
};

type TypeTagProps = {
  type: keyof TypeColorsType;
};

const TypeTag: React.FC<TypeTagProps> = ({ type }) => (
  <span 
    className="type-tag"
    style={{backgroundColor: typeColors[type] || 'grey', color: '#fff'}}
  >
    {type.toUpperCase()}
  </span>
);

export default TypeTag;
