import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function HomeScreen() {
  return (
    <Container>
      <Header title='Decks'/>
      <Text>Home</Text>
    </Container>
  );
}
