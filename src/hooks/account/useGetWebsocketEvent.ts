import { useSelector } from 'reduxStore/DappProviderContext';
import { websocketEventSelector } from 'reduxStore/selectors';

export const useGetWebsocketEvent = () => {
  return useSelector(websocketEventSelector);
};
