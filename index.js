class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.item.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos - 1];
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
