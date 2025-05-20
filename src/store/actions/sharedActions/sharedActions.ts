import { Address } from '@multiversx/sdk-core/out';
import { ProviderTypeEnum } from 'core/providers/types/providerFactory.types';
import { resetStore } from 'store/middleware/logoutMiddleware';
import { getStore } from '../../store';

export const logoutAction = () => getStore().setState(resetStore);
export interface LoginActionPayloadType<
  T extends ProviderTypeEnum = ProviderTypeEnum
> {
  address: string;
  providerType: T[keyof T];
}

export const loginAction = ({
  address,
  providerType
}: LoginActionPayloadType) => {
  getStore().setState(
    ({ account, loginInfo }) => {
      account.address = address;
      account.publicKey = new Address(address).hex();

      if (loginInfo) {
        loginInfo.providerType = providerType;
      }
    },
    false,
    'loginAction'
  );
};
