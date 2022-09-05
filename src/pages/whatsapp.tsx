import styles from '../../styles/form.module.scss';
import Head from 'next/head';
import Router from 'next/router';
import Cellphone from '../../assets/cellphone.png';

import { Button, ProgressBar, Input } from '../components/atoms';
import { FormEvent, useContext } from 'react';
import { Context } from '../context/Context';
import Image from 'next/image';
import { FormContainer } from '../components/molecules';

const redirect = '/final';

export default function Whatsapp() {
  const { whatsapp, setWhatsapp } = useContext(Context);

  function handleFowardAction(event: FormEvent) {
    event.preventDefault();

    Router.push(redirect);
  }

  const condition = whatsapp.length === 11;

  return (
    <>
      <Head>
        <title>Digite seu número!</title>
      </Head>

      <ProgressBar done='75'></ProgressBar>
      <FormContainer onSubmit={handleFowardAction}>
        <>
          <div>
            <Image
              width='80'
              height='80'
              alt='emoji de celular'
              src={Cellphone}
            />
          </div>
          <h2>
            Essa experiência acontece toda pelo WhatsApp. Por isso, me diz qual
            o número do seu celular?
          </h2>
          <span>
            Não se preocupe! Seu número será utilizado exclusivamente para que
            eu demonstre a experiência MIA
          </span>
          <Input
            placeholder='Escreva seu WhatsApp (xx) xxxxx-xxxx'
            type='text'
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
          />
          <Button disabled={!condition} type='submit'>
            Avançar
          </Button>
        </>
      </FormContainer>
    </>
  );
}
