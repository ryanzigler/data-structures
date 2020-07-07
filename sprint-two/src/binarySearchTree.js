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
  },

  // remove: function(target) {
  //   //var valuesToReinsert = [];
  //   var found = false;
  //   var parent = null;
  //   var current = this.value;
  //   var childCount;
  //   var replacement;
  //   var replacementParent;

  //   while (!found && current) {
  //     if (value < this.value) {
  //       parent = current;
  //       current = this.left;
  //     } else if (value > this.value) {
  //       parent = current;
  //       current = this.right;
  //     } else {
  //       found = true;
  //     }
  //   }
  //   if (found) {
  //     continue;
  //   }






  // if (target === this.right) {
  //   this.depthFirstLog(function() {
  //     valuesToReinsert.push(this.value);
  //     //detele this;
  //     return valuesToReinsert;
  //   })
  //   de
  //   }
//   }
}; // Time Complexity: Log O(log)


// if target === this.value
// store all the values inside both left and right
// delete the current node
// run insert on all of the stored values

/*
 * Complexity: What is the time complexity of the above functions?
 */

// valuesToReinsert = [2, 6]

// { value: 5,
//   left:
//    { value: 4,
//      left: { value: 2, left: null, right: null },
//      right: { value: 6, left: null, right: null }
//   right:
//    { value: 6,
//      left: null,
//      right: { value: 10, left: null, right: null } } }


// { value: 5,
//   left:
//     { value: 2,
//       left: null,
//       right: null },

//   right:
//     { value: 6,
//       left: null,
//       right: { value: 10, left: null, right: null } } }