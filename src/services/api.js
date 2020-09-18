import axios from 'axios'

const API_ROOT = 'http://localhost:3003';
export const HISTORY_URL = `${API_ROOT}/history`

export const requests = {
  get(url) {
    return axios.get(url).then(({data}) => data);
  },
};

const api = {
  async getPresentVoltage(callback) {
    const data = await requests.get(`${HISTORY_URL}/latest/1`)
    callback(data)
  },
};

export default api;
