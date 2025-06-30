import { safeWindow } from 'constants/window.constants';
import { ThemesEnum } from 'types';

export function switchTheme(theme: `${ThemesEnum}`) {
  try {
    if (!safeWindow) {
      return;
    }
    safeWindow.document.documentElement.dataset.theme = theme;
  } catch (_err) {}
}
