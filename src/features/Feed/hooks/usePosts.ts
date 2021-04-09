import {useEffect, useState, useCallback} from 'react';
import TwitterClient from '../../../api/TwitterClient';

const fakePosts: Post[] = [
  {
    id: '1',
    title: 'yes',
    desc: 'no',
  },
  {
    id: '2',
    title: 'yes1',
    desc: 'no1',
  },
  {
    id: '3',
    title: 'yes2',
    desc: 'no2',
  },
  {
    id: '4',
    title: 'yes3',
    desc: 'no3',
  },
  {
    id: '6',
    title: 'yes4',
    desc: 'no4',
  },
  {
    id: '7',
    title: 'yes5',
    desc: 'no5',
  },
  {
    id: '8',
    title: 'yes6',
    desc: 'no6',
  },
];

export function usePosts() {
  const [posts, setPosts] = useState(fakePosts);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedPosts = await TwitterClient.getPosts(offset);

      setPosts(posts => [...posts, ...fetchedPosts]);
    } catch (e) {
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
