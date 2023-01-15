import { CardModel } from "./card.model";

export interface DeckModel {
    id: string
    title: string;
    amount_cards: number;
    color: string;
    cards: CardModel[]
}
