var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.lowestKey = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.lowestKey] = value;
    this.lowestKey -= 1;
  },
  pop: function() {
    this.lowestKey += 1;
    let result = this.storage[this.lowestKey];
    delete this.storage[this.lowestKey];
    return result;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
