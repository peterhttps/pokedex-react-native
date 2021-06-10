/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import GenerationCard from '../GenerationCard';

import { 
    Container,
    Title,
    Description,
    CardContainer,
    ButtonGeneration
} from './styles';

// Geration I
const bulbasaur = require('../../assets/images/generationI/bulbasaur.png');
const charmander = require('../../assets/images/generationI/charmander.png');
const squirtle = require('../../assets/images/generationI/squirtle.png');

// Geration II
const chikorita = require('../../assets/images/generationII/chikorita.png');
const cyndaquil = require('../../assets/images/generationII/cyndaquil.png');
const totodile = require('../../assets/images/generationII/totodile.png');

// Geration III
const mudkip = require('../../assets/images/generationIII/mudkip.png');
const torchic = require('../../assets/images/generationIII/torchic.png');
const treecko = require('../../assets/images/generationIII/treecko.png');

// Geration IV
const chimchar = require('../../assets/images/generationIV/chimchar.png');
const piplup = require('../../assets/images/generationIV/piplup.png');
const turtwig = require('../../assets/images/generationIV/turtwig.png');

// Geration V
const snivy = require('../../assets/images/generationV/snivy.png');
const tepig = require('../../assets/images/generationV/tepig.png');
const oshawott = require('../../assets/images/generationV/oshawott.png');

const GenerationModal: React.FC = () => {

    const [selectedGeneration, setSelectedGeneration] = useState(1);

    const changeGeneration = (generationNumber: number) => {
        setSelectedGeneration(generationNumber);
    };

    return (
        <Container>
            <Title>Generations</Title>
            <Description>Use search for generations to explore your Pokémon!</Description>

            <CardContainer>
                <ButtonGeneration onPress={() => changeGeneration(1)}>
                    <GenerationCard 
                        title={'Generation I'}
                        pathOne={bulbasaur}
                        pathTwo={charmander}
                        pathThree={squirtle}
                        selected={selectedGeneration === 1}
                    />
                </ButtonGeneration>
                
                <ButtonGeneration onPress={() => changeGeneration(2)}>
                    <GenerationCard 
                        title={'Generation II'}
                        pathOne={chikorita}
                        pathTwo={cyndaquil}
                        pathThree={totodile}
                        selected={selectedGeneration === 2}
                    />
                </ButtonGeneration>

                <ButtonGeneration onPress={() => changeGeneration(3)}>
                    <GenerationCard 
                        title={'Generation III'}
                        pathOne={mudkip}
                        pathTwo={torchic}
                        pathThree={treecko}
                        selected={selectedGeneration === 3}
                    />
                </ButtonGeneration>

                <ButtonGeneration onPress={() => changeGeneration(4)}>
                    <GenerationCard 
                        title={'Generation IV'}
                        pathOne={chimchar}
                        pathTwo={piplup}
                        pathThree={turtwig}
                        selected={selectedGeneration === 4}
                    />
                </ButtonGeneration>


                <ButtonGeneration onPress={() => changeGeneration(5)}>
                    <GenerationCard 
                        title={'Generation V'}
                        pathOne={snivy}
                        pathTwo={tepig}
                        pathThree={oshawott}
                        selected={selectedGeneration === 5}
                    />
                </ButtonGeneration>
            </CardContainer>
        </Container>
  
    );
};

export default GenerationModal;