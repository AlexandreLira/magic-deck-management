import React from "react";

import { Animated } from 'react-native'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { Button } from "../../components/Button";


import { CardDetails } from "../../components/CardDetails";
import { useDetailsViewModel } from "./view.model";
import { Header } from "../../components/Header";
import { Separator } from "../Home/styles";
import { DeckCard } from "../../components/DeckCard";

import {
    Container,
    EmptySpace,
    Footer,
    List,
    DeckList
} from "./styles";

export function Details() {
    const {
        onViewableItemsChanged,
        viewabilityConfig,
        cardsData,
        scrollX,
        sizes,
        snapPoints,
        bottomSheetModalRef,
        decks,
        handlePresentModalPress,
        inputRange
    } = useDetailsViewModel()
    return (
        <BottomSheetModalProvider>
            <Container>
                <Header title='Detalhes' />
                <List
                    data={cardsData}
                    keyExtractor={item => item.id}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    renderItem={({ item, index }) => {
                        if (!item.type_line) {
                            return <EmptySpace key={item.id} />
                        }

                        const translateY = scrollX.interpolate({
                            inputRange: inputRange(index),
                            outputRange: [0, -50, 0]
                        })

                        return (
                            <CardDetails
                                data={item}
                                translateY={translateY}
                            />
                        )
                    }}
                />
                <Footer>

                    <Button
                        onPress={handlePresentModalPress}
                        title="Adicionar a um deck"
                    />
                </Footer>
            </Container>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{
                    borderRadius: 24,
                }}
            >
                <DeckList
                    contentContainerStyle={{
                        padding: 24
                    }}
                    data={decks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <DeckCard data={item} />}
                    ItemSeparatorComponent={() => <Separator />}
                />

            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}