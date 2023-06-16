export const getPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1008');
  const data = await response.json();
  return data.results;
};

export const getPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
};
