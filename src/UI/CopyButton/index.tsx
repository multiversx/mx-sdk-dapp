import React from 'react';

import { optionalImport } from 'optionalPackages';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import copyTextToClipboard from './helpers/copyToClipboard';

const { faCopy, faCheck } = optionalImport('@fortawesome/free-solid-svg-icons');

interface CopyButtonType {
  text: string;
  className?: string;
}

const CopyButton = ({ text, className = '' }: CopyButtonType) => {
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
      className={`side-action text-secondary ${className}`}
    >
      {copyResult.default || !copyResult.success ? (
        <ReactFontawesome.FontAwesomeIcon icon={faCopy} />
      ) : (
        <ReactFontawesome.FontAwesomeIcon
          icon={faCheck}
          className='text-primary-highlight'
        />
      )}
    </a>
  );
};

export default CopyButton;
