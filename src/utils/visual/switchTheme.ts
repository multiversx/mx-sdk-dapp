import { safeWindow } from 'constants/window.constants';
import { ThemesEnum } from 'types';

export function switchTheme(theme: `${ThemesEnum}`) {
  try {
    if (!safeWindow) {
      return;
    }
    safeWindow.document.documentElement.dataset.mvxTheme = theme;
  } catch (_err) {
    console.log('Error switching the theme!');
  }
}
