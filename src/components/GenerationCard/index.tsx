import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { 
    Container, 
    Title, 
    PokemonImage,
    ImageContainer,
} from './styles';

interface Iprops {
    title: string;
    pathOne: any;
    pathTwo: any;
    pathThree: any;
    selected: boolean;
}

const GenerationCard = ({title, pathOne, pathTwo, pathThree, selected}: Iprops): JSX.Element => {
    return (
        <Container selected={selected}>
            <ImageContainer>
                <PokemonImage source={pathOne} />
                <PokemonImage source={pathTwo} />
                <PokemonImage source={pathThree} />
            </ImageContainer>
            <Title selected={selected}>{ title }</Title>
        </Container>
    );
};

export default GenerationCard;