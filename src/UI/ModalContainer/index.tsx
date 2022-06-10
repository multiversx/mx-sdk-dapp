import React from 'react';
import DappModal from '../DappModal/components/DappModal';
import useDappModal from '../DappModal/hooks/useDappModal';

const ModalContainer = ({
  children
}: {
  children: React.ReactNode;
  noSpacer?: boolean;
  onClose?: () => void;
}) => {
  const { hide: onHide, visible, config } = useDappModal();

  return (
    <DappModal onHide={onHide} visible={visible} {...config}>
      {children}
    </DappModal>
  );
};

export default ModalContainer;
