import axios from 'axios';

axios.defaults.baseURL = 'https://api.twitter.com/2/users/';

axios.defaults.headers = {
  Authorization:
    'Bearer ',
};

export default {
  get: (url: string, params?: Record<string, unknown>) =>
    axios.get(url, { params }),
};
