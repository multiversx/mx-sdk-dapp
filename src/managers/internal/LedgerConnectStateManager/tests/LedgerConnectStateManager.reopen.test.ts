import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { ComponentFactory } from 'utils/ComponentFactory';
import { LedgerConnectStateManager } from '../LedgerConnectStateManager';
import { LedgerConnectEventsEnum } from '../types';

describe('LedgerConnectStateManager reopen', () => {
  const createElement = () => {
    const eventBus = new EventBus();

    return {
      eventBus,
      getEventBus: async () => eventBus,
      remove: jest.fn()
    };
  };

  beforeEach(() => {
    (LedgerConnectStateManager as any).instance = undefined;
  });

  afterEach(() => jest.restoreAllMocks());

  it('builds a new element after the previous one was removed', async () => {
    const firstElement = createElement();
    const secondElement = createElement();
    const create = jest
      .spyOn(ComponentFactory, 'create')
      .mockResolvedValueOnce(firstElement as any)
      .mockResolvedValueOnce(secondElement as any);

    const manager = LedgerConnectStateManager.getInstance();
    const providerInitHandlers = {
      handleRetry: jest.fn(),
      handleCancel: jest.fn()
    };

    await manager.init(document.createElement('div'));
    // device connected: provider init listeners are dropped
    manager.subscribeToProviderInit(providerInitHandlers);
    manager.unsubscribeFromProviderInit(providerInitHandlers);
    // the panel closes and removes the element
    firstElement.eventBus.publish(LedgerConnectEventsEnum.UI_DISCONNECTED);

    await manager.init(document.createElement('div'));

    expect(create).toHaveBeenCalledTimes(2);
    expect((manager as any).uiElement).toBe(secondElement);
    expect((manager as any).eventBus).toBe(secondElement.eventBus);
  });
});
