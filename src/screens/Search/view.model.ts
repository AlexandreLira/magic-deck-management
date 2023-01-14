import { useState } from "react"
import { CardModel } from "../../common/models/card.model";
import { searchCards } from "../../services/api";

export function useSearchViewModel() {
    const [cardName, setCardName] = useState<string>('');
    const [cards, setCards] = useState<CardModel[]>([]);

    async function handleSearch(cardName: string) {
        setCardName(cardName)
        if (cardName.length === 0) {
            setCards([])
            return
        }
        const response = await searchCards(cardName)
        setCards(response)
    }


    return {
        cardName,
        handleSearch,
        cards
    }
}