import React, {useContext} from 'react';

type Auth = [string, (arg0: string) => void];

export const AuthContext = React.createContext<Auth>(['', _arg0 => void 0]);

export const useAuth = () => useContext(AuthContext);
