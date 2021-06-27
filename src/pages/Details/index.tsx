import React from 'react';
import { Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { 
  Wrapper, 
  HeadContainer, 
  BodyContainer, 
  PokemonImage,
  HeaderInfos,
  PokemonId,
  PokemonTitle,
  PokemonTypes,
  Type
} from './styles';

import pokemonColors from '../../utils/pokemonColors';
import { IPokemon } from '../../interfaces/IPokemon';
import { IColors } from '../../interfaces/IColors';


type StackParamsList = {
  pokemon: {
    pokemon: IPokemon
  };
}

const Details = (): JSX.Element => {

  const route = useRoute<RouteProp<StackParamsList, 'pokemon'>>();
  const pokemon = route.params?.pokemon;

  return (
    <Wrapper color={pokemonColors[pokemon.types[0].type.name as keyof IColors]}>
      <HeadContainer>
        <PokemonImage source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
        }} />
        <HeaderInfos>
          <PokemonId>
            # {pokemon.id}
          </PokemonId>
          <PokemonTitle>
            {pokemon.name}
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
        </HeaderInfos>
      </HeadContainer>    
      <BodyContainer>
        <Text>Texto</Text>
      </BodyContainer>
    </Wrapper>
  
  );
};

export default Details;