import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';

import styles from './styles.scss';
import classNames from 'classnames';
import { WithClassname } from 'UI/types/with-classname';

export interface TrimType extends WithClassname {
  text: string;
  dataTestId?: string;
}

export const Trim = ({
  text,
  className = 'dapp-trim',
  dataTestId = ''
}: TrimType) => {
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
      className={classNames(
        styles.trim,
        {
          [styles.overflow]: overflow
        },
        className
      )}
      data-testid={dataTestId}
    >
      <span ref={hiddenTextRef} className={styles.hiddenTextRef}>
        {text}
      </span>

      {overflow ? (
        <>
          <span className={styles.left}>
            <span>
              {String(text).substring(0, Math.floor(text.length / 2))}
            </span>
          </span>
          <span className={styles.ellipsis}>...</span>
          <span className={styles.right}>
            <span>{String(text).substring(Math.ceil(text.length / 2))}</span>
          </span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};
