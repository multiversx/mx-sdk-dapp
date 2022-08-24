import React from 'react';
import {
  DappModal,
  DappModalConfig,
  DappModalInteractionConfig,
  useDappModal
} from 'UI/DappModal';
import { WithClassnameType } from '../types';

export const ModalContainer = (
  props: {
    children: React.ReactNode;
    onClose?: () => void;
    modalConfig?: DappModalConfig;
    modalInteractionConfig?: DappModalInteractionConfig;
    visible?: boolean;
  } & WithClassnameType
) => {
  const { handleHideModal: onHide, visible, config } = useDappModal({
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
      className={props.className}
    >
      {props.children}
    </DappModal>
  );
};
