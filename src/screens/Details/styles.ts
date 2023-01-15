import React from 'react';
import { Animated, FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native'
import { CardModel } from '../../common/models/card.model';
import { DeckModel } from '../../common/models/deck.model';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const EmptySpace = styled.View`
    width: ${({ theme: { sizes } }) => (sizes.width - sizes.item_size) / 2}px;
`

export const List = styled(Animated.FlatList).attrs(({ theme }) => ({
    contentContainerStyle: {
        alignItems: 'center'
    },
    snapToInterval: theme.sizes.item_size,
    bounces: false,
    decelerationRate: 'normal',
    snapToAlignment: 'start',
    showsHorizontalScrollIndicator: false,
    horizontal: true,

}))`

` as React.ComponentType as new <CardModel>() => FlatList<CardModel>


export const DeckList = styled(FlatList)`
    flex: 1;
` as React.ComponentType as new <DeckModel>() => FlatList<DeckModel>


export const Footer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 24px;
`;
