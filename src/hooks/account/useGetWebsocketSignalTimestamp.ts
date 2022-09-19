import { useSelector } from 'reduxStore/DappProviderContext';
import { websocketSignalTimestampSelector } from 'reduxStore/selectors';

export const useGetWebsocketSignalTimestamp = () => {
  return useSelector(websocketSignalTimestampSelector);
};
