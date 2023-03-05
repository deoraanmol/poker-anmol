import { CARD_VALUES } from "../src/constants";
import { getCardFrequencies, getCardWithThreeOccurrences, getPairs } from "../src/utils/card-utils";
import { isAFlush, isAFullHouse, isAStraight, isRoyalFlush, isStraightFlush } from "../src/utils/poker-utils";

const getValuesAndSuits = (hand: string[]) => {
  const values: string[] = hand.map(eachCard => eachCard[0]);
  const numeralValues: number[] = values.map(eachValue => CARD_VALUES[eachValue] ? CARD_VALUES[eachValue] : eachValue);
  const suits: string[] = hand.map(eachCard => eachCard[1]);
  return {numeralValues, suits};
}

describe("test poker-utils functions", () => {
  it("should correctly detect a royal flush in a hand", () => {
    const {numeralValues, suits} = getValuesAndSuits(['TS','JS','QS','KS','AS']);
    const result = isRoyalFlush(numeralValues, suits);
    expect(result).toBe(true);
  });

  it("should correctly detect a straight flush in a hand", () => {
    const {numeralValues, suits} = getValuesAndSuits(['5S','6S','7S','8S','9S']);
    const result = isStraightFlush(numeralValues, suits);
    expect(result).toBe(true);
  });

  it("should correctly detect a full house in a hand", () => {
    const {numeralValues} = getValuesAndSuits(['3S','3H','3D','2S','2D']);
    const cardWithThreeOccurrencies = getCardWithThreeOccurrences(numeralValues);
    const pairs = getPairs(numeralValues);
    const result = isAFullHouse(cardWithThreeOccurrencies, pairs);
    expect(result).toBe(true);
  });

  it("should correctly detect a flush in a hand", () => {
    const {suits} = getValuesAndSuits(['3S','3S','3S','2S','2S']);
    const result = isAFlush(suits);
    expect(result).toBe(true);
  });

  it("should correctly detect a straight in a hand", () => {
    const {numeralValues} = getValuesAndSuits(['3S','4S','5D','6H','7D']);
    const result = isAStraight(numeralValues);
    expect(result).toBe(true);
  });
});