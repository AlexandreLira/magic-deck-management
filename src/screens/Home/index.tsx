import React from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


import { useHomeViewModel } from './view.model';



import { Button } from '../../components/Button';
import { DeckCard } from '../../components/DeckCard';
import { Header } from '../../components/Header';
import { DeckForm } from '../../components/DeckForm';

import {
  Container,
  Content,
  DeckList,
  Footer,
  Separator
} from './styles';


export function HomeScreen() {

  const {
    snapPoints,
    bottomSheetModalRef,
    decks,

    handlePresentModalPress,
    handleSubmit
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
        <DeckForm 
          onSubmit={handleSubmit}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}