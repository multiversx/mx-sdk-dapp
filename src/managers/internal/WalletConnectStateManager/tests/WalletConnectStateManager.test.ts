import { UnlockPanelEventsEnum } from 'managers/UnlockPanelManager/UnlockPanelManager.types';
import { WalletConnectEventsEnum } from 'providers/strategies/WalletConnectProviderStrategy/types';
import { WalletConnectStateManager } from '../WalletConnectStateManager';

const resetSingleton = () => {
  (WalletConnectStateManager as any).instance = undefined;
};

describe('WalletConnectStateManager tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    resetSingleton();
  });

  it('returns the same instance when getInstance is called multiple times', () => {
    const first = WalletConnectStateManager.getInstance();
    const second = WalletConnectStateManager.getInstance();

    expect(first).toBe(second);
  });

  it('handleClose dispatches anchor close event when login not finished', () => {
    const manager = new WalletConnectStateManager();
    const anchor = document.createElement('div');
    const dispatchSpy = jest.spyOn(anchor, 'dispatchEvent');
    (manager as any).anchor = anchor;

    manager.handleClose();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    const eventArg = dispatchSpy.mock.calls[0][0] as CustomEvent;
    expect(eventArg.type).toBe(UnlockPanelEventsEnum.ANCHOR_CLOSE);
  });

  it('handleClose destroys UI when no anchor is attached', () => {
    const manager = new WalletConnectStateManager();
    const destroySpy = jest.spyOn(manager, 'destroy').mockImplementation();

    manager.handleClose();

    expect(destroySpy).toHaveBeenCalled();
  });

  it('handleClose exits early when login is finished', () => {
    const manager = new WalletConnectStateManager();
    const anchor = document.createElement('div');
    const dispatchSpy = jest.spyOn(anchor, 'dispatchEvent');
    const destroySpy = jest.spyOn(manager, 'destroy').mockImplementation();
    (manager as any).anchor = anchor;

    manager.handleClose({ isLoginFinished: true });

    expect(dispatchSpy).not.toHaveBeenCalled();
    expect(destroySpy).not.toHaveBeenCalled();
  });

  it('setupEventListeners subscribes to CLOSE and UI_DISCONNECTED events', async () => {
    const manager = new WalletConnectStateManager();
    const subscribe = jest.fn();
    (manager as any).eventBus = { subscribe };

    await (manager as any).setupEventListeners();

    expect(subscribe).toHaveBeenCalledWith(
      WalletConnectEventsEnum.CLOSE,
      expect.any(Function)
    );
    expect(subscribe).toHaveBeenCalledWith(
      WalletConnectEventsEnum.UI_DISCONNECTED,
      expect.any(Function)
    );
  });
});
