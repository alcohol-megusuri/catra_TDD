class Range {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }

  convert() {
    return `[${this.lower},${this.upper}]`;
  }

  include(num) {
    if (!Number.isInteger(num)) {
      throw new Error();
    }

    if (num >= this.lower && num <= this.upper) return true;

    return false;
  }
}

module.exports = Range;
