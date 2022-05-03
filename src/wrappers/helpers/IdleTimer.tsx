import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { getIsLoggedIn, logout } from 'utils';

const minutes = 0.2;
const timeout = 1000 * 60 * minutes;
const debounce = 500;

const IdleTimer = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = getIsLoggedIn();

  const onIdle = () => {
    if (isLoggedIn) {
      logout();
    }
  };

  const { isIdle } = useIdleTimer({ timeout, onIdle, debounce });

  if (isIdle() && isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};

export default IdleTimer;
