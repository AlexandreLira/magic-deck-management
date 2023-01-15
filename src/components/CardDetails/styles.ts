import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
    width: ${({ theme }) => theme.sizes.item_size}px;
    background-color: ${({ theme }) => theme.colors.shape};
    
`;



export const Content = styled(Animated.View)`
   padding: 20px;
   
`;
export const CardImage = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: 100%;
    height: ${({ theme }) => theme.sizes.height * 0.46}px;
`


export const Name = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${({theme}) => theme.colors.title};
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Info = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;
    /* background-color: red; */
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const Text = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: 50%;
    text-align: right;
    font-size: 14px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.regular};
`;


export const Footer = styled.View`
    width: ${({ theme }) => theme.sizes.item_size}px;
    
    position: absolute;
    bottom: 0px;
    
    justify-content: center;
    align-items: center;

    padding: 0px 20px 20px;

   
`;