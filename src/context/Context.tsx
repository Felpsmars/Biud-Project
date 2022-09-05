import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
interface DataProps {
  name: string;
  marketing: string;
  whatsapp: string;
}

type ContextData = {
  name: string;
  marketing: string;
  whatsapp: string;
  data: DataProps;

  setName: (name: string) => void;
  setMarketing: (marketing: string) => void;
  setWhatsapp: (whatsapp: string) => void;
  submitData: () => void;
};

type ContextProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [name, setName] = useState<string>('');
  const [marketing, setMarketing] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [data, setData] = useState<DataProps>();

  function submitData() {
    const userInfo = {
      name: name,
      marketing: marketing,
      whatsapp: whatsapp,
    };

    setData(userInfo);
    console.log('seted');

    /* 
    TODO send user info through axios.post
    // https://github.com/Felpsmars/Projeto-Pizzaria
    */

    setName('');
    setMarketing('');
    setWhatsapp('');
    setData({ name: '', marketing: '', whatsapp: '' });

    /* TODO? mensagem com toastfy */

    Router.push('/');
  }

  return (
    <Context.Provider
      value={{
        name,
        setName,
        marketing,
        setMarketing,
        whatsapp,
        setWhatsapp,
        data,
        submitData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
