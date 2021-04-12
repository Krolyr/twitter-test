import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../../context/AuthContext';

export function Settings(): JSX.Element {
  const [nickname, setNickname] = useAuth();
  const navigation = useNavigation();

  const logout = () => {
    setNickname('');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.name}>Logged in as: {nickname}</Text>
      <Button large full danger onPress={logout} style={styles.buttonContainer}>
        <Text style={styles.buttonText}> Logout </Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    marginVertical: 20,
  },
  name: {
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
