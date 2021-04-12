import {useState, useCallback} from 'react';
import {Toast} from 'native-base';
import TwitterClient from '../../../api/TwitterClient';

export function usePosts() {
  const limit = 20;
  const [posts, setPosts] = useState<Post[]>([]);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedPosts = await TwitterClient.getPosts(offset, limit);
      setPosts(posts => [...posts, ...fetchedPosts]);
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
  }, [offset]);

  const loadMore = async () => {
    setOffset(limit + offset);
  };

  return {posts, loading, error, fetchPosts, loadMore};
}

export interface Post {
  id: string;
  title: string;
  desc: string;
}
