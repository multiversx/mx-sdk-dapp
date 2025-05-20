import { getStore } from 'store/store';

export const setIsUnlockPanelOpen = (isOpen: boolean) =>
  getStore().setState(
    ({ ui: state }) => {
      state.isSidePanelOpen = isOpen;
    },
    false,
    'setIsUnlockPanelOpen'
  );
