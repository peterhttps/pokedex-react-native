import React, { RefObject, useState } from 'react';
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

interface IProps {
    modalRef: RefObject<Modalize>;
}

const HomeHeader = ({ modalRef }: IProps): JSX.Element => {

    const [textPokemon, setTextPokemon] = useState<any>('');

    const onOpen = () => {
        modalRef.current?.open();
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
                        value={textPokemon} 
                        onChangeText={text => setTextPokemon(text)}
                        placeholder="What Pokemon are you looking for?" />
                </InputWrapper>
            </Container>
        </>

    );
};

export default HomeHeader;