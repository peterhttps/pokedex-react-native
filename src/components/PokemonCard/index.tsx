import React, { useEffect, useState } from 'react';
import { getIndividualPokemon } from '../../services/pokemonService';

import { 
    Container,
    CardLeftArea,
    PokemonTitle,
    PokemonTypes,
    Type,
    PokemonImage,
    PokeballImage,
    PokemonID
} from './styles';

import pokemonColors from '../../utils/pokemonColors';
import { IPokemon } from '../../interfaces/IPokemon';
import { IColors } from '../../interfaces/IColors';

interface Iprops {
    name: string;
}

const PokemonCard = ({ name }: Iprops): JSX.Element => {

    const [pokemon, setPokemon] = useState<IPokemon>({
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
    });

    useEffect(() => {
        //console.log(url);
        getPokemon();
    }, []);

    async function getPokemon() {
        const { data } = await getIndividualPokemon(name);

        setPokemon(data);
    }   

    return (
        <Container color={pokemon.types ? pokemonColors[pokemon.types[0].type.name as keyof IColors] : '#DDDDDD'}>
            <CardLeftArea>
                <PokemonID># {pokemon.id}</PokemonID>
                <PokemonTitle>
                    {name}
                </PokemonTitle>
                <PokemonTypes>
                    {pokemon.types && pokemon.types.map(type => {
                        return (
                            <Type color={pokemonColors[type.type.name as keyof IColors]} key={type.type.name}>
                                {type.type.name}
                            </Type>
                        );
                    })}
                </PokemonTypes>
            </CardLeftArea>
           
            <PokemonImage source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
            }} />

            <PokeballImage source={require('../../assets/images/whitePokeball.png')}/>
        </Container>
    );
};

export default PokemonCard;