import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

interface Iprops {
    pathOne: string;
    pathTwo: string;
    pathThree: string;
}

const GenerationCard = ({pathOne, pathTwo, pathThree}: Iprops): JSX.Element => {
    return (
        <Container>
            <Title>Yes</Title>
            <Image source={require(pathOne)} />
            <Image source={require(pathTwo)} />
            <Image source={require(pathThree)} />
        </Container>
    );
}

export default GenerationCard;