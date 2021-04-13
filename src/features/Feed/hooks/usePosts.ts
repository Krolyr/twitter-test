import { useState } from 'react';
import { Toast } from 'native-base';
import TwitterClient from '../../../api/TwitterClient';

export function usePosts(userId?: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState<string | undefined>();
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchPosts = async () => {
    try {
      if (isEndReached) {
        return;
      }
      setLoading(true);
      const data = await TwitterClient.getTweets(userId, nextToken);
      const fetchedPosts = data.posts ?? [];
      const newNextToken: string | undefined = data.meta.next_token;
      setNextToken(newNextToken);
      setPosts([...posts, ...fetchedPosts]);
      if (!newNextToken) {
        setIsEndReached(true);
      }
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
  };

  return { posts, loading, error, fetchPosts };
}

export interface Post {
  id: string;
  text: string;
  created_at: string;
}
