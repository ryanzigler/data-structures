var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.highestKey = 0;
  someInstance.lowestKey = 0;

  return someInstance;
};

var queueMethods = {
  // enqeue
  enqueue: function(value) {
    this.storage[this.highestKey] = value;
    this.highestKey += 1;
  },

  // deqeue
  dequeue: function() {
    let result = this.storage[this.lowestKey];
    delete this.storage[this.lowestKey];
    this.lowestKey += 1;
    return result;
  },

  // size
  size: function() {
    return Object.keys(this.storage).length;
  }
};
