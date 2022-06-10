import { useDispatch, useSelector } from '../../../redux/DappProviderContext';
import {
  dappModalFooterTextSelector,
  dappModalFooterVisibilitySelector,
  dappModalHeaderTextSelector,
  dappModalHeaderVisibilitySelector,
  dappModalVisibilitySelector
} from '../../../redux/selectors/dappModalsSelectors';
import {
  setDappModalFooterText,
  setDappModalFooterVisibility,
  setDappModalHeaderText,
  setDappModalHeaderVisibility,
  setDappModalVisibility
} from '../../../redux/slices/dappModalsSlice';
import { DappModalConfig } from '../types';

const useDappModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector(dappModalVisibilitySelector);

  const show = () => {
    dispatch(setDappModalVisibility(true));
  };

  const hide = () => {
    dispatch(setDappModalVisibility(false));
  };

  const setModalConfig = (config: DappModalConfig) => {
    dispatch(setDappModalHeaderVisibility(config.showHeader ?? true));
    dispatch(setDappModalFooterVisibility(config.showFooter ?? false));
    dispatch(setDappModalHeaderText(config.headerText ?? ''));
    dispatch(setDappModalFooterText(config.footerText ?? ''));
  };

  const getConfig = () => {
    const showHeader = useSelector(dappModalHeaderVisibilitySelector);
    const showFooter = useSelector(dappModalFooterVisibilitySelector);
    const headerText = useSelector(dappModalHeaderTextSelector);
    const footerText = useSelector(dappModalFooterTextSelector);

    return {
      showHeader,
      showFooter,
      headerText,
      footerText
    };
  };

  return {
    show,
    hide,
    setModalConfig,
    visible,
    config: getConfig()
  };
};

export default useDappModal;
