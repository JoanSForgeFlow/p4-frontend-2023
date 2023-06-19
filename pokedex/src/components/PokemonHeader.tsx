import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

type PokemonHeaderProps = {
  name: string;
  image: string;
};

const PokemonHeader: React.FC<PokemonHeaderProps> = ({ name, image }) => {
  const [isImageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div>
      <h1>{name}</h1>
      {isImageLoading && <ClipLoader color="#000000" size={150} />}
      <img src={image} alt={name} style={{display: isImageLoading ? 'none' : 'block'}} onLoad={handleImageLoad} />
    </div>
  );
};

export default PokemonHeader;
  