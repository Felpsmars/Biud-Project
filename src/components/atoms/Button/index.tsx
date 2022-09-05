import Image from 'next/image';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  src?: string;
  alt?: string;
}

function Button({ children, src, alt, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}

export { Button };
