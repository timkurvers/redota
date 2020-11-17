import { operations } from './FieldPathOperation.js';
import { huffmanTree } from './FieldPathHuffmanTree.js';

// See: https://github.com/dotabuff/manta/blob/master/field_path.go
class FieldPath {
  constructor() {
    this.path = [-1, 0, 0, 0, 0, 0];
    this.last = 0;
    this.done = false;
  }

  copy() {
    const copy = new FieldPath();
    copy.path = [...this.path];
    copy.last = this.last;
    copy.done = this.done;
    return copy;
  }

  pop(n) {
    for (let i = 0; i < n; ++i) {
      this.path[this.last] = 0;
      this.last--;
    }
  }

  toString() {
    const parts = new Array(this.last + 1);
    for (let i = 0; i <= this.last; ++i) {
      parts[i] = this.path[i];
    }
    return parts.join('/');
  }

  static from(reader) {
    const fp = new FieldPath();

    let node = huffmanTree;
    let next = huffmanTree;

    const fps = [];

    while (!fp.done) {
      if (reader.readBitFlag()) {
        next = node.right;
      } else {
        next = node.left;
      }

      if (next.isLeaf) {
        operations[next.value].execute(fp, reader);
        if (!fp.done) {
          fps.push(fp.copy());
        }
        node = huffmanTree;
      } else {
        node = next;
      }
    }

    return fps;
  }
}

export default FieldPath;
