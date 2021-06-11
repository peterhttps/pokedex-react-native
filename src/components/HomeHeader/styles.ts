import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
    background: #FFFFFF;
    flex: 1;
    padding: 40px;
`;

export const Container = styled.View`
    padding: 40px;
    background: #FFFFFF;

`;

export const GenerationButton = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
`;

export const Title = styled.Text`
    font-weight: 700;
    font-size: 30px;
    color: #161619;
`;

export const Description = styled.Text`
    color: #979799;
    font-size: 15px;
    margin-top: 10px;
`;

export const InputWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #F5F6F6;
    padding: 5px 20px;
    border-radius: 5px;
    margin-top: 25px;
`;

export const InputComponent = styled.TextInput`
    margin-left: 10px;
    margin-right: 10px;
    max-width: 82%;
    font-size: 13px;
`;

export const Body = styled.View`
    margin-top: 40px;
    padding-bottom: 40px;
`;

