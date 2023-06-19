import React from 'react';

type PokemonAttributesProps = {
    height: number;
    weight: number;
  };
  
const PokemonAttributes: React.FC<PokemonAttributesProps> = ({ height, weight }) => (
<div className="attributes-container">
    <div className="attribute">
    <span role="img" aria-label="Ruler emoji">📏</span>
    <p>Height: {height}m</p>
    </div>
    <div className="attribute">
    <span role="img" aria-label="Weight scale emoji">⚖️</span>
    <p>Weight: {weight}kg</p>
    </div>
</div>
);

export default PokemonAttributes;
  