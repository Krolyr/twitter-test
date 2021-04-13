import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Post from '../../Feed/components/Post';

interface RouteParams {
  key: string;
  name: string;
  params: {
    title: string;
    desc: string;
  };
}

export function Detail(): JSX.Element {
  const { params } = useRoute<RouteParams>();

  return (
    <SafeAreaView style={styles.container}>
      <Post title={params.title} desc={params.desc} disabled={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
