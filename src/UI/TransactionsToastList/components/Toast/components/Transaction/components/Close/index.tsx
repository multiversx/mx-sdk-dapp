import React from 'react';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

interface CloseType {
  onDelete: () => void;
  style: any;
  isPending: boolean;
}

const Close = ({ onDelete, style, isPending }: CloseType) => {
  if (isPending) {
    return null;
  }

  return (
    <button type='button' className={style.close} onClick={onDelete}>
      <ReactFontawesome.FontAwesomeIcon icon={icons.faTimes} size='xs' />
    </button>
  );
};

export default Close;
