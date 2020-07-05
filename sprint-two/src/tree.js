var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// time complexity: constant | O(1)
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// time complexity: linear | O(n)
treeMethods.contains = function(target) {
  let result = false;
  const findTarget = function(node) {
    if (node.value === target) {
      result = true;
      return result;
    }
    _.each(node.children, (child) => findTarget(child));
  };
  findTarget(this);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
