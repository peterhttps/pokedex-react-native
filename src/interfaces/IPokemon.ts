interface ITypes {
    slot: string | number | null;
    type: {
        name: string,
        url: string,
    }
}

export interface IPokemon {
    name: string;
    id: string | number;
    types: ITypes[];
}