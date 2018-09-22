class Sorter {
  constructor() {
    this.Array = [];
    this.compareFunc = (left, right) => left - right;
  }

  add(element) {
    this.Array.push(element);
  }

  at(index) {
    return this.Array[index];
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    indices.sort()
    let ArraySort = [];
    for (var i = 0; i < indices.length; i++) {
      ArraySort.push(this.Array[indices[i]]);
    }
    ArraySort.sort(this.compareFunc)
    for (i = 0; i < indices.length; i++) {
      this.Array[indices[i]] = ArraySort[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunc = compareFunction; 
  }
}
module.exports = Sorter;