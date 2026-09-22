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
  private closePromise: Promise<void> | null = null;

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
    // A panel that is closing has to finish before it can open again
    await this.closePromise;

    if (this.isOpen && this.uiElement) {
      // UI element is already open
      return;
    }

    await super.init();
    this.setIsSidePanelOpen(true);
  }

  public destroy() {
    this.setIsSidePanelOpen(false);

    const closingElement = this.uiElement;

    if (closingElement?.closeWithAnimation) {
      this.closePromise = Promise.resolve(closingElement.closeWithAnimation())
        .catch(() => undefined)
        .then(() => {
          super.destroy();
          this.closePromise = null;
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
