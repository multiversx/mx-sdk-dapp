import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type DefaultToastDeleteButtonProps = {
  className?: string;
  onClick?: () => void;
};

export const DefaultToastDeleteButton: React.FC<DefaultToastDeleteButtonProps> = ({
  className,
  onClick
}) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  );
};
