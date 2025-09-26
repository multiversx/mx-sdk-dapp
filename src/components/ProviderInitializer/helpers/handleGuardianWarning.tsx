import React from 'react';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

import { AccountType } from 'types';
import { GuardianWarningToast } from 'UI/GuardianWarningToast';
import { storage } from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';
import { addNewCustomToast } from 'utils/toasts';

const DAYS_TO_SHOW_AGAIN_AFTER_DISMISSAL = 3;
const SECONDS_IN_A_DAY = 24 * 60 * 60;

export const handleGuardianWarning = (userAccount: AccountType) => {
  const handleToastDismissal = () => {
    const daysAsMilliseconds =
      SECONDS_IN_A_DAY * DAYS_TO_SHOW_AGAIN_AFTER_DISMISSAL * 1000;

    const currentTimestamp = Date.now();

    storage.local.setItem({
      key: localStorageKeys.guardianBreachToastDismissTimestamp,
      data: currentTimestamp,
      expires: currentTimestamp + daysAsMilliseconds
    });
  };

  const guardianBreachToastDismissTimestamp = storage?.local.getItem(
    localStorageKeys.guardianBreachToastDismissTimestamp
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
