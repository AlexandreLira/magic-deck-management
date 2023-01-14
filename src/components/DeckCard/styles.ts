import styled from 'styled-components/native';

interface ContainerProps {
    labelColor: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%; 
    height: 60px;

    justify-content: center;
    padding: 0px ${({theme}) => theme.sizes.padding}px;

    background-color: ${({theme}) => theme.colors.shape};

    border-right-color: ${({theme}) => theme.colors.lightGray};
    border-right-width: 1px;

    border-top-color: ${({theme}) => theme.colors.lightGray};
    border-top-width: 1px;

    border-bottom-color: ${({theme}) => theme.colors.lightGray};
    border-bottom-width: 1px;

    border-left-color: ${({ labelColor}) => labelColor};
    border-left-width: 10px;

    border-radius: ${({theme}) => theme.sizes.radius_medium}px;

   
`; 

export const Title = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.title };
    font-family: ${({theme}) => theme.fonts.bold};
    margin-bottom: 5px;
`

export const AmountCards = styled.Text`
    font-size: 10px;
    color: ${({theme}) => theme.colors.title };
    font-family: ${({theme}) => theme.fonts.regular};
`

export const LabelColor = styled.View`
    height: 100%;
    width: 10px;
`;