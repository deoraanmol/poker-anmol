import { CARD_VALUES, NUMERIC_CARDS_BY_ORDER } from "../constants";

export const isRoyalFlush = (numeralValues: number[], suits: string[]) => {
    const hasSameSuit = suits.every(eachSuit => eachSuit === suits[0]);
    const hasRoyalFlushValues = numeralValues.includes(CARD_VALUES["T"]) && numeralValues.includes(CARD_VALUES["J"])
     && numeralValues.includes(CARD_VALUES["Q"]) && numeralValues.includes(CARD_VALUES["K"])
     && numeralValues.includes(CARD_VALUES["A"]);
    return hasSameSuit && hasRoyalFlushValues;
}

export const isStraightFlush = (numeralValues: number[], suits: string[]) => {
    const hasSameSuit = suits.every(eachSuit => eachSuit === suits[0]);
    const sortedValues = numeralValues.sort((a,b)=>a-b);
    const isConsecutiveOrder = NUMERIC_CARDS_BY_ORDER.join().includes(sortedValues.join());
    return hasSameSuit && isConsecutiveOrder;
}

export const isAFullHouse = (cardWithThreeOccurrencies: number | null, pairs: number[]) => {
    return cardWithThreeOccurrencies && pairs.length === 1;
}

export const isAFlush = (suits: string[]) => {
    const hasSameSuit = suits.every(eachSuit => eachSuit === suits[0]);
    return hasSameSuit;
}

export const isAStraight = (numeralValues: number[]) => {
    const sortedValues = numeralValues.sort((a,b)=>a-b);
    let isConsecutiveOrder = false;
    for(var i=0; i< sortedValues.length -1;i++) {
        if (sortedValues[i+1] - sortedValues[i] === 1) {
            isConsecutiveOrder = true;
        } else {
            isConsecutiveOrder = false;
            break;
        }
    }
    return isConsecutiveOrder
}