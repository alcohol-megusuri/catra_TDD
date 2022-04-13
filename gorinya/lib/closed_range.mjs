export class ClosedRange {
  constructor(lower, upper) {
    if (lower > upper) {
      throw new Error("Upper is greater than lower");
    }

    this.lower = lower;
    this.upper = upper;
  }

  /**
   * @param {number} lower
   */
  setLower(lower) {
    if (lower > this.upper) {
      throw new Error("Lower is less than upper");
    }

    this.lower = lower;
  }

  /**
   * @param {number} upper
   */
  setUpper(upper) {
    if (upper < this.lower) {
      throw new Error("Upper is greater than lower");
    }

    this.upper = upper;
  }

  equal(targetClosedRange) {
    return (
      this.lower === targetClosedRange.lower &&
      this.upper === targetClosedRange.upper
    );
  }

  contain(subClosedRange) {
    return (
      this.lower <= subClosedRange.lower && this.upper >= subClosedRange.upper
    );
  }
}
