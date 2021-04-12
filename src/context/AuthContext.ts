import React, {useContext} from 'react';

export type User = {
  id: string;
  name: string;
  userName: string;
};

type Auth = [User | null, (arg0: User | null) => void];

export const AuthContext = React.createContext<Auth>([null, () => null]);

export const useAuth = () => useContext(AuthContext);
