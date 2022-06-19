import React from 'react';
import DappModal from '../DappModal/components/DappModal';
import useDappModal from '../DappModal/hooks/useDappModal';
import { DappModalConfig } from '../DappModal/types';

const ModalContainer = ({
  children,
  onClose,
  modalConfig
}: {
  children: React.ReactNode;
  onClose?: () => void;
  modalConfig?: DappModalConfig;
}) => {
  const {
    handleHideModal: onHide,
    visible,
    config
  } = useDappModal(modalConfig);

  const hideModalHandler = () => {
    onHide();
    onClose?.();
  };

  return (
    <DappModal onHide={hideModalHandler} visible={visible} {...config}>
      {children}
    </DappModal>
  );
};

export default ModalContainer;
