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
      onHide={hideModalHandler}
      visible={showModal}
      config={props.modalConfig}
      className={props.className}
    >
      {props.children}
    </DappModal>
  );
};
