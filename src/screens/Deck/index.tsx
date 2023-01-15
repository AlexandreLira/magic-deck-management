import React from 'react';
import { Text, View } from 'react-native';
import { CardList } from '../../components/CardList';
import { Header } from '../../components/Header';
import { Container, Content, Title } from './styles';
import { useSearchViewModel } from './view.model';

export function DeckScreen() {
  const { 
    cardName,
    handleSearch,
    cards,
    handleGoDetails,
    deck
  } = useSearchViewModel()

  
  
  return (
    <Container>
      <Header title={`Deck/${deck.title}`} />
      <Content>
        
        <Title>{cards.length > 0 && cards.length} Cartas</Title>

        <CardList data={cards} onPress={handleGoDetails}/>

      </Content>
    </Container>
  );
}
