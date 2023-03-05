import { getCardFrequencies, getCardWithFourOccurrences, getCardWithThreeOccurrences, getPairs } from "../src/utils/card-utils";

describe("test card-utils functions", () => {
  it("should correctly detect pairs in an array", () => {
    const result = getPairs([5,3,3,2,2,1]);
    expect(result.sort()).toEqual([2,3]);
  });

  it("should correctly detect card occurrences in an array", () => {
    const result = getCardFrequencies([5,3,3,2,2,1]);
    expect(result).toEqual({"1":1,"2":2,"3":2,"5":1})
  });

  it("should correctly detect a number with 4 occurrences in an array", () => {
    const result = getCardWithFourOccurrences([3,3,3,3,2,1]);
    expect(result).toBe(3)
  });

  it("should correctly detect a number with 3 occurrences in an array", () => {
    const result = getCardWithThreeOccurrences([1,3,3,3,2,1]);
    expect(result).toBe(3)
  });
});