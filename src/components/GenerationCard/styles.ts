import styled from 'styled-components/native';


export const Container = styled.View<{selected: boolean}>`
    background: ${props => props.selected ? '#E75D60' : '#F5F5F5'};
    width: 100%;
    height: 120px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Title = styled.Text<{selected: boolean}>`
    font-size: 20px;
    font-weight: bold;
    color: black;
    color: ${props => props.selected ? '#FFFFFF' : '#404040'};
`;

export const Description = styled.Text`
    font-size: 15px;
`;

export const ImageContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const PokemonImage = styled.Image`
    width: 35px;
    height: 35px;
`;