// See: https://en.wikipedia.org/wiki/Binary_heap
class BinaryHeap {
  constructor(compare) {
    this.compare = compare;
    this.data = [];
  }

  get isEmpty() {
    return this.data.length === 0;
  }

  get root() {
    return this.data[0];
  }

  get size() {
    return this.data.length;
  }

  insert(entry) {
    const { data } = this;
    data.push(entry);
    this._bubbleUp(data.length - 1);
  }

  extract() {
    const { data, root } = this;

    const last = data.pop();
    if (data.length > 0) {
      data[0] = last;
      this._bubbleDown(0);
    }

    return root;
  }

  _bubbleUp(index) {
    const { compare, data } = this;
    const entry = data[index];

    const pindex = ((index - 1) / 2) | 0;
    const parent = data[pindex];

    if (compare(entry, parent) < 0) {
      data[pindex] = entry;
      data[index] = parent;
      this._bubbleUp(pindex);
    }
  }

  _bubbleDown(index) {
    const { compare, data } = this;

    const left = (2 * index) + 1;
    const right = (2 * index) + 2;
    let best = index;

    if (data[left] !== undefined && compare(data[left], data[best]) < 0) {
      best = left;
    }

    if (data[right] !== undefined && compare(data[right], data[best]) < 0) {
      best = right;
    }

    if (best !== index) {
      const tmp = data[best];
      data[best] = data[index];
      data[index] = tmp;
      this._bubbleDown(best);
    }
  }

  static from(array, compare) {
    const heap = new this(compare);
    for (const value of array) {
      heap.insert(value);
    }
    return heap;
  }
}

export default BinaryHeap;
