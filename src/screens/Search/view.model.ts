import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { CardModel } from "../../common/models/card.model";
import { StackRoutesNavigatorRoutesProps } from "../../routes/app.routes";
import { searchCards } from "../../services/api";

export function useSearchViewModel() {
    const [cardName, setCardName] = useState<string>('');
    const [cards, setCards] = useState<CardModel[]>([]);

    const { navigate } = useNavigation<StackRoutesNavigatorRoutesProps>()
    
    async function handleSearch() {        
        const response = await searchCards(cardName)
        setCards(response)
    }

    function handleGoDetails() {
        navigate('Details', { cards })
    }

    return {
        cardName,
        cards,
        handleSearch,
        handleGoDetails,
        setCardName,
    }
}