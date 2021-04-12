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

export const LoginScreen = () => {
  const [nickname, setNickname] = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const login = () => {
    setLoading(true);
    setError(false);
    if (isNicknameValid(nickname)) {
      navigation.navigate('Home');
    }
    setLoading(false);

    // Toast.show({
    //   text: "Couldn't load more posts",
    //   position: 'top',
    //   duration: 3000,
    // });
    // setError(true);
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
          <Input onChangeText={text => setNickname(text)} />
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
