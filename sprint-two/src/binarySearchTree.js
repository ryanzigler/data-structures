var BinarySearchTree = function(value) {

  let treeNode = Object.create(nodeMethods); // {}

  treeNode.value = value;
  treeNode.left = null; // less than
  treeNode.right = null; // greater than

  return treeNode;
};

var nodeMethods = {
  insert: function(value) {
    // create new node
    // var newNode = BinarySearchTree(value);
    var insideFunction = function(currentNode, value) {

      if (currentNode.value === undefined) {
        BinarySearchTree(value);

      } else if (value > currentNode.value) {
        insideFunction(currentNode.right, value);
      } else {
        insideFunction(currentNode.left);
      }

      insideFunction(currentNode);

      if (value < currentNode.value && currentNode.value === undefined) {
        currentNode.left = BinarySearchTree(value);
      }
    };

  },


  // .contains()
  contains: function(target) {
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
  },

  // .depthFirstLog()
  depthFirstLog: function() {

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
