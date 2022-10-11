import React from 'react';
import { PairingTypes } from '@elrondnetwork/erdjs-wallet-connect-provider';
import classNames from 'classnames';

import { WithClassnameType } from '../../types';

import globalStyles from 'assets/sass/main.scss';

interface PairingListPropsType extends WithClassnameType {
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
    pairRemove: globalStyles.pairRemove,
    pairDetails: classNames(
      globalStyles.dFlex,
      globalStyles.flexColumn,
      globalStyles.alignItemsStart,
      globalStyles.ml3
    )
  };

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
                {pairing.peerMetadata?.icons?.[0] && (
                  <img
                    src={pairing.peerMetadata.icons[0]}
                    alt={pairing.peerMetadata.name}
                    className={classes.pairImage}
                  />
                )}

                <div className={classes.pairDetails}>
                  <strong>{pairing.peerMetadata.name}</strong>

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
