var Stack = function() {
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
};
