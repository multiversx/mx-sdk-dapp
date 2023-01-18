import { useSelector } from 'reduxStore/DappProviderContext';
import { signedMessageInfoSliceSelector } from 'reduxStore/selectors';

export const useGetSignMessageSession = (sessionId: string) => {
  const signedMessageInfo = useSelector(signedMessageInfoSliceSelector);

  if (!sessionId) {
    return;
  }

  return signedMessageInfo.signedSessions[sessionId];
};
