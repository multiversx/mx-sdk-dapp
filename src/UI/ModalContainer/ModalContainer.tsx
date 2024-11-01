import React, { ReactNode } from 'react';
import {
  DappModal,
  DappModalConfig,
  DappModalInteractionConfig,
  useDappModal
} from 'UI/DappModal';
import { WithClassnameType } from '../types';

export interface ModalContainerPropsType extends WithClassnameType {
  children: ReactNode;
  closeOnEscape?: boolean;
  modalConfig?: DappModalConfig;
  modalInteractionConfig?: DappModalInteractionConfig;
  onClose?: () => void;
  visible?: boolean;
}

export const ModalContainer = (props: ModalContainerPropsType) => {
  const { showModal } = useDappModal({ visible: props.visible });

  const hideModalHandler = () => {
    props.onClose?.();
  };

  return (
    <DappModal
      className={props.className}
      closeOnEscape={props.closeOnEscape}
      config={props.modalConfig}
      onHide={hideModalHandler}
      visible={showModal}
    >
      {props.children}
    </DappModal>
  );
};
