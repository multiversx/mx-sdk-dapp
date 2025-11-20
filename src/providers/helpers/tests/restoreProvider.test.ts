import { isMobileWebview } from 'lib/sdkWebviewProvider';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { providerTypeSelector } from 'store/selectors/loginInfoSelectors';
import { getState } from 'store/store';
import { getIsInIframe } from 'utils/window/getIsInIframe';
import { ProviderFactory } from '../../ProviderFactory';
import { setAccountProvider } from '../accountProvider';
import { restoreProvider } from '../restoreProvider';

jest.mock('lib/sdkWebviewProvider');
jest.mock('utils/window/getIsInIframe');
jest.mock('store/store');
jest.mock('store/selectors/loginInfoSelectors');
jest.mock('../accountProvider');
jest.mock('../../ProviderFactory');

describe('restoreProvider tests', () => {
  let mockProvider: any;

  beforeEach(() => {
    jest.resetAllMocks();

    (getState as jest.Mock).mockReturnValue({});
    (isMobileWebview as jest.Mock).mockReturnValue(false);
    (getIsInIframe as jest.Mock).mockReturnValue(false);

    mockProvider = {
      login: jest.fn().mockResolvedValue(undefined),
      isInitialized: jest.fn().mockReturnValue(false),
      getType: jest.fn().mockReturnValue(ProviderTypeEnum.extension)
    };
  });

  it('should return early when provider type is null', async () => {
    (providerTypeSelector as jest.Mock).mockReturnValue(null);

    await restoreProvider();

    expect(ProviderFactory.create).not.toHaveBeenCalled();
    expect(setAccountProvider).not.toHaveBeenCalled();
  });

  it('should successfully restore base provider without login', async () => {
    (providerTypeSelector as jest.Mock).mockReturnValue(
      ProviderTypeEnum.extension
    );
    (ProviderFactory.create as jest.Mock).mockResolvedValue(mockProvider);

    await restoreProvider();

    expect(ProviderFactory.create).toHaveBeenCalledWith({
      type: ProviderTypeEnum.extension
    });
    expect(mockProvider.login).not.toHaveBeenCalled();
    expect(setAccountProvider).toHaveBeenCalledWith(mockProvider);
  });

  it('should call login when in webview scenario', async () => {
    (providerTypeSelector as jest.Mock).mockReturnValue(
      ProviderTypeEnum.webview
    );
    (isMobileWebview as jest.Mock).mockReturnValue(true);
    mockProvider.isInitialized = jest.fn().mockReturnValue(true);
    (ProviderFactory.create as jest.Mock).mockResolvedValue(mockProvider);

    await restoreProvider();

    expect(ProviderFactory.create).toHaveBeenCalledWith({
      type: ProviderTypeEnum.webview
    });
    expect(mockProvider.login).toHaveBeenCalled();
    expect(setAccountProvider).toHaveBeenCalledWith(mockProvider);
  });
});
