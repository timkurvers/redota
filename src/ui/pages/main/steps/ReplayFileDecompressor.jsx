import React, { useRef, useState } from 'react';

import Error from '../../../components/Error.jsx';
import Notice from '../../../components/Notice.jsx';
import Worker from '../../../../workers/Bzip2Decompressor.worker.js';
import { useAsyncEffect } from '../../../hooks/index.js';

const MAGIC_BZIP2 = 'BZh';

const isValidBzip2Archive = async (blob) => {
  const { length } = MAGIC_BZIP2;
  if (blob.size < length) {
    return false;
  }
  const magic = await blob.slice(0, MAGIC_BZIP2.length).text();
  return magic === MAGIC_BZIP2;
};

const ReplayFileDecompressor = (props) => {
  const { input: file, next } = props;

  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);

  // Hold a reference to worker thread
  const workerRef = useRef(null);

  useAsyncEffect(async () => {
    // Pass through file as-is when not dealing with a Bzip2 archive
    if (!await isValidBzip2Archive(file)) {
      next(file);
      return;
    }

    // Use a separate worker thread for Bzip2 decompression
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
        const filename = file.name.replace('.bz2', '');
        const decompressed = new File([result], filename, {
          lastModified: file.lastModified,
        });

        worker.terminate();
        next(decompressed);
      }
    });

    // Start decompression by sending the file buffer to the worker
    const buffer = await file.arrayBuffer();
    worker.postMessage(buffer, [buffer]);
  }, () => {
    // Clean up worker when component unmounts
    workerRef.current?.terminate();
  }, [file]);

  return (
    <>
      {progress !== null && (
        <Notice>
          Decompressing replay file...
          <br />
          {progress}%
        </Notice>
      )}

      {error && (
        <Error error={error} />
      )}
    </>
  );
};

export default ReplayFileDecompressor;
