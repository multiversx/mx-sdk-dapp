import { safeWindow } from 'constants/index';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { providerTypeSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getIsInIframe } from 'utils/window/getIsInIframe';
import { setAccountProvider } from './accountProvider';
import { ProviderFactory } from '../ProviderFactory';

export async function restoreProvider() {
  const isInIframe = getIsInIframe();

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

  /*
    Check if the app is running in webview and the provider is already initialized.
    - true: the app is embedded within another dApp (e.g., inside an iframe) and perform login using the provider.
    - false: the parent is not a dApp and proceed with initializing the current app as a standalone iframe.
  */
  if (type === ProviderTypeEnum.webview && provider.isInitialized()) {
    const urlParams = new URLSearchParams(safeWindow.location?.search);
    const token = urlParams.get('accessToken') ?? '';

    await provider.login({ token });
  }

  setAccountProvider(provider);
}
