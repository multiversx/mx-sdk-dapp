import { useSelector } from 'reduxStore/DappProviderContext';
import { lastSignedSessionSelector } from 'reduxStore/selectors';

export const useGetLastSignedMessageSession = () => {
  const lastSignedMessage = useSelector(lastSignedSessionSelector);

  return lastSignedMessage;
};
