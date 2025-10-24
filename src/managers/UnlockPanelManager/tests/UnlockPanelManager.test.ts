import { ProviderFactory } from 'providers/ProviderFactory';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors';
import { ComponentFactory } from 'utils/ComponentFactory';
import { UnlockPanelManager } from '../UnlockPanelManager';

jest.mock('providers/ProviderFactory', () => ({
  ProviderFactory: {
    create: jest.fn()
  }
}));

jest.mock('store/selectors', () => ({
  networkSelector: jest.fn()
}));

jest.mock('utils/ComponentFactory', () => ({
  ComponentFactory: {
    create: jest.fn()
  }
}));

describe('UnlockPanelManager tests', () => {
  beforeEach(() => {
    (ComponentFactory.create as jest.Mock).mockResolvedValue({
      remove: jest.fn()
    });

    (networkSelector as jest.Mock).mockReturnValue({
      walletAddress: 'https://localhost:3000'
    });

    (ProviderFactory.create as jest.Mock).mockResolvedValue({
      login: jest.fn().mockResolvedValue(undefined)
    });
  });

  it('initiates correctly', async () => {
    const navigete = jest.fn();
    const onClose = jest.fn();

    const unlockPanelManager = UnlockPanelManager.init({
      loginHandler: () => {
        navigete();
      },
      onClose: () => {
        onClose();
      }
    });

    expect(unlockPanelManager).toBeInstanceOf(UnlockPanelManager);

    await unlockPanelManager.openUnlockPanel();

    // A LOGIN event was published
    await (unlockPanelManager as any)['handleLogin']({
      type: ProviderTypeEnum.extension,
      anchor: undefined
    });

    expect(navigete).toHaveBeenCalled();
  });
});
