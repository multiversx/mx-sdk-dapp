import React from 'react';
import { getAuthorizationInfo } from 'services/nativeAuth/helpers';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';
import { getWindowLocation } from 'utils/window';

interface LedgerScamPhishingAlertPropsType {
  ledgerScamPhishingAlertClassName?: string;
  showScamPhishingAlert?: boolean;
  token?: string;
}

export const LedgerScamPhishingAlert = ({
  showScamPhishingAlert,
  token,
  ledgerScamPhishingAlertClassName
}: LedgerScamPhishingAlertPropsType) => {
  if (!showScamPhishingAlert) {
    return null;
  }

  const authorizationInfo = getAuthorizationInfo(
    token,
    ledgerScamPhishingAlertClassName
  );

  return (
    <ScamPhishingAlert
      authorizationInfo={authorizationInfo}
      className={ledgerScamPhishingAlertClassName}
      url={getWindowLocation().origin}
    />
  );
};
