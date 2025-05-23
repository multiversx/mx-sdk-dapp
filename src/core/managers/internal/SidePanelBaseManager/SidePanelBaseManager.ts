import { UITagsEnum } from 'constants/UITags.enum';
import { setIsSidePanelOpen } from 'store/actions/ui/uiActions';
import { CreateEventBusUIElementType } from 'utils/createUIElement';
import { UIBaseManager } from '../UIBaseManager/UIBaseManager';

interface ISideManagerUIElement extends CreateEventBusUIElementType {
  closeWithAnimation?: () => Promise<unknown>;
}

export abstract class SidePanelBaseManager<
  TElement extends ISideManagerUIElement,
  TData extends Record<string, any> | null,
  TEventEnum extends string
> extends UIBaseManager<TElement, TData, TEventEnum> {
  protected isOpen = false;

  constructor({
    uiDataUpdateEvent,
    uiTag
  }: {
    uiTag: UITagsEnum;
    uiDataUpdateEvent: TEventEnum;
  }) {
    super({
      uiDataUpdateEvent,
      uiTag
    });
    this.data = this.getInitialData();
  }

  public async openUI(anchor?: HTMLElement) {
    if (this.isOpen && this.uiElement) {
      // UI element is already open
      return;
    }

    await super.init(anchor);
    this.setIsSidePanelOpen(true);
  }

  public async destroy() {
    this.setIsSidePanelOpen(false);
    await this.uiElement?.closeWithAnimation?.();

    super.destroy();
  }

  public closeUI(): void {
    this.resetData();
    this.destroy();
  }

  private setIsSidePanelOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
    setIsSidePanelOpen(isOpen);
  }
}
