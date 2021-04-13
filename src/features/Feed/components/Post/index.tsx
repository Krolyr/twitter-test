import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, CardItem, Body } from 'native-base';

interface PostProps {
  title: string;
  desc: string;
  disabled?: boolean;
}

function Post({ title, desc, disabled }: PostProps): JSX.Element {
  const navigation = useNavigation();

  const navigateToPost = () => {
    navigation.navigate('Detail', { title, desc });
  };

  return (
    <TouchableOpacity
      onPress={navigateToPost}
      style={styles.container}
      disabled={disabled}>
      <Card>
        <CardItem header bordered>
          <Text>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{desc}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

Post.defaultParams = {
  disabled: false,
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.3,
  },
});

export default memo(Post);
