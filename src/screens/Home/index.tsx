import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { Button } from '../../components/Button';
import { DeckCard } from '../../components/DeckCard';
import { Header } from '../../components/Header';

import {
  Container,
  Content,
  DeckList,
  Footer,
  Separator
} from './styles';
import { deckColors } from '../../common/utils/constants';
import { DeckForm } from '../../components/DeckForm';
import { useHomeViewModel } from './view.model';


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


  const {
    snapPoints,
    bottomSheetModalRef,

    handlePresentModalPress,
    handleCloseModalPress
  } = useHomeViewModel()

  return (
    <BottomSheetModalProvider>


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
            <Button title='Criar um novo deck' onPress={handlePresentModalPress} />
          </Footer>
        </Content>
      </Container >

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          borderRadius: 24,
        }}
      >
        <DeckForm />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}