import styles from '../../styles/index.module.scss';
import Router from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../assets/biudlogo.png';

const redirect = '/submitName';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vamso Começar!</title>
      </Head>
      <section>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.img}>
              <Image alt='biud logo' src={Logo}></Image>
            </div>
            <h1 className={styles.text}>
              Melhor do que eu escrever um monte de coisa sobre a BIUD, é você
              viver a experiência!
            </h1>
            <button
              onClick={() => Router.push(redirect)}
              className={styles.buttonContainer}
            >
              Começar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
