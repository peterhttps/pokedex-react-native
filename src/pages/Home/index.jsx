import React, { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { 
    Wrapper, 
    Container, 
    GenerationButton, 
    Title, 
    Description, 
    InputWrapper, 
    InputComponent,
    Body,
} from './styles';

import PokemonCard from '../../components/PokemonCard';
import { getPokemonsByGeneration } from '../../services/pokemonService';
import { Text } from 'react-native';
import GenerationModal from '../../components/GenerationModal';

const Home: React.FC = () => {

    const [pokemons, setPokemons] = useState([]);
    const [textPokemon, setTextPokemon] = useState('');

    const modalizeRef = useRef(null);


    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await getPokemonsByGeneration(1);
        setPokemons(data.pokemon_species);
    }

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <GenerationButton title="generationButton" onPress={() => onOpen()} >
                        <MaterialCommunityIcons name="card-bulleted-settings-outline" size={24} color="black" />
                    </GenerationButton>
                    <Title>Pokédex</Title>
                    <Description>Search for Pokémon by name or using the {'\n'}National Pokédex Number</Description>
                    <InputWrapper>
                        <FontAwesome name="search" size={18} color="black" />
                        <InputComponent   
                            value={textPokemon} 
                            onChangeText={text => setTextPokemon(text)}
                            placeholder="What Pokemon are you looking for?" />
                    </InputWrapper>
                </Container>

                <Body>
                    {pokemons.map(item => {
                        return (
                            <PokemonCard name={item.name} key={item.name}/>
                        );
                    })}

                </Body>
            </Wrapper>
            <Modalize ref={modalizeRef}>
                <GenerationModal />
            </Modalize>

        </>
    );
};

export default Home;