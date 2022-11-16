import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { WithClassnameType } from '../../../../types';

export interface DefaultToastDeleteButtonPropsType extends WithClassnameType {
  onClick?: () => void;
}

export const DefaultToastDeleteButton = ({
  className = 'dapp-default-toast-delete-button',
  onClick
}: DefaultToastDeleteButtonPropsType) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};
