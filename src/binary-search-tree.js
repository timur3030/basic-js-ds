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

  remove(data) {
    this.start = removeNode(this.start, data);

    function removeNode(node, data) {
      if (!node) return null;
  
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minimum = node.right;
        while (minimum.left) {
          minimum = minimum.left;
        }
        node.data = minimum.data;
        node.right = removeNode(node.right, minimum.data);
        return node;
      }
    }
  }

  min() {
    let node = this.start;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.start;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
