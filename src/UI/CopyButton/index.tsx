import React from 'react';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import copyTextToClipboard from './helpers/copyToClipboard';
import styles from './styles.scss';

interface CopyButtonType {
  text: string;
  className?: string;
}

export const CopyButton = ({
  text,
  className = 'dapp-copy-button'
}: CopyButtonType) => {
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
        <FontAwesomeIcon icon={faCheck} />
      )}
    </a>
  );
};
