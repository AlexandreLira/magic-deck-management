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
    handleSubmit,
    handleGoDeckScreen,
    handleCloseModalPress,
    handleRemoveDeck
  } = useHomeViewModel()

  return (
    <BottomSheetModalProvider>


      <Container>
        <Header title='Decks' />
        <Content>
          <DeckList
            data={decks}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <DeckCard
                data={item}
                onPress={() => handleGoDeckScreen(item)}
                onLongPress={() => handleRemoveDeck(item.id)}
              />
            }
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
          title='Cadastrar'
          onSubmit={handleSubmit}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}