import { useSelector } from 'reduxStore/DappProviderContext';
import {
  signedMessageErrorSelector,
  signedMessageIsSigningSelector
} from 'reduxStore/selectors';

export const useGetSignMessageInfoStatus = () => {
  const isPending = useSelector(signedMessageIsSigningSelector);
  const errorMessage = useSelector(signedMessageErrorSelector);

  return {
    isPending,
    errorMessage
  };
};
