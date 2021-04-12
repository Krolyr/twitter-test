import axios from 'axios';

// TODO put real url
axios.defaults.baseURL = 'fakeurl';

axios.defaults.headers = {
  Authorization:
    'Bearer AAAAAAAAAAAAAAAAAAAAAOTFOQEAAAAAEux9nys1PInoF%2F%2BHNh6wX8r6trU%3DjJ6rGVl72iJfHql1tbbiTr1tIsWUgrqWZSbBogGfBisQJ2GZiD',
};

export default {
  get: (url: string, params?: Record<string, unknown>) =>
    axios.get(url, {params}),
  post: (url: string, body?: Record<string, unknown>) => axios.post(url, body),
};
