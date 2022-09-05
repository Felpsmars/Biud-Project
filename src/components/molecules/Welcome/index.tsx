import Router from 'next/router';
import Huging from '../../../../assets/huging.png';
import styles from './styles.module.scss';

import { ContainerBox, ProgressBar } from '../../atoms';
import { useContext, useEffect } from 'react';
import { Context } from '../../../context/Context';
import Image from 'next/image';

const redirect = '/choseMarketing';

function Welcome() {
  const { name } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      Router.push(redirect);
    }, 6000);
  }, [name]);

  return (
    <>
      <ProgressBar done='25'></ProgressBar>
      <ContainerBox width={'448px'}>
        <>
          <div className={styles.container}>
            <Image
              width='80'
              height='80'
              alt='emoji abraçando'
              src={Huging}
            ></Image>
          </div>
          <h2>Legal, {name}!</h2>
          <p>
            Vou te mostrar o meu jeito de fazer marketing direcionado por dados.
          </p>
        </>
      </ContainerBox>
    </>
  );
}

export { Welcome };
