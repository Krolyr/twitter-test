import React, {useState} from 'react';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/rootNavigator';
import {AuthContext, User} from './src/context/AuthContext';

const App = () => {
  const [nickname, setNickname] = useState<User | null>(null);

  return (
    <Root>
      <AuthContext.Provider value={[nickname, setNickname]}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    </Root>
  );
};

export default App;
