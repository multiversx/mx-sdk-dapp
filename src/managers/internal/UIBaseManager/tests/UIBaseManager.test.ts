import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { UITagsEnum } from 'constants/UITags.enum';
import { ComponentFactory } from 'utils/ComponentFactory';
import { UIBaseManager } from '../UIBaseManager';

enum TestEventsEnum {
  CLOSE = 'CLOSE',
  DATA_UPDATE = 'DATA_UPDATE'
}

class TestManager extends UIBaseManager<
  any,
  { value: string },
  TestEventsEnum
> {
  protected initialData = { value: '' };
  public readonly handleClose = jest.fn();

  constructor() {
    super({
      uiDataUpdateEvent: TestEventsEnum.DATA_UPDATE,
      uiTag: UITagsEnum.TOAST_LIST
    });
  }

  protected async setupEventListeners() {
    if (!this.eventBus) {
      return;
    }

    this.subscribeToEventBus(TestEventsEnum.CLOSE, this.handleClose);
  }
}

describe('UIBaseManager', () => {
  let eventBus: EventBus;

  beforeEach(() => {
    jest.clearAllMocks();
    eventBus = new EventBus();
  });

  const mockElementCreation = (delayMs = 0) =>
    jest.spyOn(ComponentFactory, 'create').mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                getEventBus: async () => eventBus,
                remove: jest.fn()
              } as any),
            delayMs
          )
        )
    );

  afterEach(() => jest.restoreAllMocks());

  it('creates a single element for concurrent initializations and listens on it', async () => {
    const create = mockElementCreation(10);
    const manager = new TestManager();

    const first = manager.init();
    const second = manager.init();

    // the second caller must not finish before the element exists
    await second;
    expect((manager as any).eventBus).not.toBeNull();

    await first;
    expect(create).toHaveBeenCalledTimes(1);

    eventBus.publish(TestEventsEnum.CLOSE);

    expect(manager.handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not add the same handler twice', async () => {
    mockElementCreation();
    const manager = new TestManager();

    await manager.init();
    await manager.init();

    eventBus.publish(TestEventsEnum.CLOSE);

    expect(manager.handleClose).toHaveBeenCalledTimes(1);
    expect(manager.getEventHandlers(TestEventsEnum.CLOSE)).toHaveLength(1);
  });
});
