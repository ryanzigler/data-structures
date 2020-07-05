var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // time complexity: constant | O(1)
  list.addToTail = function(value) {
    let node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.head.next = node;
      list.tail = node;
    }
  };

  // time complexity: constant | O(1)
  list.removeHead = function() {
    let headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  // time complexity: linear | O(n)
  list.contains = function(target) {
    let result = false;
    const findTarget = function(node) {
      if (node) {
        if (node.value === target) {
          result = true;
          return result;
        }
        node = node.next;
        findTarget(node);
      }
    };
    findTarget(list.head);
    return result;
  };
  return list;
};

// time complexity: constant | O(1)
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
