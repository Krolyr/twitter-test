import axios from 'axios';

// TODO put real url
axios.defaults.baseURL = 'fakeurl';

export default {
  get: (url: string, params?: Record<string, unknown>) =>
    axios.get(url, params),
  post: (url: string, body?: Record<string, unknown>) => axios.post(url, body);
};
