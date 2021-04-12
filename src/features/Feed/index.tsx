import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Post} from './components/Post';
import {usePosts, Post as PostItem} from './hooks/usePosts';
import {Spinner} from 'native-base';

export function Feed(): JSX.Element {
  const {posts, fetchPosts, loading, loadMore} = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderFlatListItem = ({item}: {item: PostItem}) => {
    return <Post title={item.title} desc={item.desc} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={posts}
        renderItem={renderFlatListItem}
        onEndReached={loadMore}
        style={styles.flatListContainer}
        contentContainerStyle={styles.contentContainerStyle}
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
