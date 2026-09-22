import { ProviderFactory } from 'providers/ProviderFactory';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { ComponentFactory } from 'utils/ComponentFactory';
import { UnlockPanelManager } from '../UnlockPanelManager';

jest.mock('providers/ProviderFactory', () => ({
  ProviderFactory: {
    create: jest.fn()
  }
}));

jest.mock('store/selectors/networkSelectors', () => ({
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
      login: jest
        .fn()
        .mockResolvedValue({ address: 'erd1address', signature: 'sig' })
    });
  });

  it('initiates correctly', async () => {
    const navigete = jest.fn();
    const onClose = jest.fn();

    const unlockPanelManager = UnlockPanelManager.init({
      loginHandler: () => {
        navigete();
      },
      onClose: async () => {
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

  it('does not report a login that returned no account', async () => {
    const onLogin = jest.fn();
    (ProviderFactory.create as jest.Mock).mockResolvedValue({
      login: jest.fn().mockResolvedValue(null)
    });

    const unlockPanelManager = UnlockPanelManager.init({
      loginHandler: onLogin
    });
    await unlockPanelManager.openUnlockPanel();

    await (unlockPanelManager as any)['handleLogin']({
      type: ProviderTypeEnum.extension,
      anchor: undefined
    });

    expect(onLogin).not.toHaveBeenCalled();
  });

  it('waits for an advanced login handler and reports its failure', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const loginHandler = jest.fn(async (_props: unknown) => {
      throw new Error('login failed');
    });

    const unlockPanelManager = UnlockPanelManager.init({ loginHandler });
    await unlockPanelManager.openUnlockPanel();
    const closeUI = jest.spyOn(unlockPanelManager as any, 'handleCloseUI');

    await (unlockPanelManager as any)['handleLogin']({
      type: ProviderTypeEnum.extension,
      anchor: undefined
    });

    expect(loginHandler).toHaveBeenCalled();
    expect(closeUI).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
