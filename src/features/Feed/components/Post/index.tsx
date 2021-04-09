import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, CardItem, Body, Thumbnail} from 'native-base';

interface PostProps {
  title: string;
  desc: string;
  disabled?: boolean;
  imageUri?: string;
}

export function Post({
  title,
  desc,
  disabled,
  imageUri,
}: PostProps): JSX.Element {
  const navigation = useNavigation();

  const navigateToPost = () => {
    navigation.navigate('Detail', {title, desc});
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
        {!!imageUri && <Thumbnail source={{uri: imageUri}} />}
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
