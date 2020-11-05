import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMatch } from '../../lib/api/index.js';

const MatchPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(async () => {
    const match = await fetchMatch(id);
    setData(match);
  }, []);

  return (
    <div>
      <p>
        Match page
      </p>
      <pre>
        {JSON.stringify(data, null, '  ')}
      </pre>
    </div>
  );
};

export default MatchPage;
