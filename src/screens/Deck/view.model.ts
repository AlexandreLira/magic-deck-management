import { useEffect, useState } from "react"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { searchCards } from "../../services/api";

import { StackRoutes, StackRoutesNavigatorRoutesProps } from "../../routes/app.routes";
import { CardModel } from "../../common/models/card.model";

export function useSearchViewModel() {
    const [cardName, setCardName] = useState<string>('');
    const [cards, setCards] = useState<CardModel[]>([]);

    const { navigate } = useNavigation<StackRoutesNavigatorRoutesProps>()
    const { params } = useRoute<RouteProp<StackRoutes, 'Deck'>>()
    const { deck } = params

    useEffect(() => {
        setCards(params.deck.cards)
    }, [ deck])

    async function handleSearch(cardName: string) {
        setCardName(cardName)
        if (cardName.length === 0) {
            setCards([])
            return
        }
        const response = await searchCards(cardName)
        setCards(response)
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
        handleSearch,
        handleGoDetails,
        cards,
        deck
    }
}