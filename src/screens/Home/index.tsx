import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { DeckCard } from '../../components/DeckCard';
import { Header } from '../../components/Header';
import { Container, Content, DeckList, Footer, Separator } from './styles';


const decks = [
  {
    id: '63',
    title: 'Magic',
    color: 'blue',
    amount_cards: 5
  },
  {
    id: '853',
    title: 'Magic',
    color: 'red',
    amount_cards: 5
  },
  {
    id: '8543',
    title: 'Magic',
    color: 'gray',
    amount_cards: 5
  }
]

export function HomeScreen() {
  return (
    <Container>
      <Header title='Decks' />
      <Content>
        <DeckList
          data={decks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <DeckCard data={item} />}
          ItemSeparatorComponent={() => <Separator />}
        />

        <Footer>
          <Button title='Criar um novo deck'/>
        </Footer>
        
      </Content>
    </Container>
  );
}
