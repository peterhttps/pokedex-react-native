import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { 
    Container, 
    GenerationButton, 
    Title, 
    Description, 
    InputWrapper, 
    InputComponent,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    modalRef: RefObject<Modalize>;
    searchPokemon: Dispatch<SetStateAction<string>>;
}

const HomeHeader = ({ modalRef, searchPokemon }: IProps): JSX.Element => {

    const [textPokemon, setTextPokemon] = useState<any>('');
    const [showingClearButton, setShowingClearButton] = useState<any>(false);

    const onOpen = () => {
        modalRef.current?.open();
    };

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
                <GenerationButton onPress={() => onOpen()} >
                    <MaterialCommunityIcons name="card-bulleted-settings-outline" size={24} color="black" />
                </GenerationButton>
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