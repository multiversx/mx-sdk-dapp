import { getEnvironmentForChainId } from 'apiCalls';
import { networkStore } from 'lib/sdkDappCore';

export const waitForChainID = ({
  maxRetries
}: {
  maxRetries: number;
}): Promise<string | null> =>
  new Promise((resolve, reject) => {
    let retries = 0;

    // Function to periodically check the value of chainID
    const checkChainID = () => {
      const { chainId } = networkStore.getState().network;
      const isValidEnvironment = getEnvironmentForChainId(chainId);

      if (Boolean(isValidEnvironment)) {
        resolve(chainId);
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
