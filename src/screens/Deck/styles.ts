import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
   
    background-color: ${({ theme }) => theme.colors.shape};
   
`;

export const Content = styled.View`
    flex: 1;
    padding: ${({ theme }) => theme.sizes.padding}px;
    padding-bottom: 0px;
`;


export const Title = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};

    margin-bottom: 20px;
`