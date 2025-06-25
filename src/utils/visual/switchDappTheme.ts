import { DappThemeEnum } from 'types';

export const switchDappTheme = (theme: `${DappThemeEnum}`) =>
  (document.documentElement.dataset.theme = theme);
