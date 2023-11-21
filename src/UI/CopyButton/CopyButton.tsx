import React, { useState, MouseEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../types';
import { copyTextToClipboard } from './helpers/copyToClipboard';

export interface CopyButtonPropsType extends WithClassnameType {
  text: string;
  copyIcon?: IconProp;
  successIcon?: IconProp;
}

const CopyButtonComponent = ({
  text,
  className = 'dapp-copy-button',
  copyIcon = faCopy,
  successIcon = faCheck,
  styles
}: CopyButtonPropsType & WithStylesImportType) => {
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
      className={classNames(styles?.copy, className)}
    >
      {copyResult.default || !copyResult.success ? (
        <FontAwesomeIcon icon={copyIcon} />
      ) : (
        <FontAwesomeIcon icon={successIcon} />
      )}
    </a>
  );
};

export const CopyButton = withStyles(CopyButtonComponent, {
  local: import('UI/CopyButton/copyButton.styles.scss')
});
