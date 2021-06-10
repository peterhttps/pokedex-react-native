interface ITypes {
    slot: string | number | null;
    type: {
        name: string,
        url: string,
    }
}

export interface IPokemon {
    id: string | number;
    types: ITypes[];
}