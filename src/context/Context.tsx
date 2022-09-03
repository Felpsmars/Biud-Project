import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';

type AuthContextData = {
  name: string;
  marketing: string;

  setName: (name: string) => void;
  setMarketing: (name: string) => void;
};

type ContextProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as AuthContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [name, setName] = useState<string>('');
  const [marketing, setMarketing] = useState<string>('');

  useEffect(() => {}, []);

  return (
    <Context.Provider value={{ name, setName, marketing, setMarketing }}>
      {children}
    </Context.Provider>
  );
}
