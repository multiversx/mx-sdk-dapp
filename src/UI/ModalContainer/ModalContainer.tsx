import React from 'react';
import {
  DappModal,
  useDappModal,
  DappModalConfig,
  DappModalInteractionConfig
} from 'UI/DappModal';

export const ModalContainer = ({
  children,
  onClose,
  modalConfig,
  modalInteractionConfig
}: {
  children: React.ReactNode;
  onClose?: () => void;
  modalConfig?: DappModalConfig;
  modalInteractionConfig?: DappModalInteractionConfig;
}) => {
  const {
    handleHideModal: onHide,
    visible,
    config
  } = useDappModal({
    modalConfig,
    config: modalInteractionConfig
  });

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
