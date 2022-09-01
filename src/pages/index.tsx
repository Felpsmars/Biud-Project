import styles from '../../styles/Index.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digite seu nome!</title>
      </Head>
      <div className={styles.container}>
        <p>Index Page</p>
      </div>
    </>
  );
}
