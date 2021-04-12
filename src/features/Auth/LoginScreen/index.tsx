import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {isNicknameValid} from '../utils/validators';
import {useAuth} from '../../../context/AuthContext';
import TwitterClient from '../../../api/TwitterClient';

export const LoginScreen = () => {
  const [, setUser] = useAuth();
  const [userLogin, setLogin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const login = async () => {
    setLoading(true);
    setError(false);
    if (isNicknameValid(userLogin)) {
      try {
        const user = await TwitterClient.getUserByNickname(userLogin);
        setUser(user);
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
