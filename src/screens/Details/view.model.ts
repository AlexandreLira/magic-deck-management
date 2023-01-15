
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";

import { Animated } from 'react-native'
import { useTheme } from 'styled-components'

import { CardModel } from "../../common/models/card.model";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../../store/state/deck";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackRoutes, StackRoutesNavigatorRoutesProps } from "../../routes/app.routes";
interface SeletedProps {
    index: string
}

const seleted: SeletedProps = {
    index: '1'
}


export function useDetailsViewModel() {
    const [cardsData, setCardsData] = useState<CardModel[]>([])
    const [cardIndex, setCardIndex] = useState(1)

    const scrollX = useRef(new Animated.Value(0)).current;
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const { sizes, colors } = useTheme()
    const { decks } = useSelector((state: RootState) => state.decks);

    const { params } = useRoute<RouteProp<StackRoutes, 'Details'>>()
    const { cards, deck } = params
    
    const snapPoints = useMemo(() => ['50','80%'], []);
    const dispatch = useDispatch();


    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);

    function handleAddCart(deckId: string, card: CardModel) {
        const payload = {
            deckId, 
            card
        }

        dispatch(addCard(payload));
        handleCloseModalPress()
    }

    function handleRemoveCard() {
        const payload = {
            cardId: cardsData[cardIndex].id,
            deckId: deck!.id
        }

        const [deckFilted] = decks.filter(item => item.id === deck?.id)

        setCardsData(deckFilted.cards)
        setCardIndex(1)

        dispatch(removeCard(payload));
        handleCloseModalPress()

    }

  

    useEffect(() => {
        setCardsData([
            // @ts-ignore
            { id: 'left-spacer' },
            // @ts-ignore
            ...cards,
            // @ts-ignore
            { id: 'right-spacer' }
        ])
    }, [params])


    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 40,
        waitForInteraction: true
    };


    const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
        setCardIndex(viewableItems[0].index)
        let id = viewableItems[0].item.id
        if (id === 'left-spacer') {
            id = '1'
        } else if (id === 'right-spacer') {
            id = cardsData.length - 2
        }

        seleted.index = String(id)
    }, []);

    const inputRange = (index: number) => ([
        (index - 2) * sizes.item_size,
        (index - 1) * sizes.item_size,
        index * sizes.item_size,
    ])

    const onScroll = (scrollX: Animated.Value) => {
        Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
        )
    }


    return {
        viewabilityConfig,
        cardsData,
        scrollX,
        snapPoints,
        bottomSheetModalRef,
        decks,
        cardIndex,
        sizes,
        deck,
        colors,
        handlePresentModalPress,
        onViewableItemsChanged,
        inputRange,
        handleAddCart,
        onScroll,
        handleRemoveCard
    }
}