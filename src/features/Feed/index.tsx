import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Spinner} from 'native-base';
import {Post} from './components/Post';
import {usePosts, Post as PostItem} from './hooks/usePosts';
import {useAuth} from '../../context/AuthContext';

export function Feed(): JSX.Element {
  const user = useAuth()[0];
  const {posts, fetchPosts, loading} = usePosts(user?.id);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderFlatListItem = ({item}: {item: PostItem}) => {
    return <Post title={item.id} desc={item.text} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={posts}
        renderItem={renderFlatListItem}
        onEndReachedThreshold={0}
        onEndReached={fetchPosts}
        style={styles.flatListContainer}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={<Text style={styles.title}>No posts</Text>}
        ListFooterComponent={loading ? <Spinner color="blue" /> : null}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        initialNumToRender={20}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginVertical: 20,
  },
  flatListContainer: {
    alignSelf: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
