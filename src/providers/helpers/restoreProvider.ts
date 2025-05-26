import { providerTypeSelector } from 'store/selectors';
import { getState } from 'store/store';
import { setAccountProvider } from './accountProvider';
import { ProviderFactory } from '../ProviderFactory';

export async function restoreProvider() {
  const type = providerTypeSelector(getState());

  if (!type) {
    return;
  }

  const provider = await ProviderFactory.create({
    type
  });

  if (!provider) {
    throw new Error('Provider not found');
  }

  setAccountProvider(provider);
}
