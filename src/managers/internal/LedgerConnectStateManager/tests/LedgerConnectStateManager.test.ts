import { UITagsEnum } from 'constants/UITags.enum';
import { UnlockPanelEventsEnum } from 'managers/UnlockPanelManager/UnlockPanelManager.types';
import { LedgerConnectStateManager } from '../LedgerConnectStateManager';
import { LedgerConnectEventsEnum } from '../types';

const mockSuperConstructor = jest.fn();
const mockGetInitialData = jest.fn(() => ({
  connectScreenData: {},
  accountScreenData: {},
  confirmScreenData: {}
}));
const mockSuperResetData = jest.fn();

jest.mock('../../UIBaseManager/UIBaseManager', () => ({
  UIBaseManager: class {
    public data: any;

    constructor(args: any) {
      mockSuperConstructor(args);
      this.data = mockGetInitialData();
    }

    protected getInitialData() {
      return mockGetInitialData();
    }

    public notifyDataUpdate() {
      // noop for tests – spied per instance where needed
    }

    protected resetData() {
      mockSuperResetData();
      this.data = this.getInitialData();
    }

    public destroy() {
      // noop for tests – spied per instance where needed
    }
  }
}));

const resetSingleton = () => {
  (LedgerConnectStateManager as any).instance = undefined;
};

describe('LedgerConnectStateManager tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    resetSingleton();
  });

  describe('constructor', () => {
    it('initializes base manager with ledger configs and sets data', () => {
      const manager = new LedgerConnectStateManager();

      expect(mockSuperConstructor).toHaveBeenCalledWith({
        uiDataUpdateEvent: LedgerConnectEventsEnum.DATA_UPDATE,
        uiTag: UITagsEnum.LEDGER_CONNECT
      });
      expect(mockGetInitialData).toHaveBeenCalledTimes(2);
      expect((manager as any).data).toEqual({
        connectScreenData: {},
        accountScreenData: {},
        confirmScreenData: {}
      });
    });
  });

  describe('getInstance', () => {
    it('returns the same instance when called multiple times', () => {
      const first = LedgerConnectStateManager.getInstance();
      const second = LedgerConnectStateManager.getInstance();

      expect(first).toBe(second);
    });
  });

  describe('account management', () => {
    it('updates stored accounts and exposes them through getter', () => {
      const manager = new LedgerConnectStateManager();
      const accounts = [
        { address: 'erd1', index: 0 },
        { address: 'erd2', index: 1 }
      ] as any;

      manager.updateAllAccounts(accounts);

      expect(manager.getAllAccounts()).toEqual(accounts);
      expect((manager as any).accountScreenData.accounts).toBe(accounts);
    });

    it('updates the account screen start index', () => {
      const manager = new LedgerConnectStateManager();

      manager.updateStartIndex(10);

      expect((manager as any).accountScreenData.startIndex).toBe(10);
    });
  });

  describe('screen updates', () => {
    it('updates connect screen data and notifies listeners', () => {
      const manager = new LedgerConnectStateManager();
      const notifySpy = jest.spyOn(manager as any, 'notifyDataUpdate');
      const update = { error: 'Connect your Ledger' };

      manager.updateConnectScreen(update);

      expect((manager as any).connectScreenData).toEqual(update);
      expect((manager as any).data).toMatchObject({
        connectScreenData: update,
        accountScreenData: null,
        confirmScreenData: null
      });
      expect(notifySpy).toHaveBeenCalledTimes(1);
    });

    it('updates account screen data and notifies listeners', () => {
      const manager = new LedgerConnectStateManager();
      const notifySpy = jest.spyOn(manager as any, 'notifyDataUpdate');
      const update = { startIndex: 20, isLoading: false };

      manager.updateAccountScreen(update);

      expect((manager as any).accountScreenData).toMatchObject({
        accounts: [],
        addressesPerPage: manager.addressesPerPage,
        ...update
      });
      expect((manager as any).data).toMatchObject({
        accountScreenData: (manager as any).accountScreenData,
        confirmScreenData: null
      });
      expect(notifySpy).toHaveBeenCalledTimes(1);
    });

    it('updates confirm screen data and notifies listeners', () => {
      const manager = new LedgerConnectStateManager();
      const notifySpy = jest.spyOn(manager as any, 'notifyDataUpdate');
      const update = { selectedAddress: 'erd1', explorerLink: 'link' };

      manager.updateConfirmScreen(update);

      expect((manager as any).confirmScreenData).toEqual(update);
      expect((manager as any).data).toMatchObject({
        accountScreenData: null,
        confirmScreenData: update
      });
      expect(notifySpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('screen getters', () => {
    it('returns current account screen data', () => {
      const manager = new LedgerConnectStateManager();
      manager.updateAccountScreen({ startIndex: 5 });

      expect(manager.getAccountScreenData()).toEqual(
        (manager as any).accountScreenData
      );
    });

    it('returns current confirm screen data', () => {
      const manager = new LedgerConnectStateManager();
      manager.updateConfirmScreen({ selectedAddress: 'erd1' });

      expect(manager.getConfirmScreenData()).toEqual(
        (manager as any).confirmScreenData
      );
    });
  });

  describe('provider init subscriptions', () => {
    it('subscribes to provider init events when eventBus exists', () => {
      const manager = new LedgerConnectStateManager();
      const handleRetry = jest.fn();
      const handleCancel = jest.fn();
      const destroySpy = jest
        .spyOn(manager as any, 'destroy')
        .mockImplementation();
      const eventBus = {
        subscribe: jest.fn()
      };
      (manager as any).eventBus = eventBus;

      manager.subscribeToProviderInit({ handleRetry, handleCancel });

      expect(eventBus.subscribe).toHaveBeenNthCalledWith(
        1,
        LedgerConnectEventsEnum.CONNECT_DEVICE,
        handleRetry
      );
      expect(eventBus.subscribe).toHaveBeenNthCalledWith(
        2,
        LedgerConnectEventsEnum.CLOSE,
        handleCancel
      );
      const disconnectHandler = eventBus.subscribe.mock.calls[2][1];
      expect(eventBus.subscribe).toHaveBeenNthCalledWith(
        3,
        LedgerConnectEventsEnum.UI_DISCONNECTED,
        expect.any(Function)
      );
      disconnectHandler();
      expect(destroySpy).toHaveBeenCalledTimes(1);
    });

    it('unsubscribes from provider init events', () => {
      const manager = new LedgerConnectStateManager();
      const handleRetry = jest.fn();
      const handleCancel = jest.fn();
      const eventBus = {
        unsubscribe: jest.fn()
      };
      (manager as any).eventBus = eventBus;

      manager.unsubscribeFromProviderInit({ handleRetry, handleCancel });

      expect(eventBus.unsubscribe).toHaveBeenNthCalledWith(
        1,
        LedgerConnectEventsEnum.CONNECT_DEVICE,
        handleRetry
      );
      expect(eventBus.unsubscribe).toHaveBeenNthCalledWith(
        2,
        LedgerConnectEventsEnum.CLOSE,
        handleCancel
      );
      expect(eventBus.unsubscribe).toHaveBeenNthCalledWith(
        3,
        LedgerConnectEventsEnum.UI_DISCONNECTED,
        expect.any(Function)
      );
    });
  });

  describe('auth event subscriptions', () => {
    it('subscribes to auth flow events when eventBus exists', () => {
      const manager = new LedgerConnectStateManager();
      const handlers = {
        handleCancel: jest.fn(),
        handleAccessWallet: jest.fn(),
        handleGoToPage: jest.fn()
      };
      const eventBus = {
        subscribe: jest.fn()
      };
      (manager as any).eventBus = eventBus;

      manager.subscribeToAuthEvents(handlers);

      expect(eventBus.subscribe).toHaveBeenNthCalledWith(
        1,
        LedgerConnectEventsEnum.CLOSE,
        handlers.handleCancel
      );
      expect(eventBus.subscribe).toHaveBeenNthCalledWith(
        2,
        LedgerConnectEventsEnum.ACCESS_WALLET,
        handlers.handleAccessWallet
      );
      expect(eventBus.subscribe).toHaveBeenNthCalledWith(
        3,
        LedgerConnectEventsEnum.GO_TO_PAGE,
        handlers.handleGoToPage
      );
    });

    it('unsubscribes from auth flow events and resets data', () => {
      const manager = new LedgerConnectStateManager();
      const handlers = {
        handleCancel: jest.fn(),
        handleAccessWallet: jest.fn(),
        handleGoToPage: jest.fn()
      };
      const eventBus = {
        unsubscribe: jest.fn()
      };
      const resetSpy = jest
        .spyOn(manager as any, 'resetData')
        .mockImplementation();
      (manager as any).eventBus = eventBus;

      manager.unsubscribeFromAuthEvents(handlers);

      expect(eventBus.unsubscribe).toHaveBeenNthCalledWith(
        1,
        LedgerConnectEventsEnum.CLOSE,
        handlers.handleCancel
      );
      expect(eventBus.unsubscribe).toHaveBeenNthCalledWith(
        2,
        LedgerConnectEventsEnum.ACCESS_WALLET,
        handlers.handleAccessWallet
      );
      expect(eventBus.unsubscribe).toHaveBeenNthCalledWith(
        3,
        LedgerConnectEventsEnum.GO_TO_PAGE,
        handlers.handleGoToPage
      );
      expect(resetSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleClose', () => {
    it('dispatches anchor close event when anchor exists', () => {
      const manager = new LedgerConnectStateManager();
      const anchor = document.createElement('div');
      const dispatchSpy = jest.spyOn(anchor, 'dispatchEvent');
      (manager as any).anchor = anchor;

      manager.handleClose();

      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const eventArg = dispatchSpy.mock.calls[0][0] as CustomEvent;
      expect(eventArg.type).toBe(UnlockPanelEventsEnum.ANCHOR_CLOSE);
    });

    it('destroys UI when no anchor is attached', () => {
      const manager = new LedgerConnectStateManager();
      const destroySpy = jest
        .spyOn(manager as any, 'destroy')
        .mockImplementation();

      manager.handleClose();

      expect(destroySpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('setupEventListeners', () => {
    it('subscribes to close event and wires handleClose handler', async () => {
      const manager = new LedgerConnectStateManager();
      const subscribe = jest.fn();
      (manager as any).eventBus = { subscribe };
      const handleCloseSpy = jest
        .spyOn(manager, 'handleClose')
        .mockImplementation(() => {});

      await (manager as any).setupEventListeners();

      expect(subscribe).toHaveBeenCalledWith(
        LedgerConnectEventsEnum.CLOSE,
        expect.any(Function)
      );
      const callback = subscribe.mock.calls[0][1];
      callback();
      expect(handleCloseSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('resetData', () => {
    it('restores initial data and clears derived state', () => {
      const manager = new LedgerConnectStateManager();
      (manager as any).allAccounts = [{ address: 'erd1' }];
      (manager as any).accountScreenData = {
        accounts: [{ address: 'erd1' }],
        startIndex: 5,
        addressesPerPage: 5,
        isLoading: false
      };
      (manager as any).connectScreenData = { title: 'changed' };
      (manager as any).confirmScreenData = {
        selectedAddress: 'erd1',
        explorerLink: 'link'
      };

      (manager as any).resetData();

      expect(manager.getAllAccounts()).toEqual([]);
      expect((manager as any).accountScreenData).toEqual({
        accounts: [],
        startIndex: 0,
        addressesPerPage: manager.addressesPerPage,
        isLoading: true
      });
      expect((manager as any).connectScreenData).toEqual({});
      expect((manager as any).confirmScreenData).toEqual({
        selectedAddress: '',
        explorerLink: ''
      });
      expect(mockSuperResetData).toHaveBeenCalledTimes(1);
    });
  });
});
