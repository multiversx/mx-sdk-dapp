import { safeWindow } from './window.constants';

const userAgent = String(safeWindow?.navigator?.userAgent);

export const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

const isFirefoxOnWindows =
  /firefox/i.test(userAgent) && /windows/i.test(userAgent);

export const isBrowserWithPopupConfirmation = isSafari || isFirefoxOnWindows;
