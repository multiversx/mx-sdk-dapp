import { getLatestNonce } from 'methods/account/getLatestNonce';
import { registerWebsocketListener } from 'methods/initApp/helpers/registerWebsocket';
import { setGasStationMetadata } from 'methods/initApp/helpers/setGasStationMetadata';
import { trackTransactions } from 'methods/trackTransactions/trackTransactions';
import { IProvider } from 'providers/types/providerFactory.types';
import { loginAction } from 'store/actions';
import { setAccount } from 'store/actions/account';
import { AccountType } from 'types/account.types';
import { fetchAccount } from 'utils/account/fetchAccount';
import { trimUsernameDomain } from 'utils/account/trimUsernameDomain';

interface IAccountLoginProps {
  address: string;
  provider: IProvider;
  apiAddress: string;
}

export async function accountLogin({
  address,
  provider,
  apiAddress
}: IAccountLoginProps) {
  const account = await fetchAccount({
    address,
    baseURL: apiAddress
  });

  if (!account) {
    throw new Error('Account not found');
  }

  loginAction({
    address,
    providerType: provider.getType()
  });

  const newAccount: AccountType = {
    ...account,
    username: trimUsernameDomain(account.username),
    nonce: getLatestNonce(account)
  };

  setAccount(newAccount);

  await registerWebsocketListener(address);
  trackTransactions();

  if (account.shard != null) {
    await setGasStationMetadata({
      shard: Number(account.shard),
      apiAddress
    });
  }
}
