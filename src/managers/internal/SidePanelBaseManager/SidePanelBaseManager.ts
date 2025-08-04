import { UITagsEnum } from 'constants/UITags.enum';
import { setIsSidePanelOpen } from 'store/actions/ui/uiActions';
import { CreateEventBusUIElementType } from 'utils/ComponentFactory';
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

  public async openUI() {
    if (this.isOpen && this.uiElement) {
      // UI element is already open
      return;
    }

    await super.init();
    this.setIsSidePanelOpen(true);
  }

  public destroy() {
    this.setIsSidePanelOpen(false);

    if (this.uiElement?.closeWithAnimation) {
      this.uiElement?.closeWithAnimation?.().finally(() => {
        super.destroy();
      });
      return;
    }
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
