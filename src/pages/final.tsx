import styles from '../../styles/index.module.scss';
import Head from 'next/head';
import Image from 'next/image';

import Router from 'next/router';
import Stareye from '../../assets/stareye.png';
import Doublephone from '../../assets/doublephone.png';

import { Button, ProgressBar } from '../components/atoms';
import { FormEvent, useContext } from 'react';
import { Context } from '../context/Context';
import { FormContainer } from '../components/molecules';

const redirect = '/';

export default function Whatsapp() {
  const { submitData, name, marketing } = useContext(Context);

  async function handleFowardAction(event: FormEvent) {
    event.preventDefault();

    Router.push(redirect);
  }

  return (
    <>
      <Head>
        <title>Digite seu número!</title>
      </Head>

      <ProgressBar done='100'></ProgressBar>
      <FormContainer onSubmit={handleFowardAction}>
        <>
          <div>
            <Image
              width='80'
              height='80'
              alt='emoji de celular'
              src={Stareye}
            ></Image>
          </div>
          <h2>Prontinho, {name}!</h2>
          <p>
            A experiência MIA que vai fazer sua {marketing} decolar começará nos
            próximos minutos em seu WhatsApp.
          </p>

          <div className={styles.redContainer}>
            <div>
              <Image
                width='58'
                height='58'
                alt='emoji de celular'
                src={Doublephone}
              />
            </div>
            <span className={styles.span}>
              Indique um amigo e concorra a um iPhone 13 Pro Max
            </span>
          </div>
          <span onClick={() => submitData()} className={styles.finally}>
            Finalizar
          </span>
        </>
      </FormContainer>
    </>
  );
}
