import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { providerTypeSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getIsInIframe } from 'utils/window/getIsInIframe';
import { setAccountProvider } from './accountProvider';
import { ProviderFactory } from '../ProviderFactory';

export async function restoreProvider() {
  const isInIframe = getIsInIframe();
  const isLoggedIn = getIsLoggedIn();

  const type = isInIframe
    ? ProviderTypeEnum.webview
    : providerTypeSelector(getState());

  if (!type) {
    return;
  }

  const provider = await ProviderFactory.create({
    type
  });

  if (!provider) {
    throw new Error('Provider not found');
  }

  if (!isLoggedIn && type === ProviderTypeEnum.webview) {
    await provider.login();
  }

  setAccountProvider(provider);
}
