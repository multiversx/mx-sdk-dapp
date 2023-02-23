import React, { useState, MouseEvent } from 'react';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import { WithClassnameType } from '../types';
import { copyTextToClipboard } from './helpers/copyToClipboard';

import styles from './copyButtonStyles.scss';

export interface CopyButtonPropsType extends WithClassnameType {
  text: string;
}

export const CopyButton = ({
  text,
  className = 'dapp-copy-button'
}: CopyButtonPropsType) => {
  const [copyResult, setCopyResut] = useState({
    default: true,
    success: false
  });

  const handleCopyToClipboard = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const noSpaces = text ? text.trim() : text;

    setCopyResut({
      default: false,
      success: await copyTextToClipboard(noSpaces)
    });

    setTimeout(() => {
      setCopyResut({
        default: true,
        success: false
      });
    }, 1000);
  };

  return (
    <a
      href='/#'
      onClick={handleCopyToClipboard}
      className={classNames(styles.copy, className)}
    >
      {copyResult.default || !copyResult.success ? (
        <FontAwesomeIcon icon={faCopy} />
      ) : (
        <FontAwesomeIcon icon={faCheck} />
      )}
    </a>
  );
};
