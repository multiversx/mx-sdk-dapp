import { isMobileWebview } from 'lib/sdkWebviewProvider';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { providerTypeSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getIsInIframe } from 'utils/window/getIsInIframe';
import { setAccountProvider } from './accountProvider';
import { ProviderFactory } from '../ProviderFactory';

export async function restoreProvider() {
  const isMobile = isMobileWebview();
  const isInIframe = getIsInIframe();
  const providerType = providerTypeSelector(getState());

  let type = providerType;

  if (
    providerType &&
    ProviderTypeEnum[providerType as keyof typeof ProviderTypeEnum] &&
    (isInIframe || isMobile)
  ) {
    type = ProviderTypeEnum.webview;
  }

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
  if (
    isMobile ||
    (type === ProviderTypeEnum.webview && provider.isInitialized())
  ) {
    await provider.login();
  }

  setAccountProvider(provider);
}
