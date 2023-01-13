import styled from 'styled-components/native';


export const Container = styled.View`
    width: ${({theme}) => theme.sizes.width}px;
    height: 60px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.shape};
    border-bottom-color: ${({theme}) => theme.colors.lightGray};
    border-bottom-width: 1px;

   
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${({theme}) => theme.colors.title };
    font-family: ${({theme}) => theme.fonts.bold};
`