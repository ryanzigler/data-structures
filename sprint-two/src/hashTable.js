var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined) {
    var bucket = [];
    bucket.push([k, v]);
    this._storage[index] = bucket;
    // bucket.push([k, v]);
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push([k, v]);
      }
    }
  }
};

// |-storage  |- bucket |- tuples
// [          [         [k,v], [k,v], [k,v] ], [], [] ]
//sto = [[k, v], [k,v], ]

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucket = this._storage[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

// this.map.get(fromNode).splice(this.map.get(fromNode).indexOf(toNode), 1);


/*
 * Complexity: What is the time complexity of the above functions?
 */

//  [ Index[0]: {Value: Hash},  Index[1]: {Value: Hash} ]
// [ {Steven: H1234}, {Tyler: H03871} ]
