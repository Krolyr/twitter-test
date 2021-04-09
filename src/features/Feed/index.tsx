import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Post} from './components/Post';
import {usePosts, Post as IPost} from './hooks/usePosts';

export function Feed(): JSX.Element {
  const {posts, fetchPosts, loadMore} = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderFlatListItem = ({item}: {item: IPost}) => {
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
