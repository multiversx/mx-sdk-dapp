import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { UITagsEnum } from 'constants/UITags.enum';
import { ComponentFactory } from 'utils/ComponentFactory';
import { SidePanelBaseManager } from '../SidePanelBaseManager';

jest.mock('store/actions/ui/uiActions', () => ({
  setIsSidePanelOpen: jest.fn()
}));

enum PanelEventsEnum {
  CLOSE = 'CLOSE',
  DATA_UPDATE = 'DATA_UPDATE'
}

class TestPanelManager extends SidePanelBaseManager<
  any,
  { value: string },
  PanelEventsEnum
> {
  protected initialData = { value: '' };

  constructor() {
    super({
      uiDataUpdateEvent: PanelEventsEnum.DATA_UPDATE,
      uiTag: UITagsEnum.TOAST_LIST
    });
  }

  protected async setupEventListeners() {}
}

describe('SidePanelBaseManager', () => {
  afterEach(() => jest.restoreAllMocks());

  it('lets the closing panel finish before opening a new one', async () => {
    const closingElements: any[] = [];
    let resolveClose: () => void = () => {};

    jest.spyOn(ComponentFactory, 'create').mockImplementation(async () => {
      const element = {
        getEventBus: async () => new EventBus(),
        remove: jest.fn(),
        closeWithAnimation: jest.fn(
          () => new Promise<void>((resolve) => (resolveClose = resolve))
        )
      };
      closingElements.push(element);
      return element as any;
    });

    const manager = new TestPanelManager();
    await manager.openUI();
    manager.closeUI();

    const reopen = manager.openUI();
    expect(closingElements).toHaveLength(1);

    resolveClose();
    await reopen;

    const [firstElement, secondElement] = closingElements;

    expect(firstElement.remove).toHaveBeenCalled();
    expect(secondElement).toBeDefined();
    expect(secondElement.remove).not.toHaveBeenCalled();
    expect((manager as any).uiElement).toBe(secondElement);
  });

  it('does not tear down a panel opened after a double close', async () => {
    const elements: any[] = [];
    const resolvers: Array<() => void> = [];

    jest.spyOn(ComponentFactory, 'create').mockImplementation(async () => {
      const element = {
        getEventBus: async () => new EventBus(),
        remove: jest.fn(),
        closeWithAnimation: jest.fn(
          () => new Promise<void>((resolve) => resolvers.push(resolve))
        )
      };
      elements.push(element);
      return element as any;
    });

    const manager = new TestPanelManager();
    await manager.openUI();

    manager.closeUI();
    manager.closeUI();

    expect(resolvers).toHaveLength(1);

    const reopen = manager.openUI();
    resolvers.forEach((resolve) => resolve());
    await reopen;
    await new Promise(process.nextTick);

    const [, secondElement] = elements;

    expect(secondElement.remove).not.toHaveBeenCalled();
    expect((manager as any).uiElement).toBe(secondElement);
  });
});
