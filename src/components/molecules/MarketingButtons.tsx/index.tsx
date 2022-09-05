import Image from 'next/image';

import Hamburguer from '../../../../assets/hamburguer.png';
import Pill from '../../../../assets/pill.png';
import Tshirt from '../../../../assets/tshirt.png';

import styles from './styles.module.scss';

interface MarketingButtonProps {
  onClick: (name: string) => void;
}

export default function MarketingButton({ onClick }: MarketingButtonProps) {
  const options = [
    {
      name: 'Hamburgueria',
      icon: Hamburguer,
    },
    {
      name: 'Drogaria',
      icon: Pill,
    },
    {
      name: 'Loja de Roupas',
      icon: Tshirt,
    },
  ];

  return (
    <>
      {options.map((option, index) => (
        <button
          className={styles.button}
          key={index}
          onClick={() => onClick(option.name)}
          type='submit'
        >
          <Image
            width='16'
            height='16'
            alt={`emoji de um/uma ${option.name}`}
            src={option.icon}
          ></Image>
          {option.name}
        </button>
      ))}
    </>
  );
}
