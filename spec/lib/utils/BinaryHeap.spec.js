import { BinaryHeap } from '../../../src/lib/utils/index.js';

describe('BinaryHeap', () => {
  class BinaryMaxHeap extends BinaryHeap {
    constructor() {
      const compare = (a, b) => b - a;
      super(compare);
    }
  }

  describe('constructor', () => {
    it('creates an initially empty binary heap', () => {
      const heap = new BinaryMaxHeap();
      expect(heap.size).toEqual(0);
      expect(heap.root).toBeUndefined();
    });

    it('supports a custom compare function comparing objects', () => {
      const heap = new BinaryHeap((a, b) => b.value - a.value);
      expect(heap.size).toEqual(0);
      expect(heap.root).toBeUndefined();

      const one = { value: 1 };
      const two = { value: 2 };

      heap.insert(one);
      expect(heap.size).toEqual(1);

      heap.insert(two);
      expect(heap.size).toEqual(2);

      expect(heap.extract()).toBe(two);
      expect(heap.extract()).toBe(one);
      expect(heap.root).toBeUndefined();
    });
  });

  describe('get isEmpty', () => {
    it('returns whether the heap is empty', () => {
      const heap = new BinaryMaxHeap();
      expect(heap.isEmpty).toBe(true);

      heap.insert(1);
      heap.insert(2);
      expect(heap.isEmpty).toBe(false);

      heap.extract();
      expect(heap.isEmpty).toBe(false);

      heap.extract();
      expect(heap.isEmpty).toBe(true);
    });
  });

  describe('get root', () => {
    it('returns root of the heap', () => {
      const heap = new BinaryMaxHeap();

      heap.insert(1);
      expect(heap.root).toBe(1);

      heap.insert(2);
      expect(heap.root).toBe(2);
    });

    it('returns undefined if the heap is empty', () => {
      const heap = new BinaryMaxHeap();
      expect(heap.root).toBeUndefined();
    });
  });

  describe('get size', () => {
    it('returns size of the heap', () => {
      const heap = new BinaryMaxHeap();
      expect(heap.size).toEqual(0);

      heap.insert(1);
      heap.insert(2);
      expect(heap.size).toEqual(2);

      heap.extract();
      expect(heap.size).toEqual(1);

      heap.extract();
      expect(heap.size).toEqual(0);
    });
  });

  describe('extract()', () => {
    it('removes and returns root from the heap', () => {
      const heap = new BinaryMaxHeap();

      heap.insert(1);
      heap.insert(2);
      expect(heap.extract()).toBe(2);
      expect(heap.extract()).toBe(1);

      expect(heap.root).toBeUndefined();
    });

    it('returns undefined if the heap is empty', () => {
      const heap = new BinaryMaxHeap();
      expect(heap.extract()).toBeUndefined();
    });
  });

  describe('insert()', () => {
    it('inserts given value into the heap', () => {
      const heap = new BinaryMaxHeap();

      heap.insert(1);
      expect(heap.root).toBe(1);
      expect(heap.data).toEqual([1]);

      heap.insert(2);
      expect(heap.root).toBe(2);
      expect(heap.data).toEqual([2, 1]);
    });
  });

  describe('static from()', () => {
    it('creates a binary heap from given array', () => {
      const values = Array.from({ length: 1000 }).map((_, i) => i);
      const randomized = values.slice().sort(() => Math.round(Math.random() * -1));

      const compare = (a, b) => a - b;
      const heap = BinaryHeap.from(randomized, compare);
      for (const value of values) {
        expect(heap.extract()).toBe(value);
      }
      expect(heap.size).toEqual(0);
    });
  });
});
