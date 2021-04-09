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
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {isNicknameValid} from '../utils/validators';

export const LoginScreen = () => {
  const [nickname, setNickname] = useState('');
  const navigation = useNavigation();

  const login = () => {
    if (isNicknameValid(nickname)) {
      navigation.navigate('Home');
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
        <FormItem floatingLabel>
          <Label>Nickname</Label>
          <Input onChangeText={text => setNickname(text)} />
        </FormItem>
        <Button full primary onPress={login} style={style.button}>
          <Text>Login</Text>
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
