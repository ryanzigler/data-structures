var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  /* {0: a.
      1: b,
      2: c
    }

 */
  // global variable for higest current key value
  var highestKey = 0;
  var lowestKey = 0;

  // Implement the methods below

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


// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// expect(queue.size()).to.equal(1);
