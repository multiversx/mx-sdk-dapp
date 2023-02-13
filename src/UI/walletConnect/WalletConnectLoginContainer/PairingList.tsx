import React, { useState, useEffect } from 'react';
import { PairingTypes } from '@multiversx/sdk-wallet-connect-provider';
import { faCircleNotch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import type { WithClassnameType } from '../../types';

import styles from './walletConnectLoginContainerStyles.scss';

export interface WalletConnectPairingListClassesType {
  walletConnectPairingListLeadClassName?: string;
  walletConnectPairingListWrapperClassName?: string;
  walletConnectPairingListButtonClassName?: string;
  walletConnectPairingListIconClassName?: string;
  walletConnectPairingListLoaderClassName?: string;
  walletConnectPairingListDetailsClassName?: string;
  walletConnectPairingListRemoveClassName?: string;
}

export interface PairingListPropsType extends WithClassnameType {
  connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
  removeExistingPairing: (topic: string) => Promise<void>;
  activePairings: PairingTypes.Struct[];
  className: string;
  pairingListClasses?: WalletConnectPairingListClassesType;
}

export const Pairinglist = ({
  connectExisting,
  removeExistingPairing,
  activePairings,
  className = 'dapp-wallet-connect-pairing-list',
  pairingListClasses
}: PairingListPropsType) => {
  const [topicLoading, setTopicLoading] = useState<string>('');

  const {
    walletConnectPairingListLeadClassName,
    walletConnectPairingListWrapperClassName,
    walletConnectPairingListButtonClassName,
    walletConnectPairingListIconClassName,
    walletConnectPairingListLoaderClassName,
    walletConnectPairingListDetailsClassName,
    walletConnectPairingListRemoveClassName
  } = pairingListClasses || {};

  useEffect(() => {
    setTopicLoading('');
  }, [activePairings]);

  return (
    <div className={classNames(styles.xPortalPairings, className)}>
      <p
        className={classNames(
          styles.xPortalPairingsLead,
          walletConnectPairingListLeadClassName
        )}
      >
        or choose an existing pairing:
      </p>

      <div
        className={classNames(
          styles.xPortalPairingsList,
          walletConnectPairingListWrapperClassName
        )}
      >
        {activePairings.map((pairing) => (
          <button
            type='button'
            className={classNames(
              styles.xPortalPairingButton,
              walletConnectPairingListButtonClassName
            )}
            key={pairing.topic}
            onClick={() => {
              connectExisting(pairing);
              setTopicLoading(pairing.topic);
            }}
          >
            {pairing.peerMetadata && (
              <>
                {topicLoading === pairing.topic ? (
                  <FontAwesomeIcon
                    icon={faCircleNotch}
                    className={classNames(
                      'fa-spin',
                      'slow-spin',
                      styles.xPortalPairingLoader,
                      walletConnectPairingListLoaderClassName
                    )}
                  />
                ) : (
                  <>
                    {pairing.peerMetadata?.icons?.[0] && (
                      <img
                        src={pairing.peerMetadata.icons[0]}
                        alt={pairing.peerMetadata.name}
                        className={classNames(
                          styles.xPortalPairingImage,
                          walletConnectPairingListIconClassName
                        )}
                      />
                    )}
                  </>
                )}

                <div
                  className={classNames(
                    styles.xPortalPairingDetails,
                    walletConnectPairingListDetailsClassName
                  )}
                >
                  <strong className={styles.xPortalPairingDetail}>
                    {topicLoading === pairing.topic
                      ? `Confirm on ${pairing.peerMetadata.name}`
                      : pairing.peerMetadata.name}
                  </strong>

                  <span className={styles.xPortalPairingDetail}>
                    {pairing.peerMetadata.description}
                  </span>

                  <span className={styles.xPortalPairingDetail}>
                    {pairing.peerMetadata.url}
                  </span>
                </div>

                <div
                  className={classNames(
                    styles.xPortalPairingRemove,
                    walletConnectPairingListRemoveClassName
                  )}
                  onClick={(event) => {
                    event.stopPropagation();
                    removeExistingPairing(pairing.topic);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
