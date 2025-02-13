import React from 'react';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

import { AccountType } from 'types';
import { GuardianWarningToast } from 'UI';
import { addNewCustomToast, storage } from 'utils';
import { localStorageKeys } from 'utils/storage/local';

const DAYS_TO_SHOW_AGAIN_AFTER_DISMISSAL = 3;
const SECONDS_IN_A_DAY = 24 * 60 * 60;

export const useGuardianChangeToast = () => {
  const guardianBreachToastDismissTimestamp = storage.local.getItem(
    localStorageKeys.guardianBreachToastDismissTimestamp
  );

  const handleToastDismissal = () => {
    const daysAsSeconds = SECONDS_IN_A_DAY * DAYS_TO_SHOW_AGAIN_AFTER_DISMISSAL;
    const currentTimestamp = Date.now();

    storage.local.setItem({
      key: localStorageKeys.guardianBreachToastDismissTimestamp,
      data: currentTimestamp,
      expires: currentTimestamp + daysAsSeconds
    });
  };

  const insertGuardianWarningToast = () => {
    addNewCustomToast({
      toastId: 'guardianUnconfirmedChangeWarning',
      title: 'Account at risk!',
      component: () => <GuardianWarningToast />,
      icon: faWarning,
      onClose: handleToastDismissal
    });
  };

  const handleGuardianWarningToast = (userAccount: AccountType) => {
    const isGuardedAccountPendingChange =
      userAccount.isGuarded &&
      userAccount.activeGuardianAddress &&
      userAccount.pendingGuardianAddress;

    if (isGuardedAccountPendingChange && !guardianBreachToastDismissTimestamp) {
      insertGuardianWarningToast();
      return;
    }
  };

  return handleGuardianWarningToast;
};
