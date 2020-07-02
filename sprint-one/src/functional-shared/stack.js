var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  someInstance.lowestKey = 0;

  _.extend(someInstance, stackMethods);

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




/*
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
*/

/*
  var someInstance = {};

  var storage = {};
  var lowestKey = 0;

  someInstance.push = function(value) {
    storage[lowestKey] = value;
    lowestKey -= 1;
  };

  someInstance.pop = function() {
    lowestKey += 1;
    let result = storage[lowestKey];
    delete storage[lowestKey];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
*/
