import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  dappModalConfigSelector,
  dappModalVisibilitySelector
} from 'reduxStore/selectors/dappModalsSelectors';
import {
  setDappModalConfig,
  setDappModalVisibility
} from 'reduxStore/slices/dappModalsSlice';
import { DappModalConfig, DappModalInteractionConfig } from '../types';

type UseDappModalProps = {
  config?: DappModalInteractionConfig;
  modalConfig?: DappModalConfig;
};

export const useDappModal = (props?: UseDappModalProps) => {
  const dispatch = useDispatch();
  const visible = useSelector(dappModalVisibilitySelector);
  const modalConfig = useSelector(dappModalConfigSelector);

  const handleShowModal = () => {
    dispatch(setDappModalVisibility(true));
  };

  const handleHideModal = () => {
    dispatch(setDappModalVisibility(false));
  };

  const setModalConfig = useCallback((config: DappModalConfig) => {
    dispatch(setDappModalConfig(config));
  }, []);

  useEffect(() => {
    if (props?.modalConfig) {
      setModalConfig(props?.modalConfig);
    }
  }, [props?.modalConfig]);

  useEffect(() => {
    if (props?.config?.openOnMount) {
      handleShowModal();
    }

    return () => {
      handleHideModal();
    };
  }, []);

  return {
    handleShowModal,
    handleHideModal,
    setModalConfig,
    visible,
    config: modalConfig
  };
};
