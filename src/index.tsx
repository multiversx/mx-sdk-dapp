import * as React from 'react';
import { DappProvider } from './redux/DappProvider';
import styles from './styles.module.css';

export const ExampleComponent = ({ text }: { text: string }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export { DappProvider };
