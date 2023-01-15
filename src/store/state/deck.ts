import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardModel } from '../../common/models/card.model';
import { DeckModel } from '../../common/models/deck.model';
import { deckColors } from '../../common/utils/constants';

interface DeckState {
    decks: DeckModel[]
}

interface AddCardToDeckProps {
    deckId: string;
    card: CardModel
}
interface removeCardProps {
    deckId: string;
    cardId: string
}


interface editDeckProps {
    deckId: string;
    title: string;
    color: string
} 

interface removeDeckProps {
    deckId: string;
} 

const initialState: DeckState = {
    decks: [
        {
            id: '1',
            title: 'Dental Deck',
            color: deckColors[2],
            amount_cards: 0,
            cards: [],
        },
        {
            id: '2',
            title: 'Deck supremo',
            color: deckColors[0],
            amount_cards: 0,
            cards: [],
        },
    ]
}

const deckSlice = createSlice({
    name: 'decks',
    initialState,
    reducers: {
        addDeck(state, action: PayloadAction<DeckModel>) {
            state.decks = [...state.decks, action.payload]
        },

        editDeck(state, action: PayloadAction<editDeckProps>) {
            const deckIndex = state.decks.findIndex(deck => deck.id === action.payload.deckId)

            state.decks[deckIndex].title = action.payload.title
            state.decks[deckIndex].color = action.payload.color
        },  

        removeDeck(state, action: PayloadAction<removeDeckProps>) {
            state.decks = state.decks.filter(deck => deck.id !== action.payload.deckId)
        },

        addCard(state, action: PayloadAction<AddCardToDeckProps>) {

            const deckIndex = state.decks.findIndex(deck => deck.id === action.payload.deckId)

            state.decks[deckIndex].cards.push({
                // @ts-ignore
                id: new Date().getTime().toString(),
                ...action.payload.card
            })

            state.decks[deckIndex].amount_cards = state.decks[deckIndex].cards.length
        },

        removeCard(state, action: PayloadAction<removeCardProps>) {

            const deckIndex = state.decks.findIndex(deck => deck.id === action.payload.deckId)

            const cards = state.decks[deckIndex].cards

            console.log(cards.filter(card => card.id !== action.payload.cardId))

            state.decks[deckIndex].cards = cards.filter(card => card.id !== action.payload.cardId)
            state.decks[deckIndex].amount_cards = state.decks[deckIndex].cards.length

        }

    }
})

export const {
    addDeck,
    editDeck,
    addCard,
    removeCard,
    removeDeck
} = deckSlice.actions;

export default deckSlice.reducer;