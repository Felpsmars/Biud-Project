import { useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { ProgressBar } from '../components/atoms';
import { FormContainer, NextStep } from '../components/molecules';
import { Context } from '../context/Context';
import Suitcase from '../../assets/suitcase.png';
import MarketingButton from '../components/molecules/MarketingButtons.tsx';

export default function SubmitName() {
  const { setMarketing } = useContext(Context);
  const [nextStep, setNextStep] = useState<boolean>(false);

  function handleFowardAction(name: string) {
    setMarketing(name);

    setNextStep(true);
  }

  function wichRender() {
    if (nextStep) {
      return <NextStep />;
    } else {
      return (
        <FormContainer>
          <>
            <div>
              <Image
                width='80'
                height='80'
                alt='emoji de mão acenando'
                src={Suitcase}
              ></Image>
            </div>
            <h2>
              Vamos supor que você queira otimizar o marketing de uma empresa.
              Qual seria?
            </h2>
            <MarketingButton onClick={handleFowardAction} />
          </>
        </FormContainer>
      );
    }
  }

  return (
    <>
      <Head>
        <title>Escolha seu Tipo!</title>
      </Head>
      <ProgressBar done='50'></ProgressBar>
      {wichRender()}
    </>
  );
}
