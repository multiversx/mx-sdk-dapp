import { Address } from 'lib/sdkCore';
import { ProviderType } from 'providers/types/providerFactory.types';
import { resetStore } from 'store/middleware/logoutMiddleware';
import { getStore } from 'store/store';

export const logoutAction = () =>
  getStore().setState(resetStore, false, {
    type: 'logoutAction',
    // @ts-ignore
    payload: {
      value: null
    }
  });
export interface LoginActionPayloadType<T extends ProviderType = ProviderType> {
  address: string;
  providerType: T;
}

export const loginAction = ({
  address,
  providerType
}: LoginActionPayloadType) => {
  getStore().setState(
    ({ account, loginInfo }) => {
      account.address = address;
      account.publicKey = new Address(address).toHex();

      if (loginInfo) {
        loginInfo.providerType = providerType;
      }
    },
    false,
    {
      type: 'loginAction',
      // @ts-ignore
      payload: {
        value: { address, providerType }
      }
    }
  );
};
