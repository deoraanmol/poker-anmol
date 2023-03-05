export const CARD_VALUES = {'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14} // used to have a consistent `numeric` data type for card values
export const NUMERIC_CARDS_BY_ORDER = [2,3,4,5,6,7,8,9,CARD_VALUES['T'],CARD_VALUES['J'],CARD_VALUES['Q'],CARD_VALUES['K'],CARD_VALUES['A']];
export enum PLAYERS {
    PLAYER_ONE = "Player 1",
    PLAYER_TWO = "Player 2",
}