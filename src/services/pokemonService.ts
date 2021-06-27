import api from './api';

const getPokemonsByGeneration = (generation: number): Promise<any> => {

  return api.get(`/api/v2/generation/${generation}`);
};

const getAllPokemons = (): Promise<any> => {

  return api.get('/api/v2/pokemon?limit=151');
};

const getIndividualPokemon = (name: string): Promise<any> => {

  return api.get(`/api/v2/pokemon/${name}`).then(function(response) {
    return response;
  }).catch(() => {
    return {
      id: 1,
      types: [
        {
          slot: '1',
          type: {
            name: 'flying',
            url: 'https://pokeapi.co/api/v2/type/3/'
          }
        }
      ]
    };
  });
};

export {
  getAllPokemons,
  getPokemonsByGeneration,
  getIndividualPokemon
};