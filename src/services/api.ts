import axios from 'axios';
import { CardModel } from '../common/models/card.model';

export const api = axios.create({
    baseURL: 'https://api.scryfall.com'
})


export async function searchCards(cardName: string) {
    try {
        const response = await api.get(`cards/search?q=name:${cardName}&limit=10`);
        const { data } = response.data;

        const cards = data

        return cards


    } catch (error) {
        console.error(error);
        return []
    }
}
