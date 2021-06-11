import React, { useEffect, useState, useRef } from 'react';

import { 
    Body,
    PokemonList
} from './styles';

import PokemonCard from '../../components/PokemonCard';
import { getIndividualPokemon, getPokemonsByGeneration } from '../../services/pokemonService';
import HomeHeader from '../../components/HomeHeader';
import { Modalize } from 'react-native-modalize';
import GenerationModal from '../../components/GenerationModal/index';

const Home: React.FC = () => {

    const [pokemons, setPokemons] = useState<any[]>([]);
    const [onlyPokemon, setOnlyPokemon] = useState('');
    const [actualGeneration, setActualGeneration] = useState(1);
    const modalizeRef = useRef<Modalize>(null);

    useEffect(() => {
        getGeneration();
    }, [actualGeneration]);

    async function getGeneration() {
        const { data } = await getPokemonsByGeneration(actualGeneration);
        setPokemons(data.pokemon_species);
    }

    useEffect(() => {
        if (onlyPokemon.length === 0) getGeneration();
        else getPokemon();
    }, [onlyPokemon]);

    async function getPokemon() {
        const { data } = await getIndividualPokemon(onlyPokemon.toLocaleLowerCase());
        const dataArray = [];
        dataArray.push(data);
        setPokemons(dataArray);
    }
    
    const renderItem = ({ item }: any) => <PokemonCard name={item.name} key={item.name}/>;

    return (
        <>
            <Body>
                {pokemons.length > 0 && 

                    <PokemonList
                        data={pokemons}
                        renderItem={renderItem}
                        keyExtractor={(item: any) => item.name}
                        ListHeaderComponent={<HomeHeader modalRef={modalizeRef} searchPokemon={setOnlyPokemon} />}
                    />
                }
            </Body>
            
            <Modalize ref={modalizeRef}>
                <GenerationModal changeGen={setActualGeneration} modalRef={modalizeRef} actualGen={actualGeneration} />
            </Modalize>
        </>
    );
};

export default Home;