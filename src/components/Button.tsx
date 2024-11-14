import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: any;
}

export default function Button({ className = '', id, onClick, children}: Props) {
  const classNames = `${styles.button} ${className}`;
  return ( 
  <button className={classNames} id={id} onClick={onClick}>
    {children}
  </button>
  );
}
