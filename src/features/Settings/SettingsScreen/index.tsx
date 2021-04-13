import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../context/AuthContext';
import { USER_KEY } from '../../Auth/utils/constants';

export function Settings(): JSX.Element {
  const [user, setNickname] = useAuth();
  const navigation = useNavigation();

  const logout = async () => {
    setNickname(null);
    navigation.navigate('Login');
    await AsyncStorage.removeItem(USER_KEY);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.userContainer}>
        <Text style={styles.name}>Logged in as: {user?.name}</Text>
        <Text style={styles.name}>ID: {user?.id}</Text>
      </View>
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
  userContainer: {
    alignItems: 'center',
  },
});
