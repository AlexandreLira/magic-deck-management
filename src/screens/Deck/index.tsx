import React from 'react';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { CardList } from '../../components/CardList';
import { DeckForm } from '../../components/DeckForm';
import { Header } from '../../components/Header';
import { Container, Content, Title } from './styles';
import { useSearchViewModel } from './view.model';

export function DeckScreen() {
  const {

    snapPoints,
    cards,
    deck,
    bottomSheetModalRef,
    handleGoDetails,
    handleGoBack,
    handlePresentModalPress,
    handleUpdateDeckSubmit
  } = useSearchViewModel()



  return (
    <Container>
      <BottomSheetModalProvider>
        <Header 
          title={`Deck/${deck.title}`} 
          onPressLeft={handleGoBack} 
          onPressRight={handlePresentModalPress} 
        />
        <Content>

          <Title>{cards.length > 0 && cards.length} Cartas</Title>

          <CardList data={cards} onPress={handleGoDetails} />

        </Content>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{
            borderRadius: 24,
          }}
        >
          <DeckForm
            title="Atualizar"
            onSubmit={handleUpdateDeckSubmit}
            values={deck}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Container>
  );
}
