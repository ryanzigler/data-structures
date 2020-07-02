class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lowestKey = 0;
  }

  push(value) {
    this.storage[this.lowestKey] = value;
    this.lowestKey -= 1;
  }

  pop() {
    this.lowestKey += 1;
    let result = this.storage[this.lowestKey];
    delete this.storage[this.lowestKey];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var someInstance = new Stack();
