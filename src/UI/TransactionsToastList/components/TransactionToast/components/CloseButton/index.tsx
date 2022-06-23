import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CloseButtonType {
  onDelete: () => void;
  className?: string;
  isPending: boolean;
}

const CloseButton = (props: CloseButtonType) => {
  const { onDelete, className, isPending } = props;

  if (isPending) {
    return null;
  }

  return (
    <button type='button' className={className} onClick={onDelete}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};

export default CloseButton;
