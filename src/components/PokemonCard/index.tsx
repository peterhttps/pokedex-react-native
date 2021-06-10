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

interface Iprops {
    name: string;
}

const PokemonCard = ({ name }: Iprops): JSX.Element => {

    const [pokemon, setPokemon] = useState({
        id: 1,
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
        <Container color={pokemon.types ? pokemonColors[pokemon.types[0].type.name] : '#DDDDDD'}>
            <CardLeftArea>
                <PokemonID># {pokemon.id}</PokemonID>
                <PokemonTitle>
                    {name}
                </PokemonTitle>
                <PokemonTypes>
                    {pokemon.types && pokemon.types.map(type => {
                        return (
                            <Type color={pokemonColors[type.type.name]} key={type.type.name}>
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