import { CARD_VALUES, PLAYERS } from "../constants";
import { getPairs, getCardWithFourOccurrences, getCardWithThreeOccurrences } from "./card-utils";
import { isRoyalFlush, isStraightFlush, isAFullHouse, isAFlush, isAStraight } from "./poker-utils";

export const getWinner = ({ playerOneResult, playerTwoResult }: { playerOneResult: {rank: number, rankCards: number[], numeralValues: number[]}, playerTwoResult: {rank: number, rankCards: number[], numeralValues: number[]}}) => {
    const playerOneRankCards = playerOneResult.rankCards;
    const playerTwoRankCards = playerTwoResult.rankCards;
    const playerOneSortedNonRankCards = playerOneResult.numeralValues.filter(cardValue => !playerOneRankCards.includes(cardValue)).sort((a,b)=>a-b);
    const playerTwoSortedNonRankCards = playerTwoResult.numeralValues.filter(cardValue => !playerTwoRankCards.includes(cardValue)).sort((a,b)=>a-b);
    if (playerOneResult.rank > playerTwoResult.rank) {
        return PLAYERS.PLAYER_ONE;
    } else if (playerOneResult.rank < playerTwoResult.rank) {
        return PLAYERS.PLAYER_TWO;
    } else {
        // both players have the same rank, compare rankedCards in case of tie
        for (let index = playerOneRankCards.length - 1; index >= 0; index--) {
            if (playerOneRankCards[index] > playerTwoRankCards[index]) {
                return PLAYERS.PLAYER_ONE;
            } else if (playerOneRankCards[index] < playerTwoRankCards[index]) {
                return PLAYERS.PLAYER_TWO;
            }
        }
        // If code reaches at this point, it means that both players have a tie in their ranked cards, compare non-ranked cards now
        for (let index = playerOneSortedNonRankCards.length - 1; index > 0; index--) {
            if (playerOneSortedNonRankCards[index] > playerTwoSortedNonRankCards[index]) {
                return PLAYERS.PLAYER_ONE;
            } else if (playerOneSortedNonRankCards[index] < playerTwoSortedNonRankCards[index]) {
                return PLAYERS.PLAYER_TWO;
            }
        }

    }
}

export const getHandRank = (hand: string[]): {rank: number, rankCards: number[], numeralValues: number[]} => {
    const values: string[] = hand.map(eachCard => eachCard[0]);
    const numeralValues: number[] = values.map(eachValue => CARD_VALUES[eachValue] ? CARD_VALUES[eachValue] : eachValue);
    const suits: string[] = hand.map(eachCard => eachCard[1]);
    const pairs = getPairs(numeralValues);
    const cardWithFourOccurrencies = getCardWithFourOccurrences(numeralValues);
    const cardWithThreeOccurrencies = getCardWithThreeOccurrences(numeralValues);
    if (isRoyalFlush([...numeralValues], suits)) {
        return {rank: 10, rankCards: numeralValues, numeralValues};
    } else if (isStraightFlush([...numeralValues], suits)) {
        return {rank: 9, rankCards: numeralValues, numeralValues};
    } else if (cardWithFourOccurrencies) {
        return {rank: 8, rankCards: [cardWithFourOccurrencies], numeralValues};
    } else if (cardWithThreeOccurrencies && isAFullHouse(cardWithThreeOccurrencies, pairs)) {
        return {rank: 7, rankCards: [...pairs, cardWithThreeOccurrencies], numeralValues};
    } else if (isAFlush(suits)) {
        return {rank: 6, rankCards: numeralValues, numeralValues};
    } else if (isAStraight([...numeralValues])) {
        return {rank: 5, rankCards: numeralValues, numeralValues};
    } else if (cardWithThreeOccurrencies) { // three of a kind
        return {rank: 4, rankCards: [cardWithThreeOccurrencies], numeralValues};
    } else if (pairs.length === 2) {
        return {rank: 3, rankCards: pairs, numeralValues};
    } else if (pairs.length === 1) {
        return {rank: 2, rankCards: pairs, numeralValues};
    } else {
        return {rank: 1, rankCards: [], numeralValues};
    };
}