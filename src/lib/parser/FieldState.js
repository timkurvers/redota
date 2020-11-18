/* eslint-disable class-methods-use-this */

class FieldState {
  constructor() {
    this.state = new Array(8);
  }

  get(fp) {
    let curr = this;
    let index = 0;
    for (let i = 0; i <= fp.last; ++i) {
      index = fp.path[i];
      if (curr.state.length < index + 2) {
        return null;
      }
      if (i === fp.last) {
        return curr.state[index];
      }
      if (!(curr.state[index] instanceof FieldState)) {
        return null;
      }
      curr = curr.state[index];
    }
    return null;
  }

  set(fp, value) {
    let curr = this;
    let index = 0;
    for (let i = 0; i <= fp.last; ++i) {
      index = fp.path[i];

      const { length } = curr.state;
      if (length < index + 2) {
        const sub = [...curr.state];
        sub.length = Math.max(index + 2, length * 2);
        curr.state = sub;
      }
      if (i === fp.last) {
        if (!(curr.state[index] instanceof FieldState)) {
          curr.state[index] = value;
        }
        return;
      }
      if (!(curr.state[index] instanceof FieldState)) {
        curr.state[index] = new FieldState();
      }
      curr = curr.state[index];
    }
  }
}

export default FieldState;
