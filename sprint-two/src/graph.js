// Instantiate a new graph
var Graph = function() {
  this.map = new Map();
}; // Time complexity: Constant O(1)

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.map.set(node, []);
}; // Time complexity: Constatnt O(1)

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.map.has(node)) {
    return true;
  }
  return false;
}; // Time complexity: Linear O(n)

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var values = this.map.get(node).slice();
  for (let i = 0; i < values.length; i++) {
    this.removeEdge(node, values[i]);
  }
  if (this.map.has(node)) {
    this.map.delete(node);
  }
}; // Time complexity: Linear O(n)

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let [key, value] of this.map) {
    if (key === fromNode && value.indexOf(toNode) >= 0) {
      return true;
    }
  }
  return false;
}; // Time complexity: Linear O(n)

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.map.get(fromNode).push(toNode);
  this.map.get(toNode).push(fromNode);
}; // Time complexity: Constant O(1)

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.map.get(fromNode).splice(this.map.get(fromNode).indexOf(toNode), 1);
  this.map.get(toNode).splice(this.map.get(toNode).indexOf(fromNode), 1);
}; // Time complexity: Constant O(1)

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let [key, value] of this.map) {
    cb(key);
  }
}; // Time complexity: Linear O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
