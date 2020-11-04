const API_BASE = 'https://api.opendota.com/api';

export const fetchMatch = async (id) => {
  const result = await fetch(`${API_BASE}/matches/${id}`);
  return result.json();
};

export const fetchPlayer = async (id) => {
  const result = await fetch(`${API_BASE}/players/${id}`);
  return result.json();
};
