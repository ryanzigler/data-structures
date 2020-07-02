var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lowestKey = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.lowestKey] = value;
  this.lowestKey -= 1;
};

Stack.prototype.pop = function() {
  this.lowestKey += 1;
  let result = this.storage[this.lowestKey];
  delete this.storage[this.lowestKey];
  return result;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var someInstance = new Stack();
