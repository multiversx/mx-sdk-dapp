import { useIdleTimer } from 'react-idle-timer';
import { getIsLoggedIn, logout as dappLogout } from 'utils';

const getTimeout = (minutes: number) => 1000 * 60 * minutes;
const debounce = 500;

interface IdleTimerType {
  minutes?: number;
  onLogout?: (props?: any) => void;
}

export const IdleTimer = ({ minutes = 10, onLogout }: IdleTimerType) => {
  const isLoggedIn = getIsLoggedIn();
  const defaultLogout = () => dappLogout();
  const logout = onLogout ? onLogout : defaultLogout;
  const timeout = getTimeout(minutes);

  const onIdle = () => {
    if (isLoggedIn) {
      logout();
    }
  };

  useIdleTimer({ timeout, onIdle, debounce });

  return null;
};

export default IdleTimer;
