var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


// A tree class, in functional with shared methods style, with the following properties:
//  .children property, an array containing a number of subtrees
//  .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//  A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node



var treeMethods = {};

treeMethods.addChild = function(value) {
  // method, takes any value, sets that as the target of a node, and adds that node as a
  // child of the tree
  //
  this.children.push(Tree(value));


// tree.addChild(5);
// expect(tree.children[0].value).to.equal(5)
};

treeMethods.contains = function(target) {
  // let node = t
  // let runOnce = false;
  // if (!runOnce) {
  //   var storedTarget = target
  //   runOnce = true;
  // }
  function findTarget(node) {

  }



  if (this.value === target) {
    return true;
  }
  for (let i = 0; i < this.children.length; i++) {
    // var result = contains(target);
    findTarget(this.children[i]);
    // if (result) {
    //   return true;
    // }
  }
  return false;
};

//            NODE              [child {NODE [child {NODE}]}]
// newTree:{value: 1, children: [{value: 2
//     children: [{
//       value 3:
//       children: null
//     }]
//   }],
//   addChild: function(value) {

//   },
//   contains: function(target) {

//   }
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // linkList = {value, next}
 // linkList = {head:, next: {5, next: {...}}}

 // tree = {value, nextA,  nextB..... nextZ}
 // tree = (value: 100, {childOne: 50,  {subChild1: 90, null}, {subChild2: 70, null}}, childTwo


  // tree = (value: 5, child1: {value: 6}, child2: {value: 5}}
 // NewTree.value = value;
