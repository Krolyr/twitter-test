import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Post} from './components/Post';
import {usePosts, Post as PostItem} from './hooks/usePosts';
import {Spinner} from 'native-base';
import {useAuth} from '../../context/AuthContext';

export function Feed(): JSX.Element {
  const user = useAuth()[0];
  const {posts, fetchPosts, loading} = usePosts(user?.id);
  let onEndReachedCalledDuringMomentum = true;

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderFlatListItem = ({item}: {item: PostItem}) => {
    return <Post title={item.id} desc={item.text} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      {posts.length === 0 ? (
        <Text style={styles.title}>No posts</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderFlatListItem}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum = true;
          }}
          onEndReachedThreshold={0}
          onEndReached={() => {
            if (onEndReachedCalledDuringMomentum) {
              fetchPosts();
            }
            onEndReachedCalledDuringMomentum = false;
          }}
          style={styles.flatListContainer}
          contentContainerStyle={styles.contentContainerStyle}
          ListFooterComponent={loading ? <Spinner color="blue" /> : null}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          initialNumToRender={20}
        />
      )}
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
