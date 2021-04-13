/* eslint-disable import/prefer-default-export */

import axios, { CancelToken } from 'axios';

const API_BASE = 'https://api.opendota.com/api';
const REPLAY_PROXY_BASE = 'https://redota.timkurvers.workers.dev';

export const fetchRequest = (url, options = {}) => {
  const source = CancelToken.source();

  // Request returning an axios-backed Promise when invoked
  const request = () => (
    axios.request({
      timeout: 10000,
      method: 'get',
      ...options,
      cancelToken: source.token,
      url,
    })
  );

  // Attach cancellation function to request
  request.cancel = () => {
    source.cancel();
  };

  return request;
};

export const fetchMatchRequest = (id, options) => (
  fetchRequest(`${API_BASE}/matches/${id}`, options)
);

export const fetchReplayRequest = (url, options) => (
  fetchRequest(`${REPLAY_PROXY_BASE}/?replay=${url}`, {
    ...options,
    responseType: 'blob',

    // Waive timeout as these replay files (50 MB+) may take a while to download
    timeout: 0,
  })
);
