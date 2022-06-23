import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CloseButtonType {
  onDelete: () => void;
  style: any;
  isPending: boolean;
}

const CloseButton = (props: CloseButtonType) => {
  const { onDelete, style, isPending } = props;

  if (isPending) {
    return null;
  }

  return (
    <button type='button' className={style.close} onClick={onDelete}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};

export default CloseButton;
