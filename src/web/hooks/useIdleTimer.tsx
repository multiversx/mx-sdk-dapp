import { useIdleTimer as useReactIdleTimer } from 'react-idle-timer';
import { getIsLoggedIn, logout as dappLogout } from 'utils';

const getTimeout = (minutes: number) => 1000 * 60 * minutes;
const debounce = 500;

interface IdleTimerType {
  minutes?: number;
  onLogout?: (props?: any) => void;
}

export const useIdleTimer = ({ minutes = 10, onLogout }: IdleTimerType) => {
  const isLoggedIn = getIsLoggedIn();
  const logout = onLogout || dappLogout;
  const timeout = getTimeout(minutes);

  const onIdle = () => {
    if (isLoggedIn) {
      logout();
    }
  };

  useReactIdleTimer({ timeout, onIdle, debounce });
};
