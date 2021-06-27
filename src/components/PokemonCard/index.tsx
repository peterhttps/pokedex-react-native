import React, { useEffect, useState, useRef } from 'react';
import { getIndividualPokemon } from '../../services/pokemonService';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  CardLeftArea,
  PokemonTitle,
  PokemonTypes,
  Type,
  PokemonImage,
  PokeballImage,
  PokemonID,
  SkeletonWrapper
} from './styles';

import pokemonColors from '../../utils/pokemonColors';
import { IPokemon } from '../../interfaces/IPokemon';
import { IColors } from '../../interfaces/IColors';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Iprops {
    name: string;
}

const PokemonCard = ({ name }: Iprops): JSX.Element => {

  const navigation = useNavigation();

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

  const isMounted = useRef(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    if (name) {
      getPokemon();
    }
        
    return () => {
      isMounted.current = false;
    };
  }, []);

  async function getPokemon() {
    const { data, status } = await getIndividualPokemon(name);
    if (isMounted.current && status === 200) {
      setPokemon(data);
      setLoaded(true);
    }        
  }   

  if (!loaded) {
    return (
      <SkeletonWrapper>
        <SkeletonPlaceholder>
          <View style={{ width: '100%', height: 120, margin: 'auto', borderRadius: 10}} />
        </SkeletonPlaceholder>
      </SkeletonWrapper>
    );
  }

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Details', {
        pokemon: pokemon
      })}>
        <Container color={pokemon.types ? pokemonColors[pokemon.types[0].type.name as keyof IColors] : '#DDDDDD'}>
          <CardLeftArea>
            <PokemonID># {pokemon.id}</PokemonID>
            <PokemonTitle>
              {name || 'Not Found'}
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
      </TouchableOpacity>
            
    </>
  );
};

export default PokemonCard;