import { shade } from 'polished';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView<{color: string}>`
    flex: 1;
    background: ${props => props.color};
`;

export const HeadContainer = styled.View`
    padding: 90px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PokemonImage = styled.Image`
    width: 120px;
    height: 120px;
    position: relative;
    z-index: 3;
`;

export const HeaderInfos = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const PokemonId = styled.Text`
  color: white;
`;


export const PokemonTitle = styled.Text`
  color: white;
  color: white;
  font-size: 30px;
  font-weight: bold;
  z-index: 3;
  margin-top: 0px;
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

export const BodyContainer = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 10px;
  background: white;
  height: 500px;
`;
