import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { searchCards } from "../../services/api";

import { StackRoutes, StackRoutesNavigatorRoutesProps } from "../../routes/app.routes";
import { CardModel } from "../../common/models/card.model";
import { RootState } from "../../store";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { addDeck, editDeck } from "../../store/state/deck";

interface handleSubmitProps {
    id: string
    title: string;
    color: string
}

export function useSearchViewModel() {
    const [cardName, setCardName] = useState<string>('');
    const [cards, setCards] = useState<CardModel[]>([]);

    const { navigate, goBack } = useNavigation<StackRoutesNavigatorRoutesProps>()
    const { params } = useRoute<RouteProp<StackRoutes, 'Deck'>>()
    const { deck } = params
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['100%'], []);

    const dispatch = useDispatch();

    useEffect(() => {
        setCards(params.deck.cards)
    }, [deck])

    function handleGoBack() {
        goBack()
    }


   


    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);



    function handleUpdateDeckSubmit({ id, title, color }: handleSubmitProps) {

        const payload = {
            deckId: id,
            title,
            color
        }
     

        dispatch(editDeck(payload));
        handleCloseModalPress()
    }


    function handleGoDetails() {
        navigate('Details',
            {
                deck: {
                    id: deck.id,
                    title: deck.title
                },
                cards
            })
    }

    return {
        cardName,
        snapPoints,
        cards,
        deck,
        bottomSheetModalRef,
        handleGoDetails,
        handleGoBack,
        handlePresentModalPress,
        handleUpdateDeckSubmit
        
    }
}