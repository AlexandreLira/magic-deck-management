import React from 'react';
import { Text, View } from 'react-native';
import { CardList } from '../../components/CardList';
import { Header } from '../../components/Header';
import { Container, Content, SearchBar, SearchBarIcon, SearchBarInput, Title } from './styles';
import { useSearchViewModel } from './view.model';

export function SearchScreen() {
  const { 
    cardName,
    handleSearch,
    cards,
    handleGoDetails
  } = useSearchViewModel()

  
  
  return (
    <Container>
      <Header title='Pesquisar' />
      <Content>

        <SearchBar>
          <SearchBarIcon />
          <SearchBarInput
            placeholder='Pesquise uma carta'
            onChangeText={handleSearch}
            value={cardName}
          />
        </SearchBar>

        <Title>Resultados {cards.length > 0 && `( ${(cards.length)} )`}</Title>

        <CardList data={cards} onPress={handleGoDetails}/>

      </Content>
    </Container>
  );
}
