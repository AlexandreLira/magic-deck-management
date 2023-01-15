export interface CardModel {
    id: string;
    image_uris: {
        small: string;
        normal: string;
    },
    type_line: string;
    rarity: string;
    artist: string;
    set_name: string;
    set_type: string;
    name: string;
    collector_number: string
    power: number;
}