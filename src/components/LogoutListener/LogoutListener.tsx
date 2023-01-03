import {
  useLogoutFromMultipleTabs,
  useNativeAuthLogout,
  useNativeAuthLogoutWarning
} from './helpers';

export const LogoutListener = () => {
  useNativeAuthLogoutWarning();
  useLogoutFromMultipleTabs();
  useNativeAuthLogout();

  return null;
};
