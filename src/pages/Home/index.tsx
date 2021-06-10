import React, { useEffect, useState, useRef } from 'react';

import { 
    Body,
    PokemonList
} from './styles';

import PokemonCard from '../../components/PokemonCard';
import { getPokemonsByGeneration } from '../../services/pokemonService';
import HomeHeader from '../../components/HomeHeader';
import { Modalize } from 'react-native-modalize';
import GenerationModal from '../../components/GenerationModal/index';

const Home: React.FC = () => {

    const [pokemons, setPokemons] = useState([]);
    const modalizeRef = useRef<Modalize>(null);


    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await getPokemonsByGeneration(1);
        setPokemons(data.pokemon_species);
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
                        ListHeaderComponent={<HomeHeader modalRef={modalizeRef} />}
                    />
                }
            </Body>
            
            <Modalize ref={modalizeRef}>
                <GenerationModal />
            </Modalize>
        </>
    );
};

export default Home;