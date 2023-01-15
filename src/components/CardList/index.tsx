import React from "react";
import { FlatListProps } from "react-native";

import { CardModel } from '../../common/models/card.model';

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
                        <CardImage source={{ uri: item.image_uris?.small || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a09db0a-17dd-49ff-952a-9cf59fea92bb/d76951d-e0b5c3a4-b717-43d0-87de-e06275da14d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMDlkYjBhLTE3ZGQtNDlmZi05NTJhLTljZjU5ZmVhOTJiYlwvZDc2OTUxZC1lMGI1YzNhNC1iNzE3LTQzZDAtODdkZS1lMDYyNzVkYTE0ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hmLJp2HbuhlQa8ttYlEyBeQXcEx4oL269wmggBD9mCc' }} />
                        <CardName>{item?.name}</CardName>
                    </Card>
                )}
            />
        </Container>
    )
}