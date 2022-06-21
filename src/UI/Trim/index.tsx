import React from 'react';
import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import globalStyles from 'assets/sass/main.scss';

import styles from './styles.scss';

export interface TrimType {
  text: string;
  dataTestId?: string;
}

const Trim = ({ text, dataTestId = '' }: TrimType) => {
  const [overflow, setOverflow] = React.useState(false);
  const trimRef = React.useRef(document.createElement('span'));
  const hiddenTextRef = React.useRef(document.createElement('span'));

  const listener = useCallback(
    debounce(() => {
      if (trimRef.current && hiddenTextRef.current) {
        const diff =
          hiddenTextRef.current.offsetWidth - trimRef.current.offsetWidth;
        setOverflow(diff > 1);
      }
    }, 300),
    []
  );

  const addWindowResizeListener = () => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  };

  React.useEffect(addWindowResizeListener);

  React.useEffect(() => {
    listener();
  }, []);

  return (
    <span
      ref={trimRef}
      className={`${globalStyles.trim} ${
        overflow ? globalStyles.overflow : ''
      }`}
      data-testid={dataTestId}
    >
      <span ref={hiddenTextRef} className={globalStyles.hiddenTextRef}>
        {text}
      </span>

      {overflow ? (
        <React.Fragment>
          <span className={styles.left}>
            <span>
              {String(text).substring(0, Math.floor(text.length / 2))}
            </span>
          </span>
          <span className={globalStyles.ellipsis}>...</span>
          <span className={globalStyles.right}>
            <span>{String(text).substring(Math.ceil(text.length / 2))}</span>
          </span>
        </React.Fragment>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};

export default Trim;
