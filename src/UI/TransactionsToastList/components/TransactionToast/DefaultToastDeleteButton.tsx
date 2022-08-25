import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { WithClassnameType } from '../../../types';

type DefaultToastDeleteButtonProps = {
  onClick?: () => void;
} & WithClassnameType;

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
