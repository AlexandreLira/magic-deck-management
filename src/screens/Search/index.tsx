import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { CardList } from '../../components/CardList';
import { Header } from '../../components/Header';
import { Container, Content, Footer, SearchBar, SearchBarIcon, SearchBarInput, Title } from './styles';
import { useSearchViewModel } from './view.model';

export function SearchScreen() {
  const {
    cardName,
    cards,
    handleSearch,
    setCardName,
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
            onChangeText={setCardName}
            value={cardName}
          />
        </SearchBar>



        <Title>Resultados {cards.length > 0 && `( ${(cards.length)} )`}</Title>

        <CardList data={cards} onPress={handleGoDetails} />

      </Content>
      <Footer>
        <Button 
          title='Pesquisar' 
          onPress={handleSearch}
          disabled={!Boolean(cardName.length)}
        />
      </Footer>

    </Container>
  );
}
