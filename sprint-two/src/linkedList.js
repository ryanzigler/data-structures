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
      list.tail.next = node;
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
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
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
