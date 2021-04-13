import React, { Dispatch, SetStateAction, useContext } from 'react';

export type User = {
  id: string;
  name: string;
  userName: string;
};

type Auth = [User | null, Dispatch<SetStateAction<User | null>>];

export const AuthContext = React.createContext<Auth>([null, () => null]);

export const useAuth = () => useContext(AuthContext);
