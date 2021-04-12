import {useState, useCallback} from 'react';
import {Toast} from 'native-base';
import TwitterClient from '../../../api/TwitterClient';

export function usePosts(userId?: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState<string | undefined>();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await TwitterClient.getTweets(userId, nextToken);
      if (data.meta.result_count === 0) {
        return;
      }
      const fetchedPosts = data.posts;
      const newNextToken: string | undefined = data.meta.next_token;
      setNextToken(newNextToken);
      setPosts(currentPosts => [...currentPosts, ...fetchedPosts]);
    } catch (e) {
      Toast.show({
        text: "Couldn't load more posts",
        position: 'top',
        duration: 3000,
      });
      setError("Couldn't load posts");
    } finally {
      setLoading(false);
    }
  }, [nextToken]);

  return {posts, loading, error, fetchPosts};
}

export interface Post {
  id: string;
  text: string;
}
