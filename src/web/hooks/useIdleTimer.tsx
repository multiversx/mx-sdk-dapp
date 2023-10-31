import { useIdleTimer as useReactIdleTimer } from 'react-idle-timer';
import { useGetIsLoggedIn } from 'hooks/account/useGetIsLoggedIn';
import { useClosureRef } from 'hooks/useClosureRef';
import { useSelector } from 'reduxStore/DappProviderContext';
import { logoutRouteSelector } from 'reduxStore/selectors';
import { logout as dappLogout } from 'utils/logout';

const getTimeout = (minutes: number) => 1000 * 60 * minutes;
const debounce = 500;

export interface IdleTimerType {
  minutes?: number;
  onLogout?: (props?: any) => void;
}

export const useIdleTimer = ({ minutes = 10, onLogout }: IdleTimerType) => {
  const isLoggedIn = useGetIsLoggedIn();
  const isLoggedInRef = useClosureRef(isLoggedIn);
  const logoutRoute = useSelector(logoutRouteSelector);

  const logout = onLogout || dappLogout;
  const timeout = getTimeout(minutes);

  const onIdle = () => {
    if (isLoggedInRef.current) {
      logout(logoutRoute);
    }
  };

  useReactIdleTimer({ timeout, onIdle, debounce });
};
