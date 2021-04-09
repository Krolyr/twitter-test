import React from 'react';
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
import {StyleSheet} from 'react-native';

export const LoginScreen = () => {
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
          <Input />
        </FormItem>
        <Button full primary style={style.button}>
          <Text> Login </Text>
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
