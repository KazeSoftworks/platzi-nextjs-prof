import Cookie from 'js-cookie';
import axios, { AxiosRequestConfig } from 'axios';
import React, { createContext, useContext, useState } from 'react';
import endPoints from '@services/api';

interface AuthContextInterface {
  user: ProfileInterface | null;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthResponse {
  access_token: string;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export function ProviderAuth({ children }: { children: React.ReactNode }): JSX.Element {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextInterface | null => {
  return useContext(AuthContext);
};

function useProviderAuth(): AuthContextInterface {
  const [user, setUser] = useState<ProfileInterface | null>(null);
  const options: AxiosRequestConfig = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const signIn = async (email: string, password: string): Promise<void> => {
    // const { data: acess_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    const { data: acess_token } = await axios.post<AuthResponse>(endPoints.auth.login, { email, password }, options);
    if (acess_token) {
      const token = acess_token.access_token;
      Cookie.set('token', token, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get<ProfileInterface>(endPoints.auth.profile);
      console.log(user);
      setUser(user);
    }
  };

  const logout = (): void => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    logout,
  };
}
