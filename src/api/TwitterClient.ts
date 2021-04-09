import NetworkClient from './NetworkClient';

class TwitterClient {
  async authenticate(nickname: string) {
    return {success: true};
    // return NetworkClient.post('/authenticate', { nickname });
  }

  async getPosts(offset: number) {
    return [];
    // return NetworkClient.get('/posts', { offset });
  }
}

export default new TwitterClient();
