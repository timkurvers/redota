import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPlayer } from '../../lib/api/index.js';

const PlayerPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(async () => {
    const match = await fetchPlayer(id);
    setData(match);
  }, []);

  return (
    <div>
      <p>
        Player page
      </p>
      <pre>
        {JSON.stringify(data, null, '  ')}
      </pre>
    </div>
  );
};

export default PlayerPage;
