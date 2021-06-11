import styled from 'styled-components/native';
import { shade } from 'polished';

export const Container = styled.View<{color: string}>`
    background: ${props => props.color};
    height: 120px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    z-index: 1;
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
`;

export const CardLeftArea = styled.View`

`;

export const PokemonID = styled.Text`
    color: white;
    margin-bottom: 1px;
    font-weight: bold;
`;

export const PokemonTitle = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: bold;
    z-index: 3;
    margin-top: 0px;
    line-height: 30px;
    text-transform: capitalize;
`;

export const PokemonTypes = styled.View`
    display: flex;
    flex-direction: row;
    z-index: 3;
    margin-top: 5px;
`;

export const Type = styled.Text<{color: string, background?: string}>`
    
    ${({
        color,
        background = shade(0.1, color),
    }) => {
        const style = `
            background: ${background};
            padding: 5px 10px;
            font-weight: bold;
            color: white;
            margin-right: 10px;
      `;
        return style;
    }}
`;

export const PokemonImage = styled.Image`
    width: 80px;
    height: 80px;
    position: relative;
    z-index: 3;
`;

export const PokeballImage = styled.Image`
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 1;
    margin-right: 0;
    right: -10px;
    opacity: 0.08;
`;

export const SkeletonWrapper = styled.View`
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 20px;
`;