import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardModel } from '../../common/models/card.model';

interface DeckProps {
    id: string
    title: string;
    amount_cards: number;
    color: string;
    cards: CardModel[]

}

interface DeckState {
    decks: DeckProps[]
}

const initialState: DeckState = {
    decks: []
}

const deckSlice = createSlice({
    name: 'decks',
    initialState,
    reducers: {
        addDeck(state, action: PayloadAction<DeckProps>) {
            state.decks = [...state.decks, action.payload]
        }

    }
})

export const { addDeck } = deckSlice.actions;
export default deckSlice.reducer;