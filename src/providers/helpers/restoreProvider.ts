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

  const { loginInfo } = getState();
  const { providerType } = loginInfo;
  const providerTypeFromSelector = providerTypeSelector(getState());

  console.error({
    isMobile,
    isInIframe,
    providerType,
    providerTypeFromSelector
  });

  const type = isInIframe || isMobile ? ProviderTypeEnum.webview : providerType;

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
