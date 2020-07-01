var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lowestKey = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // add string to top of stack
    storage[lowestKey] = value;
    lowestKey -= 1;
  };

  someInstance.pop = function() {
    // remove and return string from top of stack
    lowestKey += 1;
    let result = storage[lowestKey];
    delete storage[lowestKey];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


/*
-1: b
0: a




*/



/*
  var highestKey = 0;
  var lowestKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[highestKey] = value;
      highestKey += 1;
    } else {
      storage[highestKey] = value;
      highestKey += 1;
    }
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

*/