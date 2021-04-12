import EventEmitter from 'events';

import bzip2 from 'seek-bzip';

// TODO: Investigate Bzip2 decompression using WebAssembly

class Bzip2ProgressStream extends bzip2.Stream {
  constructor(buffer, numProgressEvents = 200) {
    super();

    this.buffer = buffer;
    this.length = buffer.length;
    this.pos = 0;

    this.progressDelta = this.length / numProgressEvents | 0;
    this.emitter = new EventEmitter();
  }

  on(...args) {
    this.emitter.on(...args);
  }

  readByte() {
    const { length } = this;

    if (this.pos % this.progressDelta === 0 || this.pos === length - 1) {
      this.emitter.emit('progress', {
        processed: this.pos + 1,
        total: length,
      });
    }
    return this.buffer[this.pos++];
  }
}

// Worker receives a Bzip2-compressed Uint8Array to decompress
self.addEventListener('message', (message) => {
  const buffer = Buffer.from(message.data);
  const stream = new Bzip2ProgressStream(buffer);

  stream.on('progress', (event) => {
    self.postMessage({ type: 'progress', ...event });
  });

  const result = bzip2.decode(stream);
  self.postMessage({ type: 'complete', result }, [result.buffer]);
});
