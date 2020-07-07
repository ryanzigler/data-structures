var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.item = 1;
}; // Time complexity: Constant O(1)

setPrototype.contains = function(item) {
  if (this._storage.item) {
    return true;
  }
  return false;
}; // Time complexity: Constant O(1)

setPrototype.remove = function(item) {
  delete this._storage.item;
}; // Time complexity: Constant O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */
