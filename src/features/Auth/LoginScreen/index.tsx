import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
  Spinner,
  Toast,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { InteractionManager, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isNicknameValid } from '../utils/validators';
import { useAuth } from '../../../context/AuthContext';
import TwitterClient from '../../../api/TwitterClient';
import { USER_KEY } from '../utils/constants';

export const LoginScreen = () => {
  const [, setUser] = useAuth();
  const [userLogin, setLogin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      try {
        const rawUser = await AsyncStorage.getItem(USER_KEY);
        if (rawUser) {
          const user = JSON.parse(rawUser);
          setUser(user);
          navigation.navigate('Home');
        }
      } catch (e) {
        Toast.show({
          text: e.message,
          position: 'top',
          duration: 3000,
        });
      } finally {
        InteractionManager.runAfterInteractions(() => {
          SplashScreen.hide();
        });
      }
    };
    getUser();
  }, []);

  const login = async () => {
    if (!isNicknameValid(userLogin)) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const user = await TwitterClient.getUserByNickname(userLogin);
      setUser(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      navigation.navigate('Home');
    } catch (e) {
      Toast.show({
        text: e.message,
        position: 'top',
        duration: 3000,
      });
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>Twitter API</Title>
        </Body>
      </Header>
      <Form style={style.form}>
        <FormItem error={error} floatingLabel>
          <Label>Nickname</Label>
          <Input onChangeText={text => setLogin(text)} />
        </FormItem>
        <Button
          disabled={loading}
          full
          primary
          onPress={login}
          style={style.button}>
          {loading ? <Spinner color="white" /> : <Text>Login</Text>}
        </Button>
      </Form>
    </Container>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 0,
    marginRight: 20,
    paddingTop: '30%',
  },
  button: {
    paddingBottom: 4,
    marginTop: 30,
    marginLeft: 20,
  },
});

export default LoginScreen;
