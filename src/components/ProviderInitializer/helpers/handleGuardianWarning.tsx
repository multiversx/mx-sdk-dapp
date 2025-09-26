import React from 'react';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

import { AccountType } from 'types';
import { GuardianWarningToast } from 'UI/GuardianWarningToast';
import { storage } from 'utils/storage';
import { sessionStorageKeys } from 'utils/storage/session';
import { addNewCustomToast } from 'utils/toasts';

const DAYS_TO_SHOW_AGAIN_AFTER_DISMISSAL = 3;
const SECONDS_IN_A_DAY = 24 * 60 * 60;

export const handleGuardianWarning = (userAccount: AccountType) => {
  const handleToastDismissal = () => {
    const daysAsSeconds = SECONDS_IN_A_DAY * DAYS_TO_SHOW_AGAIN_AFTER_DISMISSAL;
    const currentTimestamp = Math.floor(Date.now() / 1000);

    storage.session.setItem({
      key: sessionStorageKeys.guardianBreachToastDismissTimestamp,
      data: currentTimestamp,
      expires: currentTimestamp + daysAsSeconds
    });
  };

  const guardianBreachToastDismissTimestamp = storage?.session.getItem(
    sessionStorageKeys.guardianBreachToastDismissTimestamp
  );

  const isGuardedAccountPendingChange =
    userAccount.isGuarded &&
    userAccount.activeGuardianAddress &&
    userAccount.pendingGuardianAddress;

  if (isGuardedAccountPendingChange && !guardianBreachToastDismissTimestamp) {
    addNewCustomToast({
      toastId: 'guardianUnconfirmedChangeWarning',
      title: 'Account at risk!',
      component: () => <GuardianWarningToast />,
      icon: faWarning,
      onClose: handleToastDismissal
    });
  }
};
