import React, { useRef, useState } from 'react';

import Button from '../../../components/Button.jsx';
import Error from '../../../components/Error.jsx';
import Notice from '../../../components/Notice.jsx';
import Worker from '../../../../workers/ZstdDecompressor.worker.js';
import { useAsyncEffect } from '../../../hooks/index.js';

const MAGIC_ZSTD = [0x28, 0xB5, 0x2F, 0xFD];

const isZstdCompressed = async (blob) => {
  const { length } = MAGIC_ZSTD;
  if (blob.size < length) {
    return false;
  }
  const magic = new Uint8Array(await blob.slice(0, length).arrayBuffer());
  return MAGIC_ZSTD.every((byte, index) => magic[index] === byte);
};

const ReplayFileDecompressorZstd = (props) => {
  const { input: file, next, reset } = props;

  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  // Hold a reference to worker thread
  const workerRef = useRef(null);

  useAsyncEffect(async () => {
    // Pass through file as-is when not dealing with Zstd compression
    if (!await isZstdCompressed(file)) {
      next(file);
      return;
    }

    // Use a separate worker thread for Zstd decompression
    const worker = new Worker();
    workerRef.current = worker;

    worker.addEventListener('error', (e) => {
      setError(e);
      worker.terminate();
    });

    worker.addEventListener('message', (message) => {
      const { data } = message;
      if (data.type === 'progress') {
        setProgress((data.processed / data.total) * 100 | 0);
      } else if (data.type === 'complete') {
        const { result } = data;

        // Ensure the filename and last modified timestamps are preserved
        const filename = file.name.replace(/\.zstd?$/, '');
        const decompressed = new File([result], filename, {
          lastModified: file.lastModified,
        });

        worker.terminate();
        next(decompressed);
      } else if (data.type === 'error') {
        setError(data.error);
        worker.terminate();
      }
    });

    // Start decompression by sending the file to the worker
    worker.postMessage(file);
  }, () => {
    // Clean up worker when component unmounts
    workerRef.current?.terminate();
  }, [file]);

  return (
    <>
      {!error && (
        <>
          <Notice>
            Decompressing replay file...
            <br />
            {progress}%
          </Notice>

          <Button fancy onClick={reset}>
            Cancel
          </Button>
        </>
      )}

      {error && (
        <Error error={error} />
      )}
    </>
  );
};

export default ReplayFileDecompressorZstd;
