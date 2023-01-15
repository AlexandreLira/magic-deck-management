import React from "react";
import { FlatListProps } from "react-native";

import { CardModel } from '../../common/models/card.model';
import { CARD_DEFAULT_IMAGE } from "../../common/utils/constants";

import {
    Card,
    CardImage,
    CardName,
    Container,
    List,
    Separator
} from "./styles";


interface CardListProps {
    data: CardModel[]
    onPress: () => void;
}

export function CardList({ data, onPress }: CardListProps) {
  
    return (
        <Container>
            <List
                data={data}
                keyExtractor={item => item?.id}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item }) => (
                    <Card onPress={onPress}>
                        <CardImage source={{ uri: item.image_uris?.small || CARD_DEFAULT_IMAGE}}/>
                        <CardName>{item?.name}</CardName>
                    </Card>
                )}
            />
        </Container>
    )
}