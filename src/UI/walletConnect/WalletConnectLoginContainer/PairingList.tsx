import React, { useState, useEffect } from 'react';
import { PairingTypes } from '@multiversx/erdjs-wallet-connect-provider';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';

import { WithClassnameType } from '../../types';

export interface PairingListPropsType extends WithClassnameType {
  connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
  removeExistingPairing: (topic: string) => Promise<void>;
  activePairings: PairingTypes.Struct[];
  className: string;
}

export const Pairinglist = ({
  connectExisting,
  removeExistingPairing,
  activePairings,
  className = 'dapp-wallet-connect-pairing-list'
}: PairingListPropsType) => {
  const classes = {
    pairsContainer: className,
    leadText: '',
    pairList: classNames(
      globalStyles.dFlex,
      globalStyles.flexColumn,
      globalStyles.mt3,
      globalStyles.pairList
    ),
    pairButton: classNames(
      globalStyles.btn,
      globalStyles.btnLight,
      globalStyles.positionRelative,
      globalStyles.dFlex,
      globalStyles.flexRow,
      globalStyles.alignItemsCenter,
      globalStyles.textLeft,
      globalStyles.border,
      globalStyles.rounded,
      globalStyles.mb2,
      globalStyles.p2
    ),
    pairImage: globalStyles.pairImage,
    pairLoader: globalStyles.pairLoader,
    pairRemove: globalStyles.pairRemove,
    pairDetails: classNames(
      globalStyles.dFlex,
      globalStyles.flexColumn,
      globalStyles.alignItemsStart,
      globalStyles.ml3
    )
  };

  const [topicLoading, setTopicLoading] = useState<string>('');
  useEffect(() => {
    setTopicLoading('');
  }, [activePairings]);

  return (
    <div className={classes.pairsContainer}>
      <p className={classes.leadText}>or choose an existing pairing:</p>

      <div className={classes.pairList}>
        {activePairings.map((pairing) => (
          <button
            type='button'
            key={pairing.topic}
            onClick={() => {
              connectExisting(pairing);
              setTopicLoading(pairing.topic);
            }}
            className={classes.pairButton}
          >
            <div
              className={classes.pairRemove}
              onClick={(event) => {
                event.stopPropagation();
                removeExistingPairing(pairing.topic);
              }}
            >
              <span aria-hidden='true'>×</span>
            </div>

            {pairing.peerMetadata && (
              <>
                {topicLoading === pairing.topic ? (
                  <FontAwesomeIcon
                    icon={faCircleNotch}
                    className={classNames(
                      globalStyles.textPrimary,
                      globalStyles.pairLoader,
                      'fa-spin',
                      'slow-spin'
                    )}
                  />
                ) : (
                  <>
                    {pairing.peerMetadata?.icons?.[0] && (
                      <img
                        src={pairing.peerMetadata.icons[0]}
                        alt={pairing.peerMetadata.name}
                        className={classes.pairImage}
                      />
                    )}
                  </>
                )}

                <div className={classes.pairDetails}>
                  <strong>
                    {topicLoading === pairing.topic
                      ? `Confirm on ${pairing.peerMetadata.name}`
                      : pairing.peerMetadata.name}
                  </strong>

                  <span>{pairing.peerMetadata.description}</span>

                  <span>{pairing.peerMetadata.url}</span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
