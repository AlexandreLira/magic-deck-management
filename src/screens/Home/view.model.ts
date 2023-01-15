import { useMemo, useRef, useCallback } from "react";

import { addDeck } from '../../store/state/deck';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RootState } from "../../store";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { StackRoutesNavigatorRoutesProps } from "../../routes/app.routes";
import { DeckModel } from "../../common/models/deck.model";

interface handleSubmitProps {
    title: string;
    color: string
}

export function useHomeViewModel() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const { decks } = useSelector((state: RootState) => state.decks);

    const snapPoints = useMemo(() => ['100%'], []);

    const { navigate } = useNavigation<StackRoutesNavigatorRoutesProps>()

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);

    const dispatch = useDispatch();

    function handleSubmit({ title, color }: handleSubmitProps) {
        const deck = {
            id: new Date().getTime().toString(),
            title: title,
            amount_cards: 0,
            color: color,
            cards: []
        }

        dispatch(addDeck(deck));
        handleCloseModalPress()
    }

    function handleGoDeckScreen(deck: DeckModel) {
        navigate('Deck', { deck })
    }


    return {
        snapPoints,
        bottomSheetModalRef,
        decks,
        handleSubmit,
        handlePresentModalPress,
        handleGoDeckScreen

    }
}