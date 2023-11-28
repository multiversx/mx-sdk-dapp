import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, ELLIPSIS } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useDebounce } from 'hooks';
import { WithClassnameType } from '../types';

// TODO: Rename to "TrimPropsType" when sdk-dapp@3.0.0
export interface TrimType extends WithClassnameType {
  text: string;
  color?: 'muted' | 'secondary' | string;
}

const TrimComponent = ({
  text,
  className = 'dapp-trim',
  'data-testid': dataTestId = DataTestIdsEnum['trim-text-component'],
  color,
  styles
}: TrimType & WithStylesImportType) => {
  const [debounce, setDebounce] = useState(0);
  const [overflow, setOverflow] = useState(false);
  const trimRef = useRef(document?.createElement('span'));
  const hiddenTextRef = useRef(document?.createElement('span'));
  const debounceTracker = useDebounce(debounce, 300);

  const onOverflowChange = () => {
    if (trimRef.current && hiddenTextRef.current) {
      const diff =
        hiddenTextRef.current.offsetWidth - trimRef.current.offsetWidth;
      setOverflow(diff > 1);
    }
  };

  const listener = () => {
    setDebounce(debounce + 1);
  };

  const addWindowResizeListener = () => {
    window?.addEventListener('resize', listener);

    return () => {
      window?.removeEventListener('resize', listener);
    };
  };

  useEffect(addWindowResizeListener);

  useEffect(() => {
    onOverflowChange();
  }, [debounceTracker]);

  return (
    <span
      ref={trimRef}
      className={classNames(styles?.trim, color, className, {
        overflow: overflow
      })}
      data-testid={dataTestId}
    >
      <span ref={hiddenTextRef} className={styles?.hiddenTextRef}>
        {text}
      </span>

      {overflow ? (
        <>
          <span className={styles?.left}>
            <span>
              {String(text).substring(0, Math.floor(text.length / 2))}
            </span>
          </span>

          <span className={styles?.ellipsis}>{ELLIPSIS}</span>

          <span className={styles?.right}>
            <span>{String(text).substring(Math.ceil(text.length / 2))}</span>
          </span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};

export const Trim = withStyles(TrimComponent, {
  local: () => import('UI/Trim/trim.styles.scss')
});
