import api from './api';

const getPokemonsByGeneration = (generation: number): Promise<any> => {

    return api.get(`/api/v2/generation/${generation}`);

};

const getIndividualPokemon = (name: string): Promise<any> => {


    return api.get(`/api/v2/pokemon/${name}`);

};

export {
    getPokemonsByGeneration,
    getIndividualPokemon
};