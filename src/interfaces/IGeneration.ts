/* eslint-disable semi */
export interface ISpecies {
    name: string;
    url: string;
}

export interface IGeneration {
    pokemon_species: ISpecies[];
}