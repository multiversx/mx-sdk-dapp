import { DappThemeType } from 'types';

export const switchDappTheme = (theme: DappThemeType) =>
  (document.documentElement.dataset.theme = theme);
