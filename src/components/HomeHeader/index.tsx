import React, { Dispatch, SetStateAction, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { 
  Container, 
  Title, 
  Description, 
  InputWrapper, 
  InputComponent,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    searchPokemon: Dispatch<SetStateAction<string>>;
}

const HomeHeader = ({ searchPokemon }: IProps): JSX.Element => {

  const [textPokemon, setTextPokemon] = useState<any>('');
  const [showingClearButton, setShowingClearButton] = useState<any>(false);

  const submitEdit = () => {
    setShowingClearButton(true);
    searchPokemon(textPokemon);
  };

  const clearClick = () => {
    setTextPokemon('');
    setShowingClearButton(false);
    searchPokemon('');
  };

  return (
    <>
      <Container>
        <Title>Pokédex</Title>
        <Description>Search for Pokémon by name or using the {'\n'}National Pokédex Number</Description>
        <InputWrapper>
          <FontAwesome name="search" size={18} color="black" />
          <InputComponent   
            returnKeyType={'search'}
            onSubmitEditing={() => submitEdit()}
            value={textPokemon} 
            onChangeText={text => setTextPokemon(text)}
            placeholder="What Pokemon are you looking for?" />
          {showingClearButton 
                    && <TouchableOpacity onPress={() => clearClick()}>
                      <MaterialCommunityIcons name="close" size={18} color="black" />
                    </TouchableOpacity>}
        </InputWrapper>
      </Container>
    </>

  );
};

export default HomeHeader;