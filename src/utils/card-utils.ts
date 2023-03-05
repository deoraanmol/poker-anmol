// if input is: [5,3,2,2,1], output will be: {5:1,3:1,2:2,1:1}
export const getCardFrequencies = (numeralValues: number[]) => {
    const elementFrequency = {};
    for (const eachValue of numeralValues) {
        elementFrequency[eachValue] = elementFrequency[eachValue] ? elementFrequency[eachValue] + 1 : 1;
    }
    return elementFrequency;    
}

// if input is: [5,3,3,2,2,1], output will be: [3,2]
export const getPairs = (numeralValues: number[]): number[] => {
    const elementFrequency = getCardFrequencies(numeralValues);
    const pairs = Object.keys(elementFrequency).filter((key) => {
        if (elementFrequency[key] === 2) {
            return parseInt(key);
        }
    });
    return pairs.map(p => parseInt(p));
}

// returns a number that occurs 4 times in an array of 5 cards
export const getCardWithFourOccurrences = (numeralValues: number[]): number | null => {
    const elementFrequency = getCardFrequencies(numeralValues);
    const cardWithFourOccurrencies = Object.keys(elementFrequency).filter((key) => {
        if (elementFrequency[key] === 4) {
            return key;
        }
    });
    if (cardWithFourOccurrencies.length > 0) {
        return parseInt(cardWithFourOccurrencies[0]);
    }
    return null;
}

// returns a number that occurs 3 times in an array of 5 cards
export const getCardWithThreeOccurrences = (numeralValues: number[]): number | null => {
    const elementFrequency = getCardFrequencies(numeralValues);
    const cardWithThreeOccurrencies = Object.keys(elementFrequency).filter((key) => {
        if (elementFrequency[key] === 3) {
            return key;
        }
    });
    if (cardWithThreeOccurrencies.length > 0) {
        return parseInt(cardWithThreeOccurrencies[0]);
    }
    return null;
}