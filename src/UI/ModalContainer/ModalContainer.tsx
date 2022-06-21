import React from 'react';
import { DappModal, useDappModal, DappModalConfig } from 'UI/DappModal';

export const ModalContainer = ({
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
    <DappModal
      onHide={hideModalHandler}
      visible={visible}
      config={{
        ...config
      }}
    >
      {children}
    </DappModal>
  );
};
