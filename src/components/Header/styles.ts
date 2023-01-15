import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


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

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 24px;
    height: 60px;
    align-items: center;
    justify-content: center;
`

export const ArrowLeft = styled(Ionicons).attrs({
    name: 'arrow-back'
})`
    font-size: 24px;
    color: ${({theme}) => theme.colors.title };
`

export const EditButton = styled.TouchableOpacity`
    position: absolute;
    right: 24px;
    height: 60px;
    align-items: center;
    justify-content: center;
`

export const Edit = styled(MaterialCommunityIcons).attrs({
    name: 'note-edit-outline'
})`
    font-size: 24px;
    color: ${({theme}) => theme.colors.title };
`