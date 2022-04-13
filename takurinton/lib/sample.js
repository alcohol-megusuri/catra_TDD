class CloseRange {
  constructor(lower, upper) {
    if (lower > upper) {
      throw new Error("lower より upper の方が大きいのでエラー");
    }

    this.lower = lower;
    this.upper = upper;
  }

  closeRange() {
    let list = [];
    for (let i = this.lower; i <= this.upper; i++) {
      list.push(i);
    }
    return list;
  }

  closeRangeToString() {
    return `[${this.lower},${this.upper}]`;
  }

  contains(i) {
    const list = this.closeRange();
    return list.indexOf(i) !== -1;
  }

  equals(l) {
    return JSON.stringify(this.closeRange()) === JSON.stringify(l.closeRange());
  }

  inclusion(l) {
    return l.lower >= this.lower && l.upper <= this.upper;
  }
}

module.exports = { CloseRange };
