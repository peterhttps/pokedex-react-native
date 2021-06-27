import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
  Body,
  PokemonList
} from './styles';

import PokemonCard from '../../components/PokemonCard';
import { getAllPokemons, getIndividualPokemon } from '../../services/pokemonService';
import HomeHeader from '../../components/HomeHeader';

const Home: React.FC = () => {

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [onlyPokemon, setOnlyPokemon] = useState('');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await getAllPokemons();
    setPokemons(data.results);
  }

  useEffect(() => {
    if (onlyPokemon.length === 0) getData();
    else getPokemon();
  }, [onlyPokemon]);

  async function getPokemon() {
    const { data, status } = await getIndividualPokemon(onlyPokemon.toLocaleLowerCase());
    if (status === 200) {
      const dataArray = [];
      dataArray.push(data);
      setPokemons(dataArray);
    }
  }
    
  const renderItem = useCallback(({ item }: any) => <PokemonCard name={item.name} key={item.name}/>, []);
  const keyExtrtactor = useCallback((item: any) => item.name || 'none', []);

  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <Body>
        {pokemons.length > 0 && 
                    <PokemonList
                      data={pokemons}
                      renderItem={renderItem}
                      keyExtractor={keyExtrtactor}
                      ListHeaderComponent={<HomeHeader searchPokemon={setOnlyPokemon} />}
                      maxToRenderPerBatch={6}
                      removeClippedSubviews={true}
                      initialNumToRender={4}
                      windowSize={5}
                      updateCellsBatchingPeriod={10}
                    />
        }
      </Body>
    </>
  );
};

export default Home;