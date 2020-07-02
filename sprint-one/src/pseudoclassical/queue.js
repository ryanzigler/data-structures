var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.highestKey = 0;
  this.lowestKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.highestKey] = value;
  this.highestKey += 1;
};

Queue.prototype.dequeue = function() {
  let result = this.storage[this.lowestKey];
  delete this.storage[this.lowestKey];
  this.lowestKey += 1;
  return result;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var someInstance = new Queue();
