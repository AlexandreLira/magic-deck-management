import React, { useState } from 'react';


import { Button } from '../Button';
import { Header } from '../Header';
import { deckColors } from '../../common/utils/constants';


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



export function DeckForm() {
    const [selectedColor, setSelectedColor] = useState(deckColors[0])

    function handleSelectedColor(color: string) {
        setSelectedColor(color)
    }
    return (
        <Container>

            <Header title='Novo deck' />

            <Content>

                <Section>
                    <Title>Nome: </Title>
                    <InputContent labelColor={selectedColor}>
                        <DeckNameInput
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
                        onPress={() => { }}
                        title="Adicionar"
                    />
                </Footer>
            </Content>

        </Container>

    );
};
