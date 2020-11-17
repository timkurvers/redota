import { BinaryHeap } from '../utils/index.js';

import { operations } from './FieldPathOperation.js';

let num = 0;

// See: https://github.com/dotabuff/manta/blob/master/huffman.go
class HuffmanNode {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
    this.left = null;
    this.right = null;
    this.num = num++;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }
}

const buildHuffmanTree = () => {
  const trees = new BinaryHeap((a, b) => {
    if (a.weight === b.weight) {
      return b.value - a.value;
    }
    return a.weight - b.weight;
  });

  const weights = operations.map((op) => op.weight || 1);
  for (const [index, weight] of weights.entries()) {
    const leaf = new HuffmanNode(weight, index);
    trees.insert(leaf);
  }

  let n = trees.size;

  while (trees.size > 1) {
    const a = trees.extract();
    const b = trees.extract();
    const node = new HuffmanNode(a.weight + b.weight, n++);
    node.left = a;
    node.right = b;
    trees.insert(node);
  }

  return trees.extract();
};

export const huffmanTree = buildHuffmanTree();
export { HuffmanNode };
