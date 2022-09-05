import Router from 'next/router';
import Rocket from '../../../../assets/rocket.png';
import styles from './styles.module.scss';

import { ContainerBox, ProgressBar } from '../../atoms';
import { useContext, useEffect } from 'react';
import { Context } from '../../../context/Context';
import Image from 'next/image';

const redirect = '/whatsapp';

function NextStep() {
  const { name, marketing } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      Router.push(redirect);
    }, 6000);
  }, [name]);

  return (
    <>
      <ProgressBar done='50'></ProgressBar>
      <ContainerBox width={'448px'}>
        <>
          <div className={styles.container}>
            <Image
              width='80'
              height='80'
              alt='emoji de um foguete'
              src={Rocket}
            ></Image>
          </div>
          <h2>Legal, {name}!</h2>
          <p>
            A partir de agora você vai embarcar nessa experiência comigo e
            descobrir como utilizo a minha inteligência para impactar nos
            resultados da sua {marketing}.
          </p>
        </>
      </ContainerBox>
    </>
  );
}

export { NextStep };
