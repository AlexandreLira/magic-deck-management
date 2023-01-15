
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

interface DeckProps {
    data: {
        title: string;
        amount_cards: number;
        color: string;
    }
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.shape};
`;
export const Content = styled.View`
    flex: 1;
    padding: ${({theme}) => theme.sizes.padding}px;
`;

export const DeckList = styled(FlatList)`

` as React.ComponentType as new <DeckProps>() => FlatList<DeckProps>


export const Separator = styled.View`
    height: ${({theme}) => theme.sizes.padding}px;
`;

export const Footer = styled.View`
    width:  ${({theme}) => theme.sizes.width}px;;
    
    position: absolute;
    bottom: 0px;
    
    justify-content: center;
    align-items: center;

    padding: 24px;
`;