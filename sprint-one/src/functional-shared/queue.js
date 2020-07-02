var Queue = function() {

  let someInstance = {};
  someInstance.storage = {};
  someInstance.highestKey = 0;
  someInstance.lowestKey = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.highestKey] = value;
    this.highestKey += 1;
  },
  dequeue: function() {
    let result = this.storage[this.lowestKey];
    delete this.storage[this.lowestKey];
    this.lowestKey += 1;
    return result;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
