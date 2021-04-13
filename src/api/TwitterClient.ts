import NetworkClient from './NetworkClient';
import { Post } from '../features/Feed/hooks/usePosts';
import { User } from '../context/AuthContext';

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
    const data = await NetworkClient.get(`by/username/${nickname}`);
    if (data.data.errors) {
      const errors = data.data.errors;
      throw new Error(errors[0].detail);
    }
    return data.data.data;
  }

  async getTweets(
    userID?: string,
    paginationToken?: string,
  ): Promise<PostsResponse> {
    const data = await NetworkClient.get(`${userID}/tweets`, {
      max_results: MAX_POSTS,
      'tweet.fields': 'created_at',
      pagination_token: paginationToken,
    });
    return { posts: data.data.data, meta: data.data.meta };
  }
}

export default new TwitterClient();
