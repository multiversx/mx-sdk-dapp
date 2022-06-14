import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from '../../../redux/DappProviderContext';
import {
  dappModalConfigSelector,
  dappModalVisibilitySelector
} from '../../../redux/selectors/dappModalsSelectors';
import {
  setDappModalConfig,
  setDappModalVisibility
} from '../../../redux/slices/dappModalsSlice';
import { DappModalConfig } from '../types';

const useDappModal = (config?: DappModalConfig) => {
  const dispatch = useDispatch();
  const visible = useSelector(dappModalVisibilitySelector);
  const modalConfig = useSelector(dappModalConfigSelector);

  const show = () => {
    dispatch(setDappModalVisibility(true));
  };

  const hide = () => {
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

  return {
    show,
    hide,
    setModalConfig,
    visible,
    config: modalConfig
  };
};

export default useDappModal;
