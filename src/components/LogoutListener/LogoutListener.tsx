import { useLogoutFromMultipleTabs, useNativeAuthLogout } from './helpers';

export const LogoutListener = () => {
  useLogoutFromMultipleTabs();
  useNativeAuthLogout();

  return null;
};
