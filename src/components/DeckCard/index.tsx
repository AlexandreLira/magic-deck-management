import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { AmountCards, Container, Title } from './styles';

export interface DeckCardProps extends TouchableOpacityProps {
    data: {
        title: string;
        amount_cards: number;
        color: string;
    }

}

export function DeckCard({ data, ...rest }: DeckCardProps) {
    const {
        title,
        amount_cards,
        color
    } = data

    return (
        <Container labelColor={color} {...rest}>
            <Title>{title}</Title>
            <AmountCards>{amount_cards} Cartas</AmountCards>
        </Container>
    );
}
