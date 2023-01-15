import React, { useState } from 'react';


import { Button } from '../Button';
import { Header } from '../Header';
import { deckColors } from '../../common/utils/constants';
import { useDeckFormViewModel } from './view.model';

import {
    ColorLabel,
    ColorLabelContent,
    Container,
    Content,
    DeckNameInput,
    Footer,
    InputContent,
    Section,
    Title
} from './styles';

export interface DeckFormProps {
    values?: {
        title: string,
        color: string
    } | undefined;
    onSubmit: (deck: {
        title: string,
        color: string
    }) => void
}

export function DeckForm({ onSubmit, values }: DeckFormProps) {
    const {
        selectedColor,
        deckName,
        handleSelectedColor,
        handlePress,
        setDeckName,
    } = useDeckFormViewModel({ onSubmit, values })


    return (
        <Container>

            <Header title='Novo deck' />

            <Content>

                <Section>
                    <Title>Nome: </Title>
                    <InputContent labelColor={selectedColor}>
                        <DeckNameInput
                            value={deckName}
                            onChangeText={setDeckName}
                            placeholder='Ex: Deck supremo'
                        />
                    </InputContent>
                </Section>

                <Section>
                    <Title>Cor: </Title>
                    <ColorLabelContent>
                        {deckColors.map(color => (
                            <ColorLabel
                                key={color}
                                color={color}
                                onPress={() => handleSelectedColor(color)}
                                active={selectedColor === color}
                            />
                        ))}
                    </ColorLabelContent>
                </Section>

                <Footer>
                    <Button
                        onPress={handlePress}
                        title="Adicionar"
                    />
                </Footer>
            </Content>

        </Container>

    );
};
