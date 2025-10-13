import { getStore } from 'store/store';

export const setIsSidePanelOpen = (isOpen: boolean) =>
  getStore().setState(
    ({ ui: state }) => {
      state.isSidePanelOpen = isOpen;
    },
    false,
    {
      type: 'setIsSidePanelOpen',
      // @ts-ignore
      payload: {
        value: isOpen
      }
    }
  );
