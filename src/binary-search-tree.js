const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    this.start = addNode(this.start, data);
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  hasFind(node, data) {
    if (!node) return null;
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.hasFind(node.left, data);
    } else {
      return this.hasFind(node.right, data);
    }
  }

  has(data) {
    return this.hasFind(this.start, data) !== null;
  }

  find(data) {
    return this.hasFind(this.start, data);
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
