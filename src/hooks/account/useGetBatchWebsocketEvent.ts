import { useSelector } from 'reduxStore/DappProviderContext';
import { websocketBatchEventSelector } from 'reduxStore/selectors';

export const useGetBatchWebsocketEvent = () => {
  return useSelector(websocketBatchEventSelector);
};
