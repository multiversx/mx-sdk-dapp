import React from 'react';
import {
  DappModal,
  useDappModal,
  DappModalConfig,
  DappModalInteractionConfig
} from 'UI/DappModal';

export const ModalContainer = (props: {
  children: React.ReactNode;
  onClose?: () => void;
  modalConfig?: DappModalConfig;
  modalInteractionConfig?: DappModalInteractionConfig;
  visible?: boolean;
}) => {
  const {
    handleHideModal: onHide,
    visible,
    config
  } = useDappModal({
    modalConfig: props.modalConfig,
    config: {
      ...props.modalInteractionConfig,
      visible: props.visible
    }
  });

  const hideModalHandler = () => {
    onHide();
    props.onClose?.();
  };

  return (
    <DappModal
      onHide={hideModalHandler}
      visible={visible}
      config={{
        ...config
      }}
    >
      {props.children}
    </DappModal>
  );
};
