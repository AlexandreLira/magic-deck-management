import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import { CardModel } from '../../common/models/card.model';

export const Container = styled.View`
    flex: 1
`

export const List = styled(FlatList).attrs({
    columnWrapperStyle: {
        flex: 1,
        justifyContent: "space-between"
    },
    showsHorizontalScrollIndicator: false,
    numColumns: 3
})`

`as React.ComponentType as new <CardModel>() => FlatList<CardModel>


export const Card = styled.TouchableOpacity`
    width: 100px;
`

export const CardImage = styled.Image`
    height: 140px;
    margin-bottom: 4px;

`
export const CardName = styled.Text.attrs({
    numberOfLines: 1,
})`
    
    font-size: 10px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};

`

export const Separator = styled.View`
    height: 20px;
`;