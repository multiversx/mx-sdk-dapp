import * as React from 'react';
import { DappProvider } from './redux/DappProvider';
import styles from './styles.module.css';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export { DappProvider };
