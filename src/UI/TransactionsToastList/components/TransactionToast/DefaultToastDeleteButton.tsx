import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type DefaultToastDeleteButtonProps = {
  className?: string;
  onDelete?: () => void;
};

export const DefaultToastDeleteButton: React.FC<DefaultToastDeleteButtonProps> = ({
  className,
  onDelete
}) => {
  return (
    <button type='button' className={className} onClick={onDelete}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};
