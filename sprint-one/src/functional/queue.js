var Queue = function() {
  var someInstance = {};

  var storage = {};
  var highestKey = 0;
  var lowestKey = 0;

  someInstance.enqueue = function(value) {
    storage[highestKey] = value;
    highestKey += 1;
  };

  someInstance.dequeue = function() {
    let result = storage[lowestKey];
    delete storage[lowestKey];
    lowestKey += 1;
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
