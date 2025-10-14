import { isMobileWebview } from 'lib/sdkWebviewProvider';
import {
  ProviderBaseType,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';
import { providerTypeSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getIsInIframe } from 'utils/window/getIsInIframe';
import { setAccountProvider } from './accountProvider';
import { ProviderFactory } from '../ProviderFactory';

export async function restoreProvider() {
  const isMobileView = isMobileWebview();
  const isInIframe = getIsInIframe();
  const providerType = providerTypeSelector(getState());

  let type =
    isInIframe || isMobileView ? ProviderTypeEnum.webview : providerType;

  const isBaseProvider = Object.values(ProviderTypeEnum).includes(
    providerType as ProviderBaseType
  );
  // Check if provider exist and is not base
  const isCustomProvider = providerType && !isBaseProvider;

  // Prioritize customProvider if it serves as a provider inside an iframe
  if (isCustomProvider) {
    type = providerType;
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
  const shouldStartWebviewLogin =
    isMobileView ||
    (type === ProviderTypeEnum.webview && provider.isInitialized());

  if (shouldStartWebviewLogin) {
    try {
      await provider.login();
    } catch (error) {
      console.warn('Failed to login with provider', provider.getType(), error);
    }
  }

  setAccountProvider(provider);
}
