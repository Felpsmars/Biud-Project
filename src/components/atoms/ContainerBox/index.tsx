import React, { FormEvent } from 'react';
import styles from './styles.module.scss';

interface Children {
  children: JSX.Element;
  width?: string;
}

const ContainerBox = ({ children, width }: Children): JSX.Element => {
  return (
    <div className={styles.containerBox}>
      <div style={{ width: width }}>{children}</div>
    </div>
  );
};

export { ContainerBox };
