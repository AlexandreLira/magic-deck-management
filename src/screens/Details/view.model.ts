
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";

import { Animated, Image, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

import { Button } from "../../components/Button";

import { cards } from "../../common/utils/constants";
import { CardDetails } from "../../components/CardDetails";
import { CardModel } from "../../common/models/card.model";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";


interface SeletedProps {
    index: string
}

const seleted: SeletedProps = {
    index: '1'
}


export function useDetailsViewModel() {
    const [cardsData, setCardsData] = useState<CardModel[]>([])
    const scrollX = useRef(new Animated.Value(0)).current;
    const { sizes } = useTheme()

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const { decks } = useSelector((state: RootState) => state.decks);
    
    const snapPoints = useMemo(() => ['50','80%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);

    const dispatch = useDispatch();


    useEffect(() => {
        setCardsData([
            // @ts-ignore
            { id: 'left-spacer' },
            // @ts-ignore
            ...cards,
            // @ts-ignore
            { id: 'right-spacer' }
        ])
    }, [])

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 40,
        waitForInteraction: true
    };


    const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
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
        onViewableItemsChanged,
        inputRange,
        viewabilityConfig,
        cardsData,
        scrollX,
        snapPoints,
        bottomSheetModalRef,
        decks,
        handlePresentModalPress,
        onScroll,
        sizes
    }
}