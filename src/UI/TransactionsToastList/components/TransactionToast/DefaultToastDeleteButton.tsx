import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type DefaultToastDeleteButtonProps = {
  onClick?: () => void;
  className?: string;
};

export const DefaultToastDeleteButton: React.FC<DefaultToastDeleteButtonProps> = ({
  className = 'dapp-default-toast-delete-button',
  onClick
}) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};
