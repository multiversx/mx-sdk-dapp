import { useSelector } from 'reduxStore/DappProviderContext';
import { websocketEventSelector } from 'reduxStore/selectors';

export const useGetWebsocketSignalTimestamp = () => {
  return useSelector(websocketEventSelector);
};
