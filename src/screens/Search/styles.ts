import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
    flex: 1;
   
    background-color: ${({ theme }) => theme.colors.shape};
   
`;

export const Content = styled.View`
    flex: 1;
    padding: ${({ theme }) => theme.sizes.padding}px;
    padding-bottom: 0px;
`;

export const SearchBar = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;

    padding: 0px 24px;
    
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.sizes.radius_medium}px;
    
`;

export const SearchBarIcon = styled(Ionicons).attrs({
    name: 'search'
})`
  font-size: 20px;
  margin-right: 16px;
`;

export const SearchBarInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.lightGray,
}))`
    width: 100%;
    height: 60px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};

    margin-top: 24px;
    margin-bottom: 20px;
`

export const Footer = styled.View`
    width: ${({ theme }) => theme.sizes.width}px;

    justify-content: center;
    align-items: center;

    padding: 0px 20px 20px;
`