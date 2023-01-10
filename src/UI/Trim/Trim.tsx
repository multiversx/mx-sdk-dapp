import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

import { WithClassnameType } from '../types';
import styles from './trim.styles.scss';

// TODO: Rename to "TrimPropsType" when mx-sdk-dapp@3.0.0
export interface TrimType extends WithClassnameType {
  text: string;
  dataTestId?: string;
  color?: 'muted' | 'secondary' | string;
}

export const Trim = ({
  text,
  className = 'dapp-trim',
  dataTestId = 'trim-text-component',
  color
}: TrimType) => {
  const [overflow, setOverflow] = useState(false);
  const trimRef = useRef(document?.createElement('span'));
  const hiddenTextRef = useRef(document?.createElement('span'));

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

  useEffect(addWindowResizeListener);

  useEffect(() => {
    listener();
  }, []);

  return (
    <span
      ref={trimRef}
      className={classNames(
        styles.trim,
        color ?? '',
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
