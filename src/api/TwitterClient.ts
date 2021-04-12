import NetworkClient from './NetworkClient';
import {Post} from '../features/Feed/hooks/usePosts';
import {User} from '../context/AuthContext';

const MAX_POSTS = 20;

interface PostsResponse {
  posts: Post[];
  meta: {
    oldest_id?: string;
    newest_id?: string;
    result_count?: number;
    next_token?: string;
  };
}

class TwitterClient {
  async getUserByNickname(nickname: string): Promise<User> {
    const data = await NetworkClient.get(
      `https://api.twitter.com/2/users/by/username/${nickname}`,
    );
    return data.data.data;
  }

  async getTweets(
    userID?: string,
    paginationToken?: string,
  ): Promise<PostsResponse> {
    const data = await NetworkClient.get(
      `https://api.twitter.com/2/users/${userID}/tweets`,
      {
        max_results: MAX_POSTS,
        pagination_token: paginationToken,
      },
    );
    return {posts: data.data.data, meta: data.data.meta};
  }
}

export default new TwitterClient();
