import { FormEvent, useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Button, Input, ProgressBar } from '../components/atoms';
import { Welcome } from '../components/molecules';

import { FormContainer } from '../components/molecules';
import { Context } from '../context/Context';
import Waving from '../../assets/waving.png';

export default function SubmitName() {
  const { name, setName } = useContext(Context);
  const [welcome, setWelcome] = useState<boolean>(false);

  const nameCondition = name.length > 4;

  function handleFowardAction(event: FormEvent) {
    event.preventDefault();
    if (!nameCondition) {
      return;
    }
    setWelcome(true);
  }

  function wichRender() {
    if (welcome) {
      return <Welcome />;
    } else {
      return (
        <FormContainer onSubmit={handleFowardAction}>
          <>
            <div>
              <Image
                width='80'
                height='80'
                alt='emoji de mão acenando'
                src={Waving}
              ></Image>
            </div>
            <h2>Como você quer ser chamado?</h2>
            <Input
              placeholder='Digite seu nome'
              type='text'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Button disabled={!nameCondition} type='submit'>
              Avançar
            </Button>
          </>
        </FormContainer>
      );
    }
  }

  return (
    <>
      <Head>
        <title>Digite seu nome!</title>
      </Head>
      <ProgressBar done='25'></ProgressBar>
      {wichRender()}
    </>
  );
}
