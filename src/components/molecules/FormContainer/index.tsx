import React, { FormEvent } from 'react';
import { ContainerBox } from '../../atoms';
import styles from './styles.module.scss';

interface Children {
  children: JSX.Element;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const FormContainer = ({ children, onSubmit }: Children): JSX.Element => {
  return (
    <ContainerBox width={'448px'}>
      <form onSubmit={onSubmit}>
        <div className={styles.container}>{children}</div>
      </form>
    </ContainerBox>
  );
};

export { FormContainer };
