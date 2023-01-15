import styled, { css } from "styled-components/native";

interface InputProps {
    labelColor: string
}

interface ColorLabelProps {
    active?: boolean,
    color: string
}

export const Container = styled.View`
   flex: 1;
`
export const Content = styled.View`
    flex: 1;
    padding: ${({ theme }) => theme.sizes.padding}px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.title};
    
    margin-bottom: 12px;
`

export const InputContent = styled.View<InputProps>`
    width: 100%; 
    height: 60px;

    justify-content: center;
    padding: 0px ${({ theme }) => theme.sizes.padding}px;

    background-color: ${({ theme }) => theme.colors.shape};

    border-right-color: ${({ theme }) => theme.colors.lightGray};
    border-right-width: 1px;

    border-top-color: ${({ theme }) => theme.colors.lightGray};
    border-top-width: 1px;

    border-bottom-color: ${({ theme }) => theme.colors.lightGray};
    border-bottom-width: 1px;

    border-left-color: ${({ labelColor }) => labelColor};
    border-left-width: 10px;

    border-radius: ${({ theme }) => theme.sizes.radius_medium}px;

   
`;

export const DeckNameInput = styled.TextInput`
    height: 100%;
`

export const Section = styled.View`
    margin-bottom: 20px;
`

export const ColorLabelContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ColorLabel = styled.TouchableOpacity<ColorLabelProps>`
    border-radius: ${({ theme }) => theme.sizes.radius_small}px;

    height: 24px;
    width: 24px;

    background-color: ${({ color }) => color};
    ${({ active }) => active && css`
        border-color: ${({ theme }) => theme.colors.title};
        border-width: 4px;
    `}
`


export const Footer = styled.View`
    width:  ${({ theme }) => theme.sizes.width}px;;
    
    position: absolute;
    bottom: 0px;
    
    justify-content: center;
    align-items: center;

    padding: 0px 24px 24px;

   
`;

export const BackgroundModal = styled.View`
    position: absolute;
    width: ${({ theme }) => theme.sizes.width}px;
    height: ${({ theme }) => theme.sizes.height}px;
    background-color: black;
    opacity: .2;
    align-self: center
`