var BinarySearchTree = function(value) {

  let treeNode = Object.create(nodeMethods); // {}

  treeNode.value = value;
  treeNode.left = null; // less than
  treeNode.right = null; // greater than

  return treeNode;
};

var nodeMethods = {

  insert: function(value) {
    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right = this.right.insert(value);
      }
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left = this.left.insert(value);
      }
    }
    return this;
  }, // Time Complexity: Log O(log)

  contains: function(target) {

    if (target === this.value) {
      return true;
    } else if (target > this.value) {
      if (this.right !== null) {
        return this.right.contains(target);
      }
    } else if (target < this.value) {
      if (this.left !== null) {
        return this.left.contains(target);
      }
    }
    return false;
  }, // Time Complexity: Log O(log)

  depthFirstLog: function(func) {
    func(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(func);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(func);
    }
  }, // Time Complexity: Log O(log)

  // remove: function(target) {
  //   debugger;
  //   var currentNode = this.value;
  //   var removeNode = (target, currentNode) => {
  //     if (currentNode.value === undefined) {
  //       return null;
  //     }
  //     if (currentNode.value === target) {
  //       if (currentNode.left === null && currentNode.right === null) {
  //         return null;
  //       }
  //     } else if (target > currentNode.value) {
  //       currentNode = removeNode(target, currentNode.right);
  //       return currentNode;
  //     } else {
  //       currentNode = removeNode(target, currentNode.left);
  //       return currentNode;
  //     }
  //   };
  //   currentNode = removeNode(target, this);
  // } // Time Complexity: Log O(log)
};

// var binarySearchTree = BinarySearchTree(10);

// binarySearchTree.insert(2);
// binarySearchTree.insert(6);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(8);
// binarySearchTree.remove(8);

// console.log(binarySearchTree);

/*

{
  value: 5
  left: {value:2, left: {value: 1}}
  right
}

*/