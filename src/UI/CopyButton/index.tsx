import React from 'react';
import classNames from 'classnames';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import styles from './copy-button.scss';

import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copyTextToClipboard from './helpers/copyToClipboard';

interface CopyButtonType {
  text: string;
  className?: string;
}

export const CopyButton = ({ text, className = '' }: CopyButtonType) => {
  const [copyResult, setCopyResut] = React.useState({
    default: true,
    success: false
  });

  const handleCopyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

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
        <FontAwesomeIcon icon={faCheck}/>
      )}
    </a>
  );
};

export default CopyButton;
