import NetworkClient from './NetworkClient';
import {Post} from '../features/Feed/hooks/usePosts';

const fakePosts: Post[] = [];
const maxPosts = 100;
for (let i = 1; i <= maxPosts; i++) {
  fakePosts.push({
    id: '' + i,
    title: 'yes' + i,
    desc: 'no' + i,
  });
}

class TwitterClient {
  async authenticate(nickname: string) {
    return {success: true};
    // return NetworkClient.post('/authenticate', { nickname });
  }

  async getPosts(offset: number, limit: number) {
    const promise = new Promise(function (resolve, reject) {
      if (offset === 100) {
        reject('You reached the end');
      }
      setTimeout(function () {
        resolve(fakePosts.slice(offset, offset + limit));
      }, 3000);
    });
    return promise;
    // return NetworkClient.get('/posts', { offset });
  }
}

export default new TwitterClient();
