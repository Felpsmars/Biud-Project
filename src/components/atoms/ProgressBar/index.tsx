import React, { useEffect } from 'react';
import styles from './styles.module.scss';

interface props {
  done: string;
}

function ProgressBar({ done }: props) {
  const [style, setStyle] = React.useState({});

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, [done]);

  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={style}></div>
    </div>
  );
}

export { ProgressBar };
