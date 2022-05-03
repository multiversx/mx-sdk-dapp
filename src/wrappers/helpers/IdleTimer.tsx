import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { getIsLoggedIn, logout } from 'utils';

const minutes = 10;

const IdleTimer = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = getIsLoggedIn();

  const handleOnIdle = () => {
    if (isLoggedIn) {
      logout();
    }
  };

  const { isIdle } = useIdleTimer({
    timeout: 1000 * 60 * minutes,
    onIdle: handleOnIdle,
    debounce: 500
  });

  const userIsActive = !isIdle();

  if (userIsActive || !isLoggedIn) {
    return <>{children}</>;
  }

  return null;
};

export default IdleTimer;
