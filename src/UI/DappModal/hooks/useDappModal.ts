import { useEffect, useState } from 'react';

import { DappModalInteractionConfig } from '../dappModal.types';

export const useDappModal = (props?: DappModalInteractionConfig) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (props?.visible === true) {
      handleShowModal();
    } else if (props?.visible === false) {
      handleHideModal();
    }
  }, [props?.visible]);

  return {
    handleShowModal,
    handleHideModal,
    showModal
  };
};
