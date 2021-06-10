import React from 'react';
import GenerationCard from '../GenerationCard';

import { 
    Container,
    Title,
    Description,
    CardContainer
} from './styles';

const GenerationModal: React.FC = () => {
    return (
        <Container>
            <Title>Generations</Title>
            <Description>Use search for generations to explore your Pokémon!</Description>

            <CardContainer>
                <GenerationCard />
                <GenerationCard />
                <GenerationCard />
                <GenerationCard />
            </CardContainer>

        </Container>
  
    );
}

export default GenerationModal;