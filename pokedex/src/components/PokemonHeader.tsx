import React from 'react';

type PokemonHeaderProps = {
    name: string;
    image: string;
  };
  
const PokemonHeader: React.FC<PokemonHeaderProps> = ({ name, image }) => (
<div>
    <h1>{name}</h1>
    <img src={image} alt={name} />
</div>
);

export default PokemonHeader;
  