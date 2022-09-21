import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithClassnameType } from '../../../types';

type DefaultToastDeleteButtonProps = {
  onClick?: () => void;
} & WithClassnameType;

export const DefaultToastDeleteButton = ({
  className = 'dapp-default-toast-delete-button',
  onClick
}: DefaultToastDeleteButtonProps) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};
