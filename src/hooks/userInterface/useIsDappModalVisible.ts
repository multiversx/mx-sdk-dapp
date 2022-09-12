import { useSelector } from 'reduxStore/DappProviderContext';
import { dappModalVisibilitySelector } from 'reduxStore/selectors/dappModalsSelectors';

export const useIsDappModalVisible = () => {
  const visible = useSelector(dappModalVisibilitySelector);
  return visible;
};
