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
import { DappModalConfig } from '../types';

export const useDappModal = (config?: DappModalConfig) => {
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
    if (config) {
      setModalConfig(config);
    }
  }, [config]);

  useEffect(() => {
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
