import axios from 'axios';

axios.defaults.baseURL = 'https://api.twitter.com/2/users/';

axios.defaults.headers = {
  Authorization:
    'Bearer AAAAAAAAAAAAAAAAAAAAAOTFOQEAAAAAEux9nys1PInoF%2F%2BHNh6wX8r6trU%3DjJ6rGVl72iJfHql1tbbiTr1tIsWUgrqWZSbBogGfBisQJ2GZiD',
};

export default {
  get: (url: string, params?: Record<string, unknown>) =>
    axios.get(url, { params }),
};
