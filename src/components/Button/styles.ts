import styled, {css} from 'styled-components/native';

interface ContainerProps {
    color?: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%;
    height: 60px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme, color}) => color ? color : theme.colors.main};

    border-radius: ${({theme}) => theme.sizes.radius_medium}px;

    ${({disabled}) => disabled && css`
        opacity: 0.5;
    `};

   
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
`