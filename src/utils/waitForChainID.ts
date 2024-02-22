import { getEnvironmentForChainId } from 'apiCalls';
import { chainIDSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export const waitForChainID = ({
  maxRetries
}: {
  maxRetries: number;
}): Promise<string | null> =>
  new Promise((resolve, reject) => {
    let retries = 0;

    // Function to periodically check the value of chainID
    const checkChainID = () => {
      const chainID = chainIDSelector(store.getState());
      const isValidEnvironment = getEnvironmentForChainId(chainID);

      if (Boolean(isValidEnvironment)) {
        resolve(chainID);
        return;
      }

      if (retries < maxRetries) {
        retries++;
        setTimeout(checkChainID, 1000);
        return;
      }

      reject(null);
    };

    checkChainID();
  });
