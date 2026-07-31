/* eslint-disable no-await-in-loop */

import { Decompress } from 'fzstd';

const NUM_PROGRESS_EVENTS = 200;

// Worker receives a Zstd-compressed Blob to decompress
self.addEventListener('message', async (message) => {
  const blob = message.data;
  const total = blob.size;

  const chunks = [];
  const decompressor = new Decompress((chunk) => chunks.push(chunk));

  const progressDelta = Math.max(total / NUM_PROGRESS_EVENTS | 0, 1);
  let processed = 0;
  let reported = 0;

  try {
    const reader = blob.stream().getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        // Final chunk must be flagged as such to complete decompression
        decompressor.push(new Uint8Array(0), true);
        break;
      }
      decompressor.push(value);

      processed += value.length;
      if (processed - reported >= progressDelta || processed === total) {
        reported = processed;
        self.postMessage({ type: 'progress', processed, total });
      }
    }
  } catch (error) {
    // Must be relayed manually as errors in async handlers do not propagate as worker error events
    self.postMessage({ type: 'error', error });
    return;
  }

  const result = new Blob(chunks);
  self.postMessage({ type: 'complete', result });
});
