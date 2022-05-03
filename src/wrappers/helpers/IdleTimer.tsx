import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { getIsLoggedIn, logout } from 'utils';

const minutes = 10;
const timeout = 1000 * 60 * minutes;
const debounce = 500;

const IdleTimer = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = getIsLoggedIn();

  const onIdle = () => {
    if (isLoggedIn) {
      logout();
    }
  };

  useIdleTimer({ timeout, onIdle, debounce });

  return <>{children}</>;
};

export default IdleTimer;
